import styled from 'styled-components';

export const TableComponentWrapper = styled.div`
  overflow-x: auto;
`;
// ?!TableHeader styled components code here

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  padding: 5px;
  background: ${(props: any) => props.theme?.themePresets?.table?.background || 'transparent'};
  color: ${(props: any) => props.theme?.themePresets?.table?.text || '#fff'};
`;
// thead code here
export const TableHeader = styled.thead`
  border-top: ${(props: any) => props.theme?.themePresets?.table?.border || '#eee'} 1px solid;
  color: ${(props: any) => props.theme?.themePresets?.table?.headerText || 'black'};
  background: ${(props: any) => props.theme?.themePresets?.table?.headerBg || 'transparent'};
`;
// table row code here
export const TableRow = styled.tr<any>`
  border-bottom: ${(props: any) => props.theme?.themePresets?.table?.border || '#eee'} 1px solid;
  cursor: ${(props: any) => (props.$isOnclickRow == 'click' ? 'pointer' : 'default')};
`;
// table head code here
export const TableHead = styled.th`
  text-align: left;
  padding: 8px;
`;
// table data code here
export const TableData = styled.td`
  padding: 0 8px;
  height: 50px;
  color: ${(props: any) => props.theme?.themePresets?.table?.celltext || ''};
`;
export const TableBody = styled.tbody`
  background: ${(props: any) => props.theme?.themePresets?.table?.background || ''};
`;

// ?! table custom checkbox code here
export const TableCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  background: #fff;
  &:checked {
    background: #26a5e0;
  }
`;

// ?! no data found styled components code here for table
export const TableDataNone = styled.div`
  height: 100px;
  color: #070000;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #e4e4e4;
  margin: 12px;
`;
export const TableHeaderNone = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  color: #070000;
  line-height: 31px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-around;
`;
export const TableHeaderFirst = styled.div`
  text-align: center;
  width: 100%;
  border-right: 1px solid #e4e4e4;
`;
export const TableHeaderLast = styled.div`
  text-align: center;
  width: 100%;
`;
export const TableDataLast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 15px;
`;
