import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import SearchBox from "../components/searchbox";
import axios from "axios";
import ReactLoading from "react-loading";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavBar from "../components/navbar";

function Search(props){
    const {name} = useParams();
    const [result, setResult] = useState(null);
    const[isCode, setIsCode] = useState(null);

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#ffffff'),
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#bdbdbd',
        },
    }));

    function renderAll(result){
        if(result == null){
            return (
                <div>
                    <div className={"wrapper"}>
                        <h1 className={"searchTitle"}>Searching...</h1>
                    </div>
                    <div className={"wrapper"}>
                        <ReactLoading type={"spinningBubbles"} color={"white"} />
                    </div>
                </div>

            );
        }else if(result.length === 0){
            return (
                <div>
                    <div className={"wrapper"}>
                        <h1 className={"searchTitle"}>Search results for: {name}</h1>
                    </div>
                    <div className="wrapper">
                        <h1 className={"searchTitle"}>No search results returned :(</h1>
                    </div>
                </div>
            );
        }else{
            if(isCode === true){
                return (
                    <div>
                        <div className={"wrapper"}>
                            <h1 className={"searchTitle"}>Search results for: {name} (subject code detected)</h1>
                        </div>
                        <div className="wrapper" style={{
                            marginTop: 30
                        }}>
                            <SearchBox
                                dataSource={result}
                            />
                        </div>
                    </div>
                );
            }else{
                return (
                    <div>
                        <div className={"wrapper"}>
                            <h1 className={"searchTitle"}>Search results for: {name}</h1>
                        </div>
                        <div className="wrapper" style={{
                            marginTop: 30
                        }}>
                            <SearchBox
                                dataSource={result}
                            />
                        </div>
                    </div>
                );
            }

        }
    }

    useEffect(() => {
        axios.get(props.baseurl + "/api/code/all_codes").then((response) => {
            const regex = /[A-Za-z]{4}[0-9]{1,5}/
            if((name.length === 4 && response.data.includes(name.toLowerCase())) ||
                (name.length > 4) && regex.test(name) && response.data.includes(name.toLowerCase().slice(0, 4))){
                axios.get(props.baseurl + "/api/code/match/" + name).then((response)=>{
                    setIsCode(true);
                    setResult(response.data);
                })
            }else{
                axios.get(props.baseurl + "/api/match/" + name).then((response)=>{
                    setIsCode(false);
                    setResult(response.data);
                })
            }
        })
    }, []);

    return (
        <div>
            <NavBar/>
            {renderAll(result)}
        </div>
    );
}

export default Search;