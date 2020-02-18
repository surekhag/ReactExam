import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {searchProduct,clearSearchResult } from '../../actions/searchActions';
import { connect } from 'react-redux';
import ProductListing from '../ProductListing/productListing'
import {  Redirect } from 'react-router-dom';

const SearchPage =(props)=>{    
const [searchTerm, setSearchTerm] = useState();
const token = localStorage.getItem('token');
useEffect(()=>{
  //Clear products when visited back to serach page from PDP
  props.clearSearchResult();
},[]);

const handleSearch  =(event)=>{
        event.preventDefault();           
        if(searchTerm){}
        props.searchProduct(searchTerm);
        // setSearchTerm('');
}

 
return(
    <div>
        <Container>
        {token ? "" : <Redirect to='/login' />}
        <h1>Search Products</h1>            
            <Grid item md={3}>
            <form  noValidate onSubmit = {handleSearch}>
          <TextField
            variant="outlined"
            margin="normal"
            required = {true}
            fullWidth
            id="search"
            label="Search Product"            
            name="email"
            autoComplete="search"
            autoFocus      
            // value={searchTerm}                
            onChange = {event =>{setSearchTerm(event.target.value)}}
          />
          </form>
              </Grid>
              </Container>
            {props.searchResult? <ProductListing productData = {props.searchResult}/> : ''}               
        
    </div>
)

}

const mapStateToProps =(state)=>({
  searchResult  : state.searchReducer.searchResult
});

const mapDispatchToProps = (dispatch)=>({
    searchProduct : (searchTerm)=>dispatch (searchProduct(searchTerm)),
    clearSearchResult : ()=>dispatch(clearSearchResult())
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);