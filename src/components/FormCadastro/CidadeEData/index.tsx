import { FormHelperText, Grid, Typography } from '@mui/material'
import './index.css'
import { InputMeteorologia } from '../Inputs'
import { useForm } from 'react-hook-form';
import { Meteorologia } from '../../../interfaces/MeteorologiaInterface';
import { useCadastroContext } from '../../../hooks/useCadastroContext';
import { ESTADO_INICIAL } from '../../../context/Meteorologia/context';

export function CidadeEData() {
    const [meteorologia, { handleCidade, handleData }] = useCadastroContext();
    const { register, formState: { errors } } = useForm<Meteorologia>({ mode: "onChange", defaultValues: ESTADO_INICIAL })
    const MENSAGEM_ERRO: string = "Campo obrigatório."

    return (
        <Grid container flexDirection="row">
            <Grid item xs={6}>
                <Typography className="field-title"> Cidade </Typography>
                <InputMeteorologia type="text" className="cidade-input"
                    onChange={handleCidade}
                // ref={register("cidade", {
                //     required: {
                //         value: true,
                //         message: "Campo obrigatório."
                //     },
                // })}
                />
                <FormHelperText hidden={false}> {MENSAGEM_ERRO} </FormHelperText>
            </Grid>
            <Grid item xs={6}>
                <Typography className="field-title"> Data </Typography>
                <InputMeteorologia type="date"
                    onChange={handleData}
                    // ref={register("data", {
                    //     required: {
                    //         value: true,
                    //         message: "Campo obrigatório;"
                    //     }
                    // })}
                    className="data-input" />
            </Grid>
        </Grid>
    )
}