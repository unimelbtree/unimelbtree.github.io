import {Route, Routes} from "react-router-dom";
import About from './pages/about.js';
import Home from "./pages/home.js";
import Subject from "./pages/subject";
import Search from "./pages/search"
import Particles from "react-tsparticles";
import {useEffect, useState} from "react";
import WiiTheme from "./music/wiitheme.mp3";
import Sound from "react-sound";
import {musicContext} from "./context/musicContext";

function App(){
    const baseURL = "https://unimelb-subject-tree-backend.ts.r.appspot.com";
    let [musicState, setMusicState] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    var bgHeight = "";

    if(window.innerHeight < 500){
        bgHeight = "150vh"
    }else{
        bgHeight = "100vh"
    }

    return (
        <div style={{
            backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            width: '100vw',
            height: bgHeight,
        }}>
            <musicContext.Provider value={[musicState, setMusicState]}>
                <Sound
                    url={WiiTheme}
                    playStatus={(musicState) ? Sound.status.PLAYING : Sound.status.PAUSED}
                    volume={15}
                    loop={true}
                />
                <Particles options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.2,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#dad7d7",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1.3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
                />
                <Routes>
                    <Route exact path='/' element = {<Home baseurl = {baseURL} isMobile = {isMobile}/>}/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/subject/:code' element={<Subject baseurl = {baseURL}/>} />
                    <Route path='/search/:name' element={<Search baseurl = {baseURL}/>} />
                </Routes>
            </musicContext.Provider>
        </div>
    );
}

export default App;
