<template>
  <div class="home">
    <div class="hero-image">
      <img src="../assets/crB1.png" alt="Resort" class="main-image" />
    </div>
    <div class="content-section">
      <div class="intro-content">
        <h1>Welcome to Choudhary Resorts</h1>
        <p class="intro-text">
          Experience luxury and serenity like never before. Choudhary Resorts is the ultimate destination for those seeking an unforgettable escape. Our resort is designed to offer you a perfect blend of natural beauty and top-tier amenities, ensuring a stay that is both relaxing and rejuvenating.
        </p>
        <div class="highlighted-features">
          <div class="feature">
            <video controls class="feature-media">
              <source src="../assets/elegantWedding.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Elegant Weddings</h3>
            <p>
              Celebrate your special day in style with our beautifully designed venues and personalized services.
            </p>
          </div>
          <div class="feature">
            <video controls class="feature-media">
              <source src="../assets/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Our Wedding Venues</h3>
            <p>
              Watch a glimpse of our stunning wedding venues and envision your dream event coming to life.
            </p>
          </div>
          <div class="feature">
            <img src="../assets/catering.jpeg" alt="Catering" class="feature-media" />
            <h3>Exquisite Catering</h3>
            <p>
              Delight your guests with our bespoke catering services, offering a wide range of culinary delights to suit every palate.
            </p>
          </div>
        </div>
      </div>
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
      <div class="contact-content">
      <h2>Get in Touch</h2>
      <p>Have any questions or want to book a visit? Fill out the form below.</p>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      alert("Message sent!");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  margin: 0;
}

.hero-image {
  position: relative;
}

.main-image {
  width: 100%;
  height: 100vh; /* Adjust height to fit the design */
  object-fit: cover;
}

.content-section {
  flex: 1;
  background-color: #f9f9f9;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.intro-content {
  max-width: 1000px;
  margin-bottom: 60px;
}

h1 {
  font-size: 3.5em;
  font-weight: 700;
  margin-bottom: 0.5em;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.intro-text {
  font-size: 1.4em;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.highlighted-features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  flex: 1;
  max-width: 300px;
  margin: 20px;
  text-align: center;
}

.feature-media {
  width: 100%;
  height: 200px; /* Adjust height for better visibility */
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  font-size: 2em;
  margin: 10px 0;
  color: #333;
}

.feature p {
  font-size: 1.2em;
  color: #666;
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
  gap: 30px; /* Add space between cards */
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




.form-group {
  margin-bottom: 20px;
}


label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
}

input, textarea, input, textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  height: 180px;
}

.submit-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .main-image {
    height: 50vh; /* Adjust height for smaller screens */
  }

  .content-section {
    padding: 20px;
  }


}
</style>

<style scoped>
.contact-content {
  max-width: 1000px;
  width: 100%;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
}

.contact-content h2 {
  font-size: 2.8em;
  margin-bottom: 0.5em;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.contact-content p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.contact-form {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  height: 180px;
}

.submit-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .contact-form {
    padding: 20px;
  }
}
</style>
