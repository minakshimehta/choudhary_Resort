<template>
  <section class="about-resort">
    <div class="container">
      <div class="content">
     <div class="content reverse-layout">
  <div class="text-section">
    <h2>
      Discover the Essence of
      <span>Choudhary Resorts</span>
    </h2>
    <p>
      Choudhary Resorts blends elegance, luxury, and tradition to create
      the perfect destination for your most cherished events. From royal
      weddings to private functions, our serene surroundings and exceptional
      services will leave a lasting impression.
    </p>
    <ul class="features">
      <li>✔️ Spacious banquet and lawn area</li>
      <li>✔️ Custom decor and lighting setup</li>
      <li>✔️ Premium hospitality and staff</li>
      <li>✔️ In-house catering with multi-cuisine options</li>
    </ul>
    <a href="#services" class="btn-learn">Explore Our Services</a>
  </div>
  <div class="image-section">
    <img src="../assets/about_FP.jpg" alt="Choudhary Resorts" />
  </div>
</div>
      </div>
    </div>

    <!-- 📸 Photo & Video Gallery Section -->
    <div class="gallery-section">
      <h3>Gallery</h3>
      <div class="gallery-grid">
        <img src="../assets/G1.jpg" alt="Event 1" />
        <img src="../assets/G2.jpg" alt="Event 2" />
        <img src="../assets/G3.jpg" alt="Event 3" />
        <img src="../assets/G4.jpg" alt="Event 4" />
      </div>
    </div>

    <!-- 🎉 Event Packages Section -->
    <div class="packages-section">
      <h3>Event Packages</h3>
      <div class="package-list">
        <div class="package">
          <img src="../assets/classic_W.jpg" alt="Classic Wedding" class="package-icon" />
          <h4>Classic Wedding</h4>
          <p>Includes venue, decoration, catering, and music for up to 300 guests.</p>
        </div>

        <div class="package">
          <img src="../assets/Corporate-Retreat.jpg" alt="Corporate Retreat" class="package-icon" />
          <h4>Corporate Retreat</h4>
          <p>Ideal for business events and team-building activities.</p>
        </div>

        <div class="package">
          <img src="../assets/Wedding_Packages.jpg" alt="Wedding Packages" class="package-icon" />
          <h4>Wedding Packages</h4>
          <p>Make your special day unforgettable with our elegant and customizable wedding packages.</p>
        </div>

        <div class="package">
          <img src="../assets/Birthday_Parties.jpg" alt="Birthday Parties" class="package-icon" />
          <h4>Birthday Parties</h4>
          <p>Celebrate in style with our fun-filled birthday party packages for all ages!</p>
        </div>

        <div class="package">
          <img src="../assets/Surprise_Party.jpg" alt="Surprise Party" class="package-icon" />
          <h4>Surprise Party</h4>
          <p>Delight your loved ones with the perfect surprise gift for any occasion.</p>
        </div>

        <div class="package">
          <img src="../assets/Indoor_Outdoor_Events.jpg" alt="Indoor & Outdoor Events" class="package-icon" />
          <h4>Indoor & Outdoor Events</h4>
          <p>From intimate indoor gatherings to grand outdoor celebrations, we’ve got you covered.</p>
        </div>

        <div class="package">
          <img src="../assets/Anniversary_Celebration.jpg" alt="Anniversary Celebration" class="package-icon" />
          <h4>Anniversary Celebration</h4>
          <p>Celebrate love and togetherness with luxurious anniversary event packages and entertainment.</p>
        </div>

        <div class="package">
          <img src="../assets/Satsang_Events.jpg" alt="Satsang Event" class="package-icon" />
          <h4>Satsang Events</h4>
          <p>Peaceful devotional gatherings with audio setup, seating, and refreshments for devotees.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutResort",
};
</script>

<<style scoped>
.about-resort {
  padding: 3rem 1rem;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Updated content layout */
.content {
  display: flex;
    flex-wrap: nowrap;
  gap: 2rem;
  align-items: center;
}

/* 50-50 layout on desktop */
.image-section,
.text-section {
  flex: 1 1 50%;
}

/* Full width on mobile */
@media (max-width: 768px) {
  .image-section,
  .text-section {
    flex: 1 1 100%;
  }
}

.image-section img {
  width: 100%;
  border-radius: 10px;
}

.text-section h2 {
  font-size: 2rem;
  color: #333;
}

.text-section h2 span {
  color: #ff4d6d;
}

.text-section p {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.features {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
.features li {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
}

.btn-learn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: #ff4d6d;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}
.btn-learn:hover {
  background: #e6445d;
}

/* Gallery Section */
.gallery-section,
.packages-section {
  margin-top: 4rem;
  text-align: center;
}
.gallery-section h3,
.packages-section h3 {
  font-size: 2rem;
  color: #ff4d6d;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.gallery-grid img:hover {
  transform: scale(1.03);
}

/* Packages Section */
.package-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.package {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
}
.package-icon {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* 📱 Responsive Tweaks */
@media (max-width: 768px) {
  .text-section h2 {
    font-size: 1.5rem;
  }

  .features li {
    font-size: 0.95rem;
  }

  .btn-learn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .gallery-grid img {
    height: 160px;
  }

  .package-icon {
    height: 160px;
  }
}
.reverse-layout {
  flex-direction: row-reverse;
}
@media (max-width: 768px) {
  .reverse-layout {
    flex-direction: column;
  }
.content {

    flex-wrap: wrap;

}
}

</style>
