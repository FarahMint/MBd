import React from 'react'


import ListOfGenres from "./ListOfGenres";
import MoviesList from "./MoviesList";

export default function Home() {
    return (
        <div className="main-wrapper">
            <ListOfGenres/>
            <MoviesList />
        </div>
    )
}
