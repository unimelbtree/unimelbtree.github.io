import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import SearchBox from "../components/searchbox";
import axios from "axios";

function Search(props){
    const {name} = useParams();
    const [result, setResult] = useState(null);

    useEffect(() => {
       axios.get(props.baseurl + "/api/match/" + name).then((response)=>{
           setResult(response.data);
       })
    }, []);

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

export default Search;