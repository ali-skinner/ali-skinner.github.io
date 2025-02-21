import { AppBar, Box, IconButton } from "@mui/material";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Header() {
    const location = useLocation();
    const onSearchPage = location.pathname === '/projects';
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px",
                }} >
                {/* Make button bounce/update path/transitions*/}
                {!onSearchPage && (
                    <IconButton
                        aria-label="back arrow"
                        onClick={() => navigate('/projects')}
                    >
                        <ArrowCircleLeftIcon fontSize="large" />
                    </IconButton>
                )}
                <h2>Ali's Portfolio</h2>

            </AppBar>
            <Outlet />
        </Box>
    )
}