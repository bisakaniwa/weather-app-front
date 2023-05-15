import { useContext, ChangeEvent, useCallback } from "react"
import { CadastroContext } from "../../context/Meteorologia/context"
import { Meteorologia } from "../../interfaces/Meteorologia";

type AtualizarMeteorologia = {
    setCidade: (cidade: string) => void;
    setData: (data: string) => void;
    setTempo: (tempo: string) => void;
    setTurno: (turno: string) => void;
    setTemperaturaMaxima: (temperaturaMaxima: number) => void;
    setTemperaturaMinima: (temperaturaMinima: number) => void;
    setPrecipitacao: (precipitacao: number) => void;
    setUmidade: (umidade: number) => void;
    setVento: (vento: number) => void;

    handleCidade: (e: ChangeEvent<HTMLInputElement>) => void;
    handleData: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTempo: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTurno: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTemperaturaMaxima: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTemperaturaMinima: (e: ChangeEvent<HTMLInputElement>) => void;
    handlePrecipitacao: (e: ChangeEvent<HTMLInputElement>) => void;
    handleUmidade: (e: ChangeEvent<HTMLInputElement>) => void;
    handleVento: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useCadastroContext = (): [Meteorologia, AtualizarMeteorologia] => {
    const { meteorologia, setMeteorologia } = useContext(CadastroContext);

    const setCidade = useCallback((cidade: string) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, cidade
        }))
    }, [setMeteorologia]);

    const setData = useCallback((data: string) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, data
        }))
    }, [setMeteorologia]);

    const setTempo = useCallback((tempo: string) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, tempo
        }))
    }, [setMeteorologia]);

    const setTurno = useCallback((turno: string) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, turno
        }))
    }, [setMeteorologia]);

    const setTemperaturaMaxima = useCallback((temperaturaMaxima: number) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, temperaturaMaxima
        }))
    }, [setMeteorologia]);

    const setTemperaturaMinima = useCallback((temperaturaMinima: number) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, temperaturaMinima
        }))
    }, [setMeteorologia]);

    const setPrecipitacao = useCallback((precipitacao: number) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, precipitacao
        }))
    }, [setMeteorologia]);

    const setUmidade = useCallback((umidade: number) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, umidade
        }))
    }, [setMeteorologia]);

    const setVento = useCallback((vento: number) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, vento
        }))
    }, [setMeteorologia]);

    const handleCidade = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCidade(e.target.value);
    }, [setCidade]);

    const handleData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const data = new Date(Date.parse(e.target.value)).toUTCString();
        setData(data);
    }, [setData]);

    const handleTempo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTempo(e.target.value.toUpperCase());
    }, [setTempo]);

    const handleTurno = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTurno(e.target.value.toUpperCase());
    }, [setTurno]);

    const handleTemperaturaMaxima = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemperaturaMaxima(parseInt(e.target.value));
    }, [setTemperaturaMaxima]);

    const handleTemperaturaMinima = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemperaturaMinima(parseInt(e.target.value));
    }, [setTemperaturaMinima]);

    const handlePrecipitacao = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPrecipitacao(parseInt(e.target.value));
    }, [setPrecipitacao]);

    const handleUmidade = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUmidade(parseInt(e.target.value));
    }, [setUmidade]);

    const handleVento = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setVento(parseInt(e.target.value));
    }, [setVento]);

    return [
        meteorologia, {
            setCidade,
            setData,
            setTempo,
            setTurno,
            setTemperaturaMaxima,
            setTemperaturaMinima,
            setPrecipitacao,
            setUmidade,
            setVento,
            handleCidade,
            handleData,
            handleTempo,
            handleTurno,
            handleTemperaturaMaxima,
            handleTemperaturaMinima,
            handlePrecipitacao,
            handleUmidade,
            handleVento,
        }
    ]
}