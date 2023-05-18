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

type MeteorologiaType = {
    meteorologia: Meteorologia,
    setMeteorologia: React.Dispatch<React.SetStateAction<Meteorologia>>,
}

export const CadastroContext = createContext<MeteorologiaType>({
    meteorologia: ESTADO_INICIAL,
    setMeteorologia: () => { },
});

type AtualizacaoMeteorologicaType = {
    atualizacao: Meteorologia,
    setAtualizacao: React.Dispatch<React.SetStateAction<Meteorologia>>,
}

export const AtualizacaoContext = createContext<AtualizacaoMeteorologicaType>({
    atualizacao: {} as Meteorologia,
    setAtualizacao: () => { },
})