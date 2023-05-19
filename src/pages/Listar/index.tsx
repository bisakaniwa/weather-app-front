import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Typography } from "@mui/material";
import { PesquisarCidade } from "../../components/PesquisarCidade";
import './index.css'
import { useState, useEffect } from "react";
import { axiosService } from "../../axios/axiosService";
import { RegistrosListados } from "../../interfaces/RegistrosListados";
import { ListaRegistros } from "../../components/ListaRegistros";
import { Paginacao } from "../../components/ListaRegistros/Paginacao";

export const Listar = () => {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [registros, setRegistros] = useState<RegistrosListados[]>([]);
  const { getPrimeiraPagina, getPorCidade, getNaoPrimeiraPagina, getPorCidadeComPagina } = axiosService();
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  // Página mostrada = página que é recebida do back, inicia com 0
  const [paginaMostrada, setPaginaMostrada] = useState<number>(0);

  const primeiraPagina = async () => {
    const dados = await getPrimeiraPagina();
    setRegistros(dados.content);
    setTotalPaginas(dados.totalPages);
    setPaginaMostrada(dados.pageable.pageNumber);
  }

  useEffect(() => {
    const aoIniciar = primeiraPagina();
  }, []);

  const handlePesquisar = async () => {
    if (pesquisa === "") {
      return primeiraPagina()
    } else {
      const dados = await getPorCidade(pesquisa);
      setRegistros(dados.content);
      setTotalPaginas(dados.totalPages);
      setPaginaMostrada(dados.pageable.pageNumber);
    }
  }

  const handlePaginaAnterior = async () => {
    const numeroRequisitado = paginaMostrada - 1;
    if (pesquisa === "") {
      const dados = await getNaoPrimeiraPagina(numeroRequisitado);
      setRegistros(dados.content);
      setTotalPaginas(dados.totalPages);
      setPaginaMostrada(dados.pageable.pageNumber);
    } else {
      const dados = await getPorCidadeComPagina(pesquisa, numeroRequisitado);
      setRegistros(dados.content);
      setPaginaMostrada(dados.pageable.pageNumber);
    }
  }

  const handleProximaPagina = async () => {
    const numeroRequisitado = paginaMostrada + 1;
    if (pesquisa === "") {
      const dados = await getNaoPrimeiraPagina(numeroRequisitado);
      setRegistros(dados.content);
      setTotalPaginas(dados.totalPages);
      setPaginaMostrada(dados.pageable.pageNumber);
    } else {
      const dados = await getPorCidadeComPagina(pesquisa, numeroRequisitado);
      setRegistros(dados.content);
      setPaginaMostrada(dados.pageable.pageNumber);
    }
  }

  return (
    <Box className="paginaLista">
      <Header />

      <Box className="container">
        <Box>
          <Typography className="titulo" sx={{ mb: "2%" }}> Lista de Cidades </Typography>
          <PesquisarCidade
            onChange={(e) => setPesquisa(e.target.value)}
            onClick={handlePesquisar}
          />
        </Box>

        <ListaRegistros registros={registros} />

        <Paginacao
          totalPaginas={totalPaginas}
          paginaMostrada={paginaMostrada}
          listaPaginaAnterior={handlePaginaAnterior}
          listaProximaPagina={handleProximaPagina}
        />

      </Box>
      <Footer />
    </Box>
  )
}
