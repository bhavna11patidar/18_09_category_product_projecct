import React, { Component } from 'react'
import {onFetchCategory, onDeleteCategory} from './../../../Redux/category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';
class ViewCategory extends Component {
    componentDidMount(){
        this.props.onFetchCategory();
    }

    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteCategory(id);
        if(res){
            this.props.onFetchCategory();
        }
    }
    render() {
        //console.log(this.props);
        const category=this.props.categories;
        const {success_msg,error_msg}=this.props.categories;
        //console.log(category)
        if(category.data_state=="NOT_INITIALIZED" || category.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }
        else if(category.data_state=="FETCHED_SUCCESS"){
            if(category.category.length>0){
        return (
            <div className="container py-5">
                <h1 className="text-center text-info"> Categories</h1>
                
                {success_msg?<p className="text-success">{success_msg}</p>:null}
                {error_msg?<p className="text-danger">{error_msg}</p>:null}
                <table className="table">
                    <thead className="thead-dark">
                       <th>S No.</th> 
                       <th>Category Name</th>
                       <th>Action</th>
                    </thead>
                    <tbody>
                    {category.category.map((el,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{el.categoryName}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                                <Link className="btn btn-success btn-sm" to={`edit-category/${el._id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
        }else{
            return(
            <h1>No Data Found , Please Add First</h1>
            )
        }
        }
    }
}

const mapStateToProps=state=>({
    categories:state.categories,
})

export default connect(mapStateToProps,{onFetchCategory, onDeleteCategory})(withRouter(ViewCategory));

