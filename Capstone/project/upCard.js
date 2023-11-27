


const filterOption=document.getElementById('filterOptions').addEventListener('change', function() {
  const dateRange = document.getElementById('dateRange');
  const searchInput = document.getElementById('nameFilter');
  console.log(this.value);
  if (this.value === 'date') {
    dateRange.style.display = 'flex';
    searchInput.style.display='none'
   
  } else {
    dateRange.style.display = 'none';
    searchInput.style.display='block'
    
  }
});
let upcomingEvents ;

fetch("./events.json")
  .then((response) => response.json())
  .then((data) => {
    // const topRatedEvents = data.events.filter((event) => event.popularity_Score > 8.5);
//    renderEventCards(topRatedEvents); // Call function to render cards with top-rated events
   const currentDate = new Date(); // Get the current date
   upcomingEvents = data.events.filter((event) => new Date(event.date) > currentDate);
   createUpcomingEvents(upcomingEvents);
  //  reciveData(upcomingEvents);
   
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });






document.getElementById('submitFilter').addEventListener('click', function (event) {
  event.preventDefault();
  const searchTerm = document.getElementById('nameFilter').value.toLowerCase();
  const filterOption = document.getElementById('filterOptions').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  let filteredEvents;
  if (filterOption === 'location') {
    const inputValue = searchTerm.toLowerCase().trim();
    filteredEvents = upcomingEvents.filter(event => {
      const eventCity = event.location.city.toLowerCase();
      const eventCountry = event.location.country.toLowerCase();
      return eventCity === inputValue || eventCountry === inputValue;
    });
  } else if (filterOption === 'date') {
    console.log("date");
    // Filter by date range
    filteredEvents = upcomingEvents.filter(event => {
      const eventDate = new Date(event.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return eventDate >= start || eventDate <= end;
    });
  } else if (filterOption === 'popularity') {

    let inputValue=searchTerm;
    if(searchTerm>0 && searchTerm<=10){

       filteredEvents=upcomingEvents.filter((event) => event.popularity_Score >inputValue);
    }

  } else {
    filteredEvents = upcomingEvents.filter(event => event.event_Name.toLowerCase().includes(searchTerm));
  }

  renderFilteredEvents(filteredEvents,filterOption,searchTerm);
});






  let count=0;

function createEventHTML(event) {
  console.log(event);
  
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
  description.textContent = `${event.event.description}`;
  // const text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis dolorum";
  
  // description.textContent=text;
  // console.log(event.description);
  additionalInfo.appendChild(description);
  
  const button = document.createElement('button');
  button.classList.add('action');
  
  button.addEventListener('click', () =>{
    window.location.href=`eventdetails.html?event_ID=${event.event_ID}`;
    toAction(event.event_ID);
  });
  button.textContent = 'Book it';
  eventInfo.appendChild(additionalInfo);
  bodyContainer.appendChild(eventInfo);
  bodyContainer.appendChild(button);

  itemContainer.appendChild(imgContainer);

  itemContainer.appendChild(bodyContainer);

  // container.appendChild(itemContainer);
  // console.log(itemContainer);

  return itemContainer;

}

function renderFilteredEvents(filteredEvents, filterOption,search) {
  // console.log(filteredEvents);
  const container = document.getElementById('maincontainer');
  container.innerHTML = '';

  if (!filteredEvents || filteredEvents.length === 0) {
          if(filterOption==='popularity'){
             if(search>10)
            container.innerHTML = `<div style="color:red">No events found. Please refine your search . please enter less than 10</div>`;
           else if (search<=0){
              container.innerHTML = `<div style="color:red" >No events found. Please refine your search . please enter greater than 0</div>`;
            }
            else{
              container.innerHTML = `<div style="color:red" >No events found. Please refine your search . please enter  only numbers between 1 to 10</div>`;
            }
          }else{
    container.innerHTML = `<div style="color:red" >No events found. Please refine your search . please enter proper ${filterOption}</div>`;
          }
  } else {
    filteredEvents.forEach(event => {
      // console.log(event);
      const card = createEventHTML(event);
      console.log(card);
      container.appendChild(card);
    });
  }
}

function createUpcomingEvents(data){
    const container=document.getElementById('maincontainer');
      data.forEach((event) => {
       
        const card=createEventHTML(event);
          
          container.appendChild(card);
         
    });
  
  }
  


  /* date function*/
  window.onload=function(){
  const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');

// Get the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

// Adjust the format to 'YYYY-MM-DD'
if (month < 10) {
  month = `0${month}`;
}
if (day < 10) {
  day = `0${day}`;
}

// Set the minimum start date to the current date
startDateInput.min = `${year}-${month}-${day}`;

// Set the initial value of the start date to the current date
startDateInput.value = startDateInput.min;

endDateInput.min= `${year}-${month}-${day}`;
endDateInput.value=endDateInput.min;

startDateInput.addEventListener('change', function() {
  const selectedDate = new Date(this.value);
  selectedDate.setDate(selectedDate.getDate() + 1); // Set minimum end date to the day after start date
  const nextYear = selectedDate.getFullYear();
  let nextMonth = selectedDate.getMonth() + 1;
  let nextDay = selectedDate.getDate();

  // Adjust the format to 'YYYY-MM-DD'
  if (nextMonth < 10) {
    nextMonth = `0${nextMonth}`;
  }
  if (nextDay < 10) {
    nextDay = `0${nextDay}`;
  }

  // Set the minimum end date based on the selected start date
  endDateInput.min = `${nextYear}-${nextMonth}-${nextDay}`;

  // Check if the current end date is less than the updated minimum end date
  // If so, update the end date value to the new minimum
  const endDate = new Date(endDateInput.value);
  const newMinDate = new Date(endDateInput.min);
  if (endDate < newMinDate) {
    endDateInput.value = endDateInput.min;
  }
});


  }


 function toAction(cardId){
  return 
}
// module.exports = {
//   toAction
// };



