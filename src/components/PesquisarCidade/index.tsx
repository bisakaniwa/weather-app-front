import { Box, IconButton, Typography } from "@mui/material";
import './index.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { ChangeEvent } from "react";

type PesquisarCidade = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export const PesquisarCidade = ({onChange, onClick}: PesquisarCidade) => {

  return (
    <Box>
      <Typography className="titulo-pesquise"> Pesquise a cidade </Typography>
      {/* Trocar por um TextField para inserir ícone */}
      <input
        className="pesquisa-cidade"
        onChange={onChange}
      />

      <IconButton
        type="submit"
        className="botao-localizacao"
        sx={{ ml: 2 }}
        onClick={onClick}
      >
        <LocationOnOutlinedIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  )
}
