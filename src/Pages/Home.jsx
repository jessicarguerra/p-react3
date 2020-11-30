import { Link } from 'react-router-dom'
import '../Styles/Pages/home.css'
import seta from '../Assets/seta.svg'

const Home = ()=>{

    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <main>
                    <h1>Séries Maravilhosas para você maratonar</h1>
                    <p>É impossível não viciaaaaaaar!</p>
                </main>
                <Link to="/serie" className="enter-app">
                    <img src={seta} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Home