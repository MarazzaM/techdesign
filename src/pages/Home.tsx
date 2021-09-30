import './Home.scss';
import Cards from '../components/Cards';

function Home() {
    return (
        <div className="Home">
           <div className="content-home">
           <h1>Home sweet home</h1>
            <span>Go through our sections and if you have any suggestions, leave them in our <a href="https://discord.gg/KzPxsUUW" rel="noreferrer" target="_blank">discord <i className='bx bxl-discord-alt'></i></a>!</span>
           <br /> <span>We are always open to help, so if you need a hand on your project, try writing in #help</span>
           <br /> <a href="https://discord.gg/KzPxsUUW" target="_blank"  rel="noopener noreferrer"><i className='bx bxl-discord-alt discordi'></i></a>
           </div>
            <Cards/>
        </div>
    )
}

export default Home
