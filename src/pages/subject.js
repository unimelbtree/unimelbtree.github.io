import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Tree from 'react-d3-tree';
import ReactLoading from "react-loading";

function Subject(props){
    let [tree, setTree] = useState(null);

    let subjects = [];

    async function buildTree(code){
        let res = await axios(props.baseurl + "/api/search/" + code);
        let subject = res.data;

        subjects.push(subject["code"]);

        let node = {};
        node["name"] = subject["name"] + " (" + subject["code"] + ")";

        if(subject["childs"] != null && subject["childs"].length > 0){
            node["children"] = [];
            let count = 0;
            for(let i = 0; i < subject["childs"].length; i++){
                if(!subjects.includes(subject["childs"][i])){
                    let childNode = await buildTree(subject["childs"][i]);
                    node["children"].push(childNode);
                    count++;
                }
            }

            if(count === 0){
                node["children"] = null;
            }
        }

        return node;
    }

    const renderForeignObjectNode = ({
                                         nodeDatum,
                                         toggleNode,
                                         foreignObjectProps
                                     }) => (
        <g>
            <circle r={15} fill={(nodeDatum.children) ? "white" : "black"} onClick={toggleNode}></circle>
            {/* `foreignObject` requires width & height to be explicitly set. */}
            <foreignObject {...foreignObjectProps}>
                <div>
                    <h3 style={{color: "white", fontFamily: "Avenir Next Cyr Thin"}}>{nodeDatum.name}</h3>
                </div>
            </foreignObject>
        </g>
    );

     function renderAll(subject){
        const ColorButton = styled(Button)(({ theme }) => ({
            color: theme.palette.getContrastText('#ffffff'),
            backgroundColor: '#ffffff',
            '&:hover': {
                backgroundColor: '#bdbdbd',
            },
        }));

        if(subject == null){
            return <div>

            </div>
        }else{
            if(tree == null){
                buildTree(subject["code"]).then((tree) => {
                    setTree(tree);
                });

                return(
                    <div>
                        <div className={"wrapper"}>
                            <h1 className={"subjectHead"}>{subject["name"] + " (" + subject["code"] + ")"}</h1>
                        </div>
                        <div className={"wrapperSubjectHandbook"}>
                            <ColorButton variant="contained" href={"https://handbook.unimelb.edu.au/2022/subjects/" + subject["code"]} target={"_blank"}>Official Handbook Link</ColorButton>
                        </div>
                        <div className={"wrapper"}>
                            <h3 className={"loading"}>Building tree... Please be patient, subject tree may be extremely large :)</h3>
                        </div>
                        <div className={"wrapper"}>
                            <ReactLoading type={"spinningBubbles"} color={"white"} />
                        </div>
                    </div>
                );
            }

            const nodeSize = { x: 200, y: 300 };
            const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 10, y: 0 };
            var treeComponent = <Tree
                pathFunc={"diagonal"}
                data={tree}
                orientation={"vertical"}
                separation={{"siblings": 2.5}}
                enableLegacyTransitions={true}
                initialDepth={1}
                translate={{x: window.innerWidth / 2, y: window.innerHeight / 15}}
                renderCustomNodeElement={(rd3tNodeProps) => renderForeignObjectNode({
                    ...rd3tNodeProps,
                    foreignObjectProps
                })}
            />;

            return (
                <div>
                    <div className={"wrapper"}>
                        <h1 className={"subjectHead"}>{subject["name"] + " (" + subject["code"] + ")"}</h1>
                    </div>
                    <div className={"wrapperSubjectHandbook"}>
                        <ColorButton variant="contained" href={"https://handbook.unimelb.edu.au/2022/subjects/" + subject["code"]} target={"_blank"}>Official Handbook Link</ColorButton>
                        <ColorButton variant="contained" onClick={() => {window.location.reload()}}>Reset Subject Tree</ColorButton>
                        <ColorButton variant="contained" href={"/#"}>Back to Main Page</ColorButton>
                        <ColorButton variant={"contained"} onClick={props.setMusicState}>{(props.musicState) ? "Play music: ON" : "Play music: OFF"}</ColorButton>
                    </div>
                    <div className={"wrapper"}>
                        <h4 className={"loading"}>Click on the white nodes to view further possible subject paths!</h4>
                    </div>
                    <div style={{ width: '100vw', height: '73vh', backgroundColor: "transparent"}}>
                        {treeComponent}
                    </div>
                </div>
            );
        }
    }

    const {code} = useParams();
    let [subject, setSubject] = useState(null);

    useEffect(() => {
        axios.get(props.baseurl + "/api/search/" + code).then((response) => {
            setSubject(response.data);
        });
    }, []);

    return (
        <div>
            {renderAll(subject)}
        </div>
    );
}

export default Subject;