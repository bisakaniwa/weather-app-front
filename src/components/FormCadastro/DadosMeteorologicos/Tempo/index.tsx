import { Grid, Typography } from "@mui/material";
import './index.css'
import { useCadastroContext } from "../../../../hooks/useCadastroContext";

export const Tempo = () => {
    const [meteorologia, { handleTempoDia, handleTempoNoite }] = useCadastroContext();
    const tempoDia = [
        "Sol", "Sol com nuvens", "Nublado", "Chuva", "Tempestade"
    ]
    const tempoNoite = [
        "Limpo", "Nublado", "Chuva", "Tempestade"
    ]

    return (
        <Grid container flexDirection="row" spacing={2}>
            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-tempo"> Tempo </Typography>
                <select placeholder="Selecione"
                    onChange={handleTempoDia}
                    className="cadastro-tempo"
                >
                    {tempoDia.map(climaDia =>
                        <option className="opcao" value={climaDia}> {climaDia} </option>
                    )}
                </select>
                <select placeholder="Selecione"
                    onChange={handleTempoNoite}
                    className="cadastro-tempo"
                >
                    {tempoNoite.map(climaNoite =>
                        <option className="opcao" value={climaNoite}> {climaNoite} </option>
                    )}
                </select>
            </Grid>

            <Grid item flexDirection="column" xs={6}>
                <Typography className="titulo-turno"> Turno </Typography>
                <input className="cadastro-turno" value="Dia" disabled />
                <input className="cadastro-turno" value="Noite" disabled />
            </Grid>
        </Grid>
    )
}