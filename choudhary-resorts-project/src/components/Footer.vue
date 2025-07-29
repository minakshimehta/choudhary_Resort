<template>
  <footer class="modern-footer">
    <div class="footer-container">
      <h2 class="brand-name">Choudhary Resorts</h2>

      <nav class="footer-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>

      <div class="social-icons">
        <a href="#" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" aria-label="Twitter/X">
          <i class="fab fa-x-twitter"></i>
        </a>
        <a href="#" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>

      <p class="copyright">
        &copy; 2025 Choudhary Resorts. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// no script needed unless dynamic
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.modern-footer {
  background-color: #001a0e; /* dark greenish black */
  color: #ffffff;
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e2b007; /* golden touch */
}

.footer-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 400;
  transition: 0.3s;
}

.footer-nav a:hover {
  color: #e2b007;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
}

.social-icons a {
  color: #ffffff;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #e2b007;
}

@media (max-width: 600px) {
  .footer-nav {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style