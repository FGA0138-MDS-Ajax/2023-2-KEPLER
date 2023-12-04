import React, { useEffect, useState } from 'react';
import { Button, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const [userData, setUserData] = useState({
    email: '',
    name: '',
  });

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, isSuccess]);

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name,
      }));
    }
  }, [data, isSuccess, dispatch]);

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: '', email: '' }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant='h4' mb={4}>Usuário</Typography>
            <Typography variant='body1'>Email: {userData.email}</Typography>
            <Typography variant='body1'>Nome: {userData.name}</Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
