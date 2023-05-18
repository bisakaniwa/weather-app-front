import { Box, Grid, Typography } from "@mui/material";
import './index.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {FormRegistro} from "../../components/FormCadastro";
import { CadastroProvider } from "../../context/Meteorologia/provider";

export const Cadastrar = () => {

    return (
        <Box>
            <Header />

            <CadastroProvider>
                <Box className="box-content">
                    <Grid container flexDirection="column">
                        <Grid item xs={12}>
                            <Typography className="page-title"> Cadastro Meteorológico </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormRegistro />
                        </Grid>
                    </Grid>
                </Box>
            </CadastroProvider>

            <Footer />
        </Box>
    )
}
