import React, { Component } from 'react'
import {onFetchCategory} from './../../../Redux/category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';
class ViewCategory extends Component {
    componentDidMount(){
        this.props.onFetchCategory();
    }
    render() {
        //console.log(this.props);
        const category=this.props.categories;
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
                <table className="table">
                    <thead className="thead-dark">
                       <th>S No.</th> 
                       <th>Category Name</th>
                    </thead>
                    <tbody>
                    {category.category.map((el,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{el.categoryName}</td>
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

export default connect(mapStateToProps,{onFetchCategory})(withRouter(ViewCategory));

