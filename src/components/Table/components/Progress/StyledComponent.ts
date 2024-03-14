import styled from 'styled-components';
export const ProgressArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
`;
export const ProgressBar = styled.div`
  background-color: gray;
  width: 100%;
  height: 10px;
  border-radius: 16px;
  transition: width 0.5s;
  overflow: hidden;
`;
export const ProgressBarInner = styled.div<any>`
  width: ${(props: any) => props?.$progressData?.progress || '0'}%;
  background-color: ${(props: any) => props?.$progressData?.progressColor || 'green'};
  height: 100%;
  border-radius: 16px;
  transition: 'width 0.5s';
`;
export const ProgressBarInnerText = styled.span``;
