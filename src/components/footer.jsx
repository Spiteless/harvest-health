import React from 'react';
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center"
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