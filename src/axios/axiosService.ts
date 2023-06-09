import axios from "axios";
import { baseURL } from "./config";
import { Meteorologia } from "../interfaces/Meteorologia";

export const axiosService = () => ({

    getPrimeiraPagina: async () => {
        try {
            const response = await axios.get(baseURL);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getNaoPrimeiraPagina: async (numeroRequisitado: number) => {
        try {
            const response = await axios.get(`${baseURL}?page=${numeroRequisitado}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getPorCidade: async (cidade: string) => {
        try {
            const response = await axios.get(`${baseURL}/${cidade}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getPorCidadeComPagina: async (cidade: string, numeroRequisitado: number) => {
        try {
            const response = await axios.get(`${baseURL}/${cidade}?page=${numeroRequisitado}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getPorId: async (id: number) => {
        try {
            const response = await axios.get(`${baseURL}/recuperar/${id}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getTempoHoje: async (cidade: string) => {
        try {
            const response = await axios.get(`${baseURL}/${cidade}/hoje`);
            return response.data;
        } catch (error) {
            alert(`Ops! Parece que nenhum registro para hoje foi encontrado para ${cidade}...`)
            console.log(error)
        }
    },

    getTempoSemana: async (cidade: string) => {
        try {
            const response = await axios.get(`${baseURL}/${cidade}/semana`);
            return response.data;
        } catch (error) {
            console.log(error)
        } 
    },

    cadastrarRegistro: async (dadosDoCadastro: Meteorologia) => {
        try {
            const response = await axios.post(baseURL, dadosDoCadastro);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    atualizarRegistro: async (dadosAtualizados: Meteorologia) => {
        try {
            const response = await axios.put(baseURL, dadosAtualizados);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    excluirRegistro: async (id: number) => {
        try {
            const response = await axios.delete(`${baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
}) 