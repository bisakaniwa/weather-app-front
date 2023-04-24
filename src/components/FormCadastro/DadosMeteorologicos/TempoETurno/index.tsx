import { Grid, Typography } from "@mui/material";
import './index.css'
import { InputMeteorologia } from "../../Inputs";
import { useCadastroContext } from "../../../../hooks/useCadastroContext";
import { useForm } from "react-hook-form";
import { Meteorologia } from "../../../../interfaces/MeteorologiaInterface";

export function TempoETurno() {
    const [meteorologia, { handleTempo, handleTurno }] = useCadastroContext();
    const { register, formState: { errors } } = useForm<Meteorologia>({ mode: "onChange" })

    return (
        <Grid container flexDirection="row">
            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-tempo"> Tempo </Typography>
                <InputMeteorologia
                    type="text"
                    onChange={handleTempo}
                    className="cadastro-tempo"
                    // ref={register("tempo")}
                />
                <input className="cadastro-tempo" />
            </Grid>

            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-turno"> Turno </Typography>
                <InputMeteorologia
                    type="text"
                    onChange={handleTurno}
                    className="cadastro-turno"
                    // ref={register("turno")}
                />
                <input className="cadastro-turno" />
            </Grid>
        </Grid>
    )
}