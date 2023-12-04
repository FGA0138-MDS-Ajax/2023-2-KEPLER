import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/authSlice';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { getToken } from '../services/LocalStorageService';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            GradeWEB
          </Typography>

          <Button
            component={NavLink}
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? '#0f467e' : '' };
            }}
            sx={{ color: 'white', textTransform: 'none' }}
          >
            Sobre
          </Button>

          <Button
            component={NavLink}
            to="/contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? '#0f467e' : '' };
            }}
            sx={{ color: 'white', textTransform: 'none' }}
          >
            Contato
          </Button>

          <Button
            component={NavLink}
            to="/Fluxogramas"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? '#0f467e' : '' };
            }}
            sx={{ color: 'white', textTransform: 'none' }}
          >
            Fluxogramas
          </Button>

          {access_token && (
            <Button
              component={NavLink}
              to="/Grade"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? '#0f467e' : '' };
              }}
              sx={{ color: 'white', textTransform: 'none' }}
            >
              Grade
            </Button>
          )}

          {access_token && (
            <Button
              component={NavLink}
              to="/Materias"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? '#0f467e' : '' };
              }}
              sx={{ color: 'white', textTransform: 'none' }}
            >
              Matérias
            </Button>
          )}

          {access_token ? (
            <>
              <Button
                component={NavLink}
                to="/dashboard"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? '#0f467e' : '' };
                }}
                sx={{ color: 'white', textTransform: 'none' }}
              >
                Perfil
              </Button>
              <Button
                color="inherit"  
                
                onClick={handleLogout}
                sx={{ marginLeft: 0 }}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? '#0f467e' : '' };
              }}
              sx={{ color: 'white', textTransform: 'none' }}
            >
              Entrar/Registrar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
