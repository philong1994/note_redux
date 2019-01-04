import React, { Component } from 'react';
import NoteList from './component/NoteList';
import NoteAdd from './component/NoteAdd';
import { connect } from 'react-redux';
import NoteEdit from './component/NoteEdit';
import Alerts from './component/Alerts';

class App extends Component {
  showForm = () =>{
    if(this.props.isEdit === false){
      return <NoteAdd/>
    }else{
      return <NoteEdit/>
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Quản lý ghi chú</h1>
          <Alerts/>
          <div className="row">
            <NoteList/>
            {this.showForm()}
          </div>    
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(App)
