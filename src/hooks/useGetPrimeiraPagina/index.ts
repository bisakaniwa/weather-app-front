import { useState } from "react";
import { axiosService } from "../../axios/axiosService";
import { RegistrosListados } from "../../interfaces/RegistrosListados"

type GetPrimeiraPaginaType = {
    registros: RegistrosListados[];
    totalPaginas: number;
    paginaMostrada: number;
}

export const useGetPrimeiraPagina = (): GetPrimeiraPaginaType => {
    const { getPrimeiraPagina } = axiosService();
    const [registros, setRegistros] = useState<RegistrosListados[]>([]);
    const [totalPaginas, setTotalPaginas] = useState<number>(1);
    const [paginaMostrada, setPaginaMostrada] = useState<number>(0);

    const primeiraPagina = async () => {
        const dados = await getPrimeiraPagina();
        setRegistros(dados.content);
        setTotalPaginas(dados.totalPages);
        setPaginaMostrada(dados.pageable.pageNumber);
    }

    return {registros, totalPaginas, paginaMostrada }
}