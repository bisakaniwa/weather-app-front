import { Grid, IconButton, Typography } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

export type PaginacaoProps = {
    // Página mostrada = página que é recebida do back, inicia com 0
    paginaMostrada: number;
    totalPaginas: number;
    listaPaginaAnterior: () => {};
    listaProximaPagina: () => {};
}

export const Paginacao = ({ totalPaginas, paginaMostrada, listaPaginaAnterior, listaProximaPagina }: PaginacaoProps) => {
    // Página atual = página que está sendo exibida no front, inicia com 1
    const [paginaAtual, setPaginaAtual] = useState<number>(1);
    const [numeroSufixo, setNumeroSufixo] = useState<number>(0);

    // for (paginaAtual; paginaAtual >= 2 && paginaAtual <= totalPaginas;) {
    //     const proxima = paginaAtual + 1;
    //     setNumeroSufixo(proxima);

    //     const anterior = paginaAtual - 1;
    //     setNumeroSufixo(anterior);
    // }

    const handlePaginaAnterior = () => {
        if (paginaAtual === 1) {
            setPaginaAtual(1);

        } else {
            setPaginaAtual(paginaAtual - 1);
            listaPaginaAnterior();
        }
    }

    const handleProximaPagina = () => {
        if (paginaAtual === totalPaginas) {
            setPaginaAtual(totalPaginas);
        } else {
            setPaginaAtual(paginaAtual + 1);
            listaProximaPagina();
        }
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} flexDirection={"row"} sx={{ pr: 22, mt: 1 }}>
            <Grid item>
                <IconButton onClick={handlePaginaAnterior}>
                    <NavigateBeforeIcon sx={{ color: "white" }} />
                </IconButton>
            </Grid>

            <Grid item className="guia">
                <Typography sx={{ color: "white", fontSize: "2.5vh" }}>
                    Página {paginaAtual} de {totalPaginas}
                </Typography>
            </Grid>

            <Grid item>
                <IconButton onClick={handleProximaPagina}>
                    <NavigateNextIcon sx={{ color: "white" }} />
                </IconButton>
            </Grid>
        </Grid>
    )
}