<template>
  <div id="app">
    <header class="header">
      <nav class="navbar">
        <div class="logo_text">
          Choudhary <span>Resorts</span>
        </div>
        <ul :class="{ 'nav-links': true, 'nav-active': navActive }" @click="toggleNav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/weddings">Weddings & Events</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
        <div class="burger" @click="toggleNav">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <!-- <button class="book-btn">Book Now</button> -->
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 Choudhary Resorts. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;

    },
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

.header {
  background: linear-gradient(90deg, #084341, #0a4f50);
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo_text {
  font-size: 24px;
  color: #fff;
  font-weight: 700;
}

.logo_text span {
  color: #e67e22;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  justify-content: center;
}

.nav-links li {
  padding: 0 15px;
}

.nav-links li a {
  color: #f5f5f5;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #e67e22;
}

.burger {
  display: none;
  cursor: pointer;
  z-index: 10;
}

.burger div {
  width: 30px;
  height: 3px;
  background-color: #f5f5f5;
  margin: 5px;
  transition: all 0.3s ease;
}

.book-btn {
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background-color: #d35400;
}

.nav-active {
  transform: translateX(0%);
}

@media screen and (max-width: 768px) {
  .navbar {
    align-items: flex-start;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    background: #084341;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    padding-top: 80px;
    justify-content: flex-start;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 3;
  }

  .nav-links.nav-active {
    transform: translateX(0%);
  }

  .nav-links li {
    margin: 20px 0;
  }

  .burger {
    display: block;
  }

  .book-btn {
    display: none;
  }
}

footer {
  background: #084341;
  color: #f5f5f5;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
body {
  display: block;
  margin: 0;
}
</style>
