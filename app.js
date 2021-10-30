async function getFortunes() {
    const url = 'https://helloacm.com/api/fortune/';
    // get request
    const response = await fetch(url);
    // get json data from response
    const fortune = await response.json();
    // grab h3 tag by id="display" and set content to the fortune data
    document.getElementById("display").innerHTML = fortune;
}
// grab button
const element = document.getElementById("fortune");
// always check if button is clicked, if it is call the function
element.addEventListener("click", () => {
    getFortunes();
});










