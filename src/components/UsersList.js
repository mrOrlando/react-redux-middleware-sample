import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchUserRequest } from '../actions/userActions';

import UserComponent from './UserComponent';

class UsersList extends PureComponent {
  componentDidMount() {
    const { fetchUserRequest, isFetched } = this.props;
    if (!isFetched) fetchUserRequest();
  }

  render() {
    const { isFetching, error, users } = this.props;

    if (isFetching) return <p>Загружаем данные...</p>;
    if (error != null)
      return (
        <div>
          <p>Ошибка при загрузке данных:</p>
          <p>{error}</p>
        </div>
      );
    return (
      <div>
        <h3>User list:</h3>
        {users.map(user => <UserComponent key={user.guid} user={user} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  users: state.users,
  isFetching: state.isFetching,
  isFetched: state.isFetched,
});

const mapDispatchToProps = { fetchUserRequest };
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
