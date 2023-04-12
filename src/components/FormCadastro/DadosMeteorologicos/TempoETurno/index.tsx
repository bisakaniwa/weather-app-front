import { Grid, Typography } from "@mui/material";
import './styles.css'

export function TempoETurno() {
    return (
        <Grid container flexDirection="row"> 
            <Grid container flexDirection="column" xs={6}>
                <Typography className="titulo-tempo"> Tempo </Typography>
                <input className="cadastro-tempo" />
                <input className="cadastro-tempo"/>
            </Grid>

            <Grid container flexDirection="column" xs={6}>
                <Typography className="titulo-turno"> Turno </Typography>
                <input className="cadastro-turno" />
                <input className="cadastro-turno" />
            </Grid>
        </Grid>
    )
}