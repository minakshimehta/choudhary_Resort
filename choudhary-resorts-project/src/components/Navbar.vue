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
      document.body.classList.toggle("menu-open", this.menuOpen);
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.classList.remove("menu-open");
    },
  },
};
</script>

<!-- Lock scroll when menu is open -->
<style>
body.menu-open {
  overflow: hidden;
}
</style>

<!-- Fixed navbar (global style) -->
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

<!-- Scoped styling for navbar -->
<style scoped>
.navbar {
  padding: 15px 30px;
  background: transparent;
  z-index: 1000;
  transition: background 0.3s ease;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.85);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; /* Adds consistent spacing on both sides */
  box-sizing: border-box;
}

/* Logo */
.logo {
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
}

/* Desktop nav */
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
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Hamburger */
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

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 20px;
  }

  .navbar-container {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
  }

  .nav-links.open {
    max-height: 300px;
  }

  .nav-links a {
    padding: 12px 0;
    width: 100%;
    text-align: center;
  }

  .hamburger {
    display: flex;
  }
}@media (max-width: 768px) {
  .navbar {
    padding: 10px 0;
  }

  .navbar-container {
    padding: 0 16px;
  }
}

</style>
