import { useContext, useState } from "react";
import { AtualizacaoContext, CadastroContext, ESTADO_INICIAL } from "./context";
import { Meteorologia } from "../../interfaces/Meteorologia";

type ProviderProps = {
    children: JSX.Element | JSX.Element[];
}

export const CadastroProvider = ({ children }: ProviderProps) => {
    const [meteorologia, setMeteorologia] = useState<Meteorologia>(ESTADO_INICIAL);


    return (
        <CadastroContext.Provider value={{ meteorologia, setMeteorologia }}>
            {children}
        </CadastroContext.Provider>
    )
}

export const AtualizacaoProvider = ({ children }: ProviderProps) => {
    const { atualizacao, setAtualizacao } = useContext(AtualizacaoContext);

    return (
        <AtualizacaoContext.Provider value={{ atualizacao, setAtualizacao }}>
            {children}
        </AtualizacaoContext.Provider>
    )
}