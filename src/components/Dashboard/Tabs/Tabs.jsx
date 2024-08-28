import React, { useState } from 'react';
import "./Tabs.css"

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid/Grid';
import List from '../List/List';


export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    Width:"50vw",
    fontSize:"1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize"
  }

  const theme = createTheme({                                                       //createTheme hook is used, passing an object with custom theme settings.
    palette:{
        primary:{
            main: "#ff0000"
        }
    }
  })
                                            //palette: This defines the color palette for the theme. primary: This defines the primary color palette.

  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        <TabPanel value="grid">
            <div className='grid-flex'>
                {
                    coins.map((coin, index)=>{
                        return(
                            <Grid coin={coin} key={index}/>
                        )                 
                    })
                }
            </div>
        </TabPanel>
        <TabPanel value="list">
        <table className='list-table'>
                {
                    coins.map((coin, index)=>{
                        return(
                                <List coin={coin} key={index}/> 
                        );
                    })
                }
            </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

