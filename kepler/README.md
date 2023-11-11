<h1 align="center">:file_cabinet: GradeWeb</h1>

Gerenciador acadêmico em Django

## :memo: Descrição
O Sistema de Gestão Acadêmica foi desenvolvido com o objetivo de proporcionar uma experiência mais eficiente e personalizada para os estudantes da Faculdade do Gama (FGA). Ele oferece funcionalidades que simplificam o planejamento e acompanhamento das disciplinas, permitindo aos alunos focar em seu desenvolvimento acadêmico.

 ## :speech_balloon: Documentação
  <a href="https://fga0138-mds-ajax.github.io/2023-2-KEPLER/">Git Pages </a>


[![Built with Cookiecutter Django](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg?logo=cookiecutter)](https://github.com/cookiecutter/cookiecutter-django/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)

License: MIT

## Settings

Moved to [settings](http://cookiecutter-django.readthedocs.io/en/latest/settings.html).

## Basic Commands

### Setting Up Your Users

- To create a **normal user account**, just go to Sign Up and fill out the form. Once you submit it, you'll see a "Verify Your E-mail Address" page. Go to your console to see a simulated email verification message. Copy the link into your browser. Now the user's email should be verified and ready to go.

- To create a **superuser account**, use this command:

      $ python manage.py createsuperuser

For convenience, you can keep your normal user logged in on Chrome and your superuser logged in on Firefox (or similar), so that you can see how the site behaves for both kinds of users.

### Type checks

Running type checks with mypy:

    $ mypy kepler

### Test coverage

To run the tests, check your test coverage, and generate an HTML coverage report:

    $ coverage run -m pytest
    $ coverage html
    $ open htmlcov/index.html

#### Running tests with pytest

    $ pytest

### Live reloading and Sass CSS compilation

Moved to [Live reloading and SASS compilation](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html#sass-compilation-live-reloading).

### Sentry

Sentry is an error logging aggregator service. You can sign up for a free account at <https://sentry.io/signup/?code=cookiecutter> or download and host it yourself.
The system is set up with reasonable defaults, including 404 logging and integration with the WSGI application.

You must set the DSN url in production.

## Deployment

The following details how to deploy this application.

### Docker

See detailed [cookiecutter-django Docker documentation](http://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html).

### Custom Bootstrap Compilation

The generated CSS is set up with automatic Bootstrap recompilation with variables of your choice.
Bootstrap v5 is installed using npm and customised by tweaking your variables in `static/sass/custom_bootstrap_vars`.

You can find a list of available variables [in the bootstrap source](https://github.com/twbs/bootstrap/blob/v5.1.3/scss/_variables.scss), or get explanations on them in the [Bootstrap docs](https://getbootstrap.com/docs/5.1/customize/sass/).

Bootstrap's javascript as well as its dependencies are concatenated into a single file: `static/js/vendors.js`.

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/gustaallves">
        <img src="https://avatars.githubusercontent.com/u/108435814?v=4" width="100px;" alt="Foto de Gustavel Alves no GitHub"/><br>
        <sub>
          <b>Gustavo</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/Fenelas">
        <img src="https://avatars.githubusercontent.com/u/101183605?v=4" width="100px;" alt="Foto de Gabriel Fenelon no GitHub"/><br>
        <sub>
          <b>Fenelas</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/Bessazs">
        <img src="https://avatars.githubusercontent.com/u/118318004?v=4" width="100px;" alt="Foto de Vitor Bessa no GitHub"/><br>
        <sub>
          <b>Bessa</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/JohnnyLopess">
        <img src="https://avatars.githubusercontent.com/u/144946019?v=4" width="100px;" alt="Foto de Johnny no GitHub"/><br>
        <sub>
          <b>Johnny</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/VituuDias">
        <img src="https://avatars.githubusercontent.com/u/58560647?v=4" width="100px;" alt="Foto de Vitor no GitHub"/><br>
        <sub>
          <b>Vitor</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/maquinaAgricula">
        <img src="https://avatars.githubusercontent.com/u/103219582?v=4" width="100px;" alt="Foto de Igor no GitHub"/><br>
        <sub>
          <b>Igor Justino</b>
        </sub>
      </a>
    </td>
  </tr>
</table>