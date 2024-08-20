

function  toggleSidebar(){
  const sidebar = document.getElementById("aside");
  sidebar.classList.toggle("hidden");
}

const params = new URLSearchParams(window.location.search);
const query = params.get("query");
const appId = "a281074f";
const appKey = "9343742472eecf737f321ac98e7ef80f";

fetch(
  `https://api.edamam.com/search?q=${encodeURIComponent(
    query
  )}&app_id=${appId}&app_key=${appKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const resultsContainer = document.getElementById("results");
    data.hits.forEach((hit) => {
      const recipe = hit.recipe;
      const recipeElement = document.createElement("div");
      recipeElement.classList.add("recipe");
      recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.label}">
                <div>
                    <h2>${recipe.label}</h2>
                    <p>Calories: ${Math.round(recipe.calories)}</p>
                    <a href="${recipe.url}" target="_blank">View Recipe</a>
                </div>
            `;
      resultsContainer.appendChild(recipeElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));



  let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {

  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      submitForm(); // Call the submitForm function
  });
});

function submitForm() {
  // Clear previous error messages
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('formMessage').textContent = '';

  // Get form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let valid = true;

  // Regular expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; // At least 6 characters, one uppercase, one lowercase, one number

  // Email validation
  if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address';
      valid = false;
  }

  // Password validation
  if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one number';
      valid = false;
  }
  
  // If valid, display success message
  if (valid) {
      document.getElementById('formMessage').textContent = 'Registration successful!';
  }
}
function resetForm() {
  document.getElementById('registrationForm').reset();
}


