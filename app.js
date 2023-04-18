document.addEventListener("DOMContentLoaded", function() {
    const chatbotButton = document.querySelector(".chatbot-button");
    const chatbotForm = document.querySelector(".chatbot-form");
  
    chatbotButton.addEventListener("click", function() {
      chatbotForm.classList.toggle("chatbot-form--open");
    });
  });
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e582af1330msh43b8ec8201b3ed3p151d52jsnee90f25bc096',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())

  .then(data => {

    const gamesContainer = document.querySelector('#games-container');

    const gamesMostrados = data.slice(0, 12); // Obtener los primeros 12 juegos

    gamesMostrados.forEach(game => {
      const gameDiv = document.createElement('div');
      gameDiv.classList.add('game-container');
      const gameTitle = document.createElement('h2');
      gameTitle.innerText = game.title;
      const gameImage = document.createElement('img');
      gameImage.src = game.thumbnail;
      const gameDescription = document.createElement('p');
      gameDescription.innerText = game.short_description;
      const gameUrl = document.createElement('a');
      gameUrl.href = game.game_url;
      gameUrl.innerText = 'Play now';
      gameDiv.appendChild(gameTitle);
      gameDiv.appendChild(gameImage);
      gameDiv.appendChild(gameDescription);
      gameDiv.appendChild(gameUrl);
      gamesContainer.appendChild(gameDiv);
    });
  })

  .catch(err => console.error(err));


  // function generarPDF() {
  //   // Obtener los valores del formulario
  //   var nombre = document.getElementById("nombreCompleto").value;
  //   var plataforma = document.getElementById("nombreJuego").value;
  //   var genero = document.getElementById("descripcionJuego").value;
  
    
  // // Crear el objeto jsPDF
  // var doc = new jsPDF(); 
  
  //   // Agregar contenido al PDF
  //   pdf.text("Nombre: " + nombre, 10, 10);
  //   pdf.text("Plataforma: " + plataforma, 10, 20);
  //   pdf.text("Género: " + genero, 10, 30);
  
  //   // Guardar el PDF en un archivo
  //   pdf.save("formulario_videojuegos.pdf");
  // }
 
  // function generarPDF() {
    
  // }
 