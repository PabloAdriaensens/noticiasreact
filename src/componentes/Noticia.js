import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {

    const {source, description, title, url, urlToImage} = props.noticia;

    const imagen = (urlToImage)
        ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
        : '';

    return (
        <div className="col m6 s12 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank"
                       className="waves-effects waves-light btn">
                        Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    )
};

Noticia.propTypes = {
    noticia: PropTypes.shape({
        urlToImage: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        source: PropTypes.obj
    })
};

export default Noticia;