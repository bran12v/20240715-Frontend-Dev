/**
 * HOF - higher order functions
 * functions that take a function as a param OR return a function
 */

/**
 * array HOFs
 * 
 * forEach
 * map
 * filter
 * reduce
 */
const artists = ['Circa Survive', 'Morgan Wallen', 'Bach', 'Drake', 'Josh', 'Post-Bologna']

// forEach
artists.forEach(artist => {
    // console.log(artist);
})

// Map
const capitalNames = artists.map(artist => {
    return artist.toUpperCase();
})
// console.log(capitalNames)

// Filter
const only4Letters = artists.filter(artist => {
    return artist.length == 4;
    // return artist == 'Circa Survive'
})
// console.log(only4Letters)

// Reduce
const allArtists = artists.reduce((accumulated, artist) => {
    return accumulated + " " + artist;
})
// console.log(allArtists)

// all of my artists that start with 4 letters to be capitalized in one string
const ex = artists
    .filter(artist => artist.length == 4)
    .map(artist => artist.toUpperCase())
    .reduce((accumulated, artist) => accumulated + " " + artist);

// console.log(ex);

function islength4(artist) {
    return artist.length == 4;
}
const example = artists.filter(islength4);
// console.log(example)

/**
 * Promise - async operation
 * answer to callbacks
 * microtask
 * states:
 * pending
 * resolved
 * rejected
 * settled
 */

// create a promise
const foodOrder = order => {
    return new Promise((resolve, reject) => {
        if (order === "pizza") {
            resolve("Your order of " + order + " is ready");
        }
        else {
            reject("Sorry, we dont have your order: " + order);
        }
        console.log("foodOrder function has finished") // hits here
    })
}
// const promise = foodOrder("pizza");
// promise
//     .then(msg => console.log(msg))// resolve, handle success
//     .catch(err => console.log(err))// reject, handle failure
//     .finally(() => console.log("Promise has been finished")); //always

// ES7 async and await to make it easier to handle promises
/**
 * async is a function keyword that allows a function to perform async operations
 * await makes the function wait until whatever promise it is applied to has finished before continuing
 * async function ex(promise) {
 *  await promise;
 * }
 */

const asyncAndAwait = async () => {
    const msg = await setTimeout(() => {
        console.log("Done.")
    }, 1000)
    console.log(msg);
}
// asyncAndAwait();

const promiseExample = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("done")
            reject();
        }, 1000)
        console.log("hello") // this will run before the promise is resolved or rejected
    })
}
// promiseExample()
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err))

// optional and nullish coallecing operator
// ?. , ??

let str1 = "";
let str2 = str1 ?? "default"; // the nullish opertor allows you to set default values for variables
const user = {
    name: "John",
    address: {
        street: "123 Main St.",
        city: "Nowheresville",
        state: "Tennessee"
    }
}

const street = user.address?.street
console.log(street)


// AJAX - async JS and XML
// XMLHttpRequest, Fetch API

const url = "http://localhost:7172/api/getAllProducts"

function run() {
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE) {
            let status = request.status
            if (status == 0 || status >= 200 && status < 400) {
                console.log(request.response);
            }
            else {
                console.log("ERROR, YOU ARE A BAD DEV")
            }
        } else {
            console.log("ERROR, YOU ARE A BAD DEV")
        }
    };

    request.send()
}

// fetch
function runChuckApi() {
    const chuckNorrisApi = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

    const reqOptions = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "3Ih2ExXrBwGSaRK6dERrdvoGuxIBZqQA"
        }
    }

    fetch(chuckNorrisApi, reqOptions)
        .then(res => res.json())
        .then(data => console.log(data.value))
        .catch(err => console.log(err))
}

// DOM - document object model
var pTag = document.createElement("p");
pTag.innerHTML = "<span style=\"color: red;\">This is a paragraph tag made in JS.</span>"
document.body.appendChild(pTag);
document.getElementById("demo").innerText = "changed"

function change() {
    if (document.getElementById("button").innerText === "changed") {
        document.getElementById("button").innerText = "hello"
    } else {
        document.getElementById("button").innerText = "changed"
    }
}

document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("button").innerText = "loaded";
})