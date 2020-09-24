import React from 'react';
import './styles.css';
import logo from '../../assets/logo-digiboard.png';
const Home = () =>{
    return (
        <div id="page-home">
            <div className="content" >
                <header>
                    <img src={logo} alt="Digiboard" />
                </header>
                <main>
                    <h3>Seu gerenciador de funcionários</h3>
                    <p>Ajudamos a gerenciar sua equipe</p>
                </main>
            </div>
        </div>
    );
}

export default Home;