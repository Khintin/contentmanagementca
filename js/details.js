const params = new URLSearchParams(document.location.search);
const gameID = params.get("id");

const baseUrl = `https://www.cristinasyv.com/wp-json/wc/store/products/${gameID}`;

const gameName = document.querySelector(".game-name");
const gameDescription = document.querySelector(".game-description");
const gamePrice = document.querySelector(".price");
const gameImg = document.querySelector(".game-img");

const gameWrapper = document.querySelector(".description");
const errorWrapper = document.querySelector(".invalid-id");

async function getProduct() {
  const res = await fetch(baseUrl);
  const json = await res.json();

  console.log(json);
  return json;
}

function makeGame(product) {
  if (product && product.prices) {
    gameName.innerText = product.name;
    gameDescription.innerHTML = product.short_description;
    gamePrice.innerText = product.prices.currency_prefix + product.prices.price;
    gameImg.src = product.images[0].src;
  } else {
    console.error("Game doesn't exist.");
    gameWrapper.classList.add("d-none");
    errorWrapper.classList.add("d-block");
  }
}

getProduct().then((product) => {
  makeGame(product);
});
