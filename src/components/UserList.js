import React, { useState } from 'react';

const UserList = ({ loading, data, error, deleteUser, refetch }) => {
  const [initialLoad, setInitialLoad] = useState(true);

  const renderList = () => {
    if (loading && initialLoad) return <p>Loading.......</p>;
    if (error) return <p>There was an Error! {JSON.stringify(error)}</p>;
    if (initialLoad) setInitialLoad(false);
    return data.allUsers.map(({ id, name }) => (
      <li key={id}>
        Name: {name}{' '}
        <button
          onClick={async () => {
            await deleteUser({ variables: { id } });
            refetch && refetch();
          }}
        >
          X
        </button>
      </li>
    ));
  };

  return (
    <>
      <h2>I'm a UserList and here are the users!</h2>
      <ul>{renderList()}</ul>
    </>
  );
};

export default UserList;
