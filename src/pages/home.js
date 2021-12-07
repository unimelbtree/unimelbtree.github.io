import Popup from "../components/popup";
import {useState, useEffect, useContext} from 'react'
import SearchBar from "material-ui-search-bar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import axios from "axios";
import ReactLoading from 'react-loading'
import {musicContext} from "../context/musicContext";

function Home(props){
    const baseURL = props.baseurl;

    let [state, setState] = useState({dataSource: []});
    let [isOpen, setOpen] = useState(false);
    let [names, setNames] = useState(null);
    const [musicState, setMusicState] = useContext(musicContext);

    useEffect(() =>{
        axios.get(baseURL + "/api/code/all").then((response) => {
            setNames(response.data);
        });
    }, []);

    function filterSubject(names, target){
        let filterArray = [];

        if(target.length > 9){
            return filterArray;
        }

        names.forEach((name) =>{
            let match = true;

            for(var i = 0; i < target.length; i++){
                if(name[i] !== target[i]){
                    match = false;
                    break;
                }
            }

            if(match){
                filterArray.push(name);
            }
        })

        return filterArray;
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#ffffff'),
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#bdbdbd',
        },
    }));

    var fontsize = Math.round(window.innerWidth * 0.17).toString() + "px";

    return (
        <div>
            <Popup dataSource = {state.dataSource} isOpen = {isOpen} />
            <div className="wrapper">
                <div className="image">
                    <img src="https://i.pinimg.com/originals/9c/a8/d3/9ca8d301a7e109449bf480a11c09d4cc.png" width={150} height={150}/>
                    <h1 className="logo" style={
                        {
                            marginLeft: props.isMobile ? "0vw" : "3vw",
                            fontSize: props.isMobile ? fontsize : "80px"
                        }
                    }>Subject Tree</h1>
                </div>
            </div>

            {names == null &&
                <div>
                    <div className={"wrapper"}>
                        <ReactLoading type={"spinningBubbles"} color={"white"} />
                    </div>
                    <div className={"wrapper"}>
                        <h1 className={"loading"}>Page loading... Please wait</h1>
                    </div>
                </div>
            }

            {names != null && <SearchBar
                id ={"bruh"}
                dataSource={state.dataSource}
                placeholder={"Enter subject codes (or subject names)"}
                onChange={(value) => {
                    if(value !== ""){
                        setState({dataSource: filterSubject(names, value.toLowerCase())});
                        setOpen(true);
                    }else{
                        setOpen(false);
                    }

                }}
                onRequestSearch={(value) => {
                    const regex = /[a-zA-Z0-9]/;
                    if(!regex.test(value)){
                        alert("Empty search values are not allowed")
                    }else if(value.length > 40){
                        alert("Search is too long")
                    }
                    else{
                        window.open("/#/search/" + value, "_self")}
                    }
                }
                style={{
                    margin: '0 auto',
                    maxWidth: 800,
                    height: 60,
                    marginTop: 50,
                    border: "1px solid black"
                }}
            />}
            {names != null && <div className={"wrapperHomepage"}>
                <ColorButton variant="contained" href="https://handbook.unimelb.edu.au/search" target={"_blank"}>Official Handbook</ColorButton>
                <ColorButton variant="contained" href="/#/about">About</ColorButton>
                <ColorButton variant={"contained"} onClick={() => setMusicState(!musicState)}>{(musicState) ? "Play music: ON" : "Play music: OFF"}</ColorButton>
            </div>}

        </div>
    );
}

export default Home;