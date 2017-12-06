import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class Godwin extends Component {
  render() {
    return (<Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
    );
  }
}

export default Godwin;
