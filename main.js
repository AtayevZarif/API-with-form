let main = document.querySelector("main")
let sect = document.getElementsByTagName("section")
let divs = document.getElementsByTagName("div")
let form = document.querySelector("form")
let input = document.getElementsByTagName("input")
let submit = document.querySelector("button")
let span = document.getElementsByTagName("span")
let text = document.getElementsByTagName("h1")

for (let i = 0; i < 2; i++) {
    text[i].style.display = "none"
}


let myFunction = (e) => {
    e.preventDefault()
    
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => getUsersFunction(data))
    .catch(err => console.error(err))
    
    let getUsersFunction = (data) =>{
        sect[0].innerHTML = ""
        for (let i = 0; i < 2; i++) {
            text[i].style.display = "block"
            span[i].innerHTML = input[i].value
        }

        for (let i = 0; i < input[0].value; i++) {
            let dataRandom = data.users[Math.trunc(Math.random() * data.users.length)]
            let container = document.createElement("div")
            let id = document.createElement("h2")
            let name = document.createElement("h2")
            let age = document.createElement("h2")
            let username = document.createElement("h2")
            let email = document.createElement("h3")
            
            id.innerHTML = `Id: ${dataRandom.id}`
            name.innerHTML = `Name: ${dataRandom.firstName} ${data.lastName}`
            age.innerHTML = `Age: ${dataRandom.age}`
            username.innerHTML = `Username: ${dataRandom.username}`
            email.innerHTML = `Email: ${dataRandom.email}`
            
            container.append(id, name, age, username, email)
            sect[0].appendChild(container)
            

            if (dataRandom.age >= input[1].value) {
                sect[1].appendChild(container.cloneNode(true))
            }
        }
    }
}

form.addEventListener("submit", myFunction)