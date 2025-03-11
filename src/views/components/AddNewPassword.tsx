import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TPassword } from "@/types";

type Props = {
  onSave: (payload: TPassword) => void;
};

const AddNewPassword = ({ onSave }: Props) => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = website && password && username;
  const savePassword = () => {
    onSave({ website, username, password });
    setUsername("");
    setWebsite("");
    setUsername("");
  };
  return (
    <div className="w-full md:w-1/2 m-auto flex flex-col gap-4">
      <Input
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={!isFormValid} onClick={savePassword}>
        Save Securely
      </Button>
    </div>
  );
};

export default AddNewPassword;
