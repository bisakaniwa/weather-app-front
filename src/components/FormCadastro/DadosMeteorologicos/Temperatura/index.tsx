import { Grid, Typography } from "@mui/material";
import './index.css'
import { CadastroContext } from "../../../../context/Meteorologia/context";
import { useContext } from "react";
import { InputMeteorologia } from "../../Inputs";

export function Temperatura() {
    const { temperaturaMaxima, setTemperaturaMaxima,
        temperaturaMinima, setTemperaturaMinima } = useContext(CadastroContext);

    const handleTemperaturaMaxima = (e: any) => {
        setTemperaturaMaxima(e.target.value);
        return temperaturaMaxima;
    }

    const handleTemperaturaMinima = (e: any) => {
        setTemperaturaMinima(e.target.value);
        return temperaturaMinima;
    }

    return (
        <Grid container flexDirection="row" sx={{ mb: "5%" }}>
            <Grid item xs={6}>
                <Typography className="titulo-temperatura"> Temperatura Máxima </Typography>
                <InputMeteorologia onChange={handleTemperaturaMaxima} className="cadastro-temperatura" type="number" />
            </Grid>
            <Grid item xs={6} sx={{ pl: "8%" }}>
                <Typography className="titulo-temperatura"> Temperatura Mínima </Typography>
                <InputMeteorologia onChange={handleTemperaturaMinima} className="cadastro-temperatura" type="number" />
            </Grid>
        </Grid>
    )
}