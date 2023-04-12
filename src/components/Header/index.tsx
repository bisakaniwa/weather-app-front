import { Box, Grid } from '@mui/material'
import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box className="box-navbar">
      <Grid container xs={7} className='font-properties'>
        <Grid
          item xs={2}
          onClick={() => navigate("/")}
          className="navbar home"
        > Home
        </Grid>
        <Grid
          item xs={3}
          onClick={() => navigate("/cadastrar")}
          className="navbar"
        > Cadastrar
        </Grid>
        <Grid
          item xs={2}
          onClick={() => navigate("/listar")}
          className="navbar"
        > Listar
        </Grid>
      </Grid>
    </Box>
  )
}
