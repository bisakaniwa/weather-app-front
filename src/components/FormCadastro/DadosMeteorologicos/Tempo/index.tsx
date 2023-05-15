import { Grid, Typography } from "@mui/material";
import './index.css'
import { InputMeteorologia } from "../../Inputs";
import { useCadastroContext } from "../../../../hooks/useCadastroContext";

export const Tempo = () => {
    const [meteorologia, { handleTempoDia, handleTempoNoite }] = useCadastroContext();

    return (
        <Grid container flexDirection="row">
            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-tempo"> Tempo </Typography>
                <InputMeteorologia
                    type="text"
                    onChange={handleTempoDia}
                    className="cadastro-tempo"
                />
                <InputMeteorologia
                    type="text"
                    onChange={handleTempoNoite}
                    className="cadastro-tempo"
                />
            </Grid>

            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-turno"> Turno </Typography>
                <input className="cadastro-turno" value="Dia" disabled />
                <input className="cadastro-turno" value="Noite" disabled />
            </Grid>
        </Grid>
    )
}