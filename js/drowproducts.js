import { fetchapi } from "./fetchapi.js";
import { API_PRODUCTS } from "./contant.js";
import { parans } from "./varnable.js";
const products = document.querySelector("#products");

export const drowproducts = () => {
                console.log(parans);


                fetchapi( `${API_PRODUCTS}?q=${parans.q}`)
                .then(data => {
                    let htmls = data.map(item => {
                        return `
                            <div class="products__item">
                                <div class="products__image">
                                    <img src="${item.thumbnail}" alt="${item.title}">
                                    <div class="products__persent">
                                        ${item.discountPercentage}%
                                    </div>
                                </div>
                                <div class="products__content">
                                    <h3 class="products__title">
                                        ${item.title}
                                    </h3>
                                    <div class="products__meta">
                                        <div class="products__price">
                                            ${item.price}$
                                        </div>
     
                                        <div class="products__stock">
                                            Còn lại: ${item.stock} sp
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    })

                    // console.log(htmls.join());
                    products.innerHTML = htmls.join("");
                })
}
