const products = [
  { id: "p1", name: "Widget Pro" },
  { id: "p2", name: "Gadget Max" },
  { id: "p3", name: "Doohickey 3000" },
  { id: "p4", name: "MegaTool Ultra" },
  { id: "p5", name: "SmartWidget Lite" },
];

window.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
