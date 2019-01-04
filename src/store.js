import { noteData } from './config/firebaseConnect';
var redux = require('redux');
const noteInitialState = {
    isEdit : false,
    editItem : {},
    alertShow : false,
    alertMessage : ''
};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA" :
            noteData.push(action.item);
            console.log("Đã thêm thành công");
            return state
        case "CHANGE_EDIT_STATUS" :
            return {...state,isEdit:!state.isEdit}
        case "ALERT_ON" :
            console.log(action.alertMessage);
            
            return {...state,alertShow:true,alertMessage: action.alertMessage}
        case "ALERT_OFF" :
            return {...state,alertShow:false}
        case "GET_EDIT_DATA" :
            return {...state,editItem:action.editItem}
        case "EDIT_DATA" :
            noteData.child(action.editItem.id).update({
                noteTitle: action.editItem.noteTitle,
                noteContent: action.editItem.noteContent
            })
            console.log("đã cập nhật dữ liệu" + JSON.stringify(action.editItem));
            return state
        case "DELETE" :
            noteData.child(action.deleteId).remove();
            console.log("đã xóa Id : " + action.deleteId);
            
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    //console.log(JSON.stringify(store.getState()));
    
})
export default store;
