// Example JavaScript for handling form submission, can be further enhanced to connect with backend
document.querySelector('.story-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const district = document.getElementById('district').value;
  const story = document.getElementById('story').value;
  const image = document.getElementById('image').files[0];

  // Here you would typically send the data to a server (backend) for storage
  console.log('Form submitted');
  console.log('Name:', name);
  console.log('District:', district);
  console.log('Story:', story);
  console.log('Image:', image ? image.name : 'No image uploaded');

  alert('Your story has been submitted successfully!');
});

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
title: { en: "Share Your Story with Us!", bn: "আমাদের সাথে আপনার গল্প শেয়ার করুন!" },
description: { en: "Tell us about your favorite district, your travel experiences, or anything that highlights the beauty of West Bengal.", bn: "আপনার প্রিয় জেলা, আপনার ভ্রমণ অভিজ্ঞতা, অথবা পশ্চিম বাংলার সৌন্দর্য তুলে ধরুন।" },
nameLabel: { en: "Your Name", bn: "আপনার নাম" },
districtLabel: { en: "Select District", bn: "জেলা নির্বাচন করুন" },
storyLabel: { en: "Your Story", bn: "আপনার গল্প" },
imageLabel: { en: "Upload an Image", bn: "একটি চিত্র আপলোড করুন" },
submitButton: { en: "Submit Story", bn: "গল্প জমা দিন" }
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
document.querySelector('#post-story-section h1').textContent = isBengali ? formText.title.bn : formText.title.en;
document.querySelector('#post-story-section p').textContent = isBengali ? formText.description.bn : formText.description.en;
document.querySelector('label[for="name"]').textContent = isBengali ? formText.nameLabel.bn : formText.nameLabel.en;
document.querySelector('label[for="district"]').textContent = isBengali ? formText.districtLabel.bn : formText.districtLabel.en;
document.querySelector('label[for="story"]').textContent = isBengali ? formText.storyLabel.bn : formText.storyLabel.en;
document.querySelector('label[for="image"]').textContent = isBengali ? formText.imageLabel.bn : formText.imageLabel.en;
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
