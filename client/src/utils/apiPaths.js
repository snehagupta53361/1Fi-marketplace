const apiPaths = {
  GET_PRODUCTS: "api/products",

  GET_PRODUCT_BY_ID: (productId) =>
    `api/products/${encodeURIComponent(productId)}`,

  GET_EMI_PLANS: (productId, variantId) => {
    const params = new URLSearchParams({ variantId });
    return `api/products/${encodeURIComponent(productId)}/emi-plans?${params}`;
  },
};

export default apiPaths;
