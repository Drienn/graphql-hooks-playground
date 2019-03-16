import React, { useState } from 'react';
import { useMutation } from 'graphql-hooks';

const CREATE_NEW_USER = `
mutation createUser($name: String!) {
    createUser(name: $name) {
        id
        name
    }
  }
`;

const CreateUser = ({ onSuccess }) => {
  const [newUser, setNewUser] = useState('');
  const [createUser, { loading, error }] = useMutation(CREATE_NEW_USER);

  return (
    <>
      <h3>Create a New User!?</h3>
      {loading && <p>Uploading...</p>}
      {error && <p>Error Uploading!...</p>}
      <input
        onChange={({ target: { value } }) => setNewUser(value)}
        value={newUser}
      />
      <button
        disabled={!newUser.length}
        onClick={async () => {
          setNewUser('');
          await createUser({ variables: { name: newUser } });
          onSuccess && onSuccess();
        }}
      >
        Create!
      </button>
    </>
  );
};

export default CreateUser;
