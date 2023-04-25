import { Grid, Typography } from "@mui/material";
import './index.css'
import { InputMeteorologia } from "../../Inputs";
import { useCadastroContext } from "../../../../hooks/useCadastroContext";

export function Temperatura() {
    const [meteorologia, { handleTemperaturaMaxima,
        handleTemperaturaMinima }] = useCadastroContext();

    return (
        <Grid container flexDirection="row" sx={{ mb: "5%" }}>
            <Grid item xs={6}>
                <Typography className="titulo-temperatura"> Temperatura Máxima </Typography>
                <InputMeteorologia
                    onChange={handleTemperaturaMaxima}
                    className="cadastro-temperatura"
                    type="number"
                />
            </Grid>
            <Grid item xs={6} sx={{ pl: "8%" }}>
                <Typography className="titulo-temperatura"> Temperatura Mínima </Typography>
                <InputMeteorologia
                    onChange={handleTemperaturaMinima}
                    className="cadastro-temperatura"
                    type="number"
                />
            </Grid>
        </Grid>
    )
}