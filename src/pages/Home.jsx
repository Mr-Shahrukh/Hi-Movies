import { useState , useEffect} from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { searchMovies } from "../servieses/api";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    // Random keywords
    const randomKeywords = ["avengers", "batman", "spiderman", "harry potter", "star wars"];
    
     // Load random movies when page loads
  useEffect(() => {
    const loadRandomMovies = async () => {
      const random = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
      const data = await searchMovies(random);
      setMovies(data);

    };

    loadRandomMovies();
    }, []);

    const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (error) {
      console.log("Error:", error);
    }

    setSearchQuery("");
  };

    return <div className="home">
        <div className="hero">
            <h1>Welcome to Hi Movies</h1>
            <p>Watch your favorite movies and shows</p>
        </div>

        <form onSubmit={handleSearch} className="search-container">
            <input 
             type="text" 
             placeholder="Search Movies"
             className="search-box"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             />
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => 
            (
            <MovieCard movie={movie} key={movie.imdbID}/>
            )
            )}
        </div>
    </div>
}

export default Home