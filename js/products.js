            
import { drowproducts } from "./drowproducts.js";
import { parans } from "./varnable.js";
drowproducts();


const inputsearch = document.querySelector("#search input");
const buttonsearch = document.querySelector("#search button");
buttonsearch.addEventListener("click", function() {
    parans.q = inputsearch.value;
    drowproducts();
});