import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../../modalMovie/ModalMovie';

//import { Card, Button } from 'react-bootstrap';


export default function Movie(props) {
    const [show, setShow] = useState(false);

    const [chosenMovie, setChosenMovie] = useState();
    const handleShow = (moviePass) => {
        setChosenMovie(moviePass);
        setShow(true);
    }
    const handleClose = () => setShow(false);
    return (
        <>
            <Card >
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.mov.poster_path}`} />
                <Card.Body>

                    <Card.Title style={{ fontSize: '30px', color: 'brown' }}>
                        {props.mov.title}
                    </Card.Title>

                    <Card.Text>
                        {props.mov.overview}
                    </Card.Text>

                    <Card.Text style={{ fontSize: '20px', color: 'brown' }}  >
                        {props.mov.release_date}
                    </Card.Text>

                    <Button variant="danger" onClick={() => { handleShow(props.mov) }}  > Add to Favoraite</Button>

                </Card.Body>
            </Card>

            {
                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />

            }

        </>
    )
}
