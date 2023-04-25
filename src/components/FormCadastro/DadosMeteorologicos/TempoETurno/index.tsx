import { Grid, Typography } from "@mui/material";
import './index.css'
import { InputMeteorologia } from "../../Inputs";
import { useCadastroContext } from "../../../../hooks/useCadastroContext";

export function TempoETurno() {
    const [meteorologia, { handleTempo, handleTurno }] = useCadastroContext();

    return (
        <Grid container flexDirection="row">
            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-tempo"> Tempo </Typography>
                <InputMeteorologia
                    type="text"
                    onChange={handleTempo}
                    className="cadastro-tempo"
                />
                <input className="cadastro-tempo" disabled />
            </Grid>

            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-turno"> Turno </Typography>
                <InputMeteorologia
                    type="text"
                    onChange={handleTurno}
                    className="cadastro-turno"
                />
                <input className="cadastro-turno" disabled />
            </Grid>
        </Grid>
    )
}