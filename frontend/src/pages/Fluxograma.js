import React from "react";
import { Grid, Button } from "@mui/material";
import Pic3 from '../images/pic3.png';
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Grid container justifyContent="center">
        <Grid item sm={10}>

          <h1>Fluxogramas de Cursos</h1>
          
          <br />
          <hr />
          <p style={{ textAlign: "justify" }}>
            Bem-vindo à nossa seção de Fluxogramas de Cursos! Aqui, você encontrará informações detalhadas sobre a estrutura dos cursos da FGA. Os fluxogramas são mapas visuais que destacam a sequência de disciplinas e atividades ao longo do período do curso.
          </p>
        <p style={{ textAlign: "justify"}}>
            Escolha o curso que deseja visualizar:
        </p>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button component={Link} to="/FluxogramaSoft" variant="contained" color="primary">
                Software
              </Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/FluxogramaAero" variant="contained" color="primary">
                Aeroespacial
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Eletrônica
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Energia
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Automotiva
              </Button>
            </Grid>
          </Grid>

          <img
            src={Pic3}
            alt="imagem"
            style={{ width: "36%", maxWidth: "1000px", margin: "0 auto", display: "block" }}
          />

        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
