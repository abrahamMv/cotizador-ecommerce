import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import { FavoriteProducts } from "../components/UI";
import { ProductContext } from "../context/products";

const Home: NextPage = () => {
  const { getBestProductQualificated, bestProducts } =
    useContext(ProductContext);

  useEffect(() => {
    getBestProductQualificated();
  }, []);

  return (
    <Layout>
      <div className="container_home">
        <div className="content_home">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Bienvenido!
          </Typography>
          <Typography variant="subtitle1">
            Empieza a cotizar tus productos
          </Typography>

          <div className="content_image">
            <img src="grafica1.png" className="image_item" />
          </div>
          <Typography
            variant="h5"
            sx={{
              color: "gray",
              marginTop: 2,
            }}
          >
            Productos Favoritos
          </Typography>
          <div className="container_best_Product">
            {bestProducts.map((product) => (
              <FavoriteProducts key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
