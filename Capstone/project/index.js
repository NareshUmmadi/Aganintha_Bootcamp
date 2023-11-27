let upcomingEvents = [];
fetch("./events.json")
  .then((response) => response.json())
  .then((data) => {
    const topRatedEvents = data.events.filter((event) => event.popularity_Score > 8.5);
   // code for top rated cards to showww

   const cardContainer = document.getElementById('card-container');
   const topBtn = document.getElementById('topview-btn');
   let cardsToShow = 4;
    // Limit initially displayed cards to four
    const totalCards = topRatedEvents.length; // Total number of available cards

  
     // const remainingCards = totalCards - cardsToShow;
     // const cardsToAdd = Math.min(remainingCards, 4); // Number of cards to add

     function showNextCards() {
       const cardsToAdd = Math.min(4, totalCards - cardsToShow); // Number of cards to add (up to 4)
 
       for (let i = cardsToShow; i < cardsToShow + cardsToAdd; i++) {
         if (topRatedEvents[i]) {
           const card = createEventCard(topRatedEvents[i]);
           cardContainer.appendChild(card);
         }
       }
 
       cardsToShow += cardsToAdd;

    

     if (cardsToShow >= totalCards) {
       topBtn.style.display = 'none'; // Hide the button when all cards are shown
     }
   }
     
   function createEventCard(event) {
    let coun=1;
     
    // Your card creation logic here...
    const card = document.createElement('div');
card.classList.add('event-card');

// Creating elements for different parts of the event card
const eventImage = document.createElement('div');
eventImage.classList.add('event-image');

const img = document.createElement('img');
img.src = event.event.image+"?"+coun++; // Assuming 'event' contains an 'image' property
img.alt = "Event Image";

const popularity = document.createElement('div');
popularity.classList.add('popularity');
popularity.innerHTML = `${event.popularity_Score}<i class="fa-solid fa-star" style="color: #ffe53d;"></i>`;

const eventDate = document.createElement('p');
eventDate.classList.add('event-date');
eventDate.textContent = event.date; // Assuming 'event' contains a 'date' property

const eventDetails = document.createElement('div');
eventDetails.classList.add('event-details');

const eventName = document.createElement('h3');
eventName.classList.add('event-name');
eventName.textContent = event.event_Name; // Assuming 'event' contains an 'event_Name' property

const eventLocation = document.createElement('p');
eventLocation.classList.add('event-location');
eventLocation.text = event.location.country; // Assuming 'event' contains a 'location' object with a 'country' property

const eventType = document.createElement('p');
eventType.classList.add('event-type');
eventType.textContent = event.event.type; // Assuming 'event' contains an 'event' object with a 'type' property

const eventCost = document.createElement('p');
eventCost.classList.add('event-cost');
eventCost.innerHTML = `<a href="#"><i class="fa-solid fa-location-dot" style="color: #233da4;"></i> </a> ${event.venue}`; // Assuming 'event' contains a 'venue' property

// Appending elements to their respective parents
eventImage.appendChild(img);
eventImage.appendChild(popularity);
eventImage.appendChild(eventDate);

eventDetails.appendChild(eventName);
eventDetails.appendChild(eventLocation);
eventDetails.appendChild(eventType);
eventDetails.appendChild(eventCost);

card.appendChild(eventImage);
card.appendChild(eventDetails);

return card;
  }

  // Show initial set of cards
  window.onload=showNextCards();

  // Event listener for the "View More" button
  topBtn.addEventListener('click', showNextCards);

   

   // ended


   
//    renderEventCards(topRatedEvents); // Call function to render cards with top-rated events

   const currentDate = new Date(); // Get the current date
   // Filter upcoming events based on the current date
   upcomingEvents = data.events.filter((event) => new Date(event.date) > currentDate);
   createUpcomingEvents(upcomingEvents);

  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

  /* up coming cards */
  let count=0;

function createEventHTML(event) {
  // console.log(event);
  
  // container.classList.add('container');

  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const img = document.createElement('img');
  img.src = event.event.image+"?"+count++; // Update with your event image URL
  img.alt = 'Event image';
  imgContainer.appendChild(img);

  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  bodyContainer.appendChild(overlay);

  const eventInfo = document.createElement('div');
  eventInfo.classList.add('event-info');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = event.event_Name; // Update with your event name
  eventInfo.appendChild(title);

  const separator = document.createElement('div');
  separator.classList.add('separator');
  eventInfo.appendChild(separator);

  const info = document.createElement('p');
  info.classList.add('info');
  info.textContent = `${event.location.country},${event.location.city}`; // Update with your location data
  eventInfo.appendChild(info);

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent=` $${event.price}`;
  eventInfo.appendChild(price);
  const additionalInfo = document.createElement('div');
  additionalInfo.classList.add('additional-info');

  const venue = document.createElement('p');
  venue.classList.add('info');
  venue.innerHTML = `<i class="fas fa-map-marker-alt"></i>${event.venue}`;
  additionalInfo.appendChild(venue);

  const date = document.createElement('p');
  date.classList.add('info');
  date.innerHTML = `<i class="far fa-calendar-alt"></i>${event.date}`;
  additionalInfo.appendChild(date);

  const description = document.createElement('p');
  description.classList.add('info');
  description.classList.add('description');
  // description.textContent = `${event.description}`;
  // const text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis dolorum";
  
  description.textContent=event.event.description;
  // console.log(event.description);
  additionalInfo.appendChild(description);
  
  const button = document.createElement('button');
  button.classList.add('action');
  button.textContent = 'Book it';
  eventInfo.appendChild(additionalInfo);
  bodyContainer.appendChild(eventInfo);
  bodyContainer.appendChild(button);

  itemContainer.appendChild(imgContainer);

  itemContainer.appendChild(bodyContainer);

  // container.appendChild(itemContainer);

  return itemContainer;



}

const eventsContainer = document.getElementById('card-container');
events.forEach((event) => {
  const eventHTML = createEventHTML(event);
  eventsContainer.appendChild(eventHTML);
});



function createUpcomingEvents(data){
    const container=document.getElementById('maincontainer');
      // data.forEach((event) => {
      //   // console.log(event);
      //   const card=createEventHTML(event);
      //     container.appendChild(card);
         
    // });
    for(let i=1;i<=3;i++){
      const card=createEventHTML(data[i]);
      container.appendChild(card);
    }
  
  }
