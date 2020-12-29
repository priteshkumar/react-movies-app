import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0 }}>{props.children}</Typography>
    );
}


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
                <Modal style={customStyles} ariaHideApp={false} isOpen={this.state.ModalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
                    <Tabs value={this.state.value} onChange={this.onTabchangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="REGISTER" />
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input type="text" id="username" aria-describedby="enter username" />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password" id="password" aria-describedby="enter password" />
                        </FormControl>
                    </TabContainer>
                </Modal>
            </div>
        );
    }
}

export default Header;