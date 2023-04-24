import { ESTADO_INICIAL } from "../../context/Meteorologia/context"

export const useValidarCidade = (cidade: string): boolean => {
    if (cidade !== ESTADO_INICIAL.cidade) {
        return true;
    } else if (cidade !== undefined) {
        return true;
    } else if (cidade !== null) {
        return true;
    } else {
        return false;
    }
}