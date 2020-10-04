import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

function SingleMovie() {
    let history = useHistory();
    const video = history.location.state;

    return (
        <Fragment>
                <video controls autoPlay >
                    <source src={video} type="video/mp4"></source>
                </video>            
        </Fragment>
    )
}

export default SingleMovie
