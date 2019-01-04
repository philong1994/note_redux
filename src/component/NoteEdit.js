import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            noteTitle : '',
            noteContent : ''
        };
    }
    componentWillMount() {
        if(this.props.editItem){
            this.setState({
                id : this.props.editItem.id,
                noteTitle : this.props.editItem.noteTitle,
                noteContent : this.props.editItem.noteContent
            });
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    editData = () => {
        //console.log('');
        
      var editItem = {};
      editItem.id = this.state.id;
      editItem.noteTitle = this.state.noteTitle;
      editItem.noteContent = this.state.noteContent;
      this.props.editDataStore(editItem);
      this.props.changeEditStatus();
      this.props.alertOn("Sữa thành công");
      
    }
    render() {
        return (
            //console.log(this.state());
            
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        Sửa công việc
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tên ghi chú</label>
                                <input type="email" name="noteTitle"  defaultValue={this.props.editItem.noteTitle} className="form-control" onChange={(event) => this.isChange(event) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dưng ghi chú</label>
                                <textarea name = "noteContent"  className="form-control" defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event) }/>
                            </div>
                            <button type="reset" onClick={() => this.editData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-lg btn-block">Sửa nội dung</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editDataStore: (editItem) => {
            dispatch({type:"EDIT_DATA",editItem})
        },
        changeEditStatus: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
          },
          alertOn: (alertMessage) => {
            dispatch({type:"ALERT_ON",alertMessage})
            },
          alertOff: () => {
              dispatch({type:"ALERT_OFF"})
          },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit)