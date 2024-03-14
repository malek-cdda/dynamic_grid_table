import styled from 'styled-components';
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: white;
  font-size: 14px;
`;
export const PaginationText = styled.span``;
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: white;
  font-size: 14px;
`;
export const PaginationButton = styled.button<any>`
  display: flex;
  align-items: center;
  color: white;
  padding: 6px 14px;
  transition: 0.3s ease;
  cursor: pointer;
  background-color: ${(props: any) => (props.$isActive === 'active' ? '#387BB6' : 'gray')};
  border-radius: 4px;
  &:hover {
    background-color: #387bb6;
    color: white;
    border-radius: 8px;
    padding: 6px 14px;
  }
`;
export const PaginationArrowButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  padding: 6px 6px;
  transition: 0.3s ease;
  cursor: pointer;
  background-color: ${(props: any) => (props.isActive === 'active' ? '#387BB6' : 'gray')};
  border-radius: 4px;
  &:hover {
    background-color: #387bb6;
    color: white;
    border-radius: 8px;
    padding: 6px 6px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
