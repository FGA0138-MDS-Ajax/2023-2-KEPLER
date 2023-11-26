import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import React from "react";
import principal from '../styleheets/Principal.css';
import { Link } from "react-router-dom";

function Principal(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", email: "" }))
        dispatch(unSetUserToken({ access_token: null }))
        removeToken()
        navigate('/login')
      }
    return(
        <><div className="background-bottom">
            <div className="main-screen">
                <div className="left-screen">
                    <h1>UNB</h1>
                
                <div className="left-list">
                    <ul>
                        <li className="left-option">
                            <a href="/Perfil"style={{textDecoration:'none'}}> Perfil </a> <br></br>
                            <a href="/Materias"style={{textDecoration:'none'}}> Materias</a><br></br>
                            <a href="/Grade"style={{textDecoration:'none'}}> Grade </a>
                        </li>
                    </ul>
                    <div className="Bottom-Exit"> 
                    <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>    
                    </div>
            
                </div>
                </div>
                <div className="right-screen">
                    <h2>Grade Web</h2>
                    <div className="all-courses">
                        <div className="aeroespacial">
                            <span> Aeroespacial</span>
                        </div>
                        <div className="automotiva">
                            <span> Automotiva</span>
                        </div>
                        <div className="eletronica">
                            <span> Eletronica</span>
                        </div>
                        <div className="energia">
                            <span> Energia</span>
                        </div>
                        <div className="software">
                        <Link to="/FluxogramaSoft" style={{textDecoration:'none'}}>  <span> Software</span></Link> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div></>    
    )
} 

export default Principal;