import { fetchapi } from "./fetchapi.js";
import { API_CATEGORIES } from "./contant.js";
const categories = document.querySelector("#categories");


fetchapi(API_CATEGORIES)
    .then(data => {
        let htmls = data.map(item => {
            return `
                <div class="categories__item">
                    ${item.name}
                    ${item.id}
                </div>
            `;
        })

        // console.log(htmls.join());
        categories.innerHTML = htmls.join("");
    })