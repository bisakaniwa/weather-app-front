import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PesquisarCidade from "../../components/PesquisarCidade";
import { Hoje } from "../../components/TempoHoje";
import { ProximosDias } from "../../components/TempoProximosDias";

export default function Home() {
    return (
        <Box>
            <Header />
            <Hoje />
            <PesquisarCidade />
            <ProximosDias />
            <Footer />
        </Box>
    )
}