import { createContext } from "react";
import { Meteorologia } from "../../interfaces/MeteorologiaInterface";

const hoje: Date = new Date();

export const ESTADO_INICIAL: Meteorologia = {
    cidade: "",
    data: hoje,
    temperaturaMaxima: 0,
    temperaturaMinima: 0,
    tempo: "",
    turno: "",
    precipitacao: 0,
    umidade: 0,
    vento: 0,
}

const contextoInicial: any = {
    cadastroMeteorologico: ESTADO_INICIAL,
    setCidade: () => null,
    setData: () => null,
    setTemperaturaMaxima: () => null,
    setTemperaturaMinima: () => null,
    setTempo: () => null,
    setTurno: () => null,
    setPrecipitacao: () => null,
    setUmidade: () => null,
    setVento: () => null,
}

export const CadastroContext = createContext(contextoInicial);