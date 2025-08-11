import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxProvider } from "react-scroll-parallax";
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertificates from './components/EducationCertificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from "./components/SectionWrapper";
import BackgroundMusic from "./components/BackgroundMusic";


gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        const menu = document.getElementById("mobile-menu");
        const hamburger = document.querySelector('#mobile-menu-button svg.block');
        const closeIcon = document.querySelector('#mobile-menu-button svg.hidden');
        if (menu && !menu.classList.contains("hidden")) {
          menu.classList.add("hidden");
          hamburger?.classList.remove("hidden");
          closeIcon?.classList.add("hidden");
        }
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // GSAP Animations
    gsap.utils.toArray(".card-3d").forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Three.js 3D Particles Background
    let scene, camera, renderer, particlesMesh;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      const particleCount = 1000;
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8,
      });

      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      camera.position.z = 3;
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer?.dispose?.();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white relative overflow-hidden">
      {/* Three.js 3D Background */}
      <div
        id="3d-container"
        ref={containerRef}
        className="fixed w-full h-full z-0 top-0 left-0 pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationCertificates />
      <Contact />
      <Footer />
      <SectionWrapper />
      <BackgroundMusic />
      </div>
    </div>
  );
}

export default App;