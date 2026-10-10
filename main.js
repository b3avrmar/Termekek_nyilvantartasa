let productList = [];
let nextProductId = 1;

function displayProducts() {
  const productTable = document.getElementById("productTableBody");
  productTable.replaceChildren();

  for (const product of productList) {
    const row = document.createElement("tr");

    for (const value of [
      product.name,
      product.manufacturer,
      product.category,
      product.price,
      product.stock,
    ]) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    }

    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Törlés";
    deleteButton.addEventListener("click", () => deleteProduct(product.id));
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);
    productTable.appendChild(row);
  }
}

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

function deleteProduct(productId) {
  productList = productList.filter((product) => product.id !== productId);
  displayProducts();
}
