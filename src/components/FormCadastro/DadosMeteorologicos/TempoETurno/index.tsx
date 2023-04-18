import { Grid, Typography } from "@mui/material";
import './index.css'
import { CadastroContext } from "../../../../context/Meteorologia/context";
import { useContext } from "react";
import { InputMeteorologia } from "../../Inputs";

export function TempoETurno() {
    const {tempo, setTempo, turno, setTurno} = useContext(CadastroContext);

    const handleTempo = (e: any) => {
        setTempo(e.target.value);
        return tempo;
    }

    const handleTurno = (e: any) => {
        setTurno(e.target.value);
        return turno;
    }

    return (
        <Grid container flexDirection="row"> 
            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-tempo"> Tempo </Typography>
                <InputMeteorologia type="text" onChange={handleTempo} className="cadastro-tempo" />
                <input className="cadastro-tempo"/>
            </Grid>

            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-turno"> Turno </Typography>
                <InputMeteorologia type="text" onChange={handleTurno} className="cadastro-turno" />
                <input className="cadastro-turno" />
            </Grid>
        </Grid>
    )
}