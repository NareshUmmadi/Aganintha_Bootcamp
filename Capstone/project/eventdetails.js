

function getId(){
    const querString=window.location.search;
    const urlParams = new URLSearchParams(querString);
    console.log(urlParams.get('event_ID'));
   
    return urlParams.get('event_ID');
}

const id=getId();



fetch("./events.json")
  .then((response) => response.json())
  .then((data) => {
    const receivedCard = data.events.filter((event) => event.event_ID === id);

    receivedCard.forEach((element) => {
      console.log(element);
      createDetails(element);
    });
    
    function createDetails(event) {
      // document.getElementById('eventTitle').innerText = event.event_Name;
      // document.getElementById('eventDate').innerText = event.date;
      // document.getElementById('eventLocation').innerText = `${event.location.city}, ${event.location.country}` || 'Event Location';
      // document.getElementById('eventDescription').innerText = event.event.description || 'Event Description';
      // Update other details as needed
      document.getElementById('image').innerHTML = `<img src="${event.event.image}" alt="Event Image">`;
      document.getElementById('eventTitle').innerText = `event_Titel:: ${event.event_Name}`;
      document.getElementById('eventDate').innerText = event.date;
      document.getElementById('eventLocation').innerText = event.location.city, event.location.country;
      document.getElementById('eventDescription').innerText = event.event.description;
      document.getElementById('eventOrganizer').innerText = event.organizer_Details ;
      document.getElementById('eventFeedback').innerText = event.participant_Feedback;
      document.getElementById('popularity').innerText = event.popularity_Score;
      document.getElementById('eventVenu').innerText = event.venue ;



    }
        // Update other details as needed
     
  
   
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });





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


