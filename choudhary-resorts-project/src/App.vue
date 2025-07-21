<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <About />

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import About from './components/About.vue'





export default {
  components: {
    Navbar,
    HeroSection,
    About
  }
}
</script>
