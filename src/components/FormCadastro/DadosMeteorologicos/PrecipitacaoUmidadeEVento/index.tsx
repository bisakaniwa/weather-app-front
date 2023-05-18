import { Grid, Typography } from "@mui/material";
import './index.css'
import { InputMeteorologia } from "../../Inputs";
import { useCadastroContext } from "../../../../hooks/useCadastroContext";

export function PrecipitacaoUmidadeEVento() {
    const [meteorologia, { handlePrecipitacao,
        handleUmidade,
        handleVelocidadeVentos }] = useCadastroContext();

    return (
        <Grid container flexDirection="row">
            <Grid item xs={4}>
                <Typography className="titulo-precipitacao"> Precipitação </Typography>
                <InputMeteorologia
                    type="number"
                    onChange={handlePrecipitacao}
                    className="input-precipitacao"
                    // value={meteorologia.precipitacao}
                />
            </Grid>
            <Grid item xs={4} sx={{ mt: "1%" }}>
                <Typography className="titulo-umidade"> Umidade </Typography>
                <InputMeteorologia
                    type="number"
                    onChange={handleUmidade}
                    className="input-umidade"
                    // value={meteorologia.umidade}
                />
            </Grid>
            <Grid item xs={4}>
                <Typography className="titulo-vento"> Velocidade do vento </Typography>
                <InputMeteorologia
                    type="number"
                    onChange={handleVelocidadeVentos}
                    className="input-vento"
                    // value={meteorologia.velocidadeVentos}
                />
            </Grid>
        </Grid>
    )
}