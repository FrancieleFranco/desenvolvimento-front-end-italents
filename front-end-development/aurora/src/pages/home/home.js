import "./home.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";  

function Home() {
   const { username } = useParams();
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
       <h1>Bem-vindo(a){username ? `, ${username}` : "!"}</h1>
        <p>Explore as funcionalidades do app e personalize sua experiência.</p>
      
      </div>
    </div>
  );
}

export default Home;
