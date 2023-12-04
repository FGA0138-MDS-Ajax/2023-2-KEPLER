import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Pic1 from '../../images/pic1.jpeg';
import Registration from './Registration';
import UserLogin from './UserLogin';
import { ViewList } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            color: 'primary.main', // Define a cor do texto da aba selecionada
          },
          '& .MuiTab-textColorInherit.Mui-selected': {
            borderBottomColor: 'transparent', // Remove a borda inferior da aba selecionada
          },
          '& .MuiTab-root': {
            '&:hover': {
              backgroundColor: 'transparent', // Remove a cor de fundo ao passar o mouse
            },
          },
        },
      },
    },
  },
});

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: '90vh' }}>
        <Grid item lg={7} sm={5} sx={{
          backgroundImage: `url(${Pic1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', sm: 'block' }
        }}>
        </Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ mx: 3, height: 530 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} textColor='primary' indicatorColor='primary' onChange={handleChange}>
                  <Tab label='Entrar' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                  <Tab label='Registrar' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            <Box textAlign='center' sx={{ mt: 2 }}>
              <ViewList sx={{ color: 'blue', fontSize: 100 }} />
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>GradeWEB</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginReg;
