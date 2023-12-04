import React from "react";
import { Grid } from "@mui/material";
import "../styleheets/Contact.css"; // Importa o arquivo CSS externo

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
        <br />
        <table>
          <tbody>
            <tr>
              {profiles.map((profile, index) => (
                <td key={index} className="animated-table-cell">
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
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};

export default Contact;
