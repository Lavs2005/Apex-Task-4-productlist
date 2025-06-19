const products = [
  { name: "Smartphone", category: "electronics", price: 50000, rating: 4.5, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750087/Croma%20Assets/Communication/Mobiles/Images/261933_0_k3wmbi.png" },
  { name: "T-Shirt", category: "fashion", price: 499, rating: 4.0, image: "https://reigningchamp.com/cdn/shop/files/SS25_RC-1539_SAGE_T-SHIRT_off_1.jpg?v=1741805611&width=1946" },
  { name: "Laptop", category: "electronics", price: 45000, rating: 4.8, image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg" },
  { name: "Novel", category: "books", price: 299, rating: 3.9, image: "https://i0.wp.com/tariqumrani.blog/wp-content/uploads/2024/04/english-novel.webp?fit=1200%2C801&ssl=1" },
  { name: "Jacket", category: "fashion", price: 1299, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuARuC81LwiXdDqd7Uci6YG113bvaxoRxFHg&s" },
  { name: "Headphones", category: "electronics", price: 799, rating: 4.1, image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg?auto=webp&quality=75&width=1024" },
  { name: "Sneakers", category: "fashion", price: 999, rating: 4.2, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs-bb.jpeg?q=90&crop=false" },
  { name: "Cookbook", category: "books", price: 699, rating: 4.0, image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/cookbook3.jpg" },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    productGrid.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>Rating: ${p.rating}</p>
        <p>Category: ${p.category}</p>
      </div>`;
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  // Filter by category
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Filter by price
  const price = priceFilter.value;
  if (price !== "all") {
    if (price === "0-499") filtered = filtered.filter(p => p.price < 500);
    else if (price === "500-999") filtered = filtered.filter(p => p.price >= 500 && p.price < 1000);
    else filtered = filtered.filter(p => p.price >= 1000);
  }

  // Sort
  const sort = sortOption.value;
  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", filterAndSortProducts);
priceFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

// Initial display
displayProducts(products);
