import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteItem extends Component {
    changeData = () => {
        this.props.changeEditStatus();
        //console.log(this.props.editData);
        this.props.getEditData(this.props.editData);
    }
    deleteData = () => {        
        this.props.getDeleteData(this.props.editData.id);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="section1HeaderId">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number"+ this.props.i} aria-expanded="true" aria-controls="section1ContentId">
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button onClick={()=>this.changeData()}  className="btn btn-success">Sửa</button>
                            <button onClick={()=>this.deleteData()} className="btn btn-danger">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                    {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      editStatus : state.isEdit
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type:'CHANGE_EDIT_STATUS'})
      },
      getEditData: (editItem) => {
        dispatch({type:'GET_EDIT_DATA',editItem})
      },
      getDeleteData: (deleteId) => {
        dispatch({type:'DELETE',deleteId})
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(NoteItem)