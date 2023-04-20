import React, {useState, useEffect} from 'react';
import { fetchCoins } from "../../api/coinlayer";
import theme from "../../theme";
import {makeStyles} from '@mui/styles'
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
    Card,
    CardContent,
    Box, ThemeProvider, Container, TextField
} from "@mui/material";


const useStyles = makeStyles({
    customScrollBar: {
        '&::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#667EEA',
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#F5F5F5',
        },
    },
})

const Main =  () => {
    const [getData, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCoins();
                setData(data);
            } catch (error) {
                console.error("error fetching data 11");
            }
        };
        fetchData();
    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };


    const filteredCoinNames = (getData.data || []).filter((item) => (
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ));

    const coinNameList = filteredCoinNames.map((item) => (

        <TableRow key={item.name} sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">
                <Typography variant="subtitel1" color={"primary"}>
                    {item.name}
                </Typography>
            </TableCell>
            <TableCell align="left">
                <Typography variant="subtitel1" color={"primary"}>
                    ${parseFloat(item.priceUsd).toFixed(2)}
                </Typography>
            </TableCell>
        </TableRow>
    ));


    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box sx={{ flexGrow: 1, marginTop: 10 }}>
                    <Grid container spacing={2}>
                        {/* ... */}
                        <Grid item xs={7}>
                            <TableContainer component={Paper} style={{ backgroundColor: '#EDEFF2',  overflow: 'auto',  maxHeight: 700,  }} className={classes.customScrollBar}>
                                <TextField variant="outlined" value={searchQuery} onChange={handleSearchChange} label="Zoek coin"> </TextField>

                                <Table sx={{ minWidth: 650 }} aria-label="crypto table" stickyHeader>

                                    <TableHead style={{backgroundColor: '#EDEFF2'}}>
                                        <TableRow>
                                            <TableCell align="left">
                                                <Typography variant="subtitle1" color={"primary"}  style={{ position: 'sticky', top: 0}}>
                                                    Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant="subtitle1" color={"primary"}  style={{ position: 'sticky', top: 0 }}>
                                                    Price
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {coinNameList};
                                        {/*{Object.keys(exchangeRates).length > 0 ? exchangeRateList : <TableRow><TableCell>Loading...</TableCell></TableRow>}*/}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item xs={5}>
                            <Card style={{backgroundColor: "rgb(243 243 243)"}}>
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        Crypto Info
                                    </Typography>
                                    <Typography variant="body1">
                                        This section provides information about cryptocurrencies. Here you can find the name and current price of various cryptocurrencies.
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        To learn more about a specific cryptocurrency, you can search for it using the search bar. The results will update in real-time as you type.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );

};
export default Main;