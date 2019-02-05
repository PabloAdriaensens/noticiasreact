import React, {Component} from 'react';
import Header from "./componentes/Header";

class App extends Component {

    state = {
        noticias: {}
    };

    componentDidMount() {
        this.consultarNoticias();
    }

    consultarNoticias = () => {
        let url = 'https://newsapi.org/v2/top-headlines?sources=cnn-es&apiKey=cedad511f5ba4da4b074c3ce57f58456';

        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(noticias => {
                this.setState({
                    noticias: noticias.articles
                })
            })
    };

    render() {
        return (
            <div className="App">
                <Header
                    titulo='Noticas'
                />
            </div>
        );
    }
}

export default App;
