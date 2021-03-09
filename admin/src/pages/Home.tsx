import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/sidebar-home.css';
import '../styles/pages/home.css';
import ListApprove from './ListApprove';
import { useHistory } from "react-router-dom";



function Home() {

    const handleLogout = () => {
        console.log('clicou desloga')
        localStorage.removeItem('@token')
    }

    return (
        // <h1>home</h1>
        <>
            <div id="page-map">
                <aside>
                    <header>

                        <h2> Validação das informações do usuário.</h2>
                        <p>Torne a sua cidade mais segura.</p>
                    </header>
                    <footer>
                        <strong>São Paulo</strong>
                        <span>Capital</span>
                    </footer>
                </aside>

                <div>
                    <ListApprove />
                </div>

                <Link to="/home" className="approve">
                    <span className="material-icons md-32">check_circle</span>
                </Link>
                <div className="flex-end">

                    <Link to="" className="logout" onClick={handleLogout}>
                        <p>
                            <span className="material-icons md-32">logout</span>
                        </p>
                        <p>Sair</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;