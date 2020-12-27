import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { ModalIsOpen: false };
    }

    openModalHandler = () => {
        this.setState({ ModalIsOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ModalIsOpen:false});
    }

    render() {
        return (
            <div className="masthead">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained" color="default" size="large" onClick={this.openModalHandler}>Login</Button>
                <Modal ariaHideApp={false} isOpen={this.state.ModalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
                </Modal>
            </div>
        );
    }
}

export default Header;