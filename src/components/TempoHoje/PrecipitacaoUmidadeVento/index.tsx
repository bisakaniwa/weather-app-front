import { Grid, Typography } from "@mui/material";

type PrecipitacaoUmidadeVentoType = {
    cssImagem?: string;
    cssValor?: string;
    cssTitulo?: string;
    imagem: string;
    valor: string;
    nomeItem: string;
    decorador: string;
}

export const PrecipitacaoUmidadeVento = ({
    cssImagem, cssValor, cssTitulo, imagem, valor, decorador, nomeItem
}: PrecipitacaoUmidadeVentoType) => {
    return (
        <Grid container flexDirection={"column"} sx={{ color: 'white' }}>
            <Grid item>
                <img src={imagem} className={cssImagem} />
            </Grid>
            <Grid item>
                <Typography className={cssValor}> {valor}{decorador} </Typography>
            </Grid>
            <Grid item>
                <Typography className={cssTitulo}> {nomeItem} </Typography>
            </Grid>
        </Grid>
    )
}