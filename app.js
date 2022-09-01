console.log("Hi, good afternoon");

let data = [
  {
    id: 321231,
    component: "RYZEN 7",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4ffCrcSHWxc8p93_7BvkWTX6HS_udYlu0Sn7au9a2tnoJ-gXysREAgzt5TQ_tAzSqvlgYz8iHF-h3&usqp=CAc",
    stock: "3",
    price: 1000,
  },
  {
    id: 321232,
    component: "RTX 3080",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-Z-D20zDdE7spju7Ql3E8mkq4i4y2mg5tW_ENtD94fn7bwkZ-6ITSxLhlllYrxkfYrbj-1n2QReA&usqp=CAc",
    stock: "5",
    price: 2000,
  },
  {
    id: 4423,
    component: "CORSAIR CRYSTAL 280",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQg1zXIW1fsBg-X5m7iSOABif-A7Avw2nlNP3I11h89VhI8b5dJ8pBwBilPUjSZOEQR2nTY3GEiPv0&usqp=CAc",
    stock: "2",
    price: 3000,
  },
  {
    id: 4123,
    component: "MOTHER ASUS ROG STRIX",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQM_3mftPHY0F_l1bE_6NJXjU4JHybIq52u4sd-E67HVeuwjpAEi4cIVozuZ2Tm8DRH0ivj_tmWcseKCmlQ67TjU-4VIE4I5LQIa5VBBG7w&usqp=CAc",
    stock: "10",
    price: 5000,
  },
  {
    id: 442125,
    component: "STRIX 850W FUENTE",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRh0BBl1xBfFfmF_73fYcDxRJ8tmMzSxBjl_qBuIMVu6WzMgJe01yHLTocrX9i662orSoMLiFfYQQ8&usqp=CAc",
    stock: "4",
    price: 200,
  },
  {
    id: 12326,
    component: "CORSAIR M.2 1TB",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD2veLNaCZjdr3m-3p3VfE3reROXdYoLu6qiCbcrqsSmOc2ZmDNFxI0QlS7Ddd17Gxdb4mUS8uW3A&usqp=CAc",
    stock: "8",
    price: 400,
  },
  {
    id: 55447,
    component: "RAM T-FORCE 32GB X 2(16GB)",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIfMNQIXXLrV1qQJ8k1KT7pqiIjdDr1_RErHFFqS3WzRpykduKwx1aEtaCnFyWX55YObleYS3qZaI&usqp=CAc",
    stock: "25",
    price: 400,
  },
];

function getComponentes() {
  let cardContainer = document.getElementById("cardContainer");
  data.forEach((item) => {
    cardContainer.innerHTML += `
    <div id=${item.id} class="card-item m-5" style="width: 18rem">
        <img
        src="${item.img}"
        class="card-img-top"
        alt="..."
        />
        <div class="card-body">
        <h5 class="card-title">${item.component}</h5>
        <p class="card-text">
            ${item.price}
        </p>
        <a class="btn btn-primary addBtn" >add to cart</a>
        </div>
    </div>`;
  });
}

function addItem(id) {
    let newItem = data.find(elem => elem.id == id);

    let localData = localStorage.getItem('cart');

    let itemCarrito = localData ? JSON.parse(localData) : [];

    itemCarrito.push(newItem);

    localStorage.setItem("cart", JSON.stringify(itemCarrito));

    console.log(localStorage.getItem('cart'))
}

window.onload = function () {
  getComponentes();

  let cardIds = document.querySelectorAll(".card-item");

  cardIds.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", function () {
      addItem(addToCartButton.id);
    });
  });
};
