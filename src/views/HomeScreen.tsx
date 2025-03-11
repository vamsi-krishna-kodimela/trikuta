import React from "react";
import { AddNewPassword, PasswordsList } from "./components";

const HomeScreen = () => {
  return (
    <div>
      <PasswordsList />
      <AddNewPassword />
    </div>
  );
};

export default HomeScreen;
