import './Home.scss';
import Cards from '../components/Cards';
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3
  };
  
  
function Home() {
    return (
        <motion.div className="Home"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >
           <div className="content-home">
           <h1>Home sweet home</h1>
            <span>Go through our sections and if you have any suggestions, leave them in our <a href="https://discord.gg/KzPxsUUW" rel="noreferrer" target="_blank">discord <i className='bx bxl-discord-alt'></i></a>!</span>
           <br /> <span>We are always open to help, so if you need a hand on your project, try writing in #help</span>
           <br /> <a href="https://discord.gg/KzPxsUUW" target="_blank"  rel="noopener noreferrer"><i className='bx bxl-discord-alt discordi'></i></a>
           </div>
            <Cards/>
        </motion.div>
    )
}

export default Home
