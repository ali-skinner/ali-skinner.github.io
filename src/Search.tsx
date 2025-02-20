import { Box, Paper } from '@mui/material';

const projectCards = [{}, {}];

export default function Search() {

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                gap: "5px",
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                alignItems: "center",
            }}
        >
            <h1>Search Page</h1>
            {projectCards.map((card) => {

                return <ProjectCard {...card} />
            }
            )}
        </Box>
    )
}

function ProjectCard() {

    return (
        <Paper
            sx={{
                width: "200px",
                height: "200px",


            }}>

        </Paper>
    )
}