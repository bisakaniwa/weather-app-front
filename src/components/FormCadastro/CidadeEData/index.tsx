import { useEffect } from 'react';
import { Grid, Typography } from '@mui/material'
import './index.css'
import { InputMeteorologia } from '../Inputs'
import { useCadastroContext } from '../../../hooks/useCadastroContext';
import { useAtualizarContext } from '../../../hooks/useAtualizarContext';

export function CidadeEData() {
    const [meteorologia, { handleCidade, handleData }] = useCadastroContext();
    const [atualizacao, { handleAtualizaCidade, handleAtualizaData }] = useAtualizarContext();

    return (
        <Grid container flexDirection="row">
            <Grid item xs={6}>
                <Typography className="field-title"> Cidade </Typography>
                <InputMeteorologia type="text" className="cidade-input"
                    onChange={handleCidade}
                    // value={null ?? atualizacao.cidade}
                />
            </Grid>

            <Grid item xs={6}>
                <Typography className="field-title"> Data </Typography>
                <InputMeteorologia type="date"
                    onChange={handleData}
                    className="data-input"
                    // value={null ?? atualizacao.data.toString()}
                />
            </Grid>
        </Grid>
    )
}