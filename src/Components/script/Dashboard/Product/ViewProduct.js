import React, { Component } from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {Spinner} from 'reactstrap';
import {onFetchProduct} from './../../../Redux/product/ProductAction';
class ViewProduct extends Component {
    componentDidMount=()=>{
        this.props.onFetchProduct();
    }
    render() {
        console.log(this.props);
        const {products}=this.props;
        if(products.data_state=="NOT_INITIALIZED" || products.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }else{
        return (
            <div className="container mt-5 card p-4">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.products.map((el,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{el.name}</td>
                            <td><img height="100" width="100" src={`http://localhost:5000/${el.image}`}/></td>
                            <td>{el.categoryId.categoryName}</td>
                            <td>{el.price}</td>
                            <td>{el.quantity}</td>
                            <td>{el.description}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
        }
    }
}

const mapStateToProps=state=>({
    products:state.products,
})
export default connect(mapStateToProps,{onFetchProduct})(withRouter(ViewProduct));