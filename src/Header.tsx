import { AppBar, Box, IconButton } from "@mui/material";
import { Outlet } from "react-router";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Header() {

    return (
        <Box>
        <AppBar
            sx={{
                display: "flex",
                flexDirection: "row",

            }} >
             {/* Make button bounce/update path/transitions*/}   
            <IconButton aria-label="back arrow">
                <ArrowCircleLeftIcon fontSize="large"/> 
            </IconButton>
            <h2>Header</h2>

        </AppBar>
                <Outlet />
            </Box>
    )
}