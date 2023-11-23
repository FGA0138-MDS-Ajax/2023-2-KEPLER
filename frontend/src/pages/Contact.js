import { Grid, styled } from "@mui/material";

const AnimatedTableCell = styled('td')({
  padding: '10px',
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.1)', // Ajuste conforme necessário
  },
});

const Contact = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={10}>
        <h1>Integrantes</h1>
        <hr />
        <table>
          <tr>
            <AnimatedTableCell>
              <a href="https://github.com/gustaallves">
                <img
                  src="https://avatars.githubusercontent.com/u/108435814?v=4"
                  width="100px"
                  alt="Foto de Gustavel Alves no GitHub"
                />
                <br />
                <sub>
                  <b>Gustavo</b>
                </sub>
              </a>
            </AnimatedTableCell>
            <AnimatedTableCell>
              <a href="https://github.com/Fenelas">
                <img
                  src="https://avatars.githubusercontent.com/u/101183605?v=4"
                  width="100px"
                  alt="Foto de Gabriel Fenelon no GitHub"
                />
                <br />
                <sub>
                  <b>Fenelas</b>
                </sub>
              </a>
            </AnimatedTableCell>
            <AnimatedTableCell>
              <a href="https://github.com/Bessazs">
                <img
                  src="https://avatars.githubusercontent.com/u/118318004?v=4"
                  width="100px"
                  alt="Foto de Vitor Bessa no GitHub"
                />
                <br />
                <sub>
                  <b>Bessa</b>
                </sub>
              </a>
            </AnimatedTableCell>
            <AnimatedTableCell>
              <a href="https://github.com/JohnnyLopess">
                <img
                  src="https://avatars.githubusercontent.com/u/144946019?v=4"
                  width="100px"
                  alt="Foto de Johnny no GitHub"
                />
                <br />
                <sub>
                  <b>Johnny</b>
                </sub>
              </a>
            </AnimatedTableCell>
            <AnimatedTableCell>
            <a href="https://github.com/VituuDias">
                <img
                  src="https://avatars.githubusercontent.com/u/58560647?v=4"
                  width="100px"
                  alt="Foto de Vitor no GitHub"
                />
                <br />
                <sub>
                  <b>Vitor</b>
                </sub>
              </a>
            </AnimatedTableCell>
            <AnimatedTableCell>
            <a href="https://github.com/maquinaAgricula">
                <img
                  src="https://avatars.githubusercontent.com/u/103219582?v=4"
                  width="100px"
                  alt="Foto de Igor no GitHub"
                />
                <br />
                <sub>
                  <b>Igor Justino</b>
                </sub>
              </a>
            </AnimatedTableCell>
          </tr>
        </table>
      </Grid>
    </Grid>
  );
};

export default Contact;
