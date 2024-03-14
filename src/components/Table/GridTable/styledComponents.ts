import styled from 'styled-components';
export const GridTableWrapperArea = styled.div`
  /* background-color: #1c1c1c; */
  background-color: ${(props: any) => props.theme?.themePresets?.table?.wrapper || 'transparent'};
  padding: 0px 10px;

  border-radius: 8px;
`;
export const GridContainer = styled.div`
  /* padding: 10px 10px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const GridTableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //   flex-wrap: wrap;
  gap: 12px;
  padding: 12px;

  /* background-color: #1c1c1c; */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  color: #808080;
  width: 100%;
  //   @media (max-width: 1168px) {
  //     flex-wrap: wrap;
  //   }
`;
export const GridTableLeftWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media (max-width: 1168px) {
    flex-wrap: wrap;
  }
`;
export const GridTableTextWrapperTitle = styled.p`
  font-size: 24px;
  color: white;
  line-height: 18px;
  margin: 0px;
  padding: 4px 0px;
`;
export const GridTableTextWrapperSubtitle = styled.span`
  font-size: 14px;
  color: #cccccc;
`;

export const GridTableViewWrapperArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  // gap: 12px;
  color: white;
  font-size: 14px;
  //   width: 250px;
  @media (max-width: 1168px) {
    width: 100%;
  }
  @media (max-width: 627px) {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 80px;
  }
  & :first-child {
    border-radius: 8px 0px 0px 8px;
  }
  & :last-child {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const GridTableSearchField = styled.input`
  border-radius: 8px;
  color: white;
  outline: none;
  border: 1px solid #555;
  width: 250px;
  height: 37px;
  padding: 8px 4px 8px 40px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
  //    placeholder in styled component
  &::placeholder {
    color: white;
  }
`;
export const GridTableAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px 8px;
  border-radius: 8px;
  background-color: #333333;
  height: 37px;
  &:hover {
    background-color: #555;
  }
`;
export const GridTableViewButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  gap: 4px;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 500;
  height: 37px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$activeColor == 'activeColorValue' ? '#1570EF' : '#1A1A1A'};

  &:hover {
    background-color: #1568db96;
  }

  // mobile screen
  @media (max-width: 627px) {
    width: 50px;
    background: none;
    span {
      display: none;
    }
  }
`;
export const GridTableSearchArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 16px;
  @media (max-width: 627px) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 6px;
  }
`;
