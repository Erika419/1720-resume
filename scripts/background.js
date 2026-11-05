//imports wow function from test.mjs
import {nationalParkImages} from "../modules/test.mjs"

//buttons
document.querySelector("#park1").addEventListener("click", () => {
    nationalParkImages("Wasatch", "nationalpark1.webp")
})

document.querySelector("#park2").addEventListener("click", () => {
    nationalParkImages("Everglades", "nationalpark2.webp");
})

document.querySelector("#park3").addEventListener("click", () => {
    nationalParkImages("Bryce Canyon", "nationalpark3.webp");
})

document.querySelector("#park4").addEventListener("click", () => {
    nationalParkImages("Mammoth", "nationalpark4.webp");
})

//Display on page load

nationalParkImages("Wasatch", "nationalpark1.webp");
nationalParkImages("Everglades", "nationalpark2.webp");
nationalParkImages("Bryce Canyon", "nationalpark3.webp");
nationalParkImages("Mammoth", "nationalpark4.webp");

