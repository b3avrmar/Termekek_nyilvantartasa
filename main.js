let productList = [];
let nextProductId = 1;
let editingProductId = null;

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
    const modifyButton = document.createElement("button");
    modifyButton.type = "button";
    modifyButton.textContent = "Módosítás";
    modifyButton.addEventListener("click", () => modifyProduct(product.id));
    actionsCell.appendChild(modifyButton);

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

  if (!isValidProduct(name, manufacturer, category, price, stock)) {
    return;
  }

  if (editingProductId === null) {
    productList.push({
      id: nextProductId++,
      name,
      manufacturer,
      category,
      price,
      stock,
    });
  } else {
    const product = productList.find(
      (currentProduct) => currentProduct.id === editingProductId,
    );
    if (!product) {
      cancelModification();
      return;
    }

    Object.assign(product, { name, manufacturer, category, price, stock });
    cancelModification();
  }

  displayProducts();
}

function modifyProduct(productId) {
  const product = productList.find(
    (currentProduct) => currentProduct.id === productId,
  );
  if (!product) {
    return;
  }

  document.getElementById("productName").value = product.name;
  document.getElementById("productManufacturer").value = product.manufacturer;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productStock").value = product.stock;
  editingProductId = productId;

  const addButton = document.getElementById("addProductButton");
  addButton.textContent = "Mentés";
  document.getElementById("cancelModificationButton").hidden = false;
}

function cancelModification() {
  editingProductId = null;
  document.getElementById("productName").value = "";
  document.getElementById("productManufacturer").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productStock").value = "";
  document.getElementById("addProductButton").textContent = "Hozzáadás";
  document.getElementById("cancelModificationButton").hidden = true;
}

function deleteProduct(productId) {
  productList = productList.filter((product) => product.id !== productId);
  if (editingProductId === productId) {
    cancelModification();
  }
  displayProducts();
}

function isValidProduct(name, manufacturer, category, price, stock) {
  return (
    name &&
    manufacturer &&
    category &&
    Number.isFinite(price) &&
    price >= 0 &&
    Number.isInteger(stock) &&
    stock >= 0
  );
}
