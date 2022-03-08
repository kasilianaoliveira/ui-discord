import React from "react";
import Logo from "../../assets/Logo.svg";
import { Button } from "./styles";
import { Props } from "./types";

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Girl" />}
    </Button>
  );
};

export default ServerButton;
