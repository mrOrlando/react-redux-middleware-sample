import React, { PureComponent } from 'react';

export default class UserComponent extends PureComponent {
  render() {
    const user = this.props.user;
    return <div>{user.name}</div>;
  }
}
