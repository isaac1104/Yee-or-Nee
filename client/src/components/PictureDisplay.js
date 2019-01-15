import React, { Component } from 'react';
import { Button } from 'antd';
import SelectButton from './SelectButton';

class PictureDisplay extends Component {
  render() {
    const styles = {
      frame: {
        border: '2px solid #ffffff',
        height: '30em',
        width: '25em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonGroup: {
        marginTop: '2em'
      }
    }

    return (
      <div>
        <div style={styles.frame}>
          <h1>Picture</h1>
        </div>
        <div style={styles.buttonGroup}>
          <SelectButton title='Yee' type='primary' size='large' />
          <SelectButton title='Nee' type='danger' size='large' />
        </div>
      </div>
    );
  }
}

export default PictureDisplay;