import { Box, Container, Grid, Typography } from "@mui/material";
import { PesquisarCidade } from "../PesquisarCidade";
import './index.css'
import cloudy from '../../styles/icons/cloudy-weather-3311758-2754892 2.png'
import precipitacao from '../../styles/icons/chuva.png'
import umidade from '../../styles/icons/umidade.png'
import vento from '../../styles/icons/vento.png'
import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";

export function TempoHoje() {
    const [pesquisa, setPesquisa] = useState<string>("");
    const { getTempoHoje, getTempoSemana } = useAxios();
    const busca = () => {
        getTempoHoje(pesquisa);
        getTempoSemana(pesquisa);
    }
    const maxTemp: number = 23;
    const minTemp: number = 17;
    const precipitation: number = 5;
    const humidity: number = 3;
    const winds: number = 4;

    return (
        <Box>
            <Grid container className="container">
                <Grid item xs={4}>
                    <Typography className="hoje"> Hoje </Typography>
                </Grid>

                <Grid item xs={8} >
                    <PesquisarCidade
                        onChange={(e) => setPesquisa(e.target.value)}
                        onClick={busca}
                    />
                </Grid>
            </Grid>

            <Container className="tempoHoje">

                <Grid container flexDirection="row">
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={4}>
                                <img src={cloudy} className="imagemTempo" />
                            </Grid>

                            <Grid item xs={8}>
                                <Box sx={{ mt: 7 }}>
                                    <Typography className="maxTemp"> {maxTemp}° </Typography>
                                    <Typography className="barra"><i> / </i></Typography>
                                    <Typography className="minTemp"> {minTemp}° </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container justifyContent={"flex-end"} sx={{ color: 'white' }}>
                            <Grid item xs={4}>
                                <Grid container flexDirection={"column"}>
                                    <Grid item>
                                        <img src={precipitacao} className="imagemPrecipitacao" />
                                    </Grid>
                                    <Grid item>
                                        <Typography className="valorPrecipitacao"> {precipitation}% </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className="tituloPrecipitacao"> Precipitação </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={4}>
                                <Grid container flexDirection={"column"}>
                                    <Grid item>
                                        <img src={umidade} className="imagemUmidade" />
                                    </Grid>
                                    <Grid item>
                                        <Typography className="valorUmidade"> {humidity}% </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className="tituloUmidade"> Umidade </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={4}>
                                <Grid container flexDirection={"column"}>
                                    <Grid item>
                                        <img src={vento} className="imagemVento" />
                                    </Grid>
                                    <Grid item>
                                        <Typography className="valorVento"> {winds}km/h </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className="tituloVento"> Velocidade do vento </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}