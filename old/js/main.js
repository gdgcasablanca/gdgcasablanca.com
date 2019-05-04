const DB_ENDPOINT = 'https://gdgcasablanca-website.firebaseio.com/events.json'

document.addEventListener('DOMContentLoaded', function() {
  onDomContentLoaded()
})

function onDomContentLoaded() {
  const eventCardsDiv = document.querySelector('.event-cards')

  fetch(DB_ENDPOINT)
    .then(response => response.json())
    .then(events => {
      const allEventCards = events.map(evnt => {
        return eventComponent({
          title: evnt.title,
          date: evnt.date,
          timeFrom: evnt.timeFrom,
          timeTo: evnt.timeTo,
          location: evnt.location,
          eventLink: evnt.eventLink,
        })
      })

      appendChildren({ parentNode: eventCardsDiv, children: allEventCards })
    })
}

function eventComponent({
  title,
  date,
  timeFrom,
  timeTo,
  location,
  eventLink,
}) {
  const card = createElement({ element: 'div', className: 'event-card' })

  const heading = createElement({
    element: 'h3',
    className: 'title',
    innerText: title,
  })

  const detailsList = [
    {
      icon: 'calendar_today',
      text: ` ${date}`,
    },
    {
      icon: 'access_time',
      text: ` ${timeFrom} to ${timeTo}`,
    },
    {
      icon: 'pin_drop',
      text: ` ${location}`,
    },
  ]
  const detailsListElements = detailsList.map(list =>
    createListItem({ icon: list.icon, text: list.text })
  )
  const details = createElement({ element: 'ul', className: 'details' })
  appendChildren({ parentNode: details, children: detailsListElements })

  const anchor = createElement({
    element: 'a',
    className: 'more-link',
    innerText: 'Check Event page',
  })
  anchor.setAttribute('href', eventLink)
  anchor.setAttribute('target', '_blank')
  anchor.setAttribute('rel', 'noopener noreferrer')

  appendChildren({ parentNode: card, children: [heading, details, anchor] })

  return card
}

function createElement({ element, className = null, innerText = null }) {
  var domElement = document.createElement(element)
  if (className) domElement.setAttribute('class', className)
  if (innerText) domElement.innerText = innerText

  return domElement
}

function createListItem({ icon, text }) {
  const materialIcon = createElement({
    element: 'i',
    className: 'material-icons',
  })
  materialIcon.innerText = icon

  const textNode = document.createTextNode(text)

  const listItem = createElement({ element: 'li' })

  appendChildren({ parentNode: listItem, children: [materialIcon, textNode] })

  return listItem
}

function appendChildren({ parentNode = null, children = null }) {
  if (!parentNode || !children) return
  children.forEach(child => {
    parentNode.appendChild(child)
  })
}
