const latitude1 = document.querySelector(".contents .form-container .latitude1")
const longitude1 = document.querySelector(".contents .form-container .longitude1")

const latitude2 = document.querySelector(".contents .form-container .latitude2")
const longitude2 = document.querySelector(".contents .form-container .longitude2")

const latitude3 = document.querySelector(".contents .form-container .latitude3")
const longitude3 = document.querySelector(".contents .form-container .longitude3")

const latitude4 = document.querySelector(".contents .form-container .latitude4")
const longitude4 = document.querySelector(".contents .form-container .longitude4")


const btn = document.querySelector(".btn")




btn.addEventListener("click", () => {
    var array = []

    let lat1 = latitude1.value
    let long1 = longitude1.value
    console.log(lat1, long1)
    array[0] = lat1
    array[1] = long1

    let lat2 = latitude2.value
    let long2 = longitude2.value
    console.log(lat2, long2)
    array[2] = lat2
    array[3] = long2

    let lat3 = latitude3.value
    let long3 = longitude3.value
    console.log(lat3, long3)
    array[4] = lat3
    array[5] = long3

    let lat4 = latitude4.value
    let long4 = longitude4.value
    console.log(lat4, long4)
    array[6] = lat4
    array[7] = long4
    alert(array[7])

})

var fs = require("fs");

var array = 3

fs.writeFile("./coordinates.json", JSON.stringify(array, null, 4), (err) => {
    if (err) { console.error(err); return; };
    console.log("File has been created");
});



