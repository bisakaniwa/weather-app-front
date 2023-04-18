import axios from "axios";
import { Meteorologia } from "../../interfaces/MeteorologiaInterface";
import { baseURL } from "../../axios/config";

export const useAxios = () => ({
    getByCity: async () => {
        try {
            const response = await axios.get(`baseURL/cidade`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    post: async (dadosDoCadastro: Meteorologia) => {
        try {
            const response = await axios.post(baseURL, dadosDoCadastro);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
})