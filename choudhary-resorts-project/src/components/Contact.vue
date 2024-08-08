<template>
  <div class="contact-container">
    <div class="contact-header">
      <h2>Get in Touch with Choudhary Resorts</h2>
      <p>We'd love to hear from you! Whether you have questions or want to book a visit, fill out the form below.</p>
    </div>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="phone">Mobile Number:</label>
        <input type="tel" id="phone" v-model="form.phone" placeholder="Enter your mobile number" required />
      </div>
      <div class="form-group">
        <label for="message">Your Message:</label>
        <textarea id="message" v-model="form.message" placeholder="Type your message here..." required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      const templateParams = {
        from_name: this.form.name,     // Ensure these keys match the placeholders in your EmailJS template
        from_email: this.form.email,   // Ensure these keys match the placeholders in your EmailJS template
        phone_number: this.form.phone, // New field for mobile number
        message: this.form.message      // Ensure these keys match the placeholders in your EmailJS template
      };

      emailjs.send('redroseCatering', 'template_l2qo43a', templateParams, '6ZorTF5xZM7FurpoM')
        .then(response => {
          alert('Message sent successfully!');
          this.form.name = "";
          this.form.email = "";
          this.form.phone = ""; // Clear the phone number field
          this.form.message = "";
        })
        .catch(error => {
          console.error('Failed to send message:', error);
          alert('Failed to send the message. Please try again later.');
        });
    }
  }
};
</script>

<style scoped>
.contact-container {
  background-color: #f2f2f2; /* Light grey background */
  padding: 50px 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.contact-header h2 {
  font-size: 2.5em;
  color: #4a90e2; /* Soft blue */
  margin-bottom: 10px;
  text-align: center;
}

.contact-header p {
  font-size: 1.2em;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.contact-form {
  background-color: #ffffff; /* White background */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  color: #4a90e2; /* Soft blue */
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 1em;
  color: #333;
}

textarea {
  resize: vertical;
  height: 150px;
}

.submit-btn {
  width: 100%;
  background-color: #4a90e2; /* Soft blue */
  color: #ffffff; /* White text */
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #357abf; /* Darker blue */
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-container {
    padding: 30px 15px;
  }

  .contact-header h2 {
    font-size: 2em;
  }
}
</style>
