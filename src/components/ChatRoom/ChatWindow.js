import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const WrapperStyled = styled.div`
  height: 100vh;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border-radius: 2px;
  border: 1px solid rgb(230, 230, 230);

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__description">Đây là phòng 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Mời
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="text"
            displayName="Tung"
            createAt={123123123123}
            photoURL={null}
          />
          <Message
            text="text 2"
            displayName="Son"
            createAt={123123123123}
            photoURL={null}
          />
          <Message
            text="text 3"
            displayName="Long"
            createAt={123123123123}
            photoURL={null}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Nhập tin nhắn"
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
