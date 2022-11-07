import React from 'react'
import CardsSlider from './CardsSlider'

export default function Slider({movies}) {

    const getMoviesFromRange = (from,to) => {
        return movies.slice(from,to);
    }
  return (
    <div>
        <CardsSlider title="Trending Now" data={getMoviesFromRange(0,10)}/>
        <CardsSlider title="New Releases" data={getMoviesFromRange(10,20)}/>
        <CardsSlider title="Blockbuster" data={getMoviesFromRange(20,30)}/>
        <CardsSlider title="Popular On Netflix" data={getMoviesFromRange(30,40)}/>
        <CardsSlider title="Action" data={getMoviesFromRange(40,50)}/>
        <CardsSlider title="Romance" data={getMoviesFromRange(50,60)}/>
    </div>
  );
}
