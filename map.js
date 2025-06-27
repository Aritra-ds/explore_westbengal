const map = L.map('map').setView([23.5, 88.3], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Current language state
let isBengali = false;

// District data with both English and Bengali names
const districts = [
  { en: 'Alipurduar', bn: 'আলিপুরদুয়ার', lat: 26.4922, lng: 89.5320, url: 'alipurduar.html' },
  { en: 'Bankura', bn: 'বাঁকুড়া', lat: 23.2313, lng: 87.0784, url: 'bankura.html' },
  { en: 'Birbhum', bn: 'বীরভূম', lat: 24.3588, lng: 87.8403, url: 'birbhum.html' },
  { en: 'Cooch Behar', bn: 'কোচবিহার', lat: 26.3452, lng: 89.4482, url: 'coochbehar.html' },
  { en: 'Dakshin Dinajpur', bn: 'দক্ষিণ দিনাজপুর', lat: 25.3715, lng: 88.5565, url: 'dakshindinajpur.html' },
  { en: 'Darjeeling', bn: 'দার্জিলিং', lat: 27.0416, lng: 88.2664, url: 'darjeeling.html' },
  { en: 'Hooghly', bn: 'হুগলি', lat: 22.9012, lng: 88.3899, url: 'hooghly.html' },
  { en: 'Howrah', bn: 'হাওড়া', lat: 22.5958, lng: 88.2636, url: 'howrah.html' },
  { en: 'Jalpaiguri', bn: 'জলপাইগুড়ি', lat: 26.5215, lng: 88.7196, url: 'jalpaiguri.html' },
  { en: 'Jhargram', bn: 'ঝাড়গ্রাম', lat: 22.4550, lng: 86.9974, url: 'jhargram.html' },
  { en: 'Kalimpong', bn: 'কালিম্পং', lat: 27.0594, lng: 88.4695, url: 'kalimpong.html' },
  { en: 'Kolkata', bn: 'কলকাতা', lat: 22.5744, lng: 88.3629, url: 'kolkata.html' },
  { en: 'Malda', bn: 'মালদা', lat: 25.0108, lng: 88.1411, url: 'malda.html' },
  { en: 'Murshidabad', bn: 'মুর্শিদাবাদ', lat: 24.1759, lng: 88.2802, url: 'murshidabad.html' },
  { en: 'Nadia', bn: 'নদিয়া', lat: 23.4710, lng: 88.5565, url: 'nadia.html' },
  { en: 'North 24 Parganas', bn: 'উত্তর ২৪ পরগনা', lat: 22.7100, lng: 88.7109, url: 'north24parganas.html' },
  { en: 'Paschim Bardhaman', bn: 'পশ্চিম বর্ধমান', lat: 23.6902, lng: 87.1822, url: 'paschimbardhaman.html' },
  { en: 'Paschim Medinipur', bn: 'পশ্চিম মেদিনীপুর', lat: 22.5046, lng: 87.4604, url: 'paschimmedinipur.html' },
  { en: 'Purba Bardhaman', bn: 'পূর্ব বর্ধমান', lat: 23.2736, lng: 87.9335, url: 'purbabardhaman.html' },
  { en: 'Purba Medinipur', bn: 'পূর্ব মেদিনীপুর', lat: 21.9373, lng: 87.7763, url: 'purbamedinipur.html' },
  { en: 'Purulia', bn: 'পুরুলিয়া', lat: 23.3322, lng: 86.3616, url: 'purulia.html' },
  { en: 'South 24 Parganas', bn: 'দক্ষিণ ২৪ পরগনা', lat: 22.1367, lng: 88.5565, url: 'south24parganas.html' },
  { en: 'Uttar Dinajpur', bn: 'উত্তর দিনাজপুর', lat: 25.9810, lng: 88.0510, url: 'uttardinajpur.html' }
];

// Create and store markers
const markers = [];

districts.forEach(district => {
  const marker = L.marker([district.lat, district.lng]).addTo(map);
  marker.bindPopup(`<a href="${district.url}">${district.en}</a>`);
  markers.push({ marker, district });
});

// Navbar translation data
const navText = [
  { en: "Home", bn: "হোম" },
  { en: "Districts", bn: "জেলাসমূহ" },
  { en: "Map", bn: "মানচিত্র" },
  { en: "Post Your Story", bn: "আপনার গল্প পোস্ট করুন" },
  { en: "Contact Us", bn: "যোগাযোগ করুন" }
];

// Function to update navbar text based on language
function updateNavbarLanguage() {
  const navItems = document.querySelectorAll(".navbar ul li a");

  navItems.forEach((item, i) => {
    item.textContent = isBengali ? navText[i].bn : navText[i].en;
  });

  // Update the language toggle button text
  const toggleBtn = document.getElementById("toggleLang");
  if (toggleBtn) {
    toggleBtn.textContent = isBengali ? "English" : "বাংলা";
  }
}

// Toggle language function
function toggleLanguage() {
  isBengali = !isBengali;
  markers.forEach(({ marker, district }) => {
    const name = isBengali ? district.bn : district.en;
    marker.setPopupContent(`<a href="${district.url}">${name}</a>`);
  });
  
  // Update navbar language when toggling
  updateNavbarLanguage();
}

// Attach the language toggle function to the button
document.getElementById("toggleLang").addEventListener("click", toggleLanguage);

// Initial load: set navbar language based on default (English)
updateNavbarLanguage();
