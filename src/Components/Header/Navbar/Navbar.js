import * as React from 'react';
import {AppBar, Button, IconButton, Box, Typography, ThemeProvider, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../../../theme";

const pages =  ["Portfolio", "Exchange", "About", "Blog"];

export default function Navbar() {
    return (

        <ThemeProvider theme={theme}>
            <div>
                <AppBar position="static" style={{backgroundColor: "#EDEFF2"}}>
                    <Box sx={{margin: 'auto'}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color={"primary"}
                            aria-label="menu"
                            sx={{mr: 2}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={"h5"} color={"primary"}>CryptoWatch</Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', marginLeft: 50} }}>
                            {pages.map((page) => (
                                <Button
                                key={page}
                                sx={{ my: 2, color: '{secondary}', display: 'block'}}>
                                    {page}
                                </Button>
                            ) )}
                        </Box>
                    </Toolbar>
                    </Box>
                </AppBar>
            </div>
</ThemeProvider>
    )
}
