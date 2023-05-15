import axios from "axios";
import { baseURL } from "../../axios/config";
import { Meteorologia } from "../../interfaces/Meteorologia";

export const useAxios = () => ({

    getPrimeiraPagina: async () => {
        try {
            const response = await axios.get(baseURL);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getSegundaPagina: async () => {
        try {
            const response = await axios.get("baseURL/?page=1");
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    searchCidade: async (cidade: string) => {
        try {
            const response = await axios.get(`baseURL/${cidade}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getTempoHoje: async (cidade: string) => {
        try {
            const response = await axios.get(`baseURL/${cidade}/hoje`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    getTempoSemana: async (cidade: string) => {
        try {
            const response = await axios.get(`baseURL/${cidade}/semana`);
            response.data;
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
            const response = await axios.delete(`baseURL/${id}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
}) 