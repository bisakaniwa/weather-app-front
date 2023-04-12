import { Box, Grid } from "@mui/material";
import './styles.css'
import { TempoETurno } from "./TempoETurno";
import { Temperatura } from "./Temperatura";
import { PrecipitacaoUmidadeEVento } from "./PrecipitacaoUmidadeEVento";

export function DadosMeteorologicos() {
    return (
        <Box className="box-data">
            <Grid container flexDirection="row" spacing={2} className="dados-conteudo">
                <Grid item xs={3}>
                    <TempoETurno />
                </Grid>

                <Grid item xs={8}>
                    <Grid container flexDirection="column" sx={{ ml: "10%"}}>
                        <Grid item xs={12} className="temperaturas">
                            <Temperatura />
                        </Grid>
                        <Grid item xs={12}>
                            <PrecipitacaoUmidadeEVento />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}