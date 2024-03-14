import styled from "styled-components";

// color: color, background: bgColor, margin: gap
export const Badges = styled.span`
  color: green;
  background: red;
  margin: "2px";
  padding: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  img {
    width: 18px;
    height: 18px;
  }
`;
