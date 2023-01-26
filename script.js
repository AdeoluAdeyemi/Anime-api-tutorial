//Fetch the div element with the id=App
const app = document.querySelector('#root')

//Create an heading h1 tag and set the class to title-heading
const h1_heading = document.createElement('h1')
h1_heading.setAttribute('class','title-heading')
h1_heading.textContent = 'Anime Quotes'

// Create an image element and set the src to logo.png
// const logo = document.createElement('img')
// logo.src = 'assets/img/logo.png'

//Create a div element, and set the class to container
const container = document.createElement('div')
container.setAttribute('class','container')

//Add both div and logo to the div with id=app
app.appendChild(h1_heading)
app.appendChild(container)

// //Create a request variable and assign a new XMLHttpRequest
// var request = new XMLHttpRequest()

// //Open a new connectino, using the GET rquest on the URL endpoint
// request.open('GET','https://animechan.vercel.app/api/quotes', true)

// request.onload = () => {
//     //Begin accessing JSON data here
//     var data = JSON.parse(request.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(quote => {
//       console.log(quote.anime)
//     })
//   } else {
//     console.log('error')
//   }
// }

// //Send Request
// request.send()

//Call API using Fetch Method
fetch('https://animechan.vercel.app/api/quotes', {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})
.then((response) => {
    return response.json()
})
.then((data) => {
    //Begin accessing JSON data here    
    data.forEach(quote => {
        //Create a div with a card class
        const blockquote = document.createElement('blockquote')
        blockquote.setAttribute('class','quote-card')

        //Create an h1 and set the text content of the quote's anime
        const h1 = document.createElement('h1')
        h1.textContent = quote.anime

        //Create a p and set the text content to the quote's text
        const p = document.createElement('p')
        quote.quote = quote.quote.substring(0, 300) //Limit to 300 chars
        p.textContent = `${quote.quote}...` // End with an ellipses
        
        //Create a div and set the text content to the quote's character
        const cite = document.createElement('cite')
        cite.textContent= quote.character

        //Append the blockquote to the container element
        container.appendChild(blockquote)

        //Each card will contain an h1 and a p
        blockquote.appendChild(h1)
        blockquote.appendChild(p)
        blockquote.appendChild(cite)
    })
})
.catch((err) => {
    //Log error on console.
    const errorMessage = alert('Gah, it\'s not working')
})

//Call API using fetch API and async/await
// async function getData(){
//     const response = await fetch('https://ghibliapi.herokuapp.com/films');
//     const data = await response.json()
// }