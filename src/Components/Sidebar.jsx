import seta from '../Assets/seta.svg'   
import '../Styles/Components/sidebar.css'
import { useHistory } from 'react-router-dom'

const Sidebar = ()=>{
    const {goBack} = useHistory()

    return(
        <aside className="app-sidebar">
            <footer>
                <button type="button" onClick={goBack}>
                    <img src={seta} alt="seta" id="arrow" />
                </button>
            </footer>
        </aside>
    )
}

export default Sidebar