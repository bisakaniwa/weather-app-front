import { Box, FormHelperText, Grid } from "@mui/material";
import { CidadeEData } from "./CidadeEData";
import { DadosMeteorologicos } from "./DadosMeteorologicos";
import { useNavigate } from "react-router-dom";
import { axiosService } from "../../axios/axiosService";
import './index.css'
import { useCadastroContext } from "../../hooks/useCadastroContext";
import { useValidarForm } from "../../hooks/useValidarForm";

export const FormRegistro = () => {
  const navigate = useNavigate();
  const { cadastrarRegistro } = axiosService();
  const [meteorologia] = useCadastroContext();
  const validarForm = useValidarForm(meteorologia);
  let valido: boolean = true;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validarForm === false) {
      alert("Algo deu errado! Revise os dados e tente novamente.");
    } else {
      cadastrarRegistro({
        "cidade": meteorologia.cidade,
        "data": meteorologia.data,
        "tempoDia": meteorologia.tempoDia,
        "tempoNoite": meteorologia.tempoNoite,
        "temperaturaMaxima": meteorologia.temperaturaMaxima,
        "temperaturaMinima": meteorologia.temperaturaMinima,
        "precipitacao": meteorologia.precipitacao,
        "umidade": meteorologia.umidade,
        "velocidadeVentos": meteorologia.velocidadeVentos,
      });
      alert("Cadastro feito com sucesso!")
      navigate("/");
    }
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
        <FormHelperText hidden={valido}
          sx={{ color: "white" }}
        > Algo deu errado! Revise e tente novamente. </FormHelperText>
      </Grid>
    </form>
  )
}
