import React from "react";
import { passwordStore } from "@/store";

const PasswordsList = () => {
  const passwords = passwordStore((state: any) => state.passwords);
  return <div>{passwords.length}</div>;
};

export default PasswordsList;
