import { useContext, useState } from 'react';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material'
import excluir from '../../styles/icons/delete.png';
import editar from '../../styles/icons/edit.png';
import { RegistrosListados } from '../../interfaces/RegistrosListados';
import { axiosService } from '../../axios/axiosService';
import { useNavigate } from 'react-router-dom';
import { Meteorologia } from '../../interfaces/Meteorologia';
import { AtualizacaoContext } from '../../context/Meteorologia/context';

type ListaRegistrosType = {
    registros: RegistrosListados[],
}

export const ListaRegistros = ({ registros }: ListaRegistrosType) => {
    const { excluirRegistro, getPorId } = axiosService();
    const navigate = useNavigate();
    const [recebido, setRecebido] = useState<Meteorologia>();
    const { atualizacao, setAtualizacao } = useContext(AtualizacaoContext);

    // TO DO: Colocar nas dependências do useEffect quando conseguir usar o useContext, remover navigate
    const handleExcluir = async (id: number) => {
        await excluirRegistro(id);
        navigate("/lista");
    }

    // TO DO: Página de editar recupera as informações pelo useContext
    const handleAtualizar = async (id: number) => {
        const dados: Meteorologia = await getPorId(id);
        setRecebido(dados);
        navigate(`/atualizar/${id}`)
    }

    return (
        <Box>
            <Grid container sx={{ color: 'white', mt: "2%" }}>
                <Grid item xs={5}>
                    <Typography className="tituloLista" sx={{ mb: "2%", ml: "4%" }}> Cidade </Typography>
                </Grid>

                <Grid item xs={3.7}>
                    <Typography className="tituloLista"> Data </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography className="tituloLista"> Ação </Typography>
                </Grid>

                {registros.map(registro =>
                    <Box className="linhaLista">
                        <Grid container height={25} flexDirection={"row"}>
                            <Grid item xs={5.5}>
                                <Typography sx={{ ml: 1 }}> {registro.cidade} </Typography>
                            </Grid>

                            <Grid item xs={4.5}>
                                <Typography sx={{ ml: 4 }}> {registro.data.toString()} </Typography>
                            </Grid>

                            <Grid item xs={1} sx={{ textAlign: "end" }}>
                                <IconButton onClick={() => handleExcluir(registro.id)}>
                                    <Avatar sx={{ width: 25, height: 25 }} src={excluir} />
                                </IconButton>
                            </Grid>

                            <Grid item xs={1}>
                                <IconButton onClick={() => handleAtualizar(registro.id)}>
                                    <Avatar sx={{ width: 25, height: 25 }} src={editar} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                )}

            </Grid>
        </Box>
    )
}