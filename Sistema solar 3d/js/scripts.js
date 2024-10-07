// Archivo scripts.js - Modificado para mostrar información interesante sobre los planetas

$(document).ready(function() {
  // Datos interesantes sobre cada planeta
  const planetData = {
      mercury: {
          name: "Mercurio",
          details: "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar."
      },
      venus: {
          name: "Venus",
          details: "Venus tiene una atmósfera extremadamente densa y es el planeta más caliente del sistema solar."
      },
      earth: {
          name: "Tierra",
          details: "La Tierra es el único planeta conocido que tiene vida y una atmósfera rica en oxígeno."
      },
      mars: {
          name: "Marte",
          details: "Marte es conocido como el 'planeta rojo' y se cree que pudo haber albergado vida en el pasado."
      },
      jupiter: {
          name: "Júpiter",
          details: "Júpiter es el planeta más grande del sistema solar y tiene una Gran Mancha Roja, una tormenta gigantesca."
      },
      saturn: {
          name: "Saturno",
          details: "Saturno es famoso por sus hermosos anillos hechos de hielo y rocas."
      },
      uranus: {
          name: "Urano",
          details: "Urano rota de lado, lo que lo hace único entre los planetas del sistema solar."
      },
      neptune: {
          name: "Neptuno",
          details: "Neptuno es conocido por sus fuertes vientos y su color azul profundo."
      }
  };

  // Mostrar la información del planeta
  function showPlanetInfo(planet) {
      const infoBox = document.getElementById('planet-info');
      const planetName = document.getElementById('planet-name');
      const planetDetails = document.getElementById('planet-details');

      planetName.textContent = planetData[planet].name;
      planetDetails.textContent = planetData[planet].details;

      infoBox.classList.remove('hidden'); // Muestra la caja de información
  }

  // Cerrar el cuadro de información
  document.getElementById('close-info').addEventListener('click', function() {
      document.getElementById('planet-info').classList.add('hidden'); // Oculta la caja de información
  });

  // Asignar evento de clic a cada planeta
  $("#data a").click(function(e) {
      var planetClass = $(this).attr("class");
      if (planetData[planetClass]) {
          showPlanetInfo(planetClass);
      }
      e.preventDefault();
  });

  // Asignar evento de clic a los botones del control de la barra superior
  $("#toggle-info").click(function() {
      alert('Haga clic en cualquier planeta para obtener más información.');
  });
});
