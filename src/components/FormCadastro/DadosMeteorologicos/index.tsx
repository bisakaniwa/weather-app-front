import { Box, Grid } from "@mui/material";
import './index.css'
import { Tempo } from "./Tempo";
import { Temperatura } from "./Temperatura";
import { PrecipitacaoUmidadeEVento } from "./PrecipitacaoUmidadeEVento";

export const DadosMeteorologicos = () => {
    return (
        <Box className="box-data">
            <Grid container flexDirection="row" spacing={2} className="dados-conteudo">
                <Grid item xs={4}>
                    <Tempo />
                </Grid>

                <Grid item xs={7.5}>
                    <Grid container flexDirection="column" sx={{ ml: "4%"}}>
                        <Grid item xs={12} className="temperaturas">
                            <Temperatura />
                        </Grid>
                        <Grid item xs={10.5}>
                            <PrecipitacaoUmidadeEVento />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}