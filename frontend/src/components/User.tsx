import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p>
        Nome: <strong>{user.name}</strong>
      </p>
      <p>
        E-mail: <strong>{user.email}</strong>
      </p>
    </div>
  );
};

export default User;
