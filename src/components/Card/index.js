import { useFavoritoContext } from "context/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import desfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : desfavoritar;

  return (
    <div className={styles.container}>
      <Link to={`/${id}`} className={styles.link}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="favoritar filmes"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}
