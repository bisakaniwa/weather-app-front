import { Grid, Typography } from "@mui/material";
import './styles.css'

export function PrecipitacaoUmidadeEVento() {
    return (
        <Grid container flexDirection="row" xs={12} className="conteudo-da-linha">
            <Grid item xs={4}>
                <Typography className="titulo-precipitacao"> Precipitação </Typography>
                <input type="number" className="input-precipitacao" />
            </Grid>
            <Grid item xs={3} sx={{ mt: "1%"}}>
                <Typography className="titulo-umidade"> Umidade </Typography>
                <input type="number" className="input-umidade" />
            </Grid>
            <Grid item xs={5}>
                <Typography className="titulo-vento"> Velocidade do vento </Typography>
                <input type="number" className="input-vento" />
            </Grid>
        </Grid>
    )
}