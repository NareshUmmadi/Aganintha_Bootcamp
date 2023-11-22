window.onload=function(){const countriesGrid = document.querySelector('.countries-grid');

// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
        console.log(country);
      const countryDiv = document.createElement('div');
      countryDiv.classList.add('country');

      const flagImg = document.createElement('img');
      flagImg.src = country.flags.svg; // Use the flag URL provided by the API
      flagImg.alt = `${country.name.common} flag`; // Alt text for accessibility
      flagImg.classList.add('flag');
      countryDiv.appendChild(flagImg);

      const countryName = document.createElement('span');
      countryName.textContent = country.name.common;
      countryDiv.appendChild(countryName);

      countriesGrid.appendChild(countryDiv);
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
};