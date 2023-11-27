let myChart;
let myPieChart;

window.onload=async function getDataAndRenderChart() {
  const fromYear = document.getElementById('fromYear').value;
  const toYear = document.getElementById('toYear').value;
  showLoadingIndicator();
  setTimeout(async () =>{

  try {
    const response = await fetch(`https://my.api.mockaroo.com/jsondata.json?key=2db80520`);
    // fetch("./events.json");
    const data = await response.json();

    // Filter data based on the given date range (from year to to year)
    const filteredData = data.filter(event => {
      const eventYear = new Date(event.date).getFullYear();
      return eventYear >= fromYear && eventYear <= toYear;
    });

    // Count occurrences of events for each year within the filtered data
    const eventCounts = {};
    filteredData.forEach(event => {
      const eventYear = new Date(event.date).getFullYear();
      eventCounts[eventYear] = (eventCounts[eventYear] || 0) + 1;
    });

    // Prepare data for bar chart (years on X-axis, event counts on Y-axis)
    const labels = Object.keys(eventCounts);
    const dataValues = labels.map(year => eventCounts[year]);
    const backgroundColors = getRandomColors(labels.length);

    // Render the bar chart
    renderBarChart(labels, dataValues, backgroundColors);

    // Prepare data for pie chart (each event gets a different color)
    const eventNames = [...new Set(filteredData.map(event => event.event_Name))];
    const pieColors = getRandomColors(eventNames.length);

    data.forEach(event => {
        const eventName = event.event_Name;
        if (!eventCounts[eventName]) {
          eventCounts[eventName] = 1;
        } else {
          eventCounts[eventName]++;
        }
      });
  
      // Prepare data for pie chart
      const eventLabels = Object.keys(eventCounts);
      const eventData = Object.values(eventCounts);
      console.log("Event Labels:", eventLabels);
      console.log("Event Data:", eventData);
  
      renderPieChart(eventLabels, eventData,pieColors);

    // Render the pie chart
    // renderPieChart(eventNames, pieColors);
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }finally {
   
    hideLoadingIndicator();
  }

},3000);
}

function getRandomColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    colors.push(color);
  }
  return colors;
}

function renderBarChart(labels, dataValues, backgroundColors) {
  const ctx = document.getElementById('eventBarChart').getContext('2d');
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Events Held Per Year',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      // Additional options/customizations here
    },
  });
}


function renderPieChart(labels, data,backgroundColors) {
    
  
    const ctx = document.getElementById('eventPieChart').getContext('2d');
    if (myPieChart) {
      myPieChart.destroy(); // Destroy the existing chart if it exists
    } 
    const dataWithLabels = labels.map((label, index) => {
        const count = data[index];
        return `${label} (${count})`;
      });
     


    myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: dataWithLabels,
        datasets: [{
          data: data,
          backgroundColor: backgroundColors,
          borderWidth: 1
        }]
      },
      options: {
        // Additional options/customizations here
      }
    });
  }
  
  // Call the function to fetch data and render the pie chart
//   getDataAndRenderCharts();

function showLoadingIndicator() {
    const button = document.getElementById('loadingSpinner');
    button.textContent = 'Loading...';
  
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block'; // Show the spinner element
  }
  
  function hideLoadingIndicator() {
    const button = document.getElementById('loadingSpinner');
    button.textContent = 'Show Distribution';
  
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'none'; // Hide the spinner element
  }
  

  getDataAndRenderChart();