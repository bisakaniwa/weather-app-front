import { Grid, Typography } from "@mui/material";
import './index.css'
import { CadastroContext } from "../../../../context/Meteorologia/context";
import { useContext } from "react";
import { InputMeteorologia } from "../../Inputs";

export function PrecipitacaoUmidadeEVento() {
    const { precipitacao, setPrecipitacao,
        umidade, setUmidade,
        vento, setVento } = useContext(CadastroContext);

    const handlePrecipitacao = (e: any) => {
        setPrecipitacao(e.target.value);
        return precipitacao;
    }

    const handleUmidade = (e: any) => {
        setUmidade(e.target.value);
        return umidade;
    }

    const handleVento = (e: any) => {
        setVento(e.target.value);
        return vento;
    }

    return (
        <Grid container flexDirection="row" className="conteudo-da-linha">
            <Grid item xs={4}>
                <Typography className="titulo-precipitacao"> Precipitação </Typography>
                <InputMeteorologia type="number" onChange={handlePrecipitacao} className="input-precipitacao" />
            </Grid>
            <Grid item xs={3} sx={{ mt: "1%" }}>
                <Typography className="titulo-umidade"> Umidade </Typography>
                <InputMeteorologia type="number" onChange={handleUmidade} className="input-umidade" />
            </Grid>
            <Grid item xs={5}>
                <Typography className="titulo-vento"> Velocidade do vento </Typography>
                <InputMeteorologia type="number" onChange={handleVento} className="input-vento" />
            </Grid>
        </Grid>
    )
}