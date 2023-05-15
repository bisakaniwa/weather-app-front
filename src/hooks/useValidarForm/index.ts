import { ESTADO_INICIAL } from "../../context/Meteorologia/context"
import { Meteorologia } from "../../interfaces/Meteorologia"

export const useValidarForm = (novoCadastro: Meteorologia): boolean => {
    var valido: boolean = false;

    if (novoCadastro.cidade !== ESTADO_INICIAL.cidade &&
        novoCadastro.data !== ESTADO_INICIAL.data &&
        novoCadastro.tempoDia !== ESTADO_INICIAL.tempoDia &&
        novoCadastro.tempoNoite !== ESTADO_INICIAL.tempoNoite
    ) {
        return valido = true;

    } else if (novoCadastro.cidade && novoCadastro.data &&
        novoCadastro.precipitacao && novoCadastro.temperaturaMaxima &&
        novoCadastro.temperaturaMinima && novoCadastro.tempoDia &&
        novoCadastro.tempoNoite && novoCadastro.umidade && novoCadastro.velocidadeVentos !== undefined
    ) {
        return valido = true;

    } else if (novoCadastro.cidade && novoCadastro.data &&
        novoCadastro.precipitacao && novoCadastro.temperaturaMaxima &&
        novoCadastro.temperaturaMinima && novoCadastro.tempoDia &&
        novoCadastro.tempoNoite && novoCadastro.umidade && novoCadastro.velocidadeVentos !== null
    ) {
        return valido = true;

    } else {
        return valido = false;
    }
}