<template>
  <div class="weddings-events">
    <header class="header">
      <div class="header-content">
        <h1>Weddings & Events</h1>
        <p>Explore our beautiful venues and packages.</p>
      </div>
    </header>
    <section class="gallery">
      <h2>Event Highlights</h2>
      <div class="image-grid">
        <div class="card" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" />
          <div class="card-content">
            <p>{{ image.alt }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="info">
      <h2>Our Services</h2>
      <p>We offer a range of services to make your event memorable.</p>
    </section>
  </div>
</template>

<script>
import wedding1 from '@/assets/wedding1.jpeg';
import wedding2 from '@/assets/wedding2.jpeg';
import wedding3 from '@/assets/wedding3.jpeg';

export default {
  name: 'WeddingsEvents',
  data() {
    return {
      images: [
        { src: wedding1, alt: 'Beautiful Wedding Setup 1' },
        { src: wedding2, alt: 'Elegant Reception Hall' },
        { src: wedding3, alt: 'Charming Outdoor Ceremony' },
        { src: wedding1, alt: 'Beautiful Wedding Setup 1' },
        { src: wedding2, alt: 'Elegant Reception Hall' },
        { src: wedding3, alt: 'Charming Outdoor Ceremony' },
        { src: wedding1, alt: 'Beautiful Wedding Setup 1' },
        { src: wedding2, alt: 'Elegant Reception Hall' },
        { src: wedding3, alt: 'Charming Outdoor Ceremony' },
        { src: wedding1, alt: 'Beautiful Wedding Setup 1' },
        { src: wedding2, alt: 'Elegant Reception Hall' },
        { src: wedding3, alt: 'Charming Outdoor Ceremony' },
      ]
    };
  }
}
</script>

<style scoped>
.weddings-events {
  padding: 20px;
  background: #fff;
  font-family: Arial, sans-serif;
}

.header {
  position: relative;
  text-align: center;
  color: white;
  /* background: url('@/assets/header-bg.jpg') no-repeat center center/cover; */
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.header-content {
  position: relative;
  z-index: 1;
}

.header h1 {
  font-size: 3em;
  margin: 0;
}

.header p {
  font-size: 1.5em;
  margin: 10px 0 0;
}

.gallery {
  margin-bottom: 20px;
}

.gallery h2 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #444;
  text-align: center;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 10px;
  background: #f4f4f4;
}

.card-content p {
  font-size: 1em;
  color: #333;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.info {
  margin-top: 20px;
}

.info h2 {
  font-size: 2em;
  color: #444;
  text-align: center;
}

.info p {
  font-size: 1.2em;
  color: #666;
  text-align: center;
}
</style>
