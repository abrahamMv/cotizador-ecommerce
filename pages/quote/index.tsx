import React from "react";
import { Layout } from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/products";
import { FavoriteProducts, TableBody } from "../../components/UI";
import { Typography } from "@mui/material";
import { QuotationContext } from "../../context/quotation";
const index = () => {
  const { getBestProductQualificated, bestProducts } =
    useContext(ProductContext);
  const { getBestQuotations, bestQuotations } = useContext(QuotationContext);

  useEffect(() => {
    getBestProductQualificated();
    getBestQuotations();
  }, []);
  return (
    <Layout>
      <div className="container_home">
        <div className="content_home">
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
            {bestProducts?.map((product) => (
              <FavoriteProducts key={product.id} product={product} />
            ))}
          </div>
          <Typography
            variant="h5"
            sx={{
              color: "gray",
              marginTop: 4,
            }}
          >
            Cotizaciones más populares
          </Typography>
          <div>
            <table className="table_quotation">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Creador</th>
                  <th>Cantidad de Productos</th>
                  <th>Recomendaciones</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {bestQuotations.length > 0 &&
                  bestQuotations.map((quotations) => (
                    <TableBody key={quotations.id} quotation={quotations} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
