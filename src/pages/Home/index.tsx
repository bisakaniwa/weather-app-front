import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PesquisarCidade from "../../components/PesquisarCidade";
import TempoHoje from "../../components/TempoHoje";
import TempoProximosDias from "../../components/TempoProximosDias";

export default function Home() {
    return (
        <Box>
            <Header />
            <TempoHoje />
            <PesquisarCidade />
            <TempoProximosDias />
            <Footer />
        </Box>
    )
}