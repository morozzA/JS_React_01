import styled from '@emotion/styled';

export const Stats = styled.section`
  background-color: white;
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 50px;
  font-size: 32px;
  color: black;
`;

export const StatList = styled.ul`
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  padding: 20px;

  &:first-child {
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }
`;

export const Label = styled.span`
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  text-align: center;
  font-size: 20px;
`;
