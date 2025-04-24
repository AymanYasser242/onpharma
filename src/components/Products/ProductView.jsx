import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { useTranslation } from "../../hooks/useTranslation";
import { Button, Chip, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

const ProductView = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = t("products.products", { returnObjects: true });
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  const displayedIngredients = isExpanded
    ? product.ingredients
    : product.ingredients.slice(0, 6);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="relative max-h-[350px] md:max-h-[450px] flex justify-center items-center bg-gray-100 rounded-lg">
          <Image
            src={`/product-${product.id}/${currentImageIndex}.png`}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            className="max-h-[350px] md:max-h-[450px] object-contain bg-gray-100"
          />
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <Button
              isIconOnly
              variant="flat"
              className="bg-white/80 hover:bg-white"
              onPress={prevImage}
            >
              <Icon icon="heroicons:chevron-right" className="w-6 h-6" />
            </Button>
            <Button
              isIconOnly
              variant="flat"
              className="bg-white/80 hover:bg-white"
              onPress={nextImage}
            >
              <Icon icon="heroicons:chevron-left" className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((index) => (
              <Button
                key={index}
                isIconOnly
                size="sm"
                variant={currentImageIndex === index ? "solid" : "flat"}
                className="w-2 h-2 rounded-full"
                onPress={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5 text-start">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex justify-start items-center gap-2">
            {product.tags.map((tag) => (
              // add px-2 to first span child
              <Chip
                key={tag}
                variant="dot"
                color="secondary"
                className="px-2 [&>span]:px-1"
              >
                {tag}
              </Chip>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {t("products.application")}:
              </h2>
              <p className="text-base text-gray-600 whitespace-pre-wrap max-w-[600px]">
                {product.application}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {t("products.ingredients")}:
              </h2>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {displayedIngredients.map((ingredient) => (
                    <Chip key={ingredient} variant="flat">
                      {ingredient}
                    </Chip>
                  ))}
                </div>
                {product.ingredients.length > 6 && (
                  <Button variant="ghost" size="sm" onPress={toggleExpand}>
                    {isExpanded ? t("common.seeLess") : t("common.seeMore")}
                  </Button>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {t("products.orderDescription")}:
              </h2>
              <Button
                showAnchorIcon
                variant="solid"
                color="primary"
                endContent={<Icon name="heroicons:arrow-right" />}
                as={Link}
                to="/contact"
              >
                {t("contact.title")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
