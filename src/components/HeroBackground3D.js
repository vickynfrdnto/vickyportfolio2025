import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground3D = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef({ y: 0 });

  useEffect(() => {
    // --- Setup scene/camera/renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.domElement.style.display = 'block'; // remove inline scrollbars gap

    // Append renderer canvas to container
    const container = containerRef.current;
    if (!container) return;
    container.appendChild(renderer.domElement);

    // --- Particles (points) ---
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * 120; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 80;  // y
      positions[i3 + 2] = (Math.random() - 0.5) * 120; // z
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x9bbcff,       // softer blue
      size: 0.25,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true, // makes particles scale with distance
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // ambient light for subtle depth (points don't need it, but keeps scene consistent)
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    // --- Animation loop & parallax ---
    let rafId = null;
    const onScroll = () => {
      scrollRef.current.y = window.scrollY || window.pageYOffset || 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const animate = () => {
      // small rotation so particles gently move
      particlesMesh.rotation.x += 0.0006;
      particlesMesh.rotation.y += 0.0009;

      // parallax: move camera slightly based on scroll (subtle)
      const parallax = scrollRef.current.y * 0.0008; // tweak multiplier for strength
      camera.position.y = -parallax * 30; // adjust vertical offset effect

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // --- Resize handling ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup on unmount ---
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);

      // Dispose geometry & material
      particlesGeometry.dispose();
      particlesMaterial.dispose();

      // Dispose renderer and WebGL context properly
      renderer.dispose();
      if (renderer.domElement) {
        // remove canvas from DOM
        container.removeChild(renderer.domElement);
      }
      // try to free GL context (best-effort)
      if (renderer.getContext) {
        const gl = renderer.getContext();
        if (gl && typeof gl.getExtension === 'function') {
          const ext = gl.getExtension('WEBGL_lose_context');
          if (ext) ext.loseContext();
        }
      }
    };
  }, []);

  // Wrap canvas so we can apply CSS transforms if needed
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
      style={{ overflow: 'hidden' }}
    />
  );
};

export default HeroBackground3D;