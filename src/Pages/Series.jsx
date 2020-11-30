import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import series from '../Services/dados'
import '../Styles/Pages/series.css'


const Series = ()=>{
    return(
        <>
                <Sidebar/>
            <div id="container">
                {
                    series.map(serie =>{
                        return <div key={serie.id} className="card">
                            <h3> {serie.nome}</h3>
                            <p>Sinopse: {serie.sinopse}</p>    
                            <img src={serie.imagem} alt="capa da serie"/>
                        </div>
                    })
                }
            </div>
        </>
    )
}


export default Series