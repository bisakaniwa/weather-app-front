import { Box, Grid, Typography } from "@mui/material";
import './styles.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormCadastro from "../../components/FormCadastro";

export default function Cadastrar() {
    return (
        <Box>
            <Header />
            
            <Box className="box-content">
                <Grid container flexDirection="column">
                    <Grid item xs={12}>
                        <Typography className="page-title"> Cadastro Meteorológico </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormCadastro />
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </Box>
    )

}
