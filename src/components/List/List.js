import React, { useState } from 'react';
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const places = [
    { name: 'Cool' },
    { name: 'Best Beer' },
    { name: 'Best steak' },
    { name: 'Cool' },
    { name: 'Best Beer' },
    { name: 'Best steak' },
    { name: 'Cool' },
    { name: 'Best Beer' },
    { name: 'Best steak' },
    { name: 'Cool' },
    { name: 'Best Beer' },
    { name: 'Best steak' }
];

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography className={classes} variant="h4">
                Restaurants, Hotels and Attractions around you.
            </Typography>
            {/* Type */}
            <FormControl className={classes.FormControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={ev => setType(ev.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            {/*  Ratings */}
            <FormControl className={classes.FormControl}>
                <InputLabel>Rating</InputLabel>
                <Select
                    value={rating}
                    onChange={ev => setRating(ev.target.value)}
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            {/* Grid of Results */}
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} sx={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default List;
