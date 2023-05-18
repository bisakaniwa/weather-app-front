import { Box, Container, Grid, Typography } from "@mui/material";
import { PesquisarCidade } from "../PesquisarCidade";
import './index.css'
import nublado from '../../styles/icons/cloudy-weather-3311758-2754892 2.png'
import precipitacao from '../../styles/icons/chuva.png'
import umidade from '../../styles/icons/umidade.png'
import vento from '../../styles/icons/vento.png'
import { useEffect, useState } from "react";
import { axiosService } from "../../axios/axiosService";
import { Meteorologia } from "../../interfaces/Meteorologia";
import { PrecipitacaoUmidadeVento } from "./PrecipitacaoUmidadeVento";

export function TempoHoje() {
    const [pesquisa, setPesquisa] = useState<string>("");
    const { getTempoHoje } = axiosService();
    const [hoje, setHoje] = useState<Meteorologia>();

    useEffect(() => {
        const buscaHoje = async () => {
            const data = await getTempoHoje("Avaré");
            setHoje(data);
        }
        const resultadoHoje = buscaHoje();
    }, [])

    const handlePesquisar = async () => {
        const data = await getTempoHoje(pesquisa);
        setHoje(data);
    }

    return (
        <Box>
            <Grid container className="container">
                <Grid item xs={4}>
                    <Typography className="hoje"> Hoje </Typography>
                </Grid>

                <Grid item xs={8} >
                    <PesquisarCidade
                        onChange={(e) => setPesquisa(e.target.value)}
                        onClick={handlePesquisar}
                    />
                </Grid>
            </Grid>

            <Container className="tempoHoje">

                <Grid container flexDirection="row">
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={4}>
                                <img src={nublado} className="imagemTempo" />
                            </Grid>

                            <Grid item xs={8}>
                                <Box sx={{ mt: 7 }}>
                                    <Typography className="maxTemp"> {hoje?.temperaturaMaxima}° </Typography>
                                    <Typography className="barra"><i> / </i></Typography>
                                    <Typography className="minTemp"> {hoje?.temperaturaMinima}° </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container justifyContent={"flex-end"} sx={{ color: 'white' }}>
                            <Grid item xs={4}>
                                <PrecipitacaoUmidadeVento
                                    imagem={precipitacao} cssImagem="imagemPrecipitacao"
                                    valor={hoje?.precipitacao} decorador="%" cssValor="valorPrecipitacao"
                                    nomeItem="Precipitação" cssNome="tituloPrecipitacao"
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <PrecipitacaoUmidadeVento
                                    imagem={umidade} cssImagem="imagemUmidade"
                                    valor={hoje?.umidade} decorador="%" cssValor="valorUmidade"
                                    nomeItem="Umidade" cssNome="tituloUmidade"
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <PrecipitacaoUmidadeVento
                                    imagem={vento} cssImagem="imagemVento"
                                    valor={hoje?.velocidadeVentos} decorador="km/h" cssValor="valorVento"
                                    nomeItem="Velocidade do vento" cssNome="tituloVento"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}