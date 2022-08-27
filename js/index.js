const baseUrl = "https://www.cristinasyv.com/wp-json/wc/store/products";
const container = document.querySelector(".top-games-wrapper");
const featuredGameContainers = document.querySelectorAll(".featured-game");

async function getProducts() {
  const res = await fetch(baseUrl);
  const json = await res.json();

  console.log(json);
  return json;
}

function makeGames(products) {
  for (let i = 0; i < 4; i++) {
    const product = products[i];

    if (product) {
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
    }
  }
}

function makeFeaturedGames(products) {
  let featuredGames = [];

  products.forEach((product) => {
    const isFeatured = product.tags.find((tag) => tag.name == "featured")
      ? true
      : false;

    if (isFeatured) {
      featuredGames.push(product);
    }
  });

  for (let i = 0; i < 2; i++) {
    const product = featuredGames[i];

    if (product) {
      featuredGameContainers[i].innerHTML = `
            <div class="featured-game-info">
            <h2>${product.name}</h2>
            <h4>On sale from April 25, 2022</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              saepe exercitationem distinctio ut numquam quo ad iusto, impedit
              inventore possimus repellendus soluta necessitatibus ab perferendis
              non veritatis commodi recusandae cupiditate.<a href="details.html?id=${product.id}" class="link"
                >READ MORE</a
              >
            </p>
            <a href="details.html?id=${product.id}" class="btn">PRE-ORDER</a>
          </div>
          <img src="${product.images[0].src}" alt="${product.name}" />
          `;
    }
  }
}

getProducts().then((products) => {
  makeGames(products);
  makeFeaturedGames(products);
});
