import React, { Fragment } from 'react';
// import { coverlist } from "../../../../../services/CoverList";


function MovieList({id, name, year, description, cover, video, onClick}) {
    return (
        <Fragment>
            <div className="movie__case--list shadow" key="index" onClick={() => onClick(id)}>
                <img className="movie__case--list-image" src={cover} alt="movie" />
                <div>
                    <p style={{padding: "0px",margin: "0px"}}>{name}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default MovieList
