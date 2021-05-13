import React, { Component } from 'react';
import Checkbox from '../../src';
import '../../assets/index.less';

export default class Normal extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    disabled: false,
  };

  handleChange = (checked) => {
    console.log(checked);
  };

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <h2>actions</h2>
        <button
          onClick={() => {
            this.setState({ disabled: !disabled });
          }}
        >
          disabled({`${disabled}`})
        </button>
        <hr />
        <h2>show</h2>
        <hr />
        <label>
          <Checkbox disabled={disabled} onChange={this.handleChange} />
          &nbsp;wc-checkbox
        </label>
      </div>
    );
  }
}
