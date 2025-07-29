<template>
  <section id="contact" class="contact-modern" data-aos="fade-up">
  <div class="cntUsSection"> <h2>Contact Us!</h2>
    <p class="subtext">
     Your celebration deserves prompt care—reach out and we’ll connect with you as soon as possible.
    </p></div>
   
    <div class="contact-wrapper">
      <div class="contact-left">
        <form @submit.prevent="sendEmail" class="contact-form-modern">
          <label>Your Name *</label>
          <input
            type="text"
            placeholder="Name"
            v-model="form.from_name"
            required
          />

          <label>Email *</label>
          <input
            type="email"
            placeholder="Email"
            v-model="form.from_email"
            required
          />

          <label>Phone Number *</label>
          <input
            type="tel"
            placeholder="Phone"
            v-model="form.phone_number"
            required
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
          />

          <label>Description *</label>
          <textarea
            rows="4"
            placeholder="Message"
            v-model="form.message"
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div class="contact-right">
        <ul class="contact-info-list">
          <li>
            <i class="fas fa-phone-alt"></i>
            <a href="tel:+918930220222">+91 8930220222</a>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <a href="mailto:redrosecateringg@gmail.com"
              >redrosecateringg@gmail.com</a
            >
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            The Choudhary Hotel and Resorts, near Reliance Petrol Pump, Rajgarh
            Road, Gangwa, Hissar, Haryana 125004
          </li>
        </ul>
        <div class="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.9058649032057!2d75.6837168!3d29.1002278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913cb6416f79389%3A0x5769c1061b8f4a07!2sChoudhary%20Resorts!5e0!3m2!1sen!2sin!4v1722233187087!5m2!1sen!2sin"
            width="100%"
            height="250"
            style="border: 0; border-radius: 10px"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      form: {
        from_name: "",
        from_email: "",
        phone_number: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      const params = {
        from_name: this.form.from_name,
        from_email: this.form.from_email,
        phone_number: this.form.phone_number,
        message: this.form.message,
        reply_to: this.form.from_email,
      };

      emailjs
        .send(
          "service_7rxij7g",
          "template_l2qo43a",
          params,
          "lCwyKUooWgLsz2T-s"
        )
        .then(() => {
          alert("Message sent successfully!");
          this.form = {
            from_name: "",
            from_email: "",
            phone_number: "",
            message: "",
          };
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
        });
    },
  },
};
</script>

<style scoped>
.contact-modern {
  background: #fff;
  font-family: "Segoe UI", sans-serif;
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: auto;
  background: #f9f9f9;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  
}

.contact-left,
.contact-right {
  flex: 1;
  min-width: 300px;
  padding: 40px 30px;
  background-color: white;
}

.contact-left h2 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
}

.subtext {
  font-size: 14px;
  color: #777;
  margin-bottom: 25px;
}

.contact-form-modern {
  display: flex;
  flex-direction: column;
}

.contact-form-modern label {
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
}

.contact-form-modern input,
.contact-form-modern textarea {
  padding: 10px 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: 0.3s ease;
}

.contact-form-modern input:focus,
.contact-form-modern textarea:focus {
  border-color: #4facfe;
}

.contact-form-modern button {
  background-color: #e6445d;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form-modern button:hover {
  background-color: #e65500;
}

.contact-info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.contact-info-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #333;
}

.contact-info-list i {
  margin-right: 10px;
  color: #e6445d;
  font-size: 16px;
}

.map-frame iframe {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  border: none;
}
.contact-info-list a {
  color: #333; /* or whatever color your text uses */
  text-decoration: none;
  font-size: 14px;
}

.contact-info-list a:hover {
  color: #ff6600; /* optional hover effect */
  text-decoration: underline;
}
.cntUsSection {
  text-align: center;
  padding: 40px 20px 0;
}

.cntUsSection h2 {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.cntUsSection .subtext {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  padding-bottom:10px
}

</style>
