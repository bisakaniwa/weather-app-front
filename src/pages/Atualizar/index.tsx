import { Box, Grid, Typography } from "@mui/material"
import Header from "../../components/Header"
import { CadastroProvider } from "../../context/Meteorologia/provider"
import FormCadastro from "../../components/FormCadastro"
import Footer from "../../components/Footer"

export const Atualizar = () => {
    return (
        <Box>
            <Header />

            <CadastroProvider>
                <Box className="box-content">
                    <Grid container flexDirection="column">
                        <Grid item xs={12}>
                            <Typography className="page-title"> Atualização de Registro Meteorológico </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormCadastro />
                        </Grid>
                    </Grid>
                </Box>
            </CadastroProvider>

            <Footer />
        </Box>
    )
}