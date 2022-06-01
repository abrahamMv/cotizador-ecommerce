import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { TableBodyUser } from "../../components/UI";
import { QuotationContext } from "../../context/quotation";
import { credentials } from "../../utils";

const index = () => {
  const router = useRouter();
  const { getQuotationByUser, myQuotation } = useContext(QuotationContext);

  useEffect(() => {
    if (router.query.id) {
      getQuotationByUser(router.query.id as string);
    }
  }, [router.query]);

  return (
    <Layout>
      <div className="container_home">
        <div className="content_home">
          <div>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Hola,{" "}
              {!credentials.getUser()
                ? "test"
                : credentials.getUser().firstName +
                  " " +
                  credentials.getUser().lastName}
            </Typography>
            <span>Estas son las cotizaciones que has creado.</span>
            <Typography
              variant="h6"
              sx={{
                color: "gray",
                marginTop: 4,
              }}
            >
              Tus cotizaciones
            </Typography>
          </div>
          <div>
            <table className="table_quotation">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  {/* <th>Creador</th> */}
                  <th>Cantidad de Productos</th>
                  {/* <th>Recomendaciones</th> */}
                </tr>
              </thead>
              <tbody>
                {myQuotation?.length! > 0 &&
                  myQuotation?.map((quotation) => (
                    <TableBodyUser
                      key={quotation.id}
                      infoUserQuotation={quotation}
                    />
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
