import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

const Products = () => {
  const { t } = useTranslation();

  const products = t("products.products", { returnObjects: true });

  return (
    <section
      id="products"
      className="w-full py-8 md:py-10 px-4 md:px-10 bg-gray-100"
    >
      <h1 className="w-full text-2xl md:text-4xl text-black font-bold flex justify-start items-center gap-x-2">
        <img src="/logo1.svg" className="w-8" />
        <span>{t("products.title")}</span>
      </h1>
      <div className="w-full h-[2px] rounded my-6 bg-primary opacity-80"></div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
{
  /* <div
            key={product.id}
            className="flex flex-col justify-between bg-white text-start hover:shadow-lg border-[1px] border-transparent hover:border-gray-300 rounded-sm transition-all duration-500 py-2 px-2"
          >
            <div className="w-full h-60 flex justify-center items-center bg-gray-100  rounded-sm">
              <img
                src={`/product-${product.id}.png`}
                alt={product.name}
                className="max-w-full max-h-full"
              />
            </div>
            <div className="w-full h-[2px] rounded mt-3 bg-gray-200"></div>
            <h3 className="my-1 text-xl font-bold text-start">
              {product.name}
            </h3>
            <p className="mb-2 text-sm text-gray-400 text-start whitespace-pre-wrap">
              {product.description}
            </p>
            <Link
              to={`/product/view/${product.id}`}
              className="w-full inline-block mb-1 py-1 px-4 bg-primary text-center text-white font-normal rounded-sm border-[1px] hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
            >
              {t("products.productDetails")}
            </Link>
          </div> */
}
