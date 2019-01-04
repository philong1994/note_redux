import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class Alerts extends Component {
    onDismiss = () => {
        this.props.alertOff();
    }
    render() {
        console.log(this.props);
        
        if(this.props.alertShow ===false) return null;
        return (
            <AlertContainer>
                <Alert onDismiss = {()=>this.onDismiss()} type="success" timeout={1000}>
                   {this.props.alertMessage}
                </Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertMessage: state.alertMessage
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alerts)