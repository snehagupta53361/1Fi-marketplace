import apiClient from "../utils/apiClient";
import apiPaths from "../utils/apiPaths";

/**
 * Fetch the full product list.
 * @returns {Promise<{data: Array}>}
 */
const getProducts = async () => {
  return apiClient(apiPaths.GET_PRODUCTS);
};

/**
 * Fetch a single product by ID.
 * @param {string} productId
 * @returns {Promise<object>}
 */
const getProductById = async (productId) => {
  return apiClient(apiPaths.GET_PRODUCT_BY_ID(productId));
};

/**
 * Fetch EMI plans available for a product variant.
 * @param {string} productId
 * @param {string} variantId
 * @returns {Promise<Array>}
 */
const getEmiPlans = async (productId, variantId) => {
  return apiClient(apiPaths.GET_EMI_PLANS(productId, variantId));
};

export { getProducts, getProductById, getEmiPlans };
