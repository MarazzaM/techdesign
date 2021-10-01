import "./CardsHow.scss";
import SliderComponent from "./SliderComponent";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import LastSlider from "./LastSlider";
import { useEffect } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};

function CardsHow() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const sliderinfo = [
    {
      id: "a1",
      title: "First Steps",
      description: " lorem ipsum dolor",
      prev:"/HowTo",
      next:"/HowTo/slider2",
      prevtext: (
        <> 
          <span>Back to start</span>
        </>
      ),
      nexttext: (
        <> <span>Next</span>
          <i className='bx bx-right-arrow' ></i>
        </>
      )
    },
    {
      id: "a2",
      title: "Digging deeper",
      description: " lorem ipsum dolor",
      prev:"/HowTo/slider1",
      next:"/HowTo/slider3",
      prevtext: (
        <> 
          <i className='bx bx-left-arrow' ></i>
          <span>Back</span>
        </>
      ),
      nexttext: (
        <> <span>Next</span>
          <i className='bx bx-right-arrow' ></i>
        </>
      )
    },
    {
      id: "a3",
      title: "Back to back",
      description: " lorem ipsum dolor",
      prev:"/HowTo/slider2",
      next:"/HowTo/think",
      prevtext:(
        <> 
          <i className='bx bx-left-arrow' ></i>
          <span>Back</span>
        </>
      ),
      nexttext:(
        <> <span>Last slide!</span>
          
        </>
      ),
    },
  ];
  return (
    
    
    <motion.div
    initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
    >
      <Switch>
        
        <Route path="/HowTo" exact>
          <motion.div className="container-cw-slider centered"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          >
            <h1>Where do i start?</h1>
            <div className="text-cw-s">
              This road map is based on our personal experience and is not a
              strict rule to follow. We recommend starting with Front End but it
              is not necessary, you can really start with Back End if that is
              what catches your attention! It is best to take this as a
              suggestion and once you know the basics, you will know that you
              like
            </div>
          </motion.div>
          <Link to="/HowTo/slider1" className="startbtn">Start the Journey</Link>
        </Route>
        <Route path="/HowTo/slider1">
          <SliderComponent
            title={sliderinfo[0].title}
            description={sliderinfo[0].description}
            prev={sliderinfo[0].prev}
            next={sliderinfo[0].next}
            prevtext={sliderinfo[0].prevtext}
            nexttext={sliderinfo[0].nexttext}

          />
        </Route>

        <Route path="/HowTo/slider2">
          <SliderComponent
            title={sliderinfo[1].title}
            description={sliderinfo[1].description}
            prev={sliderinfo[1].prev}
            next={sliderinfo[1].next}
            prevtext={sliderinfo[1].prevtext}
            nexttext={sliderinfo[1].nexttext}
            
          />
        </Route>

        <Route path="/HowTo/slider3">
          <SliderComponent
            title={sliderinfo[2].title}
            description={sliderinfo[2].description}
            prev={sliderinfo[2].prev}
            next={sliderinfo[2].next}
            prevtext={sliderinfo[2].prevtext}
            nexttext={sliderinfo[2].nexttext}
          />
        </Route>

        <Route path="/HowTo/think">
          <LastSlider/>
        </Route>
        
      </Switch>
      <div className="button-container-2">
                  <span className="mas">Lets go!</span>
                  <Link to="/Advice"> <button type="button" name="Hover">Next Section</button></Link>
            </div>
    </motion.div>
  );
}

export default CardsHow;
