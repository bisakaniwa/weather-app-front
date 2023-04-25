import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TempoHoje } from "../../components/TempoHoje";
import TempoProximosDias from "../../components/TempoProximosDias";

export default function Home() {
    return (
        <>
            <Header />
            <TempoHoje />
            <TempoProximosDias />
            <Footer />
        </>
    )
}