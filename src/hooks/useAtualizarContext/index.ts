import { useContext, ChangeEvent, useCallback } from "react"
import { AtualizacaoContext } from "../../context/Meteorologia/context";
import { Meteorologia } from "../../interfaces/Meteorologia";

type AtualizarMeteorologia = {
    setAtualizaCidade: (cidade: string) => void;
    setAtualizaData: (data: string) => void;
    setAtualizaTempoDia: (tempoDia: string) => void;
    setAtualizaTempoNoite: (tempoNoite: string) => void;
    setAtualizaTemperaturaMaxima: (temperaturaMaxima: number) => void;
    setAtualizaTemperaturaMinima: (temperaturaMinima: number) => void;
    setAtualizaPrecipitacao: (precipitacao: number) => void;
    setAtualizaUmidade: (umidade: number) => void;
    setAtualizaVelocidadeVentos: (velocidadeVentos: number) => void;

    handleAtualizaCidade: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAtualizaData: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAtualizaTempoDia: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleAtualizaTempoNoite: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleAtualizaTemperaturaMaxima: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAtualizaTemperaturaMinima: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAtualizaPrecipitacao: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAtualizaUmidade: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAtualizaVelocidadeVentos: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useAtualizarContext = (): [Meteorologia, AtualizarMeteorologia] => {
    const { atualizacao, setAtualizacao } = useContext(AtualizacaoContext);

    const setAtualizaCidade = useCallback((cidade: string) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, cidade
        }))
    }, [setAtualizacao]);

    const setAtualizaData = useCallback((data: string) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, data
        }))
    }, [setAtualizacao]);

    const setAtualizaTempoDia = useCallback((tempoDia: string) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, tempoDia
        }))
    }, [setAtualizacao]);

    const setAtualizaTempoNoite = useCallback((tempoNoite: string) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, tempoNoite
        }))
    }, [setAtualizacao]);

    const setAtualizaTemperaturaMaxima = useCallback((temperaturaMaxima: number) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, temperaturaMaxima
        }))
    }, [setAtualizacao]);

    const setAtualizaTemperaturaMinima = useCallback((temperaturaMinima: number) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, temperaturaMinima
        }))
    }, [setAtualizacao]);

    const setAtualizaPrecipitacao = useCallback((precipitacao: number) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, precipitacao
        }))
    }, [setAtualizacao]);

    const setAtualizaUmidade = useCallback((umidade: number) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, umidade
        }))
    }, [setAtualizacao]);

    const setAtualizaVelocidadeVentos = useCallback((velocidadeVentos: number) => {
        setAtualizacao((atualizacao) => ({
            ...atualizacao, velocidadeVentos
        }))
    }, [setAtualizacao]);

    const handleAtualizaCidade = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAtualizaCidade(e.target.value);
    }, [setAtualizaCidade]);

    const handleAtualizaData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const data = new Date(Date.parse(e.target.value)).toISOString();
        setAtualizaData(data);
    }, [setAtualizaData]);

    const handleAtualizaTempoDia = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setAtualizaTempoDia(e.target.value.toUpperCase());
    }, [setAtualizaTempoDia]);

    const handleAtualizaTempoNoite = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setAtualizaTempoNoite(e.target.value.toUpperCase());
    }, [setAtualizaTempoNoite]);

    const handleAtualizaTemperaturaMaxima = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAtualizaTemperaturaMaxima(parseInt(e.target.value));
    }, [setAtualizaTemperaturaMaxima]);

    const handleAtualizaTemperaturaMinima = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAtualizaTemperaturaMinima(parseInt(e.target.value));
    }, [setAtualizaTemperaturaMinima]);

    const handleAtualizaPrecipitacao = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAtualizaPrecipitacao(parseInt(e.target.value));
    }, [setAtualizaPrecipitacao]);

    const handleAtualizaUmidade = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAtualizaUmidade(parseInt(e.target.value));
    }, [setAtualizaUmidade]);

    const handleAtualizaVelocidadeVentos = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAtualizaVelocidadeVentos(parseInt(e.target.value));
    }, [setAtualizaVelocidadeVentos]);

    return [
        atualizacao, {
            setAtualizaCidade,
            setAtualizaData,
            setAtualizaTempoDia,
            setAtualizaTempoNoite,
            setAtualizaTemperaturaMaxima,
            setAtualizaTemperaturaMinima,
            setAtualizaPrecipitacao,
            setAtualizaUmidade,
            setAtualizaVelocidadeVentos,
            handleAtualizaCidade,
            handleAtualizaData,
            handleAtualizaTempoDia,
            handleAtualizaTempoNoite,
            handleAtualizaTemperaturaMaxima,
            handleAtualizaTemperaturaMinima,
            handleAtualizaPrecipitacao,
            handleAtualizaUmidade,
            handleAtualizaVelocidadeVentos,
        }
    ]
}