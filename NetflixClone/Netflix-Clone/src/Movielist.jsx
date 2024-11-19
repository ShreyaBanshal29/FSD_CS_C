import "./Movielist.css";
import movies from "./movies";
const Movielist = () => {
  return (
    <div className="movie-list">
      {
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h1>Title:{movie.title}</h1>
            <h2>Ratings:{movie.rating}</h2>
            <h2>Price:{movie.price}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Movielist;