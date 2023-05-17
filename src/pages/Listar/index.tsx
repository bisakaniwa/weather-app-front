import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Grid, Typography } from "@mui/material";
import { PesquisarCidade } from "../../components/PesquisarCidade";
import './index.css'
import { useState, useEffect } from "react";
import { axiosService } from "../../axios/axiosService";
import { Meteorologia } from "../../interfaces/Meteorologia";
import { RegistrosListados } from "../../interfaces/RegistrosListados";

export default function Listar() {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [cidades, setCidades] = useState<Meteorologia[]>([]);
  const [registros, setRegistros] = useState<RegistrosListados[]>([]);
  const { getPrimeiraPagina, getPorCidade } = axiosService();

  useEffect(() => {
    if (pesquisa === "") {
      const aoIniciarOuVazio = async () => {
        const dados = await getPrimeiraPagina();
        setRegistros(dados.content);
      }
      const registrosPagina1 = aoIniciarOuVazio();

    } else {
      const handlePesquisar = async () => {
        const dados = await getPorCidade(pesquisa);
        setRegistros(dados.content);
      }
      const exibirResultados = handlePesquisar();
    }
  }, [pesquisa])

  return (
    <Box className="paginaLista">
      <Header />
      <Box className="container">
        <Box>
          <Typography className="titulo" sx={{ mb: "2%" }}> Lista de Cidades </Typography>
          <PesquisarCidade
            onChange={(e) => setPesquisa(e.target.value)}
            onClick={exibirResultados}
          />
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
            
            {registros.map(registro =>
              <input className="linha" readOnly value={registro.cidade} />
            )}

          </Grid>
        </Box>

      </Box>
      <Footer />
    </Box>
  )
}
