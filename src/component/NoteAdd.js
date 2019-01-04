import React, { Component } from 'react';
import { connect } from 'react-redux';

class noteAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle : '',
            noteContent : ''
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    addData = (title,content) => {
      var item = {};
      item.noteTitle = title;
      item.noteContent = content;
      //this.props.getData(item);
      this.props.addDataStore(item);
      this.props.alertOn("Thêm mới thành công");
    }
    render() {
        return (
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        Thêm công việc
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tên ghi chú</label>
                                <input type="email" name="noteTitle" className="form-control" onChange={(event) => this.isChange(event) } />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dưng ghi chú</label>
                                <textarea name = "noteContent"  className="form-control" defaultValue={""} onChange={(event) => this.isChange(event) }/>
                            </div>
                            <button type="reset" onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-lg btn-block">Lưu</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        testNoteAdd: state.testConnect
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({type:"ADD_DATA",item})
        },
        alertOn: (alertMessage) => {
            dispatch({type:"ALERT_ON",alertMessage})
        },
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(noteAdd)