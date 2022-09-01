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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const authResponse = await authorizeAdmin(secret);

    if (!authResponse.success) {
      setError(authResponse.message);
      return;
    }

    props.setIsAdmin(true);
  };

  return (
    <>
      <form className="admin__login">
        <label htmlFor="admin__secret">Admin Secret:</label>
        <input
          id="admin__secret"
          type="password"
          onChange={(e) => handleEdit(e)}
        />
        <GenericButton size="m" handleClick={handleSubmit}>
          Submit
        </GenericButton>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

interface IAdminLoginProps {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}
