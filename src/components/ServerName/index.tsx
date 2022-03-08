import React from "react";
import { Container, Title, ExpandIcon } from "./styles";
import ServerList from "../ServerList";

const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>Servidor da Kasi</Title>
      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
