import { Grid, Typography } from "@mui/material";

type PrecipitacaoUmidadeVentoType = {
    cssImagem?: string;
    cssValor?: string;
    cssNome?: string;
    imagem: string;
    valor: number | undefined;
    nomeItem: string;
    decorador: string;
}

export const PrecipitacaoUmidadeVento = ({
    cssImagem, cssValor, cssNome, imagem, valor, decorador, nomeItem
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
                <Typography className={cssNome}> {nomeItem} </Typography>
            </Grid>
        </Grid>
    )
}