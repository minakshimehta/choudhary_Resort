<template>
  <div class="about">
    <div class="details-content">
      <h2>About Us</h2>
      <div class="about-animation">
        <div class="about-card">
          <h3>Our Story</h3>
          <p>
            Choudhary Resorts is a premier destination for those seeking a picturesque setting for their special occasions. Our resort features elegantly designed venues, top-notch facilities, and unparalleled service. Whether you are planning a grand wedding, a corporate event, or a relaxing getaway, we have something for everyone.
          </p>
        </div>
        <div class="about-card">
          <h3>Our Facilities</h3>
          <p>
            Our sprawling grounds include beautifully landscaped gardens, luxurious suites, and state-of-the-art conference rooms. Each space is meticulously designed to offer comfort and style, ensuring that your experience with us is nothing short of extraordinary.
          </p>
        </div>
        <div class="about-card">
          <h3>Our Commitment</h3>
          <p>
            We pride ourselves on our attention to detail and our commitment to making your event memorable. From intimate gatherings to grand celebrations, our dedicated team works closely with you to bring your vision to life.
          </p>
        </div>
      </div>
      <p class="about-summary">
        Experience the charm and elegance of Choudhary Resorts and create lasting memories with your loved ones. Contact us today to learn more about our offerings and to book your visit.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  background-color: #f9f9f9;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.details-content {
  max-width: 1000px;
  margin-bottom: 60px;
  text-align: center;
}

.details-content h2 {
  font-size: 2.8em;
  margin-bottom: 1em;
  color: #444;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.about-animation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
}

.about-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-icon {
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 15px;
}

.about-card h3 {
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #007bff;
}

.about-card p {
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
}

.about-summary {
  font-size: 1.2em;
  color: #666;
  line-height: 1.8;
}
</style>
