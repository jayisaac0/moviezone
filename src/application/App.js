import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AllMovies from './pages/allmovies/AllMovies';
import Contact from './pages/contact/Contact';
import Landing from './pages/landing/Landing';
import SingleMovie from './pages/singlemovie/SingleMovie';
import { movieslist } from "../services/MoviesList"

function App() {

  const handleChange = (e) => {
    // console.log(e.target.value)

    const result = movieslist.indexOf(e.target.value) !== -1;
    // movieslist.indexOf(el => el.name.toLowerCase() === e.target.value.substr(0, 20) )
    console.log(result);
      // let filteredTweets = movieslist.filter(
      //   (tweet) => {
      //       return tweet.tweetcontent.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
      //   }
      // );

      // console.log(filteredTweets);
  }


  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"}><span style={{fontSize: "3rem"}}>Moviezone</span></Link>
        <ul className="navigation__list">
          <li className="navigation__list--link"><Link to={"/movies"}>Movies</Link></li>
          <li className="navigation__list--link"><Link to={"/contact"}>Contact</Link></li>
          <li className="navigation__list--link">
              <input onChange={handleChange}  name="search" />
          </li>
        </ul>
      </div>
      <Switch>
      <Route exact path={'/'} component={Landing} />
      <Route exact path={'/movies'} component={AllMovies} />
      <Route exact path={'/watch'} component={SingleMovie} />
      <Route exact path={'/contact'} component={Contact} />
      </Switch>
    </Fragment>
  );
}

export default App;
