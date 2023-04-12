import { Grid, Typography } from "@mui/material";
import './styles.css'

export function Temperatura() {
    return (
        <Grid container flexDirection="row" sx={{ mb: "5%"}}>
            <Grid item xs={6}>
                <Typography className="titulo-temperatura"> Temperatura Máxima </Typography>
                <input className="cadastro-temperatura" type="number" />
            </Grid>
            <Grid item xs={6} sx={{ pl: "8%"}}>
                <Typography className="titulo-temperatura"> Temperatura Mínima </Typography>
                <input className="cadastro-temperatura" type="number" />
            </Grid>
        </Grid>
    )
}