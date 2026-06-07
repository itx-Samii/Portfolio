// ==========================================
// 1. MULTI-LANGUAGE TRANSLATION DICTIONARY
// ==========================================
const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_cta: "Get in Touch",
    hero_tag: "Next-Gen Software Agency",
    hero_title: "We Build <span>Digital</span> Futures",
    hero_desc: "Specializing in high-performance AI chatbots, custom offline/online softwares, and stunning animated websites. Drag the laptop to interact with our workspace.",
    hero_cta_1: "Our Services",
    hero_cta_2: "Talk to Us",
    loading_model: "Loading 3D Workspace...",
    services_subtitle: "Expertise",
    services_title: "Our Software Services",
    services_desc: "Tailored technical solutions designed to automate operations, scale customer engagement, and showcase your brand.",
    service_1_title: "AI Chatbots",
    service_1_desc: "Intelligent, conversational AI assistants integrated into your ecosystem to handle support, leads, and workflows 24/7.",
    service_2_title: "Offline Softwares",
    service_2_desc: "Robust, local desktop applications designed for maximum performance, security, and hardware compatibility.",
    service_3_title: "Online Softwares",
    service_3_desc: "Cloud-powered Web SaaS applications with real-time syncing, high availability, and secure multi-user accessibility.",
    service_4_title: "Websites & Animations",
    service_4_desc: "SEO-friendly, ultra-fast loading business websites and immersive 3D/2D animation-heavy landing pages that convert.",
    card_learn_more: "Learn More",
    stat_projects: "Projects Completed",
    stat_satisfaction: "Client Satisfaction",
    stat_support: "Live System Monitoring",
    stat_conversion: "Conversion Multiplier",
    contact_title: "Start Your Project",
    contact_desc: "Ready to scale your business with custom software, AI solutions, or immersive websites? Fill out the form and our tech lead will get back to you within 24 hours.",
    contact_email_label: "EMAIL US",
    contact_whatsapp_label: "WHATSAPP US",
    contact_location_label: "OUR BASE",
    form_name: "Your Name",
    form_email: "Your Email",
    form_message: "Project Details",
    form_submit: "Launch Project",
    nav_projects: "Projects",
    projects_subtitle: "Case Studies",
    projects_title: "Featured Projects",
    projects_desc: "Explore some of our real-world, cloud-deployed systems and applications built for performance, scale, and utility.",
    project_1_title: "Cloud Fee Management System",
    project_1_desc: "A comprehensive cloud financial management portal built to automate fee collection, invoice generation, and financial reporting for educational institutions.",
    project_1_category: "Cloud SaaS / Finance",
    project_2_title: "Aura Academic Attendance System",
    project_2_desc: "A real-time student and staff attendance tracking platform built for high-performance recording, automated notifications, and reporting analytics.",
    project_2_category: "Academic SaaS",
    project_demo_creds: "Demo Login:"
  },
  ru: { // Roman Urdu Translation
    nav_home: "Ghar",
    nav_services: "Services",
    nav_contact: "Rabta",
    nav_cta: "Rabta Karein",
    hero_tag: "Next-Gen Software Agency",
    hero_title: "Hum Banate Hain <span>Digital</span> Future",
    hero_desc: "Behtareen performance wale AI chatbots, offline/online softwares, aur dilkash animated websites banana hamari mahaarat hai. Laptop ko drag karke check karein.",
    hero_cta_1: "Hamari Services",
    hero_cta_2: "Humse Baat Karein",
    loading_model: "3D Workspace Load Ho Raha Hai...",
    services_subtitle: "Mahaarat",
    services_title: "Hamari Software Services",
    services_desc: "Aapke business ko behtar banane ke liye aur operations ko automate karne ke liye behtareen technical solutions.",
    service_1_title: "AI Chatbots",
    service_1_desc: "Aapki website ke liye intelligent AI assistants jo support aur sales ko 24/7 automate karte hain.",
    service_2_title: "Offline Softwares",
    service_2_desc: "Muzboot aur tezi se chalne wale desktop applications, jo maximum security aur hardware speed dete hain.",
    service_3_title: "Online Softwares",
    service_3_desc: "Cloud-powered Web SaaS applications jo real-time data sync aur multi-user access ko asaan banate hain.",
    service_4_title: "Websites & Animations",
    service_4_desc: "SEO-friendly aur super-fast business websites aur interactive 3D/2D animation-heavy landing pages jo customer conversion ko behtar banati hain.",
    card_learn_more: "Mazeed Details",
    stat_projects: "Mukammal Projects",
    stat_satisfaction: "Khush Clients",
    stat_support: "Live System Monitoring",
    stat_conversion: "Conversion Multiplier",
    contact_title: "Apna Project Shuru Karein",
    contact_desc: "Kya aap apne business ko custom software, AI chatbot ya animated website se scale karna chahte hain? Form fill karein aur hamari team 24 ghante mein rabta karegi.",
    contact_email_label: "EMAIL KAREIN",
    contact_whatsapp_label: "WHATSAPP KAREIN",
    contact_location_label: "HAMARI BASE",
    form_name: "Aapka Naam",
    form_email: "Aapka Email",
    form_message: "Project Ki Details",
    form_submit: "Project Launch Karein",
    nav_projects: "Projects",
    projects_subtitle: "Case Studies",
    projects_title: "Hamare Khas Projects",
    projects_desc: "Hamare banaye gaye live cloud systems aur applications jo secure aur high-performance hain.",
    project_1_title: "Cloud Fee Management System",
    project_1_desc: "Fees collect karne, invoices generate karne, aur accounts reports ko automate karne ke liye behtareen cloud system.",
    project_1_category: "Cloud SaaS / Finance",
    project_2_title: "Aura Academic Attendance System",
    project_2_desc: "Students aur staff ki attendance ko real-time track aur report karne ke liye dynamic attendance portal.",
    project_2_category: "Academic SaaS",
    project_demo_creds: "Demo Login:"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  
  // Update button text
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang === "en" ? "Roman Urdu" : "English";
  }

  // Update elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else if (element.innerHTML.includes("<span>")) {
        // Keep span logic intact for styled words
        const spanText = translation.match(/<span>(.*?)<\/span>/);
        if (spanText) {
          const plain = translation.replace(/<span>.*?<\/span>/, `<span>${spanText[1]}</span>`);
          element.innerHTML = plain;
        } else {
          element.innerHTML = translation;
        }
      } else {
        element.innerHTML = translation;
      }
    }
  });
}

// Initial set
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
  
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "ru" : "en";
      updateLanguage(nextLang);
    });
  }
});


// ==========================================
// 2. CUSTOM INTERACTIVE CURSOR & EFFECTS
// ==========================================
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursor-dot");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
let dotX = mouseX;
let dotY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Cursor Hover effects
const hoverElements = document.querySelectorAll("a, button, .service-card, .lang-btn, .contact-btn");
hoverElements.forEach(elem => {
  elem.addEventListener("mouseenter", () => {
    if (cursor) cursor.classList.add("hover");
  });
  elem.addEventListener("mouseleave", () => {
    if (cursor) cursor.classList.remove("hover");
  });
});

// Card Spotlight Effect
const cards = document.querySelectorAll(".service-card");
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});


// ==========================================
// 3. THREE.JS 3D HERO CANVAS & GSAP TIMELINE
// ==========================================
gsap.registerPlugin(ScrollTrigger);

let scene, camera, renderer, laptopModel, particleSystem, controls, mixer, action, clip;
const clock = new THREE.Clock();
let isDragging = false;
let scrollTimeline;
let isDesktop = window.innerWidth > 1024;

// Camera default position in world coordinates
const defaultCameraPos = new THREE.Vector3(0, 1.2, 4.0);

// Laptop transform state object for GSAP to animate (prevents conflicts with OrbitControls)
const laptopTransform = {
  x: 0,
  y: 0.05, // raised slightly for perfect vertical centering
  z: 1.0,
  rotX: 0.08, // pre-tilted slightly forward
  rotY: 0,
  rotZ: 0,
  scale: 0.85, // base scale (slightly smaller for full visibility & rotation)
  lidProgress: 0 // animation scrub state (0 = closed, 1 = fully open)
};

const container = document.querySelector(".hero-3d-wrapper");
const canvas = document.getElementById("hero-canvas");
const loaderEl = document.getElementById("loader");

function initThree() {
  if (!canvas) return;

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(
    45, 
    container.clientWidth / container.clientHeight, 
    0.1, 
    1000
  );
  camera.position.set(0, 1.2, 4);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = false; // Disabled for a massive performance and frame rate boost

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false; // Prevents hijacking page scroll
  controls.maxPolarAngle = Math.PI / 2 + 0.1;
  controls.minPolarAngle = Math.PI / 4;

  // Track dragging to pause auto-animations
  controls.addEventListener('start', () => { isDragging = true; });
  controls.addEventListener('end', () => { isDragging = false; });

  // Lights - Optimised for higher brightness and detail visibility
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); // Increased ambient light wash
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x00f3ff, 2.2); // Key Light (Cyan)
  dirLight.position.set(5, 5, 2);
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 1.5); // Fill Light (White, front-left)
  fillLight.position.set(-5, 5, 4);
  scene.add(fillLight);

  const frontLight = new THREE.DirectionalLight(0xffffff, 0.8); // Front Light for edge detail
  frontLight.position.set(0, 1, 5);
  scene.add(frontLight);

  const pointLight = new THREE.PointLight(0x00f3ff, 2.0, 10); // Subtle Cyan point accent
  pointLight.position.set(-3, 2, -2);
  scene.add(pointLight);

  // Floating Digital Particle background - restrained density for luxury feel
  const particleCount = 120;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 12;
    particlePositions[i + 1] = (Math.random() - 0.5) * 8;
    particlePositions[i + 2] = (Math.random() - 0.5) * 10;
  }

  particleGeometry.setAttribute(
    "position", 
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 0.03,
    transparent: true,
    opacity: 0.35
  });

  particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  // Load laptop model
  const gltfLoader = new THREE.GLTFLoader();
  
  gltfLoader.load(
    "./model/asus_rog_zephyrus_duo_16.glb",
    (gltf) => {
      const modelScene = gltf.scene;
      
      // 1. Scale model first
      const box1 = new THREE.Box3().setFromObject(modelScene);
      const size1 = box1.getSize(new THREE.Vector3());
      const maxDim = Math.max(size1.x, size1.y, size1.z);
      const targetScale = 1.9 / maxDim; // slightly smaller so it fits without clipping
      modelScene.scale.set(targetScale, targetScale, targetScale);
      
      // 2. Recalculate bounding box after scale to get correct center
      const box2 = new THREE.Box3().setFromObject(modelScene);
      const center = box2.getCenter(new THREE.Vector3());
      
      // 3. Shift child model scene relative to its parent group to align centers
      modelScene.position.sub(center);
      
      // 4. Instantiate parent group (laptopModel) and add shifted model scene
      laptopModel = new THREE.Group();
      laptopModel.add(modelScene);
      
      laptopModel.traverse((node) => {
        if (node.isMesh) {
          if (node.material) {
            node.material.roughness = 0.5; // Slightly rougher to diffuse lighting better
            node.material.metalness = 0.45; // Reduced metalness to prevent dark silhouettes
          }
        }
      });

      scene.add(laptopModel);
      
      // Setup AnimationMixer on modelScene (contains animated nodes)
      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(modelScene);
        clip = gltf.animations.find(a => a.name === "Animation") || gltf.animations[0];
        action = mixer.clipAction(clip);
        action.paused = true; // Pause to scrub manually
        action.play();
        // Start closed (time 0)
        action.time = 0;
        mixer.update(0);
      }

      // Setup controls target to match laptop position
      controls.target.set(laptopTransform.x, laptopTransform.y, laptopTransform.z);
      controls.update();

      // Hide loader
      if (loaderEl) {
        loaderEl.style.opacity = 0;
        setTimeout(() => loaderEl.remove(), 300);
      }

      // ------------------------------------------
      // GSAP SCROLL STORYTELLING TIMELINE
      // ------------------------------------------
      // Update isDesktop state
      isDesktop = window.innerWidth > 1024;
      
      // Initial state of text fly-out
      gsap.set("#hero-text-block", {
        position: isDesktop ? "absolute" : "relative",
        left: isDesktop ? "50%" : "auto",
        top: isDesktop ? "50%" : "auto",
        xPercent: isDesktop ? -50 : 0,
        yPercent: isDesktop ? -50 : 0,
        scale: isDesktop ? 0.05 : 1,
        opacity: isDesktop ? 0 : 1,
        transformOrigin: "center center"
      });

      if (isDesktop) {
        scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "+=150%", // User scrolls 1.5 screen heights to finish animation
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
          }
        });

        // 1. Laptop opens lid (from 0 to 45% scroll)
        scrollTimeline.to(laptopTransform, {
          lidProgress: 1,
          duration: 1.5,
          ease: "none",
          onUpdate: function() {
            if (mixer && action && clip) {
              const time = Math.min(laptopTransform.lidProgress * clip.duration, clip.duration - 0.0001);
              action.time = time;
              mixer.update(0);
            }
          }
        }, 0);

        // 2. Text emerges from screen (20% to 75% scroll)
        scrollTimeline.to("#hero-text-block", {
          left: "5%",
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out"
        }, 0.3);

        // 3. Laptop shifts to right column, rotates & scales down (40% to 100% scroll)
        scrollTimeline.to(laptopTransform, {
          x: 1.3,
          y: 0.05,
          z: 0.3,
          rotY: Math.PI * 1.6,
          rotX: 0.08,
          scale: 0.68,
          duration: 2.0,
          ease: "power4.inOut"
        }, 0.5);

        // 4. Shift OrbitControls target to match the laptop's new center (40% to 100% scroll)
        scrollTimeline.to(controls.target, {
          x: 0.3,
          y: 0.05,
          z: 0.3,
          duration: 2.0,
          ease: "power4.inOut"
        }, 0.5);

      } else {
        // Mobile layout: No scroll pinning or page locking!
        // Immediately set laptop to open state, positioned vertically below text
        laptopTransform.lidProgress = 1;
        laptopTransform.x = 0;
        laptopTransform.y = 0.02; // slightly raised
        laptopTransform.z = 0.8; // closer to camera for detail
        laptopTransform.rotY = Math.PI * 1.5; // angled facing the user
        laptopTransform.scale = 0.82; // scaled to fit mobile screens perfectly
        
        // Immediately apply animation time
        if (mixer && action && clip) {
          action.time = clip.duration - 0.0001;
          mixer.update(0);
        }
        
        // Setup initial controls target directly on model center
        controls.target.set(laptopTransform.x, laptopTransform.y, laptopTransform.z);
        controls.update();

        // Ensure text block is fully visible in block layout
        gsap.set("#hero-text-block", {
          position: "relative",
          left: "auto",
          top: "auto",
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1
        });
      }

      // Add scroll entry animations for other sections
      setupSectionScrollTriggers();

      // Recalculate ScrollTrigger positions after creating the main pinned timeline
      ScrollTrigger.refresh();
    },
    (xhr) => {
      if (xhr.total > 0) {
        const percent = Math.round((xhr.loaded / xhr.total) * 100);
        const textEl = document.querySelector("#loader span");
        if (textEl) {
          const baseText = currentLang === "en" ? "Loading 3D Workspace" : "3D Workspace Load Ho Raha Hai";
          textEl.textContent = `${baseText}... ${percent}%`;
        }
      }
    },
    (error) => {
      console.warn("Failed to load local model, using visual geometry fallback.", error);
      createFallbackGeometry();
      setupSectionScrollTriggers();
      ScrollTrigger.refresh();
    }
  );
}

// Fallback visual model in case local GLB fails to load
function createFallbackGeometry() {
  const geometry = new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16);
  const material = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    roughness: 0.1,
    metalness: 0.95
  });
  
  laptopModel = new THREE.Mesh(geometry, material);
  laptopModel.castShadow = true;
  laptopModel.receiveShadow = true;
  scene.add(laptopModel);

  if (loaderEl) {
    loaderEl.style.opacity = 0;
    setTimeout(() => loaderEl.remove(), 300);
  }
}

// Setup entry scroll animations for lower page sections
function setupSectionScrollTriggers() {
  // Section Headers Fade-in / Fade-out on scroll
  gsap.utils.toArray(".section-header").forEach(header => {
    gsap.fromTo(header,
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: header,
          start: "top 90%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  });

  // Services Grid Cards Fade-in / Fade-out on scroll (Individual triggers)
  gsap.utils.toArray(".service-card").forEach(card => {
    gsap.fromTo(card, 
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  });

  // Projects Grid Cards Fade-in / Fade-out on scroll (Individual triggers)
  gsap.utils.toArray(".project-card").forEach(card => {
    gsap.fromTo(card, 
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  });

  // Stats Counters Zoom-in / Zoom-out on scroll (Individual triggers)
  gsap.utils.toArray(".stat-item").forEach(item => {
    gsap.fromTo(item, 
      { scale: 0.95, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 92%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        },
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.2)"
      }
    );
  });

  // Contact Form Slide-in / Slide-out on scroll
  gsap.fromTo(".contact-container", 
    { y: 40, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse"
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }
  );
}

// Handle window resizing
window.addEventListener("resize", () => {
  if (!camera || !renderer) return;

  isDesktop = window.innerWidth > 1024;

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
});

// Render Loop
function animate() {
  requestAnimationFrame(animate);

  // GPU-Accelerated Custom Cursor Lerping
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  dotX += (mouseX - dotX) * 0.45;
  dotY += (mouseY - dotY) * 0.45;

  if (cursor) {
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
  }
  if (cursorDot) {
    cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
  }

  const time = Date.now() * 0.001;

  if (laptopModel) {
    // Copy transformed state coordinates from GSAP object (always do this so it keeps bobbing/scaling properly)
    laptopModel.position.x = laptopTransform.x;
    // Add a smooth float/bobbing effect to the Y coordinate
    laptopModel.position.y = laptopTransform.y + Math.sin(time * 0.8) * 0.04;
    laptopModel.position.z = laptopTransform.z;

    laptopModel.rotation.x = laptopTransform.rotX;
    
    // Add ambient rotation on mobile, or when desktop timeline is near end
    if (!isDesktop) {
      laptopModel.rotation.y = laptopTransform.rotY + Math.sin(time * 0.25) * 0.12; // slow drift on mobile
    } else if (scrollTimeline && scrollTimeline.progress() >= 0.9) {
      laptopModel.rotation.y = laptopTransform.rotY + Math.sin(time * 0.2) * 0.08;
    } else {
      laptopModel.rotation.y = laptopTransform.rotY;
    }
    laptopModel.rotation.z = laptopTransform.rotZ;
    
    // Always apply the dynamic scale
    const s = laptopTransform.scale;
    laptopModel.scale.set(s, s, s);
  }

  // Smoothly restore camera to default world position when not dragging
  if (camera && controls) {
    if (!isDragging) {
      camera.position.x += (defaultCameraPos.x - camera.position.x) * 0.08; // smooth glide back
      camera.position.y += (defaultCameraPos.y - camera.position.y) * 0.08;
      camera.position.z += (defaultCameraPos.z - camera.position.z) * 0.08;
    }
    controls.update();
  }

  if (particleSystem) {
    // Slow rotation of background points
    particleSystem.rotation.y = time * 0.015;
    particleSystem.rotation.x = time * 0.008;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

// Initialize ThreeJS
initThree();
animate();

// Force ScrollTrigger refresh on page load to align all triggers
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
