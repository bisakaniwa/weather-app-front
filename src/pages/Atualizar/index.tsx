import { Box, Grid, Typography } from "@mui/material"
import Header from "../../components/Header"
import { FormRegistro } from "../../components/FormCadastro"
import Footer from "../../components/Footer"
import { AtualizacaoProvider } from '../../context/Meteorologia/provider';

export const Atualizar = () => {
    return (
        <Box>
            <Header />

            <AtualizacaoProvider>
                <Box className="box-content">
                    <Grid container flexDirection="column">
                        <Grid item xs={12}>
                            <Typography className="page-title"> Atualização de Registro Meteorológico </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormRegistro />
                        </Grid>
                    </Grid>
                </Box>
            </AtualizacaoProvider>

            <Footer />
        </Box>
    )
}