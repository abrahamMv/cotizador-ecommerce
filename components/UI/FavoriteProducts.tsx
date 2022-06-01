import { Button, Typography } from "@mui/material";
import { GetBestQualificated } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  product: GetBestQualificated;
}
export const FavoriteProducts = ({ product }: Props) => {
  const router = useRouter();

  const handleView = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="content_best_product">
      <img
        src={`${product.photos[0]}`}
        alt={product.name}
        className="image_best_product"
      />
      <Typography
        sx={{
          color: "gray",
        }}
      >
        {product.name}
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: 180,
          height: 35,
          backgroundColor: "#AB4FE9",
          borderRadius: "1rem",
          marginTop: 2,
        }}
        onClick={() => handleView(product.id)}
      >
        Ver Producto
      </Button>
    </div>
  );
};
