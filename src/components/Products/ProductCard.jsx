import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  return (
    <Card
      isPressable
      shadow="none"
      as={Link}
      to={`/product/view/${product.id}`}
      className="rounded-md p-2"
    >
      <CardBody className="bg-secondary/5 flex justify-center items-center rounded-md">
        <Image
          src={`/product-${product.id}/2.png`}
          alt={product.name}
          className="max-w-full max-h-full h-60"
        />
      </CardBody>
      <CardHeader className="flex flex-col items-start justify-start gap-y-2 px-1">
        <h3 className="w-full text-center text-xl font-bold">{product.name}</h3>
        <p className="text-sm text-gray-400 text-start whitespace-pre-wrap">
          {product.description}
        </p>
      </CardHeader>
      <CardFooter>
        <Button
          fullWidth
          color="primary"
          variant="solid"
          as={Link}
          to={`/product/view/${product.id}`}
          className="rounded-md"
        >
          {t("products.productDetails")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
