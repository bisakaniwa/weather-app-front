import { useContext, ChangeEvent, useCallback } from "react"
import { CadastroContext } from "../../context/Meteorologia/context"
import { Meteorologia } from "../../interfaces/Meteorologia";

type CadastrarMeteorologia = {
    setCidade: (cidade: string) => void;
    setData: (data: string) => void;
    setTempoDia: (tempoDia: string) => void;
    setTempoNoite: (tempoNoite: string) => void;
    setTemperaturaMaxima: (temperaturaMaxima: number) => void;
    setTemperaturaMinima: (temperaturaMinima: number) => void;
    setPrecipitacao: (precipitacao: number) => void;
    setUmidade: (umidade: number) => void;
    setVelocidadeVentos: (velocidadeVentos: number) => void;

    handleCidade: (e: ChangeEvent<HTMLInputElement>) => void;
    handleData: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTempoDia: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleTempoNoite: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleTemperaturaMaxima: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTemperaturaMinima: (e: ChangeEvent<HTMLInputElement>) => void;
    handlePrecipitacao: (e: ChangeEvent<HTMLInputElement>) => void;
    handleUmidade: (e: ChangeEvent<HTMLInputElement>) => void;
    handleVelocidadeVentos: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useCadastroContext = (): [Meteorologia, CadastrarMeteorologia] => {
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

    const setTempoDia = useCallback((tempoDia: string) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, tempoDia
        }))
    }, [setMeteorologia]);

    const setTempoNoite = useCallback((tempoNoite: string) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, tempoNoite
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

    const setVelocidadeVentos = useCallback((velocidadeVentos: number) => {
        setMeteorologia((estadoAnterior) => ({
            ...estadoAnterior, velocidadeVentos
        }))
    }, [setMeteorologia]);

    const handleCidade = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCidade(e.target.value);
    }, [setCidade]);

    const handleData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const data = new Date(Date.parse(e.target.value)).toISOString();
        setData(data);
    }, [setData]);

    const handleTempoDia = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setTempoDia(e.target.value.toUpperCase());
    }, [setTempoDia]);

    const handleTempoNoite = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setTempoNoite(e.target.value.toUpperCase());
    }, [setTempoNoite]);

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

    const handleVelocidadeVentos = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setVelocidadeVentos(parseInt(e.target.value));
    }, [setVelocidadeVentos]);

    return [
        meteorologia, {
            setCidade,
            setData,
            setTempoDia,
            setTempoNoite,
            setTemperaturaMaxima,
            setTemperaturaMinima,
            setPrecipitacao,
            setUmidade,
            setVelocidadeVentos,
            handleCidade,
            handleData,
            handleTempoDia,
            handleTempoNoite,
            handleTemperaturaMaxima,
            handleTemperaturaMinima,
            handlePrecipitacao,
            handleUmidade,
            handleVelocidadeVentos,
        }
    ]
}