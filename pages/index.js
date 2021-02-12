import Head from 'next/head'
// import styles from '../scss/Home.module.scss'
// import { Button, Icon } from 'semantic-ui-react';
import BasicLayout from '../layouts/BasicLayout'

export default function Home({movie}) {
  return (
    <BasicLayout>
      <h1>Estamos en la Home</h1>
      <div>
        {/* <h6>{JSON.stringify(movie)}</h6> */}
        <h6>{`${movie.Title} - ${movie.Year}`}</h6>
        <img src={movie.Poster} alt='' />
      </div>

      {/* 
      <div>
        <h1>{movie.Title}</h1>
        
      </div> */}
      {/* <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div> */}
    </BasicLayout>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    'http://www.omdbapi.com/?i=tt3896198&apikey=8f82567b'
  );
  const json = await res.json();
  return { movie: json };
};