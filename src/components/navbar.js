import React, {useContext, useState} from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from "@mui/material/Toolbar";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import {musicContext} from "../context/musicContext";

function NarBar(props){
    let [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [musicState, setMusicState] = useContext(musicContext);

    function handleClick(event){
        setAnchorEl(event.currentTarget);
    }

    function handleClose(){
        setAnchorEl(null);
    }

    return (
        <div>
            <AppBar position={"static"}>
                <ToolBar sx={{
                    backgroundColor: "#1876D2"
                }}>
                    <IconButton
                        id="menu-button"
                        size="medium"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="navbar-menu"
                        aria-haspopup="true"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="navbar-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'menu-button',
                        }}
                    >
                        <MenuItem onClick={() => window.location.href = "/#"}>Home</MenuItem>
                        <MenuItem onClick={() => window.location.href = "/#/about"}>About</MenuItem>
                        <MenuItem onClick={() => setMusicState(!musicState)}>{(musicState) ? "Play music: ON" : "Play music: OFF"}</MenuItem>
                    </Menu>
                    <h1 className={"navbar-text"}>Unimelb Subject Tree</h1>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NarBar;