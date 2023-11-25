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
        <img
          src={Pic2}
          alt="imagem"
          style={{ width: "36%", maxWidth: "1000px", margin: "0 auto", display: "block" }}
        />
        {/* Defina o maxWidth com o valor desejado para ajustar o tamanho da imagem */}
      </Grid>
    </Grid>
  );
};

export default Home;
