import { createContext } from "react";
import { Meteorologia } from "../../interfaces/Meteorologia";

export const ESTADO_INICIAL: Meteorologia = {
    cidade: "",
    data: "",
    tempoDia: "",
    tempoNoite: "",
    temperaturaMaxima: 0,
    temperaturaMinima: 0,
    precipitacao: 0,
    umidade: 0,
    velocidadeVentos: 0,
};

type CadastroMeteorologicoType = {
    meteorologia: Meteorologia,
    setMeteorologia: React.Dispatch<React.SetStateAction<Meteorologia>>;
}

export const CadastroContext = createContext<CadastroMeteorologicoType>({
    meteorologia: ESTADO_INICIAL, 
    setMeteorologia: () => {},
});