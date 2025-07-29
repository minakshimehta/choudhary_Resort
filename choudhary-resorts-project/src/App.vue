<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <About />
    <Contact/>
    <Footer/>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'







export default {
  components: {
    Navbar,
    HeroSection,
    About,
    Contact,
    Footer
  }
}
</script>
