import { ESTADO_INICIAL } from "../../context/Meteorologia/context";

export const validarData = (data: string): boolean => {
    if (data != ESTADO_INICIAL.data) {
        return true;
    } else if (data != undefined) {
        return true;
    } else if (data != null) {
        return true;
    } else {
        return false;
    }
}