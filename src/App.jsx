import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";

import honeyTeddy from "./assets/teddy-honey.jpg";
import honeyTeddy1 from "./assets/teddy-honey1.jpg";
import pinkTeddy from "./assets/teddy-pink.jpg";
import pinkTeddy1 from "./assets/teddy-pink1.jpg";
import cloudTeddy from "./assets/teddy-cloud.jpg";
import cloudTeddy1 from "./assets/teddy-cloud.jpg";
import miniTeddy from "./assets/teddy-mini.jpg";
import miniTeddy1 from "./assets/teddy-mini1.jpg";
import premiumTeddy from "./assets/teddy-premium.jpg";
import premiumTeddy1 from "./assets/teddy-premium1.jpg";
import giftTeddy from "./assets/teddy-gift.jpg";
import giftTeddy1 from "./assets/teddy-gift1.jpg";
import giftTeddy2 from "./assets/teddy-gift2.jpg";
import storyTeddy from "./assets/teddy-story.jpg";
import storyTeddy1 from "./assets/teddy-story1.jpg";
import storyTeddy2 from "./assets/teddy-story2.jpg";

const products = [
  {
    id: 1,
    name: "Honey Teddy",
    category: "Classic",
    price: 899,
    oldPrice: 1199,
    color: "Honey Brown",
    image: honeyTeddy,
    label: "BEST SELLER",
    rating: 5,
    description: "A classic soft teddy made for everyday cuddles.",
  },
  {
    id: 2,
    name: "Blush Teddy",
    category: "Cute",
    price: 1099,
    oldPrice: 1399,
    color: "Blush Pink",
    image: pinkTeddy,
    label: "POPULAR",
    rating: 5,
    description: "A lovely pink friend for sweet little moments.",
  },
  {
    id: 3,
    name: "Cloud Teddy",
    category: "Premium",
    price: 1299,
    oldPrice: 1599,
    color: "Cloud Cream",
    image: cloudTeddy,
    label: "PREMIUM",
    rating: 5,
    description: "A fluffy companion for extra-special hugs.",
  },
  {
    id: 4,
    name: "Mini Teddy",
    category: "Mini",
    price: 499,
    oldPrice: 699,
    color: "Caramel",
    image: miniTeddy,
    label: "MINI LOVE",
    rating: 4,
    description: "A little teddy friend you can take anywhere.",
  },
  {
    id: 5,
    name: "Dream Teddy",
    category: "Premium",
    price: 1499,
    oldPrice: 1799,
    color: "Dreamy Lilac",
    image: premiumTeddy,
    label: "NEW ARRIVAL",
    rating: 5,
    description: "A thoughtful gift for someone very special.",
  },
  {
    id: 6,
    name: "Gift Box Teddy",
    category: "Gifts",
    price: 1599,
    oldPrice: 1899,
    color: "Gift Edition",
    image: giftTeddy2,
    label: "GIFT PICK",
    rating: 5,
    description: "A teddy gift made for birthdays and surprises.",
  },
];

const collections = [
  {
    title: "Classic Teddy Collection",
    subtitle: "Timeless friends for everyday hugs",
    description:
      "Discover classic teddy bears for bedtime stories, everyday cuddles and happy memories.",
    image: storyTeddy1,
  },
  {
    title: "Cute & Colourful Collection",
    subtitle: "Sweet colours, sweeter smiles",
    description:
      "Find adorable teddy friends in lovely colours for birthdays, celebrations and surprises.",
    image: storyTeddy2,
  },
  {
    title: "Premium Gift Collection",
    subtitle: "Make special moments memorable",
    description:
      "Explore thoughtful gifts and premium teddy friends for people who mean the most to you.",
    image: giftTeddy2,
  },
];

const reviews = [
  {
    name: "Uday S.",
    location: "Krishnagiri",
    image: pinkTeddy,
    stars: 5,
    message:
      "The teddy looks so cute! I bought it as a birthday gift and loved the design.",
  },
  {
    name: "Kavin M.",
    location: "Coimbatore",
    image: honeyTeddy,
    stars: 5,
    message:
      "Beautiful collection and lovely colours. The product design is really adorable.",
  },
  {
    name: "Yoga S.",
    location: "Chennai",
    image: cloudTeddy,
    stars: 5,
    message:
      "I really liked the premium collection. It is a lovely gift idea for someone special.",
  },
];

/* EXTRA TEDDY IMAGES GALLERY */

const teddyGallery = [
  {
    id: 1,
    name: "Honey Teddy",
    category: "Classic Collection",
    image: honeyTeddy1,
  },
  {
    id: 2,
    name: "Blush Teddy",
    category: "Cute Collection",
    image: pinkTeddy1,
  },
  {
    id: 3,
    name: "Cloud Teddy",
    category: "Premium Collection",
    image: cloudTeddy1,
  },
  {
    id: 4,
    name: "Mini Teddy",
    category: "Mini Collection",
    image: miniTeddy1,
  },
  {
    id: 5,
    name: "Dream Teddy",
    category: "Premium Collection",
    image: premiumTeddy1,
  },
  {
    id: 6,
    name: "Gift Teddy",
    category: "Gift Collection",
    image: giftTeddy,
  },
  {
    id: 7,
    name: "Special Gift",
    category: "Gift Collection",
    image: giftTeddy2,
  },
  {
    id: 8,
    name: "Cute Teddy World",
    category: "Special Collection",
    image: storyTeddy2,
  },
];
function TeddyModel() {
  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}models/teddy.glb`
  );

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.12}
      floatIntensity={0.2}
    >
      <primitive
        object={scene}
        scale={1.3}
        position={[0, -0.2, 0]}
      />
    </Float>
  );
}
function Loader() {
  return (
    <motion.div
      className="loader-screen"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="loader-bear"
        animate={{ y: [0, -17, 0], rotate: [-7, 7, -7] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      >
        🧸
      </motion.div>

      <p className="loader-small">WELCOME TO</p>
      <h1>TEDDY TOY STORE</h1>
      <p className="loader-caption">A little teddy. A lot of love.</p>

      <div className="loader-line">
        <motion.span
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        />
      </div>
    </motion.div>
  );
}

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const searchProducts = (event) => {
    event.preventDefault();
    const query = search.trim();

    if (query) {
      window.location.hash = `products?search=${encodeURIComponent(query)}`;

      window.dispatchEvent(
        new CustomEvent("teddy-search", { detail: query })
      );
    }

    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">🧸</span>
          <span className="brand-words">
            TEDDY
            <small>TOY STORE</small>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
        </button>

        <div className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#products" onClick={() => setMenuOpen(false)}>
            Shop
          </a>

          <a href="#collections" onClick={() => setMenuOpen(false)}>
            Collections
          </a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            Our Story
          </a>

          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-icon-button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Open product search"
          >
            <i className="bi bi-search" />
          </button>

          <a href="#products" className="nav-bag">
            <i className="bi bi-bag-heart" />
            <span>Cart</span>
            <b>{cartCount}</b>
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.form
            className="search-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={searchProducts}
          >
            <i className="bi bi-search" />

            <input
              autoFocus
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search teddy bears..."
              aria-label="Search teddy products"
            />

            <button type="submit">Search</button>
          </motion.form>
        )}
      </AnimatePresence>
    </header>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <motion.article
      className="product-card"
      layout
      whileHover={{ y: -7 }}
      transition={{ duration: 0.22 }}
      data-aos="fade-up"
    >
      <div
        className="product-photo"
        style={{
          background: product.id % 2 ? "#f9e5dc" : "#f8e3ec",
        }}
      >
        <span className="product-label">{product.label}</span>

        <img src={product.image} alt={product.name} loading="lazy" />

        <button
          className="quick-add"
          type="button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          <i className="bi bi-plus-lg" />
        </button>
      </div>

      <div className="product-card-content">
        <div className="product-rating">
          {"★".repeat(product.rating)}
          <span> ({product.rating}.0)</span>
        </div>

        <p className="product-color">{product.color}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-price-row">
          <div>
            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            <del>
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </del>
          </div>

          <button
            type="button"
            className="small-add-button"
            onClick={() => onAdd(product)}
          >
            Add <i className="bi bi-arrow-up-right" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* TEDDY IMAGE GALLERY */

function TeddyGallery() {
  return (
    <section
      className="section-padding teddy-gallery-section"
      id="gallery"
    >
      <div className="section-heading" data-aos="fade-up">
        <div>
          <span className="eyebrow">A CLOSER LOOK AT OUR TEDDIES</span>

          <h2>
            A gallery full of <span>teddy love.</span>
          </h2>
        </div>

      </div>

      <div
        className="teddy-gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "22px",
        }}
      >
        {teddyGallery.map((item, index) => (
          <motion.article
            key={item.id}
            className="teddy-gallery-card"
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 80}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              borderRadius: "18px",
              background: "#fff8f6",
              border: "1px solid rgba(145, 90, 90, 0.12)",
              boxShadow: "0 8px 25px rgba(80, 45, 45, 0.07)",
            }}
          >
            <div
  className="teddy-gallery-image"
  style={{
    width: "100%",
    height: "300px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: index % 2 === 0 ? "#f9e5dc" : "#f8e3ec",
  }}
>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                style={{
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
  transition: "transform 0.45s ease",
}}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            <div
              className="teddy-gallery-info"
              style={{ padding: "18px" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  color: "#b56e80",
                  textTransform: "uppercase",
                }}
              >
                {item.category}
              </span>

              <h3
                style={{
                  margin: "8px 0 12px",
                  fontSize: "19px",
                }}
              >
                {item.name}
              </h3>

              <a
                href="#products"
                style={{
                  color: "#9a5268",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Explore teddy <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "35px",
        }}
      >
        <a href="#products" className="primary-button">
          Shop all teddy bears <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </section>
  );
}

function TeddyCarousel({ selected, setSelected }) {
  const currentIndex = products.findIndex(
    (item) => item.id === selected.id
  );

  const changeSlide = (direction) => {
    const nextIndex =
      (currentIndex + direction + products.length) % products.length;

    setSelected(products[nextIndex]);
  };

  return (
    <div className="carousel-box">
      <div className="carousel-top">
        

       
      </div>

      <div className="teddy-single-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            className="teddy-slide"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
          >
            <img src={selected.image} alt={selected.name} />

            <h3>{selected.name}</h3>
            <p>{selected.description}</p>

            <strong>
              ₹{selected.price.toLocaleString("en-IN")}
            </strong>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous teddy"
        >
          <i className="bi bi-arrow-left" />
        </button>

        <span>Choose your favourite friend</span>

        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next teddy"
        >
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </div>
  );
}

function TeddySelector({ selected, setSelected, onAdd }) {
  return (
    <div className="selector-panel" data-aos="fade-left">
      <span className="eyebrow">YOUR NEW BEST FRIEND</span>

      <h2>
        Pick a teddy.
        <br />
        <span>Keep the love.</span>
      </h2>

      <p>{selected.description}</p>

      <label className="selector-label">Choose your teddy</label>

      <div className="selector-options">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            className={`selector-option ${
              product.id === selected.id ? "selected" : ""
            }`}
            onClick={() => setSelected(product)}
            title={product.name}
          >
            <img src={product.image} alt="" />
          </button>
        ))}
      </div>

      <div className="selector-price">
        <div>
          <small>SELECTED TEDDY</small>
          <h3>{selected.name}</h3>
        </div>

        <strong>₹{selected.price.toLocaleString("en-IN")}</strong>
      </div>

      <button
        className="primary-button full-button"
        type="button"
        onClick={() => onAdd(selected)}
      >
        Add to cart <i className="bi bi-bag-heart" />
      </button>

      <div className="secure-note">
        <i className="bi bi-heart-fill" /> A lovely gift for someone special
      </div>
    </div>
  );
}

function CollectionAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="collection-layout">
      <div className="collection-accordion">
        {collections.map((item, index) => (
          <div
            className={`collection-entry ${
              active === index ? "active" : ""
            }`}
            key={item.title}
          >
            <button
              type="button"
              className="collection-trigger"
              onClick={() => setActive(active === index ? -1 : index)}
            >
              <span className="collection-index">0{index + 1}</span>

              <span className="collection-title">
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </span>

              <i
                className={`bi ${
                  active === index ? "bi-dash-lg" : "bi-plus-lg"
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  className="collection-detail"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <p>{item.description}</p>
                  <a href="#products">Shop this collection ↗</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="collection-feature-image">
        <AnimatePresence mode="wait">
          {active >= 0 && (
            <motion.img
              key={collections[active].image}
              src={collections[active].image}
              alt={collections[active].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        <div className="image-caption-badge">
          <i className="bi bi-heart-fill" /> Made for hugs
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <section className="reviews-section section-padding" id="reviews">
      <div className="section-heading" data-aos="fade-up">
        <div>
          <span className="eyebrow">HAPPY HUGS, HAPPY CUSTOMERS</span>

          <h2>
            Love notes from <span>our customers.</span>
          </h2>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <motion.article
            className="review-card"
            key={review.name}
            whileHover={{ y: -6 }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="review-stars">
              {"★".repeat(review.stars)}
            </div>

            <p className="review-message">“{review.message}”</p>

            <div className="review-person">
              <img src={review.image} alt="" />

              <div>
                <strong>{review.name}</strong>
                <small>{review.location}</small>
              </div>

              <i className="bi bi-patch-check-fill" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "How do I choose a teddy?",
      answer:
        "Browse the teddy collection, choose your favourite product and add it to the cart.",
    },
    {
      question: "Can I buy a teddy as a gift?",
      answer:
        "Yes. The gift collection section is designed to showcase teddy bears suitable for birthdays and special occasions.",
    },
    {
      question: "Can I pay online?",
      answer:
        "This version is a frontend demo. A payment gateway and backend checkout need to be connected before accepting real payments.",
    },
    {
      question: "Can I contact the store?",
      answer:
        "You can use the Contact section to send a message or replace the sample contact details with your real business details.",
    },
  ];

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="faq-intro" data-aos="fade-right">
        <span className="eyebrow">HERE TO HELP</span>

        <h2>
          Frequently asked <span>questions.</span>
        </h2>

        <p>
          Have a question? Here are a few helpful answers about our teddy
          store demo.
        </p>

        <a className="text-button" href="#contact">
          Contact our team <i className="bi bi-arrow-up-right" />
        </a>
      </div>

      <div className="faq-list" data-aos="fade-left">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${open === index ? "faq-open" : ""}`}
            key={faq.question}
          >
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span>{faq.question}</span>

              <i
                className={`bi ${
                  open === index ? "bi-dash-lg" : "bi-plus-lg"
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="section-heading" data-aos="fade-up">
        <div>
          <span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>

          <h2>
            Let's talk about <span>teddy love.</span>
          </h2>
        </div>

      </div>

      <div className="contact-layout">
        <div className="contact-info" data-aos="fade-right">
          <span className="contact-icon">🧸</span>

          <h3>Get in touch</h3>

          <p>
            We are here to help you find the perfect teddy for every
            special moment.
          </p>

          <a
            href="mailto:uday@teddytoystore.com"
            className="contact-info-item"
          >
            <i className="bi bi-envelope-heart" />

            <span>
              <small>Email us</small>
              <strong>uday@teddytoystore.com</strong>
            </span>
          </a>

          <a href="#products" className="contact-info-item">
            <i className="bi bi-bag-heart" />

            <span>
              <small>Explore our store</small>
              <strong>Shop Teddy Bears</strong>
            </span>
          </a>

          <div className="contact-social">
            <span>Follow our teddy world</span>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" />
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <span className="eyebrow">SEND US A MESSAGE</span>

          <h3>How can we help you?</h3>

          <label>
            Your name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="What would you like to ask?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Your message
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="primary-button">
            Send message <i className="bi bi-arrow-up-right" />
          </button>

          {submitted && (
            <p className="contact-success" role="status">
              <i className="bi bi-check-circle-fill" />
              Thank you! Your message has been submitted in this demo.
            </p>
          )}

          <small className="contact-form-note">
            
          </small>
        </form>
      </div>
    </section>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(products[0]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);

    AOS.init({
      duration: 850,
      once: false,
      offset: 70,
      easing: "ease-out-cubic",
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleSearch = (event) => {
      setSearch(event.detail || "");
      setCategory("All");

      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("teddy-search", handleSearch);

    return () => window.removeEventListener("teddy-search", handleSearch);
  }, []);

  useEffect(() => {
    if (!loading) AOS.refresh();
  }, [loading, category, search]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      return existing
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...current, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} added to your cart`);

    setTimeout(() => setToast(""), 2500);
  };

  const updateQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const categories = [
    "All",
    "Classic",
    "Cute",
    "Premium",
    "Mini",
    "Gifts",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="store-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="floating-decor" aria-hidden="true">
            <span>♡</span>
            <span>✦</span>
            <span>✧</span>
            <span>♡</span>
            <span>✿</span>
          </div>

          <Navbar cartCount={cartCount} />

          <main>
            {/* HERO */}

            <section className="hero-section" id="home">
              <div className="hero-content" data-aos="fade-right">
                <span className="eyebrow">
                  <i className="bi bi-stars" /> LITTLE THINGS, BIG LOVE
                </span>

                <h1>
                  A little
                  <br />
                  <span>teddy.</span>
                  <br />
                  A lot of love.
                </h1>

                <p>
                  Find your new cuddle buddy. Explore adorable teddy bears,
                  thoughtful gifts and little moments worth remembering.
                </p>

                <div className="hero-buttons">
                  <a className="primary-button" href="#products">
                    Shop teddy bears{" "}
                    <i className="bi bi-arrow-up-right" />
                  </a>

                  <a className="text-button" href="#collections">
                    Explore collection{" "}
                    <i className="bi bi-arrow-down" />
                  </a>
                </div>

                <div className="hero-trust">
                  <div className="hero-avatar-stack">
                    <img src={honeyTeddy} alt="" />
                    <img src={pinkTeddy} alt="" />
                    <img src={cloudTeddy} alt="" />
                  </div>

                  <div>
                    <strong>Made for little moments</strong>
                    <small>Lovely gifts, happy hugs</small>
                  </div>
                </div>
              </div>

              <div className="hero-art" data-aos="zoom-in">
                <div className="hero-blob" />

                <span className="hero-star star-a">✦</span>
                <span className="hero-star star-b">♡</span>
                <span className="hero-star star-c">✧</span>

                <div className="model-pill">
                  <span /> INTERACTIVE 3D TEDDY
                </div>

                <div className="hero-canvas">
                  <Canvas
                    camera={{
                      position: [0, 0, 4],
                      fov: 35,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ambientLight intensity={2} />

                    <directionalLight
                      position={[3, 5, 5]}
                      intensity={3}
                    />

                    <Suspense fallback={null}>
                      <TeddyModel />
                      <Environment preset="studio" />

                      <ContactShadows
                        position={[0, -1.5, 0]}
                        opacity={0.3}
                        scale={5}
                        blur={2}
                      />
                    </Suspense>

                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                    />
                  </Canvas>
                </div>

                <div className="floating-info info-top">
                  <span>🎁</span>

                  <div>
                    <strong>Gift ready</strong>
                    <small>Made with love</small>
                  </div>
                </div>

                <div className="floating-info info-bottom">
                  <span>♡</span>

                  <div>
                    <strong>Extra cuddly</strong>
                    <small>Hugs guaranteed</small>
                  </div>
                </div>
              </div>

              <div className="hero-bottom">
                <span>SOFT FRIENDS. SWEET MEMORIES.</span>
                <a href="#products">SCROLL TO EXPLORE ↓</a>
              </div>
            </section>

            {/* BENEFITS */}

            <section className="benefit-strip">
              <div data-aos="fade-up">
                <i className="bi bi-heart" />

                <span>
                  <strong>Made for hugs</strong>
                  <small>Lovely teddy friends</small>
                </span>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-gift" />

                <span>
                  <strong>Perfect gifts</strong>
                  <small>For special moments</small>
                </span>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-stars" />

                <span>
                  <strong>Sweet designs</strong>
                  <small>Find your favourite</small>
                </span>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-box-heart" />

                <span>
                  <strong>Packed with love</strong>
                  <small>Little happy surprises</small>
                </span>
              </div>
            </section>

            {/* TEDDY SHOWCASE */}

            <section className="section-padding showcase-section">
              <div className="section-heading" data-aos="fade-up">
                <div>
                  <span className="eyebrow">
                    MEET YOUR NEW BEST FRIEND
                  </span>

                  <h2>
                    Find your <span>forever friend.</span>
                  </h2>
                </div>

              </div>

              <div className="showcase-grid">
                <TeddyCarousel
                  selected={selected}
                  setSelected={setSelected}
                />

                <TeddySelector
                  selected={selected}
                  setSelected={setSelected}
                  onAdd={addToCart}
                />
              </div>
            </section>

            {/* PRODUCTS */}

            <section
              className="section-padding products-section"
              id="products"
            >
              <div className="section-heading" data-aos="fade-up">
                <div>
                  <span className="eyebrow">THE TEDDY SHOP</span>

                  <h2>
                    Little bears, <span>big smiles.</span>
                  </h2>
                </div>

              </div>

              <div className="shop-tools">
                <div className="category-tabs">
                  {categories.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={category === item ? "active" : ""}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <label className="product-search">
                  <i className="bi bi-search" />

                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Find your teddy..."
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      aria-label="Clear search"
                    >
                      <i className="bi bi-x-lg" />
                    </button>
                  )}
                </label>
              </div>

              {filteredProducts.length > 0 ? (
                <motion.div layout className="products-grid">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAdd={addToCart}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="no-products">
                  <span>🧸</span>
                  <h3>No teddy found</h3>

                  <p>
                    Try another search or choose a different category.
                  </p>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => {
                      setSearch("");
                      setCategory("All");
                    }}
                  >
                    View all teddy bears
                  </button>
                </div>
              )}
            </section>

            {/* GIFT BANNER */}

            <section className="gift-banner section-padding">
              <div className="gift-banner-copy" data-aos="fade-right">
                <span className="eyebrow">A GIFT THAT SAYS IT ALL</span>

                <h2>
                  Send a little
                  <br />
                  <span>bundle of joy.</span>
                </h2>

                <p>
                  Birthdays, anniversaries or just because — make someone
                  smile with a teddy they will treasure.
                </p>

                <a href="#products" className="primary-button">
                  Find a special gift{" "}
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>

              <div className="gift-banner-image" data-aos="zoom-in">
                <img
                  src={giftTeddy}
                  alt="Teddy bear gift collection"
                  loading="lazy"
                />

                <div className="gift-round-sticker">
                  A LITTLE
                  <br />
                  LOVE ♡
                </div>
              </div>
            </section>

            {/* COLLECTIONS */}

            <section
              className="section-padding collections-section"
              id="collections"
            >
              <div className="section-heading" data-aos="fade-up">
                <div>
                  <span className="eyebrow">
                    A WORLD OF TEDDY LOVE
                  </span>

                  <h2>
                    Explore our <span>little world.</span>
                  </h2>
                </div>

                
              </div>

              <CollectionAccordion />
            </section>

            {/* EXTRA IMAGE GALLERY */}

            <TeddyGallery />

            {/* OUR STORY */}

            <section
              className="section-padding story-section"
              id="about"
            >
              <div className="story-visual" data-aos="zoom-in">
                <div className="story-image-wrap">
                  <img
                    src={storyTeddy}
                    alt="A teddy bear from our story collection"
                    loading="lazy"
                  />
                </div>

                <span className="story-sticker">Made for hugs ♡</span>
                <span className="story-floating-heart">♡</span>
              </div>

              <div className="story-copy" data-aos="fade-left">
                <span className="eyebrow">OUR LITTLE STORY</span>

                <h2>
                  Happiness comes
                  <br />
                  in <span>soft packages.</span>
                </h2>

                <p>
                  We believe a teddy bear can be more than a toy. It can be
                  a bedtime buddy, a birthday surprise, a comfort on a hard
                  day or a sweet reminder that someone cares.
                </p>

                <p>
                  Teddy Toy Store brings together cute designs and
                  thoughtful gift ideas to help you share a little more
                  love.
                </p>

                <div className="story-stats">
                  <div>
                    <strong>♡</strong>
                    <span>Made for gifting</span>
                  </div>

                  <div>
                    <strong>✦</strong>
                    <span>Thoughtful designs</span>
                  </div>

                  <div>
                    <strong>🧸</strong>
                    <span>Everyday cuddles</span>
                  </div>
                </div>

                <a href="#products" className="primary-button">
                  Meet the collection{" "}
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </section>

            {/* REVIEWS */}

            <ReviewsSection />

            {/* FAQ */}

            <FAQSection />

            {/* CONTACT */}

            <ContactSection />

            {/* NEWSLETTER */}

            <section className="newsletter-section">
              <span className="newsletter-heart">♡</span>

              <span className="eyebrow">JOIN OUR CUDDLE CLUB</span>

              <h2>
                Stay in our <span>little world.</span>
              </h2>

              <p>
                Get new collection updates, gift inspiration and store news
                in your inbox.
              </p>

              <form
                className="newsletter-form"
                onSubmit={(event) => {
                  event.preventDefault();

                  setToast("Thank you for joining our Cuddle Club!");

                  event.currentTarget.reset();

                  setTimeout(() => setToast(""), 2800);
                }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />

                <button type="submit">
                  Join the club <i className="bi bi-arrow-right" />
                </button>
              </form>

              <small className="newsletter-note">
                Demo form — connect an email service to collect real
                subscriptions.
              </small>
            </section>
          </main>

          {/* FOOTER */}

          <footer className="site-footer">
            <div className="footer-main">
              <div className="footer-about">
                <a href="#home" className="brand footer-brand">
                  <span className="brand-mark">🧸</span>

                  <span className="brand-words">
                    TEDDY
                    <small>TOY STORE</small>
                  </span>
                </a>

                <p>
                  Little teddy friends, lovely gifts and big happy hugs.
                  Find your new favourite cuddle buddy.
                </p>

                <div className="social-links">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram" />
                  </a>

                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook" />
                  </a>

                  <a
                    href="https://pinterest.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Pinterest"
                  >
                    <i className="bi bi-pinterest" />
                  </a>
                </div>
              </div>

              <div className="footer-links">
                <h3>Explore</h3>
                <a href="#home">Home</a>
                <a href="#products">Shop teddy bears</a>
                <a href="#collections">Collections</a>
                <a href="#gallery">Gallery</a>
                <a href="#about">Our story</a>
              </div>

              <div className="footer-links">
                <h3>Customer care</h3>
                <a href="#faq">FAQs</a>
                <a href="#reviews">Reviews</a>
                <a href="#contact">Contact us</a>
                <a href="mailto:uday@teddytoystore.com">Email us</a>
                <a href="#products">Gift ideas</a>
              </div>

              <div className="footer-contact">
                <h3>Let's stay connected</h3>

                <p>Questions about your favourite teddy?</p>

                <a href="mailto:uday@teddytoystore.com">
                  <i className="bi bi-envelope" />{" "}
                  uday@teddytoystore.com
                </a>

                <span className="footer-love">
                  Made with <b>♥</b> for teddy lovers
                </span>
              </div>
            </div>

            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} Teddy Toy Store. Demo website.
              </span>

              <span>Every teddy deserves a hug.</span>

              <a href="#home">Back to top ↑</a>
            </div>
          </footer>

          {/* FLOATING CART BUTTON */}

          <button
            className="floating-cart"
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Open shopping cart"
          >
            <i className="bi bi-bag-heart" />
            <span>{cartCount}</span>
          </button>

          {/* CART DRAWER */}

          <AnimatePresence>
            {cartOpen && (
              <>
                <motion.div
                  className="cart-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setCartOpen(false)}
                />

                <motion.aside
                  className="cart-drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28 }}
                >
                  <div className="cart-header">
                    <div>
                      <span className="eyebrow">YOUR LITTLE BAG</span>
                      <h2>Shopping Cart ({cartCount})</h2>
                    </div>

                    <button
                      type="button"
                      className="cart-close"
                      onClick={() => setCartOpen(false)}
                      aria-label="Close cart"
                    >
                      <i className="bi bi-x-lg" />
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <div className="empty-cart">
                      <span>🧸</span>

                      <h3>Your cart needs a cuddle!</h3>

                      <p>Add your favourite teddy to get started.</p>

                      <button
                        className="primary-button"
                        type="button"
                        onClick={() => setCartOpen(false)}
                      >
                        Explore teddy bears
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="cart-items">
                        {cart.map((item) => (
                          <div className="cart-row" key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <div className="cart-product-info">
                              <h3>{item.name}</h3>

                              <p>
                                ₹{item.price.toLocaleString("en-IN")}
                              </p>

                              <div className="quantity-control">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.id, -1)
                                  }
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.id, 1)
                                  }
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <strong>
                              ₹
                              {(
                                item.price * item.quantity
                              ).toLocaleString("en-IN")}
                            </strong>
                          </div>
                        ))}
                      </div>

                      <div className="cart-summary">
                        <div>
                          <span>Subtotal</span>

                          <strong>
                            ₹{cartTotal.toLocaleString("en-IN")}
                          </strong>
                        </div>

                        <p>
                          Shipping and payment are not included in this
                          frontend demo.
                        </p>

                        <button
                          className="primary-button full-button"
                          type="button"
                          onClick={() => {
                            setToast(
                              "Demo cart ready. Connect a checkout service for payment."
                            );

                            setTimeout(() => setToast(""), 3000);
                          }}
                        >
                          Continue <i className="bi bi-arrow-right" />
                        </button>
                      </div>
                    </>
                  )}
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* TOAST MESSAGE */}

          <AnimatePresence>
            {toast && (
              <motion.div
                className="toast-message"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
              >
                <i className="bi bi-heart-fill" /> {toast}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}

export default App;