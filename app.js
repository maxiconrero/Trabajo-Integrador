document.addEventListener("DOMContentLoaded", function() {
    const chatbotButton = document.querySelector(".chatbot-button");
    const chatbotForm = document.querySelector(".chatbot-form");
  
    chatbotButton.addEventListener("click", function() {
      chatbotForm.classList.toggle("chatbot-form--open");
    });
  });
  
