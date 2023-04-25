import { ESTADO_INICIAL } from "../../context/Meteorologia/context"
import { Meteorologia } from "../../interfaces/MeteorologiaInterface"

export const useValidarForm = (novoCadastro: Meteorologia): boolean => {
    var valido: boolean = false;

    if (novoCadastro.cidade !== ESTADO_INICIAL.cidade &&
        novoCadastro.data !== ESTADO_INICIAL.data &&
        novoCadastro.tempo !== ESTADO_INICIAL.tempo &&
        novoCadastro.turno !== ESTADO_INICIAL.turno
    ) {
        return valido = true;

    } else if (novoCadastro.cidade && novoCadastro.data &&
        novoCadastro.precipitacao && novoCadastro.temperaturaMaxima &&
        novoCadastro.temperaturaMinima && novoCadastro.tempo &&
        novoCadastro.turno && novoCadastro.umidade && novoCadastro.vento !== undefined
    ) {
        return valido = true;

    } else if (novoCadastro.cidade && novoCadastro.data &&
        novoCadastro.precipitacao && novoCadastro.temperaturaMaxima &&
        novoCadastro.temperaturaMinima && novoCadastro.tempo &&
        novoCadastro.turno && novoCadastro.umidade && novoCadastro.vento !== null
    ) {
        return valido = true;

    } else {
        return valido = false;
    }
}