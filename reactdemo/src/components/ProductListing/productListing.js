import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
const ProductListing = (props)=>{
const productData = props.productData.map(item=>{
    
   return <Grid item md={3} key ={item.compositeProducts[0].compositeProductId}> 
    <div style={{padding:5}}>   
   <img src={item.compositeProducts[0].EProductMedia.smallURI} />
   <p>ProductId : {item.compositeProducts[0].compositeProductId}</p>
   <p style ={{maxHeight : 20, textOverflow: "ellipsis"}}>{item.compositeProducts[0].description}</p>
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