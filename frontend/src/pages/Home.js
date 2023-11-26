import { Grid } from "@mui/material";
import Pic2 from '../images/pic2.png';

const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={10}>
        <h1>GradeWEB?</h1>
       
        <br />
        <hr />
        <p style={{ textAlign: "justify" }}>
          O GradeWeb simplifica sua jornada acadêmica, proporcionando uma gestão
          eficiente da sua grade curricular na FGA. Com sugestões personalizadas
          de disciplinas, a plataforma otimiza a escolha de cursos, permitindo
          que você defina horários de estudo de acordo com sua disponibilidade.
          Acompanhe seu progresso acadêmico, registre participações em projetos
          de extensão e tenha controle total sobre sua experiência acadêmica. Seja
          mais produtivo e organizado com o GradeWeb, sua ferramenta completa para
          uma trajetória acadêmica de sucesso.
        </p>
        
        <h1>Documentação completa do projeto</h1>
        <p> 
          <br/>
          <a href="https://fga0138-mds-ajax.github.io/2023-2-KEPLER/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
            https://fga0138-mds-ajax.github.io/2023-2-KEPLER/
          </a>
        </p>

        <img
          src={Pic2}
          alt="imagem"
          style={{ width: "36%", maxWidth: "1000px", margin: "0 auto", display: "block" }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
