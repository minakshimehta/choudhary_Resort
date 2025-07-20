<template>
  <header :class="{ scrolled: isScrolled }" class="navbar">
    <div class="navbar-container">
      <div class="logo">Choudhary Resorts</div>

      <nav :class="{ open: menuOpen }" class="nav-links">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#gallery" @click="closeMenu">Gallery</a>
        <a href="#services" @click="closeMenu">Services</a>
        <a href="#book" @click="closeMenu">Book Now</a>
      </nav>

      <div class="hamburger" @click="toggleMenu">
        <div :class="{ open: menuOpen }" class="bar"></div>
        <div :class="{ open: menuOpen }" class="bar"></div>
        <div :class="{ open: menuOpen }" class="bar"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<!-- 🔧 GLOBAL style for fixed navbar (must NOT be scoped) -->
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

<!-- 🎨 COMPONENT-LEVEL STYLING -->
<style scoped>
/* Base navbar */
.navbar {
  padding: 15px 30px;
  background: transparent;
  z-index: 1000;
  transition: background 0.3s ease;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.85);
}

/* Container */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

/* Logo */
.logo {
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
}

/* Nav links (desktop) */
.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 0%;
  background: #ff4d6d;
  left: 0;
  bottom: -4px;
  transition: 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Hamburger menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1100;
}

.bar {
  width: 25px;
  height: 3px;
  background: white;
  transition: 0.3s ease;
}

.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Responsive styling */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
  .navbar{
    padding: 5px;
}
.navbar-container{
    display: flex
;
    justify-content: space-around;
    align-items: center;
    /* max-width: 1200px; */
    /* width: 100%; */
    margin: auto;
    flex-direction: row-reverse;
}
}
</style>
