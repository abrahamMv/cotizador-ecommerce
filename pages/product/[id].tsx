import { useRouter } from "next/router";
import { Layout } from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products";
import { QuotationContext } from "../../context/quotation";
import { Typography, Rating } from "@mui/material";
import { TableBodyPrices } from "../../components/UI";
import { credentials } from "../../utils/credentials";

const index = () => {
  const router = useRouter();
  const { getProductById, product, qualifyProduct } =
    useContext(ProductContext);

  const { getQuotationByUser, myQuotation, addToQuotation } =
    useContext(QuotationContext);

  const [calification, setCalification] = useState<number | null>(5);
  useEffect(() => {
    if (router.query.id) {
      getProductById(router.query.id as string);
    }
  }, [router.query]);

  useEffect(() => {
    getQuotationByUser(credentials.getUser()?.id);
  }, []);

  return (
    <Layout>
      <div className="header_product">
        <div className="header_content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 17,
            }}
          >
            <span>{product?.category.name}</span>
          </div>
          <Typography
            variant="h5"
            sx={{
              color: "white",
            }}
          >
            {product?.name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            <span>
              ({product?.score.califications} calificaciones,{" "}
              {product?.score.score} promedio)
            </span>
          </div>
        </div>
      </div>
      <div className="container_home">
        <div className="content_home">
          <div className="container_info_product">
            <div className="info_left_product">
              <img
                src={product?.photos[0]}
                alt={product?.name}
                className="image_info_product"
              />
              <span
                style={{
                  marginTop: "10px",
                }}
                className="label_product"
              >
                Nombre
              </span>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
                variant="h5"
              >
                {product?.name}
              </Typography>
              <p
                style={{
                  marginBottom: "0px",
                }}
                className="label_product"
              >
                Descripción
              </p>
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                {product?.description}
              </span>
              <Rating
                name="simple-controlled"
                value={calification}
                precision={0.5}
                onChange={(_, newValue) => {
                  setCalification(newValue);
                  qualifyProduct(
                    product?.id.toString() as string,
                    router,
                    newValue
                  );
                }}
              />
            </div>
            <div className="info_right_product">
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                Lista de Precios
              </Typography>
              <table className="table_quotation">
                <thead>
                  <tr>
                    <th>Tienda</th>
                    <th>Precio</th>
                    <th>Disponibilidad</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {product?.prices.length! > 0 &&
                    product?.prices.map((shop) => (
                      <TableBodyPrices
                        myQuotation={myQuotation}
                        key={shop.id}
                        shopInfo={shop}
                        addToQuotation={addToQuotation}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
