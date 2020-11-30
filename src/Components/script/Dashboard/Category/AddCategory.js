import React, { Component } from 'react'
import {onAddCategory} from './../../../Redux/category/CategoryAction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
class AddCategory extends Component {
    constructor(props){
        super();
        this.state={categoryName:""};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        //console.log(this.state);
        const obj={
            categoryName:this.state.categoryName,
        }
        this.props.onAddCategory(obj);
    }
    render() {
        const {categoryName}=this.state;
        //console.log(this.props);
        const {success_msg,error_msg}=this.props.categories;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4"> 
                        <h1>Add Category</h1>
                        {success_msg?<p className="text-success">{success_msg}</p>:null}
                        {error_msg?<p className="text-danger">{error_msg}</p>:null}
                        <div className="form-group">
                            <label>Category Name</label>
                            <input type="text" className="form-control" name="categoryName" value={categoryName} onChange={this.onHandleChange}/>
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

const mapStateToProps=state=>({
    categories:state.categories,
});


export default connect (mapStateToProps, {onAddCategory})(withRouter(AddCategory));
