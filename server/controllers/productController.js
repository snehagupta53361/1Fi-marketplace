import productModel from "../models/productModel.js";
import { buildEmiOptions } from "../utils/emiCalculator.js";

const getAllProducts = (req, res) => {
  const products = productModel.getAllProducts();
  console.log(products);
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
};

const getProductById = (req, res) => {
  console.log("URL:", req.url);
  console.log("PARAMS:", req.params);
  const { productId } = req.params;
  console.log(productId);
  const product = productModel.getProductById(productId);

  console.log(product);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with id ${productId} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

const getEmiPlans = (req, res) => {
  const { productId } = req.params;
  const { variantId } = req.query;

  const product = productModel.getProductById(productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with id ${productId} not found`,
    });
  }

  const configuration = variantId
    ? productModel.getConfigurationByVariantId(product, variantId)
    : productModel.getDefaultConfiguration(product);

  if (!configuration) {
    return res.status(404).json({
      success: false,
      message: `Variant '${variantId}' not found for product '${productId}'`,
    });
  }

  const emiOptions = buildEmiOptions(configuration.price);

  res.status(200).json({
    success: true,
    data: {
      productId: product.productId,
      variantId: configuration.variantId,
      price: configuration.price,
      emiOptions,
    },
  });
};

const productController = {
  getAllProducts,
  getProductById,
  getEmiPlans,
};

export default productController;
