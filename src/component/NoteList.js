import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { noteData } from '.././config/firebaseConnect';
class noteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataFireBase : []
    };
}
componentWillMount() {
    noteData.on('value',(notes)=>{
        var arrayData = [];
        notes.forEach(element => {
            const key = element.key;
            const title = element.val().noteTitle
            const content = element.val().noteContent
            arrayData.push({
                id : key ,
                noteTitle : title,
                noteContent : content
            });
        });
        //console.log(arrayData);
        this.setState({
            dataFireBase : arrayData
        });
        
    });
}
getData = () => {
    return this.state.dataFireBase.map((value,key)=>{
      return <NoteItem 
      key={key} 
      i={key+1}
      editData = {value} 
      noteTitle={value.noteTitle} 
      noteContent={value.noteContent}/>
    })
}
    render() {
        return (
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  Danh sách công việc
                </div>
                <div className="card-body">
                  <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default noteList;