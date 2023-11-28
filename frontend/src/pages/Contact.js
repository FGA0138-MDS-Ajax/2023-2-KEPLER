import React from "react";
import { Grid, styled } from "@mui/material";

const AnimatedTableCell = styled('td')({
  padding: '10px',
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.1)',
  },

  '& a': {
    color: 'black',
    textDecoration: 'none',
    textAlign: 'center',
  },

  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },

  '& sub': {
    display: 'block',
    marginTop: '5px',
    textAlign: 'center',
  },
});

const profiles = [
  {
    name: "Gustavo",
    github: "https://github.com/gustaallves",
    avatar: "https://avatars.githubusercontent.com/u/108435814?v=4",
  },
  {
    name: "Fenelas",
    github: "https://github.com/Fenelas",
    avatar: "https://avatars.githubusercontent.com/u/101183605?v=4",
  },
  {
    name: "Bessa",
    github: "https://github.com/Bessazs",
    avatar: "https://avatars.githubusercontent.com/u/118318004?v=4",
  },
  {
    name: "Johnny",
    github: "https://github.com/JohnnyLopess",
    avatar: "https://avatars.githubusercontent.com/u/144946019?v=4",
  },
  {
    name: "Vitor",
    github: "https://github.com/VituuDias",
    avatar: "https://avatars.githubusercontent.com/u/58560647?v=4",
  },
  {
    name: "Igor Justino",
    github: "https://github.com/maquinaAgricula",
    avatar: "https://avatars.githubusercontent.com/u/103219582?v=4",
  },
];

const Contact = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sm={10}>
        <h1>Integrantes</h1>
        
        <hr />
        <table>
          <tr>
            {profiles.map((profile, index) => (
              <AnimatedTableCell key={index}>
                <a href={profile.github}>
                  <img
                    src={profile.avatar}
                    width="100px"
                    alt={`Foto de ${profile.name} no GitHub`}
                  />
                  <br />
                  <sub>
                    <b>{profile.name}</b>
                  </sub>
                </a>
              </AnimatedTableCell>
            ))}
          </tr>
        </table>
      </Grid>
    </Grid>
  );
};

export default Contact;
