import React, { useState } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function NavBar() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header as={NavLink} exact to='/'>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item name='Events' as={NavLink} to='/events' />
        {isAuthenticated && 
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button positive inverted content='Create Event' />
        </Menu.Item>}
        {isAuthenticated ? 
          <SignedInMenu setAuthenticated={setAuthenticated} />
          : 
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        }
      </Container>
    </Menu>
  );
}
