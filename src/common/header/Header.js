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
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';

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
        <Typography component="div" align="center" style={{ padding: 0 }}>{props.children}</Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalIsOpen: false,
            value: 0,
            username: "",
            usernameRequired: "dispNone"
        };
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

    btnClickhandler = (event) => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
    }

    userNameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div className="masthead">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained" color="default" size="large" onClick={this.openModalHandler}>Login</Button>
                <Modal style={customStyles} ariaHideApp={false} isOpen={this.state.ModalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.onTabchangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="REGISTER" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input type="text" id="username" username={this.state.username} aria-describedby="enter username" onChange={this.userNameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">Required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input type="password" id="password" aria-describedby="enter password" />
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.btnClickhandler}>LOGIN</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>
        );
    }
}

export default Header;