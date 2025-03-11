import React from "react";
import { AddNewPassword, PasswordsList } from "./components";
import { useStore } from "zustand";
import { passwordStore } from "@/store";
import { TPassword } from "@/types";

const HomeScreen = () => {
  const storePassword = passwordStore((state: any) => state.storePassword);
  const savePassword = (password: TPassword) => {
    storePassword(password);
  };
  return (
    <div>
      <PasswordsList />
      <AddNewPassword onSave={savePassword} />
    </div>
  );
};

export default HomeScreen;
