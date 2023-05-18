import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TempoHoje } from "../../components/TempoHoje";
import { TempoProximosDias } from "../../components/TempoProximosDias";

export const Home = () => {
    return (
        <>
            <Header />
            <TempoHoje />
            <TempoProximosDias />
            <Footer />
        </>
    )
}