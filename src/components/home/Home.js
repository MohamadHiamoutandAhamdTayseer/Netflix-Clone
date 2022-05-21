import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";

export default function Home() {

    const [movies, setMovies] = useState([]);


    async function getMovie() {


        // let serverUrl = process.env.REACT_KEY_SERVER;
        // let response = await fetch(`${serverUrl}/trending`);

        let url = "https://movies-haimour.herokuapp.com/trending";
        let response = await fetch(url);

        let moviesData = await response.json();
        console.log('data from server', moviesData);
        setMovies(moviesData);//updating the state , now the data coming from the server and stor in "movies" state
    }

    useEffect(() => {
        getMovie();
    }, []);//حطيت ال [] عشان يستدعي ال getMovie(); مرة وحدة  

    return (
        <>
            <h1>Home Page</h1>
            {
                (movies.length > 0) && <MovieList movies={movies} />

            }



        </>
    );
}