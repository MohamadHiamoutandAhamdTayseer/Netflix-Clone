import React from 'react'
import Movie from './movie/Movie';

export default function MovieList(props) {
    return (
        <div style={{ textAlign: 'center', margin: '20px', display: 'grid', gridTemplateColumns: 'auto auto auto auto auto', gap: '10px', padding: '10px', backgroundColor: 'brown' }}>
            {
                props.movies.map((mov) => {
                    return (
                        <>
                            <Movie mov={mov} />
                        </>
                    );

                })

            }
        </div>
    )
}
