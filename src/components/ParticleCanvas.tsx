import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleCanvasProps {
  isDarkMode: boolean;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ isDarkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Particle count
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorCyan = new THREE.Color(0x00ffe5);
    const colorPurple = new THREE.Color(0xa855f7);
    const colorBlue = new THREE.Color(0x3b82f6);
    const colorDarkSlate = new THREE.Color(0x0f172a);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mix = Math.random();
      let pColor = colorCyan;
      if (mix > 0.6) pColor = colorPurple;
      else if (mix > 0.3) pColor = colorBlue;

      if (!isDarkMode) {
        if (mix < 0.4) pColor = colorBlue;
        else if (mix < 0.8) pColor = colorDarkSlate;
      }

      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;

      scales[i] = Math.random() * 2 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture creation
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: isDarkMode ? 0.75 : 0.5,
      blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connecting lines network
    const linesMaterial = new THREE.LineBasicMaterial({
      color: isDarkMode ? 0x00ffe5 : 0x0284c7,
      transparent: true,
      opacity: isDarkMode ? 0.12 : 0.08,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.02;
      particles.rotation.x = elapsedTime * 0.02 + targetY * 0.02;

      // Update lines between nearby particles
      const posArr = particles.geometry.attributes.position.array as Float32Array;
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i += 3) {
        for (let j = i + 3; j < particleCount; j += 3) {
          const dx = posArr[i] - posArr[j];
          const dy = posArr[i + 1] - posArr[j + 1];
          const dz = posArr[i + 2] - posArr[j + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 10) {
            linePositions.push(posArr[i], posArr[i + 1], posArr[i + 2]);
            linePositions.push(posArr[j], posArr[j + 1], posArr[j + 2]);
          }
        }
      }

      linesGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
};
