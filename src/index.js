let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// destinationURL:
const destinationURL = "http://localhost:3000/toys"

// configurationObject
// const configurationObject = {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(

//   )
// }

// Skeleton function of the cards:
function layout(data) {
  data.forEach(card => {
    const div = document.createElement("div")
    const toyCollection = document.querySelector("#toy-collection")
    div.classList.add("card")
    toyCollection.append(div)

    const h2 = document.createElement("h2")
    h2.textContent = card.name
    div.append(h2)

    const img = document.createElement("img")
    img.src = card.image
    img.classList.add("toy-avatar")
    div.append(img)

    const p = document.createElement("p")
    p.classList.add("like-count")
    p.textContent = card.likes
    div.append(p)

    const btn = document.createElement("button")
    btn.classList.add("like-btn")
    btn.id = card.id
    btn.textContent = "Like ❤️" 
    div.append(btn)

    btn.addEventListener('click', () => {
      let like = 1
      card.likes = p.textContent = card.likes + like
      const cardObj = {
        likes: card.likes
      }

      fetch(`http://localhost:3000/toys/${card.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
        body: JSON.stringify(cardObj)
      })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      })
      
    })
}

function layoutForPost(nameValue, imgValue, data) {
  const div = document.createElement("div")
    const toyCollection = document.querySelector("#toy-collection")
    div.classList.add("card")
    toyCollection.append(div)

    const h2 = document.createElement("h2")
    h2.textContent = nameValue
    div.append(h2)

    const img = document.createElement("img")
    img.src = imgValue
    img.classList.add("toy-avatar")
    div.append(img)    

    const p = document.createElement("p")
    p.textContent = data.likes
    div.append(p)

    const btn = document.createElement("button")
    btn.classList.add("like-btn")
    btn.textContent = "Like ❤️" 
    div.append(btn)
}


// Fetch request (GET) This should render the toys in localhost onto the page
document.addEventListener("DOMContentLoaded", () => {  
return fetch(destinationURL)
  .then((resp) => resp.json())
  .then((data) => {
    layout(data)
  })
})
// POST req targeting the toy form, which renders onto the DOM without reloading
const submitForm = document.querySelector(".submit")

addEventListener("submit", (e) => {
  e.preventDefault()

  const imageForm = document.querySelector('[name="image"]').value
  const nameForm = document.querySelector('[name="name"]').value
  let formValues = {
    name: `${nameForm}`,
    image:`${imageForm}`,
    likes: 0
  }

  fetch(destinationURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    
    },
    body: JSON.stringify(
      formValues
    )
  })
  .then((resp) => resp.json())
  .then((data) => {
    layoutForPost(nameForm, imageForm, data)

 
  })
})
// document.addEventListener("DOMContentLoaded", () => {
//   fetch(destinationURL)
// .then((resp) => resp.json())
// .then((data) = > {
//   layoutForPost()
//   })
// })
function updateLikes() {
  // fetch(`http://localhost:3000/toys/${card.id}`, {
  //   method: 'POST',
  //   headers: 'Content-Type': 'application/json',
  //   body: JSON.stringify()
  // })
  // .then((resp) => resp.json())
  // .then((data) => )
}