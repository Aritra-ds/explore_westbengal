// Toggle Language
const langToggle = document.getElementById('lang-toggle');
let isBengali = false;

langToggle.addEventListener('click', () => {
  isBengali = !isBengali;
  langToggle.textContent = isBengali ? 'EN' : 'বাংলা';
  translatePage();
});

function translatePage() {
  const translations = {
    'EXPLORE WEST BENGAL': 'পশ্চিমবঙ্গ অন্বেষণ করুন',
    'Home': 'প্রথম পাতা',
    'Districts': 'জেলা সমূহ',
    'Map': 'মানচিত্র',
    'Post Your Story': 'আপনার গল্প জমা দিন',
    'Contact Us': 'যোগাযোগ করুন',
    'Welcome to Bengal': 'বাংলায় আপনাকে স্বাগতম',
    'West Bengal is a land of cultural richness and natural beauty. From the Himalayas in the north to the mangroves of the Sunderbans in the south, it’s a state of contrast and vibrancy.': 'পশ্চিমবঙ্গ একটি সাংস্কৃতিক ঐশ্বর্য এবং প্রাকৃতিক সৌন্দর্যের ভূমি। উত্তরে হিমালয় থেকে দক্ষিণে সুন্দরবনের ম্যানগ্রোভ পর্যন্ত, এটি বৈচিত্র্যপূর্ণ একটি রাজ্য।',
    'History of West Bengal': 'পশ্চিমবঙ্গের ইতিহাস',
    'West Bengal has a deep-rooted history that dates back to ancient times. It was once part of the Maurya and Gupta empires, and later became a center of British colonial power. Its capital, Kolkata, was formerly the capital of British India.': 'পশ্চিমবঙ্গের ইতিহাস প্রাচীন কালের। এটি মোর্য এবং গুপ্ত সাম্রাজ্যের অংশ ছিল এবং পরবর্তীতে ব্রিটিশ শাসনের কেন্দ্রবিন্দুতে পরিণত হয়। এর রাজধানী কলকাতা একসময় ব্রিটিশ ভারতের রাজধানী ছিল।',
    'Map of West Bengal': 'পশ্চিমবঙ্গের মানচিত্র',
    'Glimpses of West Bengal': 'পশ্চিমবঙ্গের ঝলক',
    'Sundarbans': 'সুন্দরবন',
    'Victoria Memorial': 'ভিক্টোরিয়া মেমোরিয়াল',
    'Kalimpong Hills': 'কালিম্পং পাহাড়',
    'Digha Beach': 'দিঘা সৈকত',
    'Howrah Bridge': 'হাওড়া সেতু',
    'Kolkata': 'কলকাতা',
    'Darjeeling': 'দার্জিলিং',
    'Murshidabad': 'মুর্শিদাবাদ',
    'Glimpses of West Bengal': 'পশ্চিমবঙ্গের ঝলক',
    'Featured Districts': 'বিশেষ জেলা',
    'The cultural capital of India, with colonial architecture and rich heritage.': 'ভারতের সাংস্কৃতিক রাজধানী, ঔপনিবেশিক স্থাপত্য এবং ঐতিহ্যে সমৃদ্ধ।',
    'Known as the Queen of Hills, famous for its tea and breathtaking views.': 'পর্বতের রাণী নামে পরিচিত, এর চা এবং মনোমুগ্ধকর দৃশ্যের জন্য বিখ্যাত।',
    'An important historical city with Nawabi heritage and stunning palaces.': 'নবাবী ঐতিহ্য এবং দৃষ্টিনন্দন প্রাসাদসমূহ নিয়ে একটি গুরুত্বপূর্ণ ঐতিহাসিক শহর।',
    'Explore': 'অন্বেষণ করুন',
    'Did You Know?': 'আপনি কি জানেন?',
    'West Bengal has the only mangrove tiger habitat in the world – the Sundarbans!': 'পশ্চিমবঙ্গের সুন্দরবন বিশ্বের একমাত্র ম্যানগ্রোভ বাঘ সংরক্ষণ অঞ্চল!',
    '© 2025 Explore West Bengal. All rights reserved.': '© ২০২৫ পশ্চিমবঙ্গ অন্বেষণ করুন। সর্বস্বত্ব সংরক্ষিত।'
  };

  document.querySelectorAll('h1, h2, p, a, button, footer p, h3').forEach(el => {
    const currentText = el.textContent.trim();
    if (isBengali && translations[currentText]) {
      el.textContent = translations[currentText];
    } else if (!isBengali) {
      const eng = getEnglishKey(translations, currentText);
      if (eng) {
        el.textContent = eng;
      }
    }
  });
}

function getEnglishKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

