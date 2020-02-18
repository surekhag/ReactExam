import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    page : {
        paddingTop : 20,
        display: 'flex'
    }
  }));

const ProductInfo= (props)=>{
    const classes = useStyles();
    const data = props.productData;   
    return(
        <Container className={classes.page} key={data.sfid}>
            <Grid item md={3}>
            <img src={data.compositeProducts[0].EProductMedia.smallURI}/>
            </Grid>
            <Grid item md={9}>
            <h1>{data.sfdcName}</h1>
            <h1>Product ID : {data.sfid}</h1>
            <p> {data.shortDesc}</p>
            <p> <span><strong>SKU :</strong></span> {data.SKU} </p>
            </Grid>
        </Container> 
   )}

export default ProductInfo;