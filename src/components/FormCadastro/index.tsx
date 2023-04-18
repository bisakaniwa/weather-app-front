import { Box, Grid } from "@mui/material";
import { CidadeEData } from "./CidadeEData";
import { DadosMeteorologicos } from "./DadosMeteorologicos";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CadastroContext } from "../../context/Meteorologia/context";
import { useAxios } from "../../hooks/useAxios";
import './index.css'

export default function FormCadastro() {
  const navigate = useNavigate();
  const { post } = useAxios();
  const meteorologia = useContext(CadastroContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    post(meteorologia);
    navigate("/");
  }

  // Refazer usando TextField - exemplo do Google Maps
  return (
    <form onSubmit={handleSubmit}>
      <Grid container flexDirection="column">
        <Grid item xs={12}>
          <CidadeEData />
        </Grid>
        <Grid item xs={12}>
          <DadosMeteorologicos />
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "end" }}>
          <button type="button" className="buttons"> Cancelar </button>
          <button type="submit" className="buttons"
            onClick={handleSubmit}
          > Salvar </button>
        </Box>
      </Grid>
    </form>
  )
}
