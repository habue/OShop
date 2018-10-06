import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { deepPurple100 } from 'material-ui/styles/colors';
import CatalogIcon from 'material-ui/svg-icons/action/shopping-basket';
import AddIcon from 'material-ui/svg-icons/content/add-box';

export const AppDrawer = (props) => (
    <Drawer
        open={props.open}
        docked={false}
        onRequestChange={open => props.onToggle(open)}
        style={{backgroundColor: deepPurple100}}
    >
        <MenuItem
            onClick={props.onLinkClick}
            leftIcon={<CatalogIcon />}
            primaryText="Каталог"
            containerElement={<Link to="/" />}
        />
        <MenuItem
            onClick={props.onLinkClick}
            leftIcon={<AddIcon />}
            primaryText="Добавить товар"
            containerElement={<Link to="/add-item" />}
        />
    </Drawer>
)
