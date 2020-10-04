import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
// import { coverSlider } from "../../../../../services/slider"

function Cover({name, year, description, cover, video}) {
    let history = useHistory();

    const onClick = (video) => {
        history.push({
            pathname: '/watch',
            state: video
        });
    }

    return (
        <Fragment>
            <div className="cover__add">
                <img src={!cover ? "https://wallpapersbq.com/images/thor-the-dark-world/thor-the-dark-world-wallpaper-6.jpg" : cover} alt={!name ? "Transformers" : name } />
                <div style={{display: "flex",flexDirection: "row",alignItems: "center",height: "inherit"}}>
                    <div className="cover__add--info">
                        <h2>{!name ? "Transformers" : name }</h2>
                        <span>Age of ultron</span>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <span onClick={() => onClick(video)} style={{cursor: "pointer",width: "100px",height: "100px",borderRadius: "50px"}}>
                        <img style={{width: "100px",height: "100px",borderRadius: "50%",cursor:"pointer"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1c9dqEn6e67bSJeXCmTotXsdyw02qODbt5g&usqp=CAU" alt="play" />
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Cover
