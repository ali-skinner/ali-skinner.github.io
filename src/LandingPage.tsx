import { Box, Button } from "@mui/material";
import { Link } from "react-router";

export default function LandingPage() {

    return (
        <Box sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }} >
            <h1>Welcome!</h1>
            <Button variant="contained" to="/projects" component={Link}>
                View Projects
            </Button>
        </Box>
    )
}