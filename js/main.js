const DB_ENDPOINT = 'https://gdgcasablanca-website.firebaseio.com/events.json'


function onDomContentLoaded () {
  const eventCardsDiv = document.querySelector('.event-cards')

  fetch(DB_ENDPOINT)
    .then(response => response.json())
    .then(events => {
      const allEventCards = events.map(evnt => {
        const title = evnt.title
        const date = evnt.date
        const timeFrom = evnt.timeFrom
        const timeTo = evnt.timeTo
        const location = evnt.location
        const eventLink = evnt.eventLink

        return eventComponent({title, date, timeFrom, timeTo, location, eventLink})
      })
      eventCardsDiv.innerHTML = allEventCards
    })
}

function eventComponent ({
  title,
  date,
  timeFrom,
  timeTo,
  location,
  eventLink
}) {
  return `
  <div class="event-card">
    <h3 class="title">${title}</h3>
    <ul class="details">
      <li><i class="material-icons">calendar_today</i> ${date}</li>
      <li><i class="material-icons">access_time</i> ${timeFrom} to ${timeTo}</li>
      <li><i class="material-icons">pin_drop</i> ${location}</li>
    </ul>
    <a class="more-link" href="${eventLink}" target="_blank" rel="noopener noreferrer">Check Event page</a>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  onDomContentLoaded()
});
