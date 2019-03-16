import React from 'react';
import { useQuery, useMutation } from 'graphql-hooks';
import UserList from './UserList';
import CreateUser from './CreateUser';

const GET_ALL_USERS_QUERY = `
query {
    allUsers {
        name
        id
        dateOfBirth
    }
}
`;

const DELETE_USER_MUTATION = `
mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      name
    }
  }`;

const User = props => {
  const { loading, data, error, refetch } = useQuery(GET_ALL_USERS_QUERY);
  const [
    deleteUser,
    { loading: loadingDeleteUser, error: errorDeleteUser }
  ] = useMutation(DELETE_USER_MUTATION);

  return (
    <>
      <CreateUser onSuccess={refetch} />
      <UserList
        data={data}
        loading={loading}
        error={error}
        refetch={refetch}
        deleteUser={deleteUser}
      />
    </>
  );
};

export default User;
