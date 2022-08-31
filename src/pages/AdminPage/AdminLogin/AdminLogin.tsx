import { authorizeAdmin } from "api/api";
import { GenericButton } from "components/GenericButton/GenericButton";
import React, { useState } from "react";
import "./styles/adminLogin.css";

export const AdminLogin = (props: IAdminLoginProps) => {
  const [error, setError] = useState("");

  const [secret, setSecret] = useState("");

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecret(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    const authResponse = await authorizeAdmin(secret);

    if (!authResponse.success) {
      setError(authResponse.message);
      return;
    }

    props.setIsAdmin(true);
  };

  return (
    <div className="admin__login">
      <label htmlFor="adminInput">Admin Secret:</label>
      <input id="adminInput" type="password" onChange={(e) => handleEdit(e)} />
      <GenericButton size="m" handleClick={handleSubmit}>
        Submit
      </GenericButton>
      {error && <p>{error}</p>}
    </div>
  );
};

interface IAdminLoginProps {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}
