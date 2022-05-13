import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import ListRoom from "./ListRoom";
import styled from "styled-components";

const SideBarStyled = styled.div`
  height: 100vh;
  color: white;
  background-color: #3f0e40;
`;

export default function SideBar() {
  return (
    <SideBarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <ListRoom />
        </Col>
      </Row>
    </SideBarStyled>
  );
}
