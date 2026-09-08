import products from "../data/products.js";

const getDefaultConfiguration = (product) => {
  return product.configurations[0];
};

const getConfigurationByVariantId = (product, variantId) => {
  return product.configurations.find((c) => c.variantId === variantId);
};

const getAllProducts = () => {
  return products.map((product) => {
    const defaultConfig = getDefaultConfiguration(product);

    return {
      productId: product.productId,
      brandName: product.brandName,
      productName: product.productName,
      price: defaultConfig.price,
      mrp: defaultConfig.mrp,
      defaultImages: defaultConfig.images,
      rating: product.rating,
    };
  });
};

const getProductById = (productId) => {
  return products.find((p) => p.productId === productId);
};

const productModel = {
  getAllProducts,
  getProductById,
  getDefaultConfiguration,
  getConfigurationByVariantId,
};

export default productModel;
