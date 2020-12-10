import React, { Component } from 'react'
import {onFetchCategory} from './../../../Redux/category/CategoryAction';
import {onAddProduct} from './../../../Redux/product/ProductAction';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import { Spinner } from 'reactstrap';
class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            quantity:"",
            description:"",
            image:"",
            categoryId:""
        }
    }

    componentDidMount=()=>{
        this.props.onFetchCategory();
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onFileChange=(e)=>{
        //console.log(e.target.files[0]);
        this.setState({image:e.target.files[0]});
    }
    onSubmit=()=>{
        const obj={
            name:this.state.name,
            categoryId:this.state.categoryId,
            image:this.state.image,
            price:this.state.price,
            description:this.state.description,
            quantity:this.state.quantity,
        }
        this.props.onAddProduct(obj);
    }
    render() {
        const {name, price, quantity, description, categoryId, image}=this.state;
        const category=this.props.categories;
        if(category.data_state=="NOT_INITIALIZED" || category.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }
        else{
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card py-4">
                        <h1>Add Product</h1>
                        <div className="form-group">
                            <label>Category Name</label>
                            <select className="form-control" name="categoryId" value={categoryId} onChange={this.onHandleChange}>
                                <option>--Select Category--</option>
                                {category.category.map((el,index)=>(
                                    <option key={el._id} value={el._id}>{el.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Price: </label>
                            <input type="text" className="form-control" name="price" value={price} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Quantity: </label>
                            <input type="text" className="form-control" name="quantity" value={quantity} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <textarea className="form-control" name="description" value={description} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Image:</label>
                            <input type="file" className="form-control-file" name="image" onChange={this.onFileChange}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
}

const mapStateToProps=state=>({
    categories:state.categories,
});

export default  connect (mapStateToProps,{onFetchCategory, onAddProduct})(withRouter(AddProduct));