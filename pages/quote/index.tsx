import React from "react";
import { Layout } from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import { TableBody } from "../../components/UI";
import { Typography } from "@mui/material";
import { QuotationContext } from "../../context/quotation";

export const RenderTable = () => {
  const { getBestQuotations, bestQuotations } = useContext(QuotationContext);

  useEffect(() => {
    getBestQuotations();
  }, []);
  return (
    <>
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
              <th>Favoritos</th>
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
    </>
  );
};

const index = () => {
  return (
    <Layout>
      <div className="container_home">
        <div className="content_home">{RenderTable()}</div>
      </div>
    </Layout>
  );
};

export default index;
