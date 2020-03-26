import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Container,
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core';
import SingleCard from './Components/Card/SingleCard';
import Footer from './Components/StickyFooter/Sticky-footer';

const useStyles = makeStyles(theme => ({
  mainHeading: {
    fontFamily: 'Harry P',
    margin: '50px 0'
  }
}));


function App() {
  const classes = useStyles();

  const [characters, setCharacters] = useState([]);
  const [fev, setFev] = useState([]);


  const setLocalStorage = value => {
    localStorage.setItem("favorites", JSON.stringify(value));
  }

  const handleAddFev = (id) => {

    const isFev = fev.filter(value => value.id === id)[0]
    
    if (isFev) {
      const favorites = fev.filter(value => value.id !== id)
      setLocalStorage(favorites)
      setFev(favorites)
      return false;
    }
    
    const character = characters.filter(value => value.id === id)[0]
 
    const favorites = [...fev, character]
    setLocalStorage(favorites)
    setFev(favorites)
  }

  useEffect(() => {
    setFev(JSON.parse(localStorage.getItem("favorites")) || [])
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(res => res.json())
      .then(characters => setCharacters(characters.map((singleCh, index) => {
        singleCh.id = index
        return singleCh
      })))
  }, [])
  
  return (
    <Container>
      <Typography variant="h1" align="center" className={classes.mainHeading}>
        Harry Potter Characters
      </Typography>
      <Grid
        container
        direction = "row"
        justify = "center"
        spacing={3}
      >
        {
          characters.map((ch) =>
            <Grid key={ch.id} item xs={12} sm={6} md={4}>
              <SingleCard character={ch} handleAddFev={handleAddFev} isFev={!!fev.filter(value => value.id === ch.id)[0]} />
            </Grid>
          )
        }

        <Grid item xs={12} align="center">
          <Footer />
        </Grid>
      </Grid>
      
    </Container>
  );
}

export default App;
