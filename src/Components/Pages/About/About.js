import React, {useState, useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import theme from "../../../theme";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    Box, ThemeProvider, Container, Accordion, AccordionSummary, AccordionDetails, Card
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        console.log("gelikt");
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Container style={{marginTop: '60px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">

                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Benefits
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>What are the key features and benefits of using your cryptocurrency platform?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">

                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Security & Privacy
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>How does your platform ensure the security and privacy of users' funds and information?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">

                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Partnerships & Collaborations
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>What partnerships and collaborations have you established within the cryptocurrency ecosystem?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">

                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Involving
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        How can users get involved in your platform, such as participating in staking, governance, or community initiatives?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </Grid>
                    </Grid>
                </Container>

            </div>
        </ThemeProvider>

    )
}

export default About