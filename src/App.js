import React from 'react';
import './App.css';
import requests from './requests'
import Row from './Components/Row/Row.component'
import Banner from './Components/Banner/Banner.component'
import Nav from './Components/Navbar/Navbar.component'

function App() {
  return (
    <div className="App"> 
      <Nav />
      <Banner />  
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrrorMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
