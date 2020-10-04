import React, { Fragment, useState } from 'react'
import Cover from './components/cover/Cover'
import MovieList from './components/movielist/MovieList'
import { coverSlider } from "../../../services/Slider"

function Landing() {
    const [video, setVideo] = useState([])
    const onClick = (id) => {
        const result = coverSlider.filter(el => el.id === id);
        setVideo(result);
    }

    const onMouseEnter = (id) => {
        const result = coverSlider.filter(el => el.id === id);
        setVideo(result);
    }
    return (
        <Fragment>
            <div className="cover">
                {video?.map((single, index) => (
                    <Cover 
                        key={index}
                        name={single?.name}
                        year={single?.year}
                        description={single?.description}
                        cover={single?.cover}
                        video={single?.video}                
                    />
                ))}

                <div className="movie__case">
                {coverSlider.map((list, index) => (
                    <MovieList key={index}
                    id={list.id}
                    name={list.name}
                    year={list.year}
                    description={list.description}
                    cover={list.cover}
                    video={list.video}                    
                    onClick={() => onClick(list.id)}
                    onMouseEnter={() => onMouseEnter(list.id)}
                    />
                ))}
            </div>                
            </div>
        </Fragment>
    )
}

export default Landing
