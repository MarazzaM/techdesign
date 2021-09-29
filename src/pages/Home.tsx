import './Home.scss';
import Cards from '../components/Cards';

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
            <span>Go through our sections and if you have any suggestions, leave them in our discord <i className='bx bxl-discord-alt'></i>!</span>
            <Cards/>
        </div>
    )
}

export default Home
