import { ESTADO_INICIAL } from "../../context/Meteorologia/context"
import { Meteorologia } from "../../interfaces/MeteorologiaInterface"

export const useValidarForm = (novoCadastro: Meteorologia): boolean => {
    if (novoCadastro != ESTADO_INICIAL) {
        return true;
    } else if (novoCadastro != undefined) {
        return true;
    } else if (novoCadastro != null) {
        return true;
    } else {
        return false;
    }
}