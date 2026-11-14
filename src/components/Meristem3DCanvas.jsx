import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Meristem3DCanvas({ className = '' }) {
  const containerRef = useRef(null);
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. THREE.JS SCENE, CAMERA & RENDERER ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#070d09', 0.025);

    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- 2. 3D WIREFRAME LEAF GEOMETRY GENERATION ---
    const leafGroup = new THREE.Group();
    scene.add(leafGroup);

    // Main Stem Curve
    const stemPoints = [];
    const stemSegments = 40;
    for (let i = 0; i <= stemSegments; i++) {
      const t = i / stemSegments;
      const y = -4.5 + t * 9;
      const x = Math.sin(t * Math.PI) * 0.9 - 0.2;
      const z = Math.cos(t * Math.PI * 0.8) * 0.4;
      stemPoints.push(new THREE.Vector3(x, y, z));
    }

    const stemCurve = new THREE.CatmullRomCurve3(stemPoints);
    const stemGeo = new THREE.TubeGeometry(stemCurve, 64, 0.06, 8, false);
    const stemMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    leafGroup.add(stemMesh);

    // Primary & Secondary Vein Lines
    const veinLinePositions = [];
    const veinColors = [];
    const veinPairs = 12;

    const baseColor = new THREE.Color(0x34d399); // Emerald
    const tipColor = new THREE.Color(0xa7f3d0);  // Mint glow
    const edgeColor = new THREE.Color(0x10b981); // Vibrant green

    for (let i = 1; i <= veinPairs; i++) {
      const t = i / (veinPairs + 1);
      const stemPos = stemCurve.getPointAt(t);
      const leafWidth = Math.sin(t * Math.PI) * 3.8; // Elliptic leaf profile

      // Left Vein Branch
      const leftTip = new THREE.Vector3(
        stemPos.x - leafWidth,
        stemPos.y + 0.6 * (1 - t * 0.5),
        stemPos.z + Math.sin(t * Math.PI) * 0.6
      );

      // Primary left vein
      veinLinePositions.push(stemPos.x, stemPos.y, stemPos.z);
      veinLinePositions.push(leftTip.x, leftTip.y, leftTip.z);
      veinColors.push(baseColor.r, baseColor.g, baseColor.b);
      veinColors.push(tipColor.r, tipColor.g, tipColor.b);

      // Right Vein Branch
      const rightTip = new THREE.Vector3(
        stemPos.x + leafWidth,
        stemPos.y + 0.6 * (1 - t * 0.5),
        stemPos.z + Math.sin(t * Math.PI) * 0.6
      );

      // Primary right vein
      veinLinePositions.push(stemPos.x, stemPos.y, stemPos.z);
      veinLinePositions.push(rightTip.x, rightTip.y, rightTip.z);
      veinColors.push(baseColor.r, baseColor.g, baseColor.b);
      veinColors.push(tipColor.r, tipColor.g, tipColor.b);

      // Secondary micro-vein sub-branches
      for (let s = 1; s <= 3; s++) {
        const st = s / 4;
        const subOriginL = new THREE.Vector3().lerpVectors(stemPos, leftTip, st);
        const subTipL = new THREE.Vector3(
          subOriginL.x - 0.7 * (1 - st),
          subOriginL.y + 0.5,
          subOriginL.z + 0.15
        );
        veinLinePositions.push(subOriginL.x, subOriginL.y, subOriginL.z);
        veinLinePositions.push(subTipL.x, subTipL.y, subTipL.z);
        veinColors.push(edgeColor.r, edgeColor.g, edgeColor.b);
        veinColors.push(tipColor.r, tipColor.g, tipColor.b);

        const subOriginR = new THREE.Vector3().lerpVectors(stemPos, rightTip, st);
        const subTipR = new THREE.Vector3(
          subOriginR.x + 0.7 * (1 - st),
          subOriginR.y + 0.5,
          subOriginR.z + 0.15
        );
        veinLinePositions.push(subOriginR.x, subOriginR.y, subOriginR.z);
        veinLinePositions.push(subTipR.x, subTipR.y, subTipR.z);
        veinColors.push(edgeColor.r, edgeColor.g, edgeColor.b);
        veinColors.push(tipColor.r, tipColor.g, tipColor.b);
      }
    }

    // Outer Leaf Contour Wireframe (connecting the tips)
    const contourPointsL = [];
    const contourPointsR = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const stemPos = stemCurve.getPointAt(t);
      const leafWidth = Math.sin(t * Math.PI) * 3.8;
      contourPointsL.push(new THREE.Vector3(
        stemPos.x - leafWidth,
        stemPos.y + 0.6 * (1 - t * 0.5),
        stemPos.z + Math.sin(t * Math.PI) * 0.6
      ));
      contourPointsR.push(new THREE.Vector3(
        stemPos.x + leafWidth,
        stemPos.y + 0.6 * (1 - t * 0.5),
        stemPos.z + Math.sin(t * Math.PI) * 0.6
      ));
    }

    for (let i = 0; i < contourPointsL.length - 1; i++) {
      veinLinePositions.push(contourPointsL[i].x, contourPointsL[i].y, contourPointsL[i].z);
      veinLinePositions.push(contourPointsL[i + 1].x, contourPointsL[i + 1].y, contourPointsL[i + 1].z);
      veinColors.push(edgeColor.r, edgeColor.g, edgeColor.b);
      veinColors.push(tipColor.r, tipColor.g, tipColor.b);

      veinLinePositions.push(contourPointsR[i].x, contourPointsR[i].y, contourPointsR[i].z);
      veinLinePositions.push(contourPointsR[i + 1].x, contourPointsR[i + 1].y, contourPointsR[i + 1].z);
      veinColors.push(edgeColor.r, edgeColor.g, edgeColor.b);
      veinColors.push(tipColor.r, tipColor.g, tipColor.b);
    }

    const veinGeo = new THREE.BufferGeometry();
    veinGeo.setAttribute('position', new THREE.Float32BufferAttribute(veinLinePositions, 3));
    veinGeo.setAttribute('color', new THREE.Float32BufferAttribute(veinColors, 3));

    const veinMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const veinLines = new THREE.LineSegments(veinGeo, veinMat);
    leafGroup.add(veinLines);

    // Glowing Nodes at Vein Intersections
    const nodeCount = 50;
    const nodeGeo = new THREE.BufferGeometry();
    const nodePos = [];
    for (let i = 0; i < nodeCount; i++) {
      const idx = Math.floor(Math.random() * (veinLinePositions.length / 3)) * 3;
      nodePos.push(veinLinePositions[idx], veinLinePositions[idx + 1], veinLinePositions[idx + 2]);
    }
    nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePos, 3));

    const nodeMat = new THREE.PointsMaterial({
      color: 0x6ee7b7,
      size: 0.28,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    leafGroup.add(nodePoints);

    // Position and rotate the leaf in 3D perspective
    leafGroup.position.set(0, 0.4, 0);
    leafGroup.rotation.x = 0.35;
    leafGroup.rotation.z = -0.15;

    // --- 3. VOLUMETRIC STARDUST PARTICLE CLOUD (NEBULA) ---
    const starCount = 1200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starScales = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 36;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 26;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 20 - 2;
      starScales[i] = Math.random() * 0.25 + 0.05;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMat = new THREE.PointsMaterial({
      color: 0xd1fae5,
      size: 0.14,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const starParticles = new THREE.Points(starGeo, starMat);
    scene.add(starParticles);

    // --- 4. FLOATING LUMINESCENT BOKEH ORBS ---
    const orbCount = 14;
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    const orbMeshes = [];
    for (let i = 0; i < orbCount; i++) {
      const orbGeo = new THREE.SphereGeometry(0.35 + Math.random() * 0.45, 16, 16);
      const orbMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x34d399 : 0x10b981,
        transparent: true,
        opacity: 0.18 + Math.random() * 0.15,
        blending: THREE.AdditiveBlending
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12
      );
      orb.userData = {
        speedX: (Math.random() - 0.5) * 0.008,
        speedY: 0.004 + Math.random() * 0.008,
        phase: Math.random() * Math.PI * 2
      };
      orbGroup.add(orb);
      orbMeshes.push(orb);
    }

    // --- 5. LIGHTING ---
    const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambLight);

    const pointLight = new THREE.PointLight(0x6ee7b7, 2.8, 25);
    pointLight.position.set(2, 4, 6);
    scene.add(pointLight);

    const backGlow = new THREE.PointLight(0x064e3b, 4, 30);
    backGlow.position.set(-4, -3, -4);
    scene.add(backGlow);

    // --- 6. MOUSE & TOUCH 3D PARALLAX INTERACTION ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      mouse.targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleMouseMove, { passive: true });

    // Interactive energy burst on click/tap
    const handleClick = () => {
      pointLight.intensity = 6;
      nodeMat.size = 0.65;
      veinMat.opacity = 1;
      setTimeout(() => {
        pointLight.intensity = 2.8;
        nodeMat.size = 0.28;
        veinMat.opacity = 0.8;
      }, 650);
    };

    container.addEventListener('click', handleClick);

    // --- 7. ANIMATION LOOP (SILKY 60 FPS) ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Organic breathing & gentle floating oscillation
      const breath = Math.sin(elapsed * 1.4) * 0.08;
      leafGroup.scale.set(1 + breath * 0.3, 1 + breath * 0.3, 1 + breath * 0.3);

      // 3D Parallax Tilt based on cursor
      leafGroup.rotation.y = mouse.x * 0.55 + Math.sin(elapsed * 0.6) * 0.12;
      leafGroup.rotation.x = 0.35 - mouse.y * 0.45 + Math.cos(elapsed * 0.8) * 0.08;
      leafGroup.position.x = mouse.x * 0.8;
      leafGroup.position.y = 0.4 + mouse.y * 0.6;

      // Animate Stardust drift
      const positions = starParticles.geometry.attributes.position.array;
      for (let i = 1; i < starCount * 3; i += 3) {
        positions[i] += 0.004;
        if (positions[i] > 13) positions[i] = -13;
      }
      starParticles.geometry.attributes.position.needsUpdate = true;
      starParticles.rotation.y = elapsed * 0.02 + mouse.x * 0.15;
      starParticles.rotation.x = mouse.y * 0.15;

      // Animate floating bokeh orbs
      orbMeshes.forEach((orb) => {
        orb.position.y += orb.userData.speedY;
        orb.position.x += Math.sin(elapsed + orb.userData.phase) * 0.006;
        if (orb.position.y > 10) orb.position.y = -10;
      });

      // Vein energy pulse wave
      const pulse = (Math.sin(elapsed * 3) + 1) * 0.5;
      pointLight.position.x = Math.sin(elapsed * 2) * 3;
      pointLight.position.y = Math.cos(elapsed * 2) * 3;
      pointLight.intensity = 2.4 + pulse * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // --- 8. RESIZE HANDLER ---
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-pointer ${className}`}
      title="Click or move to interact with 3D wireframe leaf & particles"
    />
  );
}
