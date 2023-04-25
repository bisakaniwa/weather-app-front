import { FormHelperText, Grid, Typography } from '@mui/material'
import './index.css'
import { InputMeteorologia } from '../Inputs'
import { useCadastroContext } from '../../../hooks/useCadastroContext';

export function CidadeEData() {
    const [meteorologia, { handleCidade, handleData }] = useCadastroContext();

    return (
        <Grid container flexDirection="row">
            <Grid item xs={6}>
                <Typography className="field-title"> Cidade </Typography>
                <InputMeteorologia type="text" className="cidade-input"
                    onChange={handleCidade}
                />
            </Grid>

            <Grid item xs={6}>
                <Typography className="field-title"> Data </Typography>
                <InputMeteorologia type="date"
                    onChange={handleData}
                    className="data-input" />
            </Grid>
        </Grid>
    )
}