const baseUrl = "https://www.cristinasyv.com/wp-json/wc/store/products";
const container = document.querySelector(".top-games-wrapper");

async function getProducts() {
  const res = await fetch(baseUrl);
  const json = await res.json();

  console.log(json);
  return json;
}

function makeGames(products) {
  products.forEach((product) => {
    container.innerHTML += `
        <div class="top-game-entry">
            <img
                src="${product.images[0].src}"
                alt="${product.name}"
            />
            <p class="price">${product.prices.price}kr</p>
            <div class="rating">
                &starf; &starf; &starf; &starf; &star;
            </div>
            <a href="details.html?id=${product.id}">LEARN MORE</a>
        </div>
    `;
  });
}

getProducts().then((products) => {
  makeGames(products);
});
