import { Avatar, Box, Grid, Typography } from "@mui/material";
import './styles.css'
import LogoDB from '../../styles/LogoDB.svg'

export default function Footer() {
  return (
    <Box className="footer-content" flexDirection="row">
          <Typography className="db-message"> make with love </Typography>
          <Avatar variant="rounded" src={LogoDB} className="logo" sx={{height: "50%"}}/>
    </Box>
  )
}
