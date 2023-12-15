// RECUPERATION des fichier JSON
async function fetchData() {
  try {
    const response = await fetch('../data/data.json')
    if (!response.ok) {
      throw new Error('Erreur de chargement du fichier JSON')
    }
    const data = await response.json()
    // Fonction ou exécutez du code qui nécessite l'utilisation des données ici
    genererTitres(data)
    genererTexte(data)
    genererStack(data)
  } catch (error) {
    console.error("Erreur lors de l'importation du fichier JSON :", error.message)
  }
}
fetchData()

function genererTitres(data) {
  const nameTitle = document.querySelector('.name-title')
  nameTitle.innerHTML = data.informations_personnelles.nom
  const jobTitle = document.querySelector('.job-title')
  jobTitle.innerHTML = data.informations_personnelles.titre
}

function genererTexte(data) {
  const presentationContainer = document.querySelector('.presentation-paragraphe')
  presentationContainer.innerHTML = data.parcours.presentation
}

function genererStack(data) {
  const stackData = data.stack
  const ulElement = document.querySelector('.list-technologie')
  // Boucle sur chaque élément du tableau stack
  stackData.forEach((item) => {
    const liElement = document.createElement('li')

    //Image et texte pour chaque item
    const imageElement = document.createElement('img')
    imageElement.src = item.logo
    imageElement.alt = item.nom
    const texteElement = document.createElement('p')
    texteElement.textContent = item.nom

    // Ajoutez l'image et le texte à la balise li
    liElement.appendChild(imageElement)
    liElement.appendChild(texteElement)
    // Ajoutez la balise li à la liste ul
    ulElement.appendChild(liElement)
  })
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

toggleSwitch.addEventListener('change', switchTheme, false)

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark') //add this
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light') //add this
  }
}

// Sauvegarde theme

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
}

// Gestion modal

const modals = document.querySelectorAll('.modal')
const cards = document.querySelectorAll('.card')

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    modals[index].showModal()
  })
})

modals.forEach((modal) => {
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.close()
  })
  modal.querySelector('.out').addEventListener('click', () => {
    modal.close()
  })
})
