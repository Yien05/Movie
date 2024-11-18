import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { nanoid } from "nanoid";

// Test data - Do not modify
const movies = [
  { id: 1, title: "Zorro", genre: "Action" },
  { id: 2, title: "Alien", genre: "Sci-Fi" },
  { id: 3, title: "Matrix", genre: "Sci-Fi" },
  { id: 4, title: "Coco", genre: "Animation" },
  { id: 5, title: "Batman", genre: "Action" },
];

function App() {
  // Your code here
  // Hints:
  // 1. Use useState to manage the watchlist, which is an array of movies.
  // 2. Create a button to add movies to the watchlist.
  // 3. In the watchlist, track whether each movie is watched or not.
  // 4. Allow users to toggle watched status for movies in the watchlist.
  // 5. Use .map() to render the movie list and the watchlist.

  const [watchList, setWatchList] = useState([]);
  console.log(" WatchList", watchList);

  const addWatchList = (movie) => {
    if (!watchList.find((item) => item.id === movie.id)) {
      setWatchList([...watchList, { ...movie, watched: false }]);
    }
  };

  const toggleWatch = (id) => {
    setWatchList(
      watchList.map((movie) =>
        movie.id === id && { ...movie, watched: !movie.watched } )
    );
  };
  return (
    <Container>
      {/* Your JSX here */}
      <h1>Movie Watchlist Manager</h1>

      <h2>Available Movies</h2>
      {movies.map((movie) => (
        <Row>
          <ul className="list-group">
            <li className="list-group-item my-2  d-flex justify-content-between align-items-center">
              <Col>
                <h5>{movie.title}</h5>
                {movie.genre}
              </Col>

              <button className="btn btn-primary" onClick={() => addWatchList(movie)}>
                {watchList.find((item) => item.id === movie.id)
                  ? "Added to WatchList"
                  : "Add to WatchList"}
              </button>
            </li>
          </ul>
        </Row>
      ))}

      <h2>My Watchlist</h2>
      <Row>
        {watchList && watchList.length > 0 ? (
          watchList.map((movie) => (
            <ul className="list-group">
              <li className="list-group-item my-2  d-flex justify-content-between align-items-center">
                <Col>
                  <h5>{movie.title}</h5>
                  {movie.genre}
                </Col>
                <div>
                <p className="bg-warning">{movie.watched ? "Watched" : "Unwatched"}</p>
                <button className="btn btn-success" onClick={() => toggleWatch(movie.id)}>
                  {movie.watched ? "Mark as Unwatched" : "Mark as Watch"}
                </button>
                </div>
                
              </li>
            </ul>
          ))
        ) : (
          <p>Your watchlist is empty. Add some movies!</p>
        )}
      </Row>
    </Container>
  );
}

export default App;
