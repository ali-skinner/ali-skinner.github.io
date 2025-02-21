import { Box, Card, CardActionArea, CardContent, Paper } from '@mui/material';
import { useNavigate } from 'react-router';



const projectCards = [
    {
        title: "Let's Play Simon!",
        description: "Built interactive game with CSS and HTML",
        link: "/projects/simon"
    },

    {
        title: "Blackjack",
        description: "Built interactive game with JavaScript, CSS and HTML",
        link: "/projects/blackjack"
    },

    {
        title: "ToDo List App",
        description: "List app built with React",
        link: "/projects/todo"
    },
];

export default function Search() {
    const navigate = useNavigate();

    const cardClickHandler = (link) => {
        navigate(link);
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                margin: '10px',
                padding: 0,
                gap: "10px",
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                alignItems: "center",
            }}
        >
            <h1>Project Search</h1>
            {projectCards.map((card, index) => {

                return <ProjectCard onClick={() => cardClickHandler(card.link)} {...card} />
            }
            )}
        </Box>
    )
}

function ProjectCard({ title, description, onClick}) {


    return (
        <Card
            sx={{
                width: "200px",
                height: "200px",
            }}>
            <CardActionArea onClick={onClick} sx={{ height: "100%" }}>
                <CardContent>
                    {title}
                    {description}
                </CardContent>


            </CardActionArea>


        </Card>
    )
}

