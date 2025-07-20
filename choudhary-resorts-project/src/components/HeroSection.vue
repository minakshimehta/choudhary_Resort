<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>We Plan<br /><span>The Best Events</span></h1>
      <p>
        Celebrate your special moments in luxury and elegance<br />
        at <strong>Choudhary Resorts</strong>
      </p>
      <a href="#book" class="hero-btn">Book Now</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 500px;
  background-image: url("@/assets/frontPageImage.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 90%;
  padding: 20px;
  box-sizing: border-box;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero h1 span {
  color: #ff4d6d;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #f0f0f0;
}

.hero-btn {
  background-color: #ff4d6d;
  color: #fff;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.hero-btn:hover {
  background-color: #e63e5b;
}

/* Tablet view */
@media (max-width: 1024px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .hero-btn {
    padding: 10px 25px;
    font-size: 0.95rem;
  }
}

/* Mobile view */
@media (max-width: 768px) {
  .hero {
    padding: 20px;
    height: 90vh;
    background-position: top center;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
