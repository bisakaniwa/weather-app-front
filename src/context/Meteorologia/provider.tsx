import { useState } from "react";
import { CadastroContext } from "./context";

type ProviderProps = {
    children: JSX.Element | JSX.Element[];
}

const hoje = new Date();

export const CadastroProvider = ({ children }: ProviderProps) => {
    const [cidade, setCidade] = useState<string>("");
    const [data, setData] = useState<Date>(hoje);
    const [tempo, setTempo] = useState<string>("");
    const [turno, setTurno] = useState<string>("");
    const [temperaturaMaxima, setTemperaturaMaxima] = useState<number>(0);
    const [temperaturaMinima, setTemperaturaMinima] = useState<number>(0);
    const [precipitacao, setPrecipitacao] = useState<number>(0);
    const [umidade, setUmidade] = useState<number>(0);
    const [vento, setVento] = useState<number>(0);

    // const handlerCidade = ({cidade}: Meteorologia) => {
    //     setCadastro({ ...cadastroMeteorologico, cidade })
    // }

    const meteorologia = {
        cidade, setCidade,
        data, setData,
        tempo, setTempo,
        turno, setTurno,
        temperaturaMaxima, setTemperaturaMaxima,
        temperaturaMinima, setTemperaturaMinima,
        precipitacao, setPrecipitacao,
        umidade, setUmidade,
        vento, setVento,
    }

    return (
        <CadastroContext.Provider value={meteorologia}>
            {children}
        </CadastroContext.Provider>
    )
}