import { Box, FormHelperText, Grid } from "@mui/material";
import { CidadeEData } from "./CidadeEData";
import { DadosMeteorologicos } from "./DadosMeteorologicos";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import './index.css'
import { CadastroContext } from "../../context/Meteorologia/context";
import { useContext } from 'react'

export default function FormCadastro() {
  const navigate = useNavigate();
  const { post } = useAxios();
  const meteorologia = useContext(CadastroContext);
  // const { handleSubmit } = useForm();
  var erro: boolean = true;

  const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (escondeMensagem === true) {
  //     console.log(meteorologia)
  //     post(meteorologia);
  //     // navigate("/");
  //   } else {
  //     escondeMensagem = false;
  //   }
  }
  console.log(meteorologia)
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
        <FormHelperText hidden={!erro}
          sx={{ color: "white" }}
        > Algo deu errado! Revise e tente novamente. </FormHelperText>
      </Grid>
    </form>
  )
}
