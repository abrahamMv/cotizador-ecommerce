import { TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/layout/Layout";
import { ProductContext } from "../../context/products";
import { FavoriteProducts } from "../../components/UI";

const index = () => {
  const { getAllProducts, bestProducts } = useContext(ProductContext);

  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container_home">
        <div className="content_home">
          <div className="head_catalog">
            <div>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Catálogo
              </Typography>
              <span>Estos son nuestros productos.</span>
            </div>
            <TextField
              style={{ width: "35%" }}
              id="standard-basic"
              label="Buscar por Nombre"
              variant="standard"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="container_best_Product">
            {searchValue.length !== 0
              ? bestProducts
                  .filter((e) =>
                    e.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((product) => (
                    <FavoriteProducts key={product.id} product={product} />
                  ))
              : bestProducts.map((product) => (
                  <FavoriteProducts key={product.id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
