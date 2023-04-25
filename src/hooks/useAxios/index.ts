import axios from "axios";
import { baseURL } from "../../axios/config";
import { ModelDoBack } from "../../interfaces/ModelDoBack";

export const useAxios = () => ({

    getByCity: async (cidade: string) => {
        try {
            const response = await axios.get(`baseURL/${cidade}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    post: async (dadosDoCadastro: ModelDoBack) => {
        try {
            const response = await axios.post(baseURL, dadosDoCadastro);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}) 