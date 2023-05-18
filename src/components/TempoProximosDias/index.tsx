import { useEffect, useState } from "react";
import { Meteorologia } from "../../interfaces/Meteorologia";
import { axiosService } from "../../axios/axiosService";

export const TempoProximosDias = () => {
    const { getTempoSemana } = axiosService();
    const [pesquisa, setPesquisa] = useState<string>("");
    const [semana, setSemana] = useState<Meteorologia[]>([]);

    // useEffect(() => {
    //     const buscaSemana = async () => {
    //         const dataSemana = await getTempoSemana(pesquisa);
    //         setSemana(dataSemana.content);
    //     }
    //     const resultadoSemana = buscaSemana();
    // }, [pesquisa])

    return (
        <></>
    )
}