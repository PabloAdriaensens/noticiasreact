import React from 'react';

const Noticia = (props) => {

    const {source, description, title, url, urlToImage} = props.noticia;

    console.log(urlToImage);
    return (
        <div>
            <p>Desde Notica.js</p>
        </div>
    )
};

export default Noticia;