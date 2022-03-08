import React from "react";
import { Container, HastagIcon, Title, Separator, Description } from "./styles";
import ServerList from "../ServerList";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HastagIcon />
      <Title>Channel-Test</Title>
      <Separator />
      <Description>Canal aberto para conversa</Description>
    </Container>
  );
};

export default ChannelInfo;
