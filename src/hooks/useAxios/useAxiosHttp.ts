import axios from "axios";
import { baseURL } from "../../axios/config";

export const useAxiosHttp = () => ({

    postRegistro: async (dadosDoCadastro: RegistroMeteorologico) => {
        try {
            const response = await axios.post(baseURL, dadosDoCadastro);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    atualizarRegistro: async (dadosAtualizados: RegistroMeteorologico) => {
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
    }
})