import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import SearchBox from "../components/searchbox";
import axios from "axios";

function Search(props){
    const {name} = useParams();
    const [result, setResult] = useState(null);
    const[isCode, setIsCode] = useState(null);

    function renderAll(result){
        if(result == null){
            return (
                <div className={"wrapper"}>
                    <h1 className={"searchTitle"}>Searching...</h1>
                </div>
            );
        }else if(result.length === 0){
            return (
                <div>
                    <div className={"wrapper"}>
                        <h1 className={"searchTitle"}>Search results for: {name}</h1>
                    </div>
                    <div className="wrapper" style={{
                        marginTop: 50
                    }}>
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
                            marginTop: 50
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
                            marginTop: 50
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
        const regex = /[A-Za-z]{4}[0-9]{2,5}/
        if(regex.test(name)){
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
    }, []);

    return (
        <div>
            {renderAll(result)}
        </div>
    );
}

export default Search;