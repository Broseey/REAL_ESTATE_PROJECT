
  // THIS IS TO POP UP THE LOGIN PAGE
  function showLogin(element){
  element.addEventListener("click", function(){
      document.querySelector(".popup").classList.add("active");
      document.querySelector(".login-bg").classList.add("active")
  });
}

// THIS IS TO CHANGE THE SIGNUP/LOGIN DISPLAY WHEN IT POPS UP, CLICKING ON LOGIN/SIGNUP BTN SLIDES IMAGES AND LOGIN-SIGNUP PAGES
function toggleForm(){
    section = document.querySelector('.login-signup-form');
    container = document.querySelector('.login-signup-container');
    container.classList.toggle('form-active');
    section.classList.toggle('form-active');
}

// THIS IS THE CLOSE BUTTON ON THE LOGIN PAGE
  document.querySelector(".popup .close-btn").addEventListener("click",function(){
      document.querySelector(".popup").classList.remove("active");
      document.querySelector(".login-bg").classList.remove("active")
  });
