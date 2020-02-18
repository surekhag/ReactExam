import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getProductDetails} from '../../actions/productDetailsActions';

const ProductDetailsPage =(props)=>{
    const token = localStorage.getItem('token');    
    let data =props.productDeatils;
    useEffect(()=>{         
      props.getProductDetails(props.match.params.id);
    }, []);

    if(props.productDeatils){
        console.log("data present", props.productDeatils);
        let data =props.productDeatils;   
    }
return(
    <div>
        
        {props.productDeatils ? <div key={data.sfid}>
            <p>{data.sfdcName}</p>
            <p> {data.shortDesc}</p>
       <p> SKU : {data.SKU} </p>
       <img src={data.compositeProducts[0].EProductMedia.smallURI}/>
        </div> : 'Loading ..'}
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