import { Grid, Typography } from '@mui/material'
import './styles.css'

export function CidadeEData() {
    return (
        <Grid container flexDirection="row">
            <Grid item xs={6}>
                <Typography className="field-title"> Cidade </Typography>
                <input className="cidade-input" />
            </Grid>
            <Grid item xs={6}>
                <Typography className="field-title"> Data </Typography>
                <input type="date" className="data-input" />
            </Grid>
        </Grid>
    )
}