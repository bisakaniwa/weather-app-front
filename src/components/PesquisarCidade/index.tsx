import { Box, IconButton, Typography } from "@mui/material";
import './styles.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function PesquisarCidade() {
  return (
    <Box>
      <Typography className="titulo-pesquise"> Pesquise a cidade </Typography>
      {/* Trocar por um TextField para inserir ícone */}
      <input className="pesquisa-cidade" />
      <IconButton className="botao-localizacao" sx={{ ml: 2 }}>
        <LocationOnOutlinedIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  )
}
