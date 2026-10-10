let productList = [];
let nextProductId = 1;

function addProduct() {
  const name = document.getElementById("productName").value.trim();
  const manufacturer = document
    .getElementById("productManufacturer")
    .value.trim();
  const category = document.getElementById("productCategory").value.trim();
  const price = Number(document.getElementById("productPrice").value);
  const stock = Number(document.getElementById("productStock").value);

  if (
    !name ||
    !manufacturer ||
    !category ||
    !Number.isFinite(price) ||
    price < 0 ||
    !Number.isInteger(stock) ||
    stock < 0
  ) {
    return;
  }

  const product = {
    id: nextProductId++,
    name,
    manufacturer,
    category,
    price,
    stock,
  };
  productList.push(product);

  displayProducts();
}
