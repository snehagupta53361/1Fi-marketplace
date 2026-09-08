import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Mock Products API running at http://localhost:${PORT}`);
  console.log(`  GET /products`);
  console.log(`  GET /products/:productId`);
  console.log(`  GET /products/:productId/emi-plan`);
  console.log(`  GET /products/:productId/emi-plan?variantId=...`);
});
