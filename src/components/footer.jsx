import React from 'react';
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '30vh',
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: '10vh',
        color: theme.palette.primary.main,
        
        fontSize: "1.2em",
    }
}))

function Footer() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <p>Copyright © {new Date().getFullYear()} - Harvest Health & Fitness - All Rights Reserved</p>
        </Container>
    );
}

export default Footer;