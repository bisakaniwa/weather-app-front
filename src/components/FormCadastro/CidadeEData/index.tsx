import { Grid, Typography } from '@mui/material'
import './index.css'
import { InputMeteorologia } from '../Inputs'
import { useContext } from 'react';
import { CadastroContext } from '../../../context/Meteorologia/context';

export function CidadeEData() {
    const { cidade, setCidade, data, setData } = useContext(CadastroContext);

    // const { handleCidade, handleData } = useCadastrarHook();

    const handleCidade = (e: any) => {
        setCidade(e.target.value);
        return cidade;
    }

    const handleData = (e: any) => {
        setData(e.target.value);
        return data;
    }

    // function handleCidade(e: ChangeEvent<HTMLInputElement>) 
    //     setCidade;
    // dispatch({
    //     type: 
    //     e.target.value});
    // // cidadeValue === cidade;


    // function handleData(e: ChangeEvent<HTMLInputElement>) {
    //     setData;
    // dataValue === data;
    // return data;
    // }

    return (
        <Grid container flexDirection="row">
            <Grid item xs={6}>
                <Typography className="field-title"> Cidade </Typography>
                <InputMeteorologia type="text" onChange={handleCidade} className="cidade-input" />
            </Grid>
            <Grid item xs={6}>
                <Typography className="field-title"> Data </Typography>
                <InputMeteorologia type="date" onChange={handleData} className="data-input" />
            </Grid>
        </Grid>
    )
}