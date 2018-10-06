import React from 'react';
import AppBar from 'material-ui/AppBar';
import logo from './logo.png'
import { deepPurple900 } from 'material-ui/styles/colors';

export const Header = (props) => (
    <AppBar
        title={<img src={logo} className="app-logo" alt="logo" />}
        style={{ background: deepPurple900 }}
        onLeftIconButtonClick={() => props.onLeftIconClick()}
    />
)
