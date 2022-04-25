// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let booking=JSON.parse(localStorage.getItem("movie"))
let amounts=JSON.parse(localStorage.getItem("amount"))|| [];
document.querySelector("#wallet").innerText=amounts



