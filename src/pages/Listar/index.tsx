import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Typography } from "@mui/material";
import { PesquisarCidade } from "../../components/PesquisarCidade";
import './index.css'
import { useState, useEffect } from "react";
import { axiosService } from "../../axios/axiosService";
import { RegistrosListados } from "../../interfaces/RegistrosListados";
import { ListaRegistros } from "../../components/ListaRegistros";

export const Listar = () => {
  const [pesquisa, setPesquisa] = useState<string>("");
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
          />
        </Box>

        <ListaRegistros registros={registros} />

      </Box>
      <Footer />
    </Box>
  )
}
