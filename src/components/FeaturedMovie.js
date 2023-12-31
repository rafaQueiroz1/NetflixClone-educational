import React from "react";
import './FeaturedMovie.css';

export default function FeaturedMovie({item}) {
       console.log(item)
       let firstDate = new Date(item.first_air_date);
       let genres = [];
       for(let i in item.genres) {
        genres.push(item.genres[i].name)};
        let title = item.original_name;
        if(title.length > 22) {
            title = title.substring(0, 22)+`...`;
        }
        let description = item.overview;
        if(description.length > 100) {
            description = description.substring(0, 100)+`...`;
        }
        if(description.length <= 0) {
            description = description.substring(0, 12)+`Sem descrição`;
        }
        let points = item.vote_average;
        let rounded = points.toFixed(1);
    return (
            <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

            }}>
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                        <div className="featured--name">{title}</div>
                        <div className="featured--info">
                            <div className="featured--points">{rounded} pontos</div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                            </div>
                        <div className="featured--description">{description}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                            <a href={`/list/add/${item.id}`}className="featured--mylistbutton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    </div>
                </div>
                
            </section>
       );

}
