import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  onSave: (username: string, password: string, website: string) => void;
};

const AddNewPassword = ({ onSave }: Props) => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = website && password && username;
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
      <Button
        disabled={!isFormValid}
        onClick={() => onSave(username, password, website)}
      >
        Save Securely
      </Button>
    </div>
  );
};

export default AddNewPassword;
