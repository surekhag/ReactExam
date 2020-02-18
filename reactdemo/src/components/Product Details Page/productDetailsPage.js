import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getProductDetails} from '../../actions/productDetailsActions';
import ProductInfo from '../productInfo/productInfo';
import {  Redirect, Link } from 'react-router-dom';
const ProductDetailsPage =(props)=>{
    const token = localStorage.getItem('token');
    let data =props.productDeatils;
    useEffect(()=>{         
      props.getProductDetails(props.match.params.id);
    }, []);

    if(props.productDeatils){
        // console.log("data present", props.productDeatils);
        let data =props.productDeatils;   
    }
return(
    <div>
        {token ? "" : <Redirect to='/login' />}
        {props.productDeatils ? <ProductInfo productData = {data} /> : 'Loading Contents..'}

<br/>
        <Link to ='/search'>Back To Search Page</Link>
    </div>
)

}

const mapStateToProps =(state)=>({
    productDeatils  : state.productDeatilsReducer.productDeatils
  });
  
  const mapDispatchToProps = (dispatch)=>({
    getProductDetails : (productId)=>dispatch(getProductDetails(productId))
    });
    
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailsPage);