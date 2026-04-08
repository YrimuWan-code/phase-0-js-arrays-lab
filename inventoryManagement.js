// Write your code here
products =["Laptop", "Phone", "Headphones", "Monitor"];
// Function for the first product details
// let first= products[0];
function logFirstProduct() {
    console.log(products [0]);
}

// Function for adding a product
function addProduct() {
  products.push("Tablet");
}
addProduct(products);

//Function for updating a product name
function updateProductName(newName) {
  products[1] = "Smartphone"
}
updateProductName(products[1]);
console.log(products);

//Function to remove last product from array
function removeLastProduct() {
products.pop();
}
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
