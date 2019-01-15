import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';

const { Header } = Layout;
const { Item } = Menu;

class Navbar extends Component {
  render() {
    if (this.props.auth.userData) {
      return (
        <Header>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[ '1' ]}
            style={{ lineHeight: '64px' }}
            >
            <Item key='1'>Home</Item>
            <Item key='2'>Gallery</Item>
          </Menu>
        </Header>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps, null)(Navbar);
