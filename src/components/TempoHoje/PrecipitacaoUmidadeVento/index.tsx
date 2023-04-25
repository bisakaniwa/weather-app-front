import { Grid, Typography } from "@mui/material";

type PrecipitacaoUmidadeVentoType = {
    classeCss?: string;
    imagem: string;
    valor: string;
    nomeItem: string;
    decorador: string;
}

export const PrecipitacaoUmidadeVento = ({ classeCss, imagem, valor, decorador, nomeItem }: PrecipitacaoUmidadeVentoType) => {
    return (
        <Grid container flexDirection={"column"} sx={{ color: 'white' }}>
            <Grid item>
                <img src={imagem} className={classeCss} />
            </Grid>
            <Grid item>
                <Typography> {valor}{decorador} </Typography>
            </Grid>
            <Grid item>
                <Typography> {nomeItem} </Typography>
            </Grid>
        </Grid>
    )
}