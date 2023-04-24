import { Grid, Typography } from "@mui/material";
import './index.css'
import { InputMeteorologia } from "../../Inputs";
import { useCadastroContext } from "../../../../hooks/useCadastroContext";
import { useForm } from "react-hook-form";
import { Meteorologia } from "../../../../interfaces/MeteorologiaInterface";

export function PrecipitacaoUmidadeEVento() {
    const [meteorologia, { handlePrecipitacao,
        handleUmidade,
        handleVento }] = useCadastroContext();

    const { register, formState: { errors } } = useForm<Meteorologia>({ mode: "onChange" })

    return (
        <Grid container flexDirection="row" className="conteudo-da-linha">
            <Grid item xs={4}>
                <Typography className="titulo-precipitacao"> Precipitação </Typography>
                <InputMeteorologia
                    type="number"
                    onChange={handlePrecipitacao}
                    className="input-precipitacao"
                    // ref={register("precipitacao")}
                />
            </Grid>
            <Grid item xs={3} sx={{ mt: "1%" }}>
                <Typography className="titulo-umidade"> Umidade </Typography>
                <InputMeteorologia
                    type="number"
                    onChange={handleUmidade}
                    className="input-umidade"
                    // ref={register("umidade")}
                />
            </Grid>
            <Grid item xs={5}>
                <Typography className="titulo-vento"> Velocidade do vento </Typography>
                <InputMeteorologia
                    type="number"
                    onChange={handleVento}
                    className="input-vento"
                    // ref={register("vento")}
                />
            </Grid>
        </Grid>
    )
}