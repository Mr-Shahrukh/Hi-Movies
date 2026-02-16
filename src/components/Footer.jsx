import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <h2>🎬 Hi Movies</h2>
        <p>Watch your favorite movies & shows</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/favourites">Favorites</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Hi Movies | Made by Shahrukh_S ❤️
        </p>

      </div>
    </footer>
  );
}

export default Footer;
