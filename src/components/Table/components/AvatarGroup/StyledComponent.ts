import styled from 'styled-components';

// export const AvatarGroup = styled.div`
//   display: flex;
//   margin-left: 20px;
// `;

export const AvatarGroup = styled.div`
  display: flex;
  margin-left: 20px;
  direction: ltr;
  border-radius: 999999px;
`;

export const Avatar = styled.div`
  margin-left: -10px;
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  &:hover:not(:last-of-type) {
    transform: translate(-10px);
    border-radius: 50%;
  }
`;

export const HiddenAvatars = styled.div`
  /* Add styles for hidden avatars here */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -13px;
  background-color: #bababa;
  color: gray;
`;
