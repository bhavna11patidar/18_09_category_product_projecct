import React, { Component } from 'react'
import {onUpdateCategory, getSingleCategory} from './../../../Redux/category/CategoryAction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
class EditCategory extends Component {
    constructor(props){
        super(props);
        this.state={id:"",categoryName:""};
        //console.log(props);
        const id=props.match.params.id;
        this.getSingleCategoryAction(id);
    }

    getSingleCategoryAction=async (id)=>{
        //console.log(this.props);
       const res= await this.props.getSingleCategory(id);
       //console.log(res);
       if(res){
           this.setState({categoryName:res.categoryName,id:res._id})
       }
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        //console.log(this.state);
        const obj={
            categoryName:this.state.categoryName,
            id:this.state.id,
        }
        this.props.onUpdateCategory(obj, this.props.history);
    }
    render() {
        const {categoryName}=this.state;
        //console.log(this.props);
        
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4"> 
                        <h1>Edit Category</h1>
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


export default connect (mapStateToProps, {onUpdateCategory, getSingleCategory})(withRouter(EditCategory));
