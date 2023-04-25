import { createContext } from "react";
import { Meteorologia } from "../../interfaces/MeteorologiaInterface";

export const ESTADO_INICIAL: Meteorologia = {
    cidade: "",
    data: "",
    tempo: "",
    turno: "",
    temperaturaMaxima: 0,
    temperaturaMinima: 0,
    precipitacao: 0,
    umidade: 0,
    vento: 0,
};

type CadastroMeteorologicoType = {
    meteorologia: Meteorologia,
    setMeteorologia: React.Dispatch<React.SetStateAction<Meteorologia>>;
}

export const CadastroContext = createContext<CadastroMeteorologicoType>({
    meteorologia: ESTADO_INICIAL, 
    setMeteorologia: () => {},
});