import { Box } from "@mui/material";
import { Outlet } from "react-router";

export default function Header() {

    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",

        }} >
            <h1>Header</h1>
            <Box>
                <Outlet />
            </Box>

        </Box>
    )
}