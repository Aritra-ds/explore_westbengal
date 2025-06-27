// Language toggle functionality
let isBengali = false;

// Navbar and form translation data
const navText = [
  { en: "Home", bn: "হোম" },
  { en: "Districts", bn: "জেলাসমূহ" },
  { en: "Map", bn: "মানচিত্র" },
  { en: "Post Your Story", bn: "আপনার গল্প পোস্ট করুন" },
  { en: "Contact Us", bn: "যোগাযোগ করুন" }
];

const formText = {
  title: { en: "Contact Us", bn: "যোগাযোগ করুন" },
  description: { en: "We would love to hear from you! Whether it's a suggestion, question, or just to say hello.", bn: "আমরা আপনার কাছ থেকে শুনতে পছন্দ করি! এটা যদি পরামর্শ, প্রশ্ন, অথবা শুধু হ্যালো বলার জন্য হয়।" },
  nameLabel: { en: "Name:", bn: "নাম:" },
  emailLabel: { en: "Email:", bn: "ইমেল:" },
  messageLabel: { en: "Message:", bn: "বার্তা:" },
  submitButton: { en: "Send Message", bn: "বার্তা পাঠান" }
};

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

// Function to update form text based on language
function updateFormLanguage() {
  document.querySelector('.contact-header h1').textContent = isBengali ? formText.title.bn : formText.title.en;
  document.querySelector('.contact-header p').textContent = isBengali ? formText.description.bn : formText.description.en;
  document.querySelector('label[for="name"]').textContent = isBengali ? formText.nameLabel.bn : formText.nameLabel.en;
  document.querySelector('label[for="email"]').textContent = isBengali ? formText.emailLabel.bn : formText.emailLabel.en;
  document.querySelector('label[for="message"]').textContent = isBengali ? formText.messageLabel.bn : formText.messageLabel.en;
  document.querySelector('button[type="submit"]').textContent = isBengali ? formText.submitButton.bn : formText.submitButton.en;
}

// Toggle language function
function toggleLanguage() {
  isBengali = !isBengali;
  updateNavbarLanguage();
  updateFormLanguage();
}

// Attach language toggle functionality to the button
document.getElementById("toggleLang").addEventListener("click", toggleLanguage);

// Initial load: set language based on default (English)
updateNavbarLanguage();
updateFormLanguage();
