import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   container :{
    padding:15
   },
   imageStyle : {
       overflow: "hidden"
   },
   desc : {
    maxHeight : 20, 
    textOverflow: "ellipsis"
   }   
  }));


const ProductListing = (props)=>{
const classes = useStyles();

const productData = props.productData.map(item=>{
    
   return <Grid item md={3} key ={item.compositeProducts[0].compositeProductId} className= {classes.container}> 
    <div>   
   <img className= {classes.imageStyle} src={item.compositeProducts[0].EProductMedia.smallURI} />
   <p>ProductId : {item.compositeProducts[0].compositeProductId}</p>
   <p className= {classes.desc}>{item.compositeProducts[0].description}</p>
   <p>Price : {item.compositeProducts[0].priceEntry.listPrice}</p> 
   <p>
       {/* <Link to ={`/productDetailsPage/${item.compositeProducts[0].compositeProductId}`}>View Deatils</Link> */}
       <Link to ={`/productDetailsPage/${item.sfid}`}>View Deatils</Link>       
     </p>
   </div>
   </Grid>
});
    return (
        <div>
            <Container style={{display: "flex", flexWrap: "wrap" }}>
                {productData}
            </Container>
        </div>
    )
}

export default ProductListing;