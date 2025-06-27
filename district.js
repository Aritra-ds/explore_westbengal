const districts = [
  { name: "Kalimpong", bnName: "কালিম্পং", desc: "Serene Hills", descBn: "শান্ত পাহাড়", image: "kalimpong.jpeg", link: "kalimpong.html" },
  { name: "Darjeeling", bnName: "দার্জিলিং", desc: "Queen of the Hills", descBn: "পর্বতের রাণী", image: "darjeeling.jpg", link: "darjeeling.html" },
  { name: "Jalpaiguri", bnName: "জলপাইগুড়ি", desc: "Tea and Nature", descBn: "চা এবং প্রকৃতি", image: "jalpaiguri.jpg", link: "jalpaiguri.html" },
  { name: "Alipurduar", bnName: "আলিপুরদুয়ার", desc: "Wildlife Paradise", descBn: "বন্যপ্রাণীর স্বর্গ", image: "alipurduar.jpg", link: "alipurduar.html" },
  { name: "Cooch Behar", bnName: "কোচবিহার", desc: "Royal Palaces", descBn: "রাজপ্রাসাদ", image: "coochbehar.jpg", link: "coochbehar.html" },
  { name: "Uttar Dinajpur", bnName: "উত্তর দিনাজপুর", desc: "Cross-border Culture", descBn: "সীমান্তবর্তী সংস্কৃতি", image: "uttar.jpg", link: "uttar-dinajpur.html" },
  { name: "Dakshin Dinajpur", bnName: "দক্ষিণ দিনাজপুর", desc: "Scenic Simplicity", descBn: "প্রাকৃতিক সরলতা", image: "dakhin.jpg", link: "dakshin-dinajpur.html" },
  { name: "Malda", bnName: "মালদা", desc: "The Gateway of North Bengal", descBn: "উত্তরবঙ্গের প্রবেশদ্বার", image: "malda.jpg", link: "malda.html" },
  { name: "Murshidabad", bnName: "মুর্শিদাবাদ", desc: "Nawabi Heritage", descBn: "নবাবি ঐতিহ্য", image: "murshidabad.jpeg", link: "murshidabad.html" },
  { name: "Birbhum", bnName: "বীরভূম", desc: "Red Soil and Baul", descBn: "লাল মাটি ও বাউল গান", image: "birbhum.jpg", link: "birbhum.html" },
  { name: "Nadia", bnName: "নদিয়া", desc: "Land of Bhakti Movement", descBn: "ভক্তি আন্দোলনের ভূমি", image: "nadia.jpg", link: "nadia.html" },
  { name: "Purulia", bnName: "পুরুলিয়া", desc: "Land of Chhau", descBn: "ছৌ নৃত্যের দেশ", image: "purulia.jpg", link: "purulia.html" },
  { name: "Paschim Bardhaman", bnName: "পশ্চিম বর্ধমান", desc: "The Industrial Powerhouse of Bengal", descBn: "বাংলার শিল্পশক্তির কেন্দ্র", image: "Paschim_burd.jpg", link: "paschim_bardhaman.html" },
  { name: "Purba Bardhaman", bnName: "পূর্ব বর্ধমান", desc: "Rice Bowl of Bengal", descBn: "বাংলার শস্যভাণ্ডার", image: "Purba.jpg", link: "purba_bardhaman.html" },
  { name: "Bankura", bnName: "বাঁকুড়া", desc: "Land of Terracotta", descBn: "টেরাকোটার দেশ", image: "bankura.jpg", link: "bankura.html" },
  { name: "Hooghly", bnName: "হুগলি", desc: "Colonial Echoes", descBn: "ঔপনিবেশিক স্মৃতি", image: "hooghly.jpg", link: "hooghly.html" },
  { name: "North 24 Parganas", bnName: "উত্তর ২৪ পরগনা", desc: "Urban and Rural Fusion", descBn: "শহর ও গ্রামের মিশ্রণ", image: "N24.jpg", link: "north24parganas.html" },
  { name: "Howrah", bnName: "হাওড়া", desc: "The Twin City", descBn: "যমজ শহর", image: "Howrah.jpeg", link: "howrah.html" },
  { name: "Kolkata", bnName: "কলকাতা", desc: "The City of Joy", descBn: "আনন্দের শহর", image: "kolkata.png", link: "kolkata.html" },
  { name: "Jhargram", bnName: "ঝাড়গ্রাম", desc: "Forest and Tribes", descBn: "অরণ্য ও জনজাতি", image: "jhargram.jpg", link: "jhargram.html" },
  { name: "Paschim Medinipur", bnName: "পশ্চিম মেদিনীপুর", desc: "Historical Roots", descBn: "ঐতিহাসিক শিকড়", image: "paschim_medini.jpg", link: "paschim-medinipur.html" },
  { name: "Purba Medinipur", bnName: "পূর্ব মেদিনীপুর", desc: "Sea and Temples", descBn: "সমুদ্র ও মন্দির", image: "digha.jpeg", link: "purba-medinipur.html" },
  { name: "South 24 Parganas", bnName: "দক্ষিণ ২৪ পরগনা", desc: "Gateway to Sundarbans", descBn: "সুন্দরবনের প্রবেশদ্বার", image: "Sundarban_Tiger.jpg", link: "south24parganas.html" }
];



const galleryContainer = document.getElementById("district-gallery");
const langBtn = document.getElementById("toggleLang");
let isBengali = false;

function renderDistricts() {
  galleryContainer.innerHTML = "";

  districts.forEach(district => {
    const card = document.createElement("a");
    card.className = "district-card";
    card.href = district.link;
    card.innerHTML = `
      <img src="${district.image}" alt="${district.name}">
      <h3>${isBengali ? district.bnName || district.name : district.name}</h3>
      <p>${isBengali ? district.descBn : district.desc}</p>
    `;
    galleryContainer.appendChild(card);
  });

  document.getElementById("district-title").textContent = isBengali
    ? "পশ্চিমবঙ্গের ২৩টি জেলা এক নজরে"
    : "Explore All 23 Districts of West Bengal";

  document.getElementById("district-subtitle").textContent = isBengali
    ? "জেলার উপর ক্লিক করে বিস্তারিত জানুন"
    : "Click on any district to explore more";

  langBtn.textContent = isBengali ? "English" : "বাংলা";
}

langBtn.addEventListener("click", () => {
  isBengali = !isBengali;
  renderDistricts();

  // Translate navbar items
  const navItems = document.querySelectorAll(".navbar ul li a");
  const navText = [
    { en: "Home", bn: "হোম" },
    { en: "Districts", bn: "জেলাসমূহ" },
    { en: "Map", bn: "মানচিত্র" },
    { en: "Post Your Story", bn: "আপনার গল্প পোস্ট করুন" },
    { en: "Contact Us", bn: "যোগাযোগ করুন" }
  ];

  navItems.forEach((item, i) => {
    item.textContent = isBengali ? navText[i].bn : navText[i].en;
  });
});

renderDistricts();
