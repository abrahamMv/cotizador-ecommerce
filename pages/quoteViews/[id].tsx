import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { QuotationContext } from "../../context/quotation";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { TableBodyProducts } from "../../components/UI";

const index = () => {
  const { getQuotationBYId, quotation } = useContext(QuotationContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      getQuotationBYId(router.query.id as string);
    }
  }, [router.query]);

  return (
    <Layout>
      <div className="container_home">
        <div className="content_home">
          <div className="container_quotation_views">
            <div>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Nombre de la Cotización
              </Typography>
              <Typography variant="h6">{quotation?.name}</Typography>
              <span
                style={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                Creada por:{" "}
                {quotation?.user.firstName + " " + quotation?.user.lastName}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: 150,
                  height: 35,
                  backgroundColor: "#8367C7",
                  borderRadius: "1rem",
                  marginTop: 2,
                  fontSize: 10,
                }}
              >
                <CheckCircleOutlinedIcon />
                Dar favorito
              </Button>
              <span
                style={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                69 Favoritos
              </span>
            </div>
          </div>
          <Typography
            variant="h6"
            sx={{
              color: "gray",
              marginTop: 4,
            }}
          >
            Productos en esta Lista
          </Typography>
          <div>
            <table className="table_quotation">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tienda</th>
                  <th>Precio</th>
                  <th>Agregado</th>
                </tr>
              </thead>
              <tbody>
                {quotation?.products.length! > 0 &&
                  quotation?.products.map((q) => (
                    <TableBodyProducts key={q.id} productInfo={q} />
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
