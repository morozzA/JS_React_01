import styled from '@emotion/styled';

export const Profile = styled.div`
  padding-top: 20px;
  background-color: white;
  border-radius: 8px;
  margin: auto;
`;

export const ProfileDescr = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 500;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  color: gray;
`;

export const Location = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: gray;
`;

export const List = styled.ul`
  padding: 5px;
  margin: 0;
  display: flex;
  list-style-type: none;
  font-size: 18px;
  background-color: #dcdcdc;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Item = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #a9a9a9;

  &:last-child {
    border: none;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: gray;
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
