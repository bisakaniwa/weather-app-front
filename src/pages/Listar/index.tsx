import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Grid, Typography } from "@mui/material";
import PesquisarCidade from "../../components/PesquisarCidade";
import './index.css'

export default function Listar() {
  return (
    <>
      <Header />
      <Box className="container">
        <Box className="titulo">
          <Typography sx={{ mb: "2%" }}> Lista de Cidades </Typography>
          <PesquisarCidade />
        </Box>

        <Box>
          <Grid container sx={{ color: 'white', mt: "2%" }}>
            <Grid item xs={5}>
              <Typography sx={{ mb: "2%", ml: "4%" }}> Cidade </Typography>
            </Grid>

            <Grid item xs={3.7}>
              <Typography> Data </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography> Ação </Typography>
            </Grid>

            <input className="linha" readOnly />

          </Grid>
        </Box>

      </Box>
      <Footer />
    </>
  )
}
