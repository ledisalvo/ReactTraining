import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar({createEvent}) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item name="Events" as={NavLink} to='/events' />
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button positive inverted content="Create Event"/>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content="Login"/>
                    <Button basic inverted content="Register" style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
                <Menu name="Events" />
            </Container>

        </Menu>
    );
}