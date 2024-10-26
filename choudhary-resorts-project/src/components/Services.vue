<template>
  <div class="services">
    <h1>Our Services</h1>
    <div class="services-tabs">
      <el-tabs v-model="activeName" class="custom-tabs" @tab-click="handleClick">
        <!-- Rooms Tab -->
        <el-tab-pane name="rooms">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><calendar /></el-icon>
              <span class="tab-text">Rooms</span>
            </span>
          </template>
          <div class="tab-content room-panel">
            <div class="room-image">
              <img src="https://alacritys.in/wp-content/uploads/2023/06/Hotel-Room-Interior-Design-8.webp" alt="Luxury Room" @click="showImageFullScreen('https://alacritys.in/wp-content/uploads/2023/06/Hotel-Room-Interior-Design-8.webp')" />
            </div>
            <div class="room-description">
              <h2>Luxury Rooms</h2>
              <p>Experience the ultimate comfort in our elegantly designed rooms equipped with modern amenities. Our rooms provide a perfect blend of luxury and tranquility, ensuring a memorable stay.</p>
              <ul>
                <li>Spacious and elegantly furnished</li>
                <li>High-speed Wi-Fi access</li>
                <li>Complimentary breakfast</li>
                <li>24/7 room service</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>

        <!-- Parking Tab -->
        <el-tab-pane name="parking">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><car /></el-icon>
              <span class="tab-text">Parking</span>
            </span>
          </template>
          <div class="tab-content parking-panel">
            <div class="parking-image">
              <img src="https://watermark.lovepik.com/photo/20211126/large/lovepik-indoor-parking-lot-picture_501142116.jpg" alt="Spacious Parking" @click="showImageFullScreen('https://watermark.lovepik.com/photo/20211126/large/lovepik-indoor-parking-lot-picture_501142116.jpg')" />
            </div>
            <div class="parking-description">
              <h2>Spacious Parking</h2>
              <p>We offer secure and ample parking for all our guests. Whether you arrive in a small car or a large vehicle, our parking facilities are designed to accommodate all your needs with ease and safety.</p>
              <ul>
                <li>24/7 surveillance and security</li>
                <li>Electric vehicle charging stations</li>
                <li>Convenient valet parking</li>
                <li>Direct access to the main building</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>

        <!-- Events Tab with sub-categories -->
        <el-tab-pane name="events">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><tools /></el-icon>
              <span class="tab-text">Events</span>
            </span>
          </template>
          <div class="tab-content events-panel">
            <div class="events-description">
              <h2>Events & Celebrations</h2>
              <p>We offer the perfect venues for all your celebrations. From traditional ceremonies to modern parties, we provide a memorable experience for every occasion.</p>

              <el-tabs v-model="activeEventTab">
                <!-- Mehndi Party -->
                <el-tab-pane name="mehndi">
                  <template #label>
                    <span>Mehndi Party</span>
                  </template>
                  <div class="event-gallery">
                    <img src="https://ik.imagekit.io/pu0hxo64d/uploads/gallery/tr:w-450,h-250/bollywood-theme-party-at-the-manor-900.jpg" alt="Mehndi Party 1" @click="showImageFullScreen('https://ik.imagekit.io/pu0hxo64d/uploads/gallery/tr:w-450,h-250/bollywood-theme-party-at-the-manor-900.jpg')" />
                  </div>
                </el-tab-pane>

                <!-- Haldi Party -->
                <el-tab-pane name="haldi">
                  <template #label>
                    <span>Haldi Party</span>
                  </template>
                  <div class="event-gallery">
                    <img src="https://www.rurbanresort.com/images/event/1716216659_haldi.jpg" alt="Haldi Party 1" @click="showImageFullScreen('https://www.rurbanresort.com/images/event/1716216659_haldi.jpg')" />
                  </div>
                </el-tab-pane>

                <!-- Shadi -->
                <el-tab-pane name="shadi">
                  <template #label>
                    <span>Shadi</span>
                  </template>
                  <div class="event-gallery">
                    <img src="https://media.weddingz.in/photologue/images/mubark-haveli-new-chandigarh-chandigarh.jpg" alt="Shadi 1" @click="showImageFullScreen('https://media.weddingz.in/photologue/images/mubark-haveli-new-chandigarh-chandigarh.jpg')" />
                  </div>
                </el-tab-pane>

                <!-- Birthday Party -->
                <el-tab-pane name="birthday">
                  <template #label>
                    <span>Birthday Party</span>
                  </template>
                  <div class="event-gallery">
                    <img src="https://vmnk.gumlet.io/assets/delhi/five-elements-by-sandoz-janakpuri/images/original/five-elements-by-sandoz-janakpuri-23gdi.jpg?h=300&w=368" alt="Birthday Party 1" @click="showImageFullScreen('https://vmnk.gumlet.io/assets/delhi/five-elements-by-sandoz-janakpuri/images/original/five-elements-by-sandoz-janakpuri-23gdi.jpg?h=300&w=368')" />
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- Lightbox component -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxImages"
      :index="lightboxIndex"
      @hide="visible = false"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      activeName: 'rooms',
      activeEventTab: 'mehndi', // Default to Mehndi in Events
      visible: false, // Lightbox visibility
      lightboxImages: [],
      lightboxIndex: 0, // Index of the clicked image
    };
  },
  methods: {
    handleClick(tab) {
      console.log('Tab clicked:', tab);
    },
    showImageFullScreen(imgUrl) {
      this.lightboxImages = [imgUrl]; // Only showing the clicked image
      this.lightboxIndex = 0;
      this.visible = true; // Open lightbox
    },
  },
};
</script>

<style scoped>
/* (Your existing styles) */
</style>


<style scoped>
.services {
  padding: 20px;
  background: #f9f9f9;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}

.services-tabs {
  max-width: 1000px;
  margin: 0 auto;
}

.custom-tabs {
  border-bottom: 2px solid #ccc;
}

.custom-tabs-label {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}

.tab-text {
  padding-left: 10px;
}

.el-tabs__item {
  padding: 10px 15px;
  color: #555;
  transition: color 0.3s ease;
}

.el-tabs__item.is-active {
  color: #007bff !important;
}

.tab-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  display: flex;
  flex-wrap: nowrap !important;
  align-items: center;
}

/* Adjust panels for smaller screens */
.room-panel,
.parking-panel {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.room-image img,
.parking-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.room-description,
.parking-description {
  max-width: 100%;
  text-align: center;
}

.room-description h2,
.parking-description h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.room-description p,
.parking-description p {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #666;
}

.room-description ul,
.parking-description ul {
  list-style: none;
  padding: 0;
}

.room-description li,
.parking-description li {
  font-size: 0.9rem;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: #555;
}

/* Events Panel Styles */
.events-panel {
  text-align: center;
}

.events-description h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
}

.events-description p {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #666;
}

.event-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  width: 100%;
}

.event-gallery img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  height: 120px;
}

/* Media Query for mobile devices */
@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .tab-content {
    flex-direction: column;
    padding: 15px;
  }

  .custom-tabs-label {
    font-size: 0.9rem;
  }

  .room-image img,
  .parking-image img {
    max-width: 100%;
  }

  .room-description h2,
  .parking-description h2 {
    font-size: 1.4rem;
  }

  .room-description p,
  .parking-description p {
    font-size: 0.95rem;
  }

  .events-description h2 {
    font-size: 1.6rem;
  }

  .event-gallery {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .event-gallery img {
    height: 100px;
  }
}


</style>
