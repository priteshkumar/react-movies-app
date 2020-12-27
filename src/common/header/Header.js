import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { ModalIsOpen: false, value: 0 };
    }

    openModalHandler = () => {
        this.setState({ ModalIsOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ ModalIsOpen: false });
    }
    
    onTabchangeHandler = (event, value) => {
        this.setState({ value });
    }

    render() {
        return (
            <div className="masthead">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained" color="default" size="large" onClick={this.openModalHandler}>Login</Button>
                <Modal ariaHideApp={false} isOpen={this.state.ModalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
                    <Tabs value={this.state.value} onChange={this.onTabchangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="REGISTER" />
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default Header;