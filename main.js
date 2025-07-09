document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 1000, // global duration for animations
    once: true,     // whether animation should happen only once - default
  });

  // Initialize Glide.js Slider
  if (document.querySelector('.glide')) {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 3500, // Auto-play slides every 3.5 seconds
      hoverpause: true, // Pause on hover
      animationDuration: 800, // Smooth transition
      animationTimingFunc: 'ease-in-out',
    }).mount();
  }

  // Initialize Leaflet Map
  if (document.getElementById('map')) {
    const map = L.map('map').setView([34.0522, -118.2437], 5); // Centered on a common point (e.g., US)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example markers (you can add more relevant locations)
    const locations = [
      { coords: [34.0522, -118.2437], title: 'Los Angeles', description: 'City of Angels' },
      { coords: [40.7128, -74.0060], title: 'New York City', description: 'The Big Apple' },
      { coords: [51.5074, 0.1278], title: 'London', description: 'Historic Capital' },
      { coords: [35.6895, 139.6917], title: 'Tokyo', description: 'Vibrant Metropolis' },
      { coords: [-33.8688, 151.2093], title: 'Sydney', description: 'Harbour City' }
    ];

    locations.forEach(location => {
      L.marker(location.coords).addTo(map)
        .bindPopup(`<b>${location.title}</b><br>${location.description}`)
        .openPopup();
    });
  }

  // Theme Toggle (Dark Mode)
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
  } else {
    // Default to light mode if no preference
    body.classList.add('light-mode');
  }

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  });

  // Lightbox2 configuration for seamless integration
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavButton': true,
    'fitImagesInViewport': true
  });
});