import { Grid, Typography } from '@mui/material'
import './index.css'
import { InputMeteorologia } from '../Inputs'
import { useForm } from 'react-hook-form';
import { Meteorologia } from '../../../interfaces/MeteorologiaInterface';
import { useCadastroContext } from '../../../hooks/useCadastroContext';

export function CidadeEData() {
    const [ meteorologia, { handleCidade, handleData }] = useCadastroContext();
    const { register, formState: { errors, isValid } } = useForm<Meteorologia>({ mode: "onChange" })

    return (
        
        <Grid container flexDirection="row">
            <Grid item xs={6}>
                <Typography className="field-title"> Cidade </Typography>
                <InputMeteorologia type="text" className="cidade-input"
                    onChange={handleCidade}
                // {...register("cidade", {
                //     required: {
                //         value: true,
                //         message: "Campo obrigatório."
                //     }
                // })}
                />
                {errors.cidade?.message?.toString()}
            </Grid>
            <Grid item xs={6}>
                <Typography className="field-title"> Data </Typography>
                <InputMeteorologia type="date"
                    onChange={handleData}
                    // {...register("data")}
                    className="data-input" />
            </Grid>
        </Grid>
    )
}