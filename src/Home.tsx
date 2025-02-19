import { Outlet } from 'react-router';
import { Box } from '@mui/material';

export default function Home() {

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'auto',
            }}
        >
            <h1>Home/Main Page</h1>
            <Outlet />
        </Box>
    )
}