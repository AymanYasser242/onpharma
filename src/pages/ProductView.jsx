import React from "react";
import { useParams } from "react-router";
import { useTranslation } from "../hooks/useTranslation";

const ProductView = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const products = t("products.products", { returnObjects: true });
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-secondary/10 rounded-lg p-4">
          <img
            src={`/product-${product.id}.png`}
            alt={product.name}
            className="max-w-full max-h-[400px] object-contain"
          />
        </div>
        <div className="space-y-6 text-start">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {t("products.application")}:
              </h2>
              <p className="text-base text-gray-600 whitespace-pre-wrap max-w-[500px]">
                {product.application}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {t("products.ingredients")}:
              </h2>
              <p className="text-base text-gray-600 whitespace-pre-wrap">
                {product.ingredients}
              </p>
            </div>

            <div>
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                {t("contact.title")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
