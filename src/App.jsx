import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

gsap.registerPlugin(ScrollTrigger)

// ===== 3D SPHERE IMAGES =====
const SPHERE_IMAGES = [
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/xtra-group6.jpg?v=1764351424",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/dp-pack2.jpg?v=1764343183",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/cc-dp.jpg?v=1764280792",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/cc-serum.jpg?v=1764279474",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/cc-col-square.webp?v=1762416360",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/dp-bag-square-01-01.webp?v=1757416671",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/dermd-products.png?v=1753033534",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/candle-square-05-01.webp?v=1750833640",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/cps-square-01-01.webp?v=1748419375",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/exf-square-02.jpg?v=1750856965",
  "https://cdn.shopify.com/s/files/1/0185/5999/1872/files/fes-square-02.webp?v=1748941779"
]

const galleryItems = [...SPHERE_IMAGES, ...SPHERE_IMAGES, ...SPHERE_IMAGES].slice(0, 24)

const textContent = [
  {
    title: "Urban Street Furniture",
    desc: "Designed for modern cityscapes, our urban collection combines durability with aesthetic appeal. From sleek benches to innovative bike racks, every piece is engineered to withstand heavy use while enhancing public spaces."
  },
  {
    title: "Nature Trail Solutions",
    desc: "Crafted from sustainable materials, our nature series blends seamlessly with outdoor environments. Weather-resistant signage and ergonomic seating make every trail experience memorable."
  },
  {
    title: "Marine Coastal Equipment",
    desc: "Built to endure salt, sun, and storms. Our marine-grade products feature corrosion-resistant finishes and robust construction for waterfront installations worldwide."
  },
  {
    title: "Heritage Restoration",
    desc: "Preserving history with modern craftsmanship. Our heritage collection replicates classical designs using contemporary materials, ensuring longevity without compromising authenticity."
  }
]

const scatterPositions = [
  { top: "10%", left: "15%" },
  { top: "20%", left: "80%" },
  { top: "60%", left: "10%" },
  { top: "75%", left: "85%" },
  { top: "85%", left: "30%" },
  { top: "15%", left: "50%" }
]

// ===== FURNITURE PRODUCTS FOR SLIDER =====
const furnitureProducts = [
  {
    id: 'img1',
    name: 'MODERN PARK BENCH',
    subtitle: 'URBAN COLLECTION',
    price: '1,299',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=600&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    durability: 85,
    specs: [
      { label: 'MATERIAL', options: ['STEEL', 'WOOD'] },
      { label: 'FINISH', options: ['POWDER', 'ANODIZED'] }
    ]
  },
  {
    id: 'img2',
    name: 'OUTDOOR TRASH BIN',
    subtitle: 'NATURE SERIES',
    price: '899',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&h=600&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    sizes: ['M', 'L'],
    durability: 92,
    specs: [
      { label: 'CAPACITY', options: ['50L', '100L'] },
      { label: 'TYPE', options: ['RECYCLE', 'GENERAL'] }
    ]
  },
  {
    id: 'img3',
    name: 'BIKE RACK SYSTEM',
    subtitle: 'URBAN PRO',
    price: '2,499',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    durability: 78,
    specs: [
      { label: 'STYLE', options: ['SPIRAL', 'WAVE'] },
      { label: 'MOUNT', options: ['FLOOR', 'WALL'] }
    ]
  },
  {
    id: 'img4',
    name: 'WAYFINDING SIGNAGE',
    subtitle: 'HERITAGE LINE',
    price: '3,999',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=600&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&h=600&fit=crop',
    sizes: ['S', 'M', 'L'],
    durability: 95,
    specs: [
      { label: 'DISPLAY', options: ['LED', 'STATIC'] },
      { label: 'BASE', options: ['CONCRETE', 'METAL'] }
    ]
  }
]

function App() {
  const sphereRef = useRef(null)
  const constellationRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const scrollProgressRef = useRef(null)
  const [activeProduct, setActiveProduct] = useState('img1')
  const [wishlist, setWishlist] = useState({})

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Scroll progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${progress}%`
      }
    }
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  // Build 3D Sphere
  useEffect(() => {
    if (!sphereRef.current || !constellationRef.current) return

    const sphere = sphereRef.current
    const radius = window.innerWidth < 768 ? 200 : 380

    // Generate Fibonacci Sphere
    galleryItems.forEach((src, i) => {
      const card = document.createElement('div')
      card.classList.add('clay-card')

      const img = document.createElement('img')
      img.src = src
      img.alt = `gallery-${i}`
      card.appendChild(img)

      const phi = Math.acos(1 - (2 * (i + 0.5)) / galleryItems.length)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)

      const rotY = Math.atan2(x, z) * (180 / Math.PI)
      const rotX = Math.asin(-y / radius) * (180 / Math.PI)

      card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`
      card.dataset.index = i
      sphere.appendChild(card)
    })

    // Animate Sphere on Scroll
    const sphereRotation = gsap.to(sphere, {
      rotateY: 360 * 2,
      rotateX: 45,
      ease: 'none',
      scrollTrigger: {
        trigger: '.gallery-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => updateActiveCard(self.progress)
      }
    })

    const allCards = sphere.querySelectorAll('.clay-card')

    function updateActiveCard(progress) {
      const textIndex = Math.floor(progress * textContent.length) % textContent.length

      if (titleRef.current && descRef.current) {
        if (titleRef.current.innerText !== textContent[textIndex].title) {
          gsap.to([titleRef.current, descRef.current], {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              titleRef.current.innerText = textContent[textIndex].title
              descRef.current.innerText = textContent[textIndex].desc
              gsap.to([titleRef.current, descRef.current], { opacity: 1, duration: 0.2 })
            }
          })
        }
      }

      const focusIndex = Math.floor(progress * galleryItems.length)
      allCards.forEach((card, idx) => {
        if (Math.abs(idx - focusIndex) < 2) {
          card.classList.add('active-card')
        } else {
          card.classList.remove('active-card')
        }
      })
    }

    // Constellation
    scatterPositions.forEach((pos, i) => {
      const card = document.createElement('div')
      card.classList.add('clay-card', 'constellation-card')
      card.style.top = pos.top
      card.style.left = pos.left

      const rot = (Math.random() - 0.5) * 40
      card.style.transform = `rotate(${rot}deg) scale(0.8)`

      const img = document.createElement('img')
      img.src = SPHERE_IMAGES[i % SPHERE_IMAGES.length]
      img.alt = `constellation-${i}`
      card.appendChild(img)

      constellationRef.current.appendChild(card)
    })

    gsap.to('.constellation-card', {
      y: -100,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.journey-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="app">
      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Scroll Progress */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-line" ref={scrollProgressRef}></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="2"></circle>
            <circle cx="12" cy="6" r="2"></circle>
            <circle cx="18" cy="6" r="2"></circle>
            <circle cx="6" cy="12" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="18" cy="12" r="2"></circle>
            <circle cx="6" cy="18" r="2"></circle>
            <circle cx="12" cy="18" r="2"></circle>
            <circle cx="18" cy="18" r="2"></circle>
          </svg>
          Floema
        </div>
        <div className="nav-links">
          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products') }}>Products</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
          <a href="#sustainability" onClick={(e) => { e.preventDefault(); scrollToSection('sustainability') }}>Sustainability</a>
          <a href="#journal" onClick={(e) => { e.preventDefault(); scrollToSection('journal') }}>Journal</a>
          <button className="btn chunky-btn">Contact</button>
        </div>
        <button className="btn chunky-btn menu-btn">Menu <span>☰</span></button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="chunky-badge">✦ Spaces for People</div>
        <h1>Signage, Furniture, and Equipment for Welcoming Urban Spaces</h1>
        <p>Discover the art of urban design through unique perspectives and timeless craftsmanship.</p>
      </header>

      {/* 3D Gallery Section */}
      <section className="gallery-container">
        <div className="floating-text left-text">
          <h2 ref={titleRef}>Urban Street Furniture</h2>
          <p ref={descRef}>Designed for modern cityscapes, our urban collection combines durability with aesthetic appeal.</p>
        </div>

        <div className="scene">
          <div className="sphere" ref={sphereRef}></div>
        </div>

        <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" fill="none" />
          <path d="M20,0 L80,100" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" fill="none" />
        </svg>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="constellation" ref={constellationRef}></div>
        <div className="journey-content">
          <h2>Start Your Journey</h2>
          <p>We would like to start a project with you</p>
          <button className="btn chunky-btn large-btn" onClick={() => scrollToSection('products')}>Explore Products</button>
        </div>
      </section>

      {/* ===== PRODUCTS SLIDER SECTION ===== */}
      <section id="products" className="product-slider-section">
        <div className="product-slider-wrapper">
          {/* Left side - Product Images */}
          <div className="product-images">
            {furnitureProducts.map((product) => (
              <div
                key={product.id}
                className={`product-img__item ${activeProduct === product.id ? 'active' : ''}`}
                id={product.id}
              >
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>

          {/* Right side - Slider */}
          <div className="product-slider-container">
            <Swiper
              modules={[Navigation, EffectFade]}
              spaceBetween={30}
              effect="fade"
              loop={false}
              navigation={{
                nextEl: '.product-next',
                prevEl: '.product-prev'
              }}
              onSlideChange={(swiper) => {
                const target = furnitureProducts[swiper.activeIndex]?.id
                if (target) setActiveProduct(target)
              }}
              onInit={(swiper) => {
                const target = furnitureProducts[swiper.activeIndex]?.id
                if (target) setActiveProduct(target)
              }}
              className="product-slider"
            >
              {furnitureProducts.map((product) => (
                <SwiperSlide key={product.id} data-target={product.id}>
                  <div className="product-slide-card">
                    <img src={product.bgImage} alt="" className="product-slide-bg" />
                    <div className="product-slide-content">
                      <div className="product-slide-header">
                        <span className="product-slide-subtitle">{product.subtitle}</span>
                        <h1 className="product-slide-title">{product.name}</h1>
                        <span className="product-slide-price">${product.price},<sup>99</sup></span>
                      </div>

                      <div className="product-slide-specs">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="spec-group">
                            <div className="spec-label">{spec.label}</div>
                            <div className="spec-options">
                              {spec.options.map((opt, oidx) => (
                                <label key={oidx} className="spec-option">
                                  <input
                                    type="radio"
                                    name={`${product.id}-${spec.label}`}
                                    defaultChecked={oidx === 0}
                                  />
                                  <span>{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="product-slide-durability">
                        <div className="durability-circle">
                          <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle
                              cx="50" cy="50" r="47"
                              strokeDasharray={`${product.durability * 3}, 300`}
                              stroke="#ff6b35"
                              strokeWidth="4"
                              fill="none"
                              style={{ transform: 'rotate(180deg) scaleY(-1)', transformOrigin: '50%' }}
                            />
                          </svg>
                          <div className="durability-text">{product.durability}%</div>
                        </div>
                        <span className="durability-label">DURABILITY RATE</span>
                      </div>

                      <div className="product-slide-actions">
                        <button className="product-add-cart">ADD TO CART</button>
                        <button
                          className="product-add-wishlist"
                          onClick={() => toggleWishlist(product.id)}
                        >
                          <span className={`heart ${wishlist[product.id] ? 'is-active' : ''}`}></span>
                          ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="product-prev">
              <svg viewBox="0 0 32 32" width="24" height="24">
                <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" fill="currentColor"/>
              </svg>
            </button>
            <button className="product-next">
              <svg viewBox="0 0 32 32" width="24" height="24">
                <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="content-section dark-section">
        <div className="content-container">
          <div className="section-badge">About Us</div>
          <h2 className="section-title">Creating Spaces That Bring People Together</h2>
          <p className="section-desc">Since 1985, Floema has been at the forefront of urban furniture design. We believe that well-designed public spaces foster community, encourage interaction, and improve quality of life.</p>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">35+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Worldwide</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Sustainable Materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY SECTION ===== */}
      <section id="sustainability" className="content-section green-section">
        <div className="content-container">
          <div className="section-badge">Sustainability</div>
          <h2 className="section-title">Built for the Planet, Designed for the Future</h2>
          <div className="sustain-cards">
            <div className="sustain-card">
              <h3>Recycled Materials</h3>
              <p>80% of our products use recycled steel and aluminum, reducing waste and carbon footprint.</p>
            </div>
            <div className="sustain-card">
              <h3>Carbon Neutral</h3>
              <p>We offset 100% of our manufacturing emissions through verified carbon credits.</p>
            </div>
            <div className="sustain-card">
              <h3>Circular Design</h3>
              <p>Every product is designed for disassembly and recyclability at end of life.</p>
            </div>
            <div className="sustain-card">
              <h3>Local Sourcing</h3>
              <p>We partner with local suppliers to minimize transportation emissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOURNAL SECTION ===== */}
      <section id="journal" className="content-section light-section">
        <div className="content-container">
          <div className="section-badge">Journal</div>
          <h2 className="section-title">Latest Stories</h2>
          <div className="journal-grid">
            <article className="journal-card">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=250&fit=crop" alt="Article" />
              <div className="journal-card-body">
                <span className="journal-tag">Design</span>
                <h3>The Future of Smart Cities</h3>
                <p>How technology is reshaping urban furniture and public spaces.</p>
              </div>
            </article>
            <article className="journal-card">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" alt="Article" />
              <div className="journal-card-body">
                <span className="journal-tag">Sustainability</span>
                <h3>Green Materials Revolution</h3>
                <p>Exploring new eco-friendly materials in manufacturing.</p>
              </div>
            </article>
            <article className="journal-card">
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop" alt="Article" />
              <div className="journal-card-body">
                <span className="journal-tag">Project</span>
                <h3>Lisbon Waterfront Redesign</h3>
                <p>A case study in transforming coastal public spaces.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">Floema<sup>®</sup></div>
          <p className="footer-text">Spaces for people, made for life.</p>
          <div className="footer-links">
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products') }}>Products</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
            <a href="#sustainability" onClick={(e) => { e.preventDefault(); scrollToSection('sustainability') }}>Sustainability</a>
            <a href="#journal" onClick={(e) => { e.preventDefault(); scrollToSection('journal') }}>Journal</a>
          </div>
          <p className="footer-copyright">© 2024 Floema. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App