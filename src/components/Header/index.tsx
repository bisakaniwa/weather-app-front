import { Box, Grid, createTheme } from '@mui/material'
import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box>
      <Grid container xs={10} className='font-properties'>
        <Grid
          item xs={2}
          onClick={() => navigate("/")}
          className="navBar"
        > Home
        </Grid>
        <Grid
          item xs={3}
          onClick={() => navigate("/cadastrar")}
          className="navBar"
        > Cadastrar
        </Grid>
        <Grid
          item xs={2}
          onClick={() => navigate("/listar")}
          className="navBar"
        > Listar
        </Grid>
      </Grid>
    </Box>
  )
}
