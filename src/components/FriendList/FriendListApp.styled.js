import styled from '@emotion/styled';

export const FriendList = styled.ul`
  margin: 0px;
  padding: 10px;
  width: 300px;
  background-color: white;
  border-radius: 8px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  list-style-type: none;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const StatusOn = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StatusOff = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  margin-right: 10px;
`;
