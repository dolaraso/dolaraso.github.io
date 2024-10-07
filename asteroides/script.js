const apiKey = 'Q5vGoUQ6r6ORCCAfhoxbh1hsGmnw86zGsrrbu3vx'; // Sustituir por tu API Key de la NASA
const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const neos = data.near_earth_objects;
    let output = '<ul>';

    for (const date in neos) {
      neos[date].forEach(asteroid => {
        output += `<li><strong>${asteroid.name}</strong>: Velocidad: ${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h, Distancia: ${asteroid.close_approach_data[0].miss_distance.kilometers} km</li>`;
      });
    }
    output += '</ul>';
    document.getElementById('datos-nasa').innerHTML = output;
  })
  .catch(error => console.log('Error fetching data:', error));
