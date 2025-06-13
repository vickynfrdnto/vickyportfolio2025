import React, { useEffect } from 'react';
import * as THREE from 'three';

const HeroBackground3D = () => {
  useEffect(() => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const cubes = [];
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.7,
      shininess: 100,
    });

    for (let x = -10; x < 10; x += 3) {
      for (let y = -5; y < 5; y += 3) {
        for (let z = -10; z < 10; z += 3) {
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(x, y, z);
          cube.userData = {
            originalX: x,
            originalY: y,
            originalZ: z,
            speed: 0.01 + Math.random() * 0.02,
            angle: Math.random() * Math.PI * 2,
          };
          scene.add(cube);
          cubes.push(cube);
        }
      }
    }

    scene.add(new THREE.AmbientLight(0x404040));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      cubes.forEach(cube => {
        cube.userData.angle += cube.userData.speed;
        cube.position.x = cube.userData.originalX + Math.sin(cube.userData.angle * 0.5) * 2;
        cube.position.y = cube.userData.originalY + Math.cos(cube.userData.angle) * 1;
        cube.position.z = cube.userData.originalZ + Math.sin(cube.userData.angle * 0.7) * 3;
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas id="hero-canvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>;
};

export default HeroBackground3D;