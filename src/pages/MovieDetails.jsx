import movie from "./movie.json"
import styles from "./MovieDetails.module.css"

export function MovieDetails() {
    const imageUrl = "https://image.tmdb.org/t/p/w600" + movie.poster_path;

    return (
        <div className={styles.detailsContainer}>Details
            <img src={imageUrl} alt="" />
        </div>);
}