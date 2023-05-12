import axios from "axios";
import { baseURL } from "../../axios/config";
import { RegistroMeteorologico } from "../../interfaces/RegistroMeteorologico";

export const useHttp = () => ({

    cadastrarRegistro: async (dadosDoCadastro: RegistroMeteorologico) => {
        try {
            const response = await axios.post(baseURL, dadosDoCadastro);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
})