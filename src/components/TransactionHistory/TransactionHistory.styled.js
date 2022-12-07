import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  background-color: white;
  border-radius: 8px;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  background-color: #00bcd5;
  color: white;
  font-size: 24px;
`;

export const TheadTR = styled.tr`
  height: 60px;
`;

export const TheadTH = styled.th`
  width: 300px;
`;

export const Tbody = styled.tbody`
  font-size: 24px;
  /* text-align: center; */
`;

export const TbodyTR = styled.tr`
  height: 40px;
  text-align: center;

  &:nth-child(2n) {
    background-color: #ecf1f3;
  }
`;

export const TbodyTDType = styled.td`
  padding-left: 110px;
  text-align: start;
`;

export const TbodyTDAmount = styled.td`
  padding-right: 120px;
  text-align: end;
`;

export const TbodyTDCurrency = styled.td`
  padding-left: 120px;
  text-align: start;
`;
