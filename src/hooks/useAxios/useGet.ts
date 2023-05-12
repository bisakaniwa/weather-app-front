import axios from "axios";
import { baseURL } from "../../axios/config";

export const useGet = () => ({
    
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

    getTempoSemana: async (cidade: string) => {}
})