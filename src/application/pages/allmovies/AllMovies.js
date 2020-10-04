import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import { movieslist } from "../../../services/MoviesList"

function AllMovies() {

    let history = useHistory();

    const onClick = (video) => {
        history.push({
            pathname: '/watch',
            state: video
        });
    }

    return (
        <Fragment>
            <div className="movies">

                {movieslist.map((list, index) => (
                    <div className={"movies__list"} key={index}  onClick={() => onClick(list.video)} >
                        <img style={{width: "100%",height: "100%"}} src={list.cover} alt={list.name} />
                        <span>{list.name}</span>
                    </div>
                ))}

            </div>
        </Fragment>
    )
}

export default AllMovies
