import { Box, FormHelperText, Grid } from "@mui/material";
import { CidadeEData } from "./CidadeEData";
import { DadosMeteorologicos } from "./DadosMeteorologicos";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import './index.css'
import { useCadastroContext } from "../../hooks/useCadastroContext";
import { useValidarForm } from "../../hooks/useValidarForm";

export default function FormCadastro() {
  const navigate = useNavigate();
  const { post } = useAxios();
  const [meteorologia] = useCadastroContext();
  const validarForm = useValidarForm(meteorologia);
  let valido: boolean = true;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validarForm === false) {
      alert("Algo deu errado! Revise os dados e tente novamente.");
    } else {
      post({
        "city": meteorologia.cidade,
        "date": meteorologia.data,
        "windSpeed": meteorologia.vento,
        "maxTemp": meteorologia.temperaturaMaxima,
        "minTemp": meteorologia.temperaturaMinima,
        "humidity": meteorologia.umidade,
        "precipitation": meteorologia.precipitacao,
        "shift": meteorologia.turno,
        "climate": meteorologia.tempo,
      });
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
