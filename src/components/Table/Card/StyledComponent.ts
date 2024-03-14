import styled from 'styled-components';
export const Card = styled.div<any>`
  background-color: ${(props: any) => props.theme?.themePresets?.card?.background || 'transparent'};
  box-shadow: 0px 0px 3px 0px #000;
  border-radius: 12px;
  padding: 16px 12px 0px 12px;
  padding: ${(props: any) =>
    props.$actionButtonPosition === 'top' ? '16px 12px 0px 12px' : '20px 12px'};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 0px 3px 0px #808080;
`;
export const CardHeaderWrapper = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 10px;
  min-height: 73px;
  // padding-bottom: 24px;
  padding-bottom: ${(props: any) =>
    props.$isListViewBorderPadding !== 'isBorderPadding' ? '10px' : 'none'};

  /* border-bottom: ${(props: any) =>
    props.$isListViewBorderPadding !== 'isBorderPadding' ? '1px #808080 solid' : 'none'}; */
  &:before {
    content: '';
    position: absolute;
    width: 96%;
    height: 1px;
    background-color: #808080;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
`;
export const CardLeftArea = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  background-color: transparent;
  border: 2px solid #808080;
  img {
    /* padding: 8px; */
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const CardHeaderTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  /* color: white; */
`;
export const CardHeaderSubtitle = styled.div`
  font-size: 14px;
  /* color: #808080; */
  font-weight: 400;
  display: flex;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const CardPosition = styled.div`
  padding-right: 12px;
  /* color: #808080; */
  line-height: 18px;
  display: flex;
  justify-content: space-around;
  position: relative;
  .position_2 {
    position: absolute;
    width: 1px;
    height: 70%;

    background-color: #808080;
    top: 20%;
    right: 0px;
  }
`;
export const CardCounting = styled.span`
  padding: 0px 12px;
  display: flex;
  align-items: center;
  /* color: #808080; */
  gap: 4px;
  line-height: 18px;
  display: flex;
  justify-content: space-around;
  position: relative;
  .counting_2 {
    position: absolute;
    width: 1px;
    height: 70%;
    background-color: #808080;
    top: 20%;
    right: 0px;
  }
`;
export const CardFollowing = styled.span`
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  /* color: #808080; */
  line-height: 18px;
  img {
    width: 18px;
    height: 18px;
  }
`;
// ?!card body style area
export const CardBodyAreaWrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  // gap: 12px;
  // padding: 0px 0px;
`;
export const CardBodyPartWrapper = styled.div<any>`
  width: 50%;

  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: center;
  padding: 6px 12px;
  position: relative;
  border-bottom: ${(props: any) => {
    if (props.$isKey >= 3) {
      if (props.$isIndex == 0 || props.$isIndex == 1) {
        return ' 1px solid #4F4F4F';
      }
    } else if (props.$isKey == 3) {
      if (props.$isIndex == 0) {
        return 'none';
      }
    }
    // return props.isKey == 3 ? "1px solid #4F4F4F" : "none";
  }};
  &:before {
    content: '';
    background-color: ${(props: any) => {
      if (props.$isKey == 4 || props.$isKey == 2) {
        if (props.$isIndex == 0 || props.$isIndex == 2) {
          return '  #4F4F4F';
        }
      } else if (props.$isKey == 3) {
        if (props.$isIndex == 0) {
          return '  #4F4F4F';
        }
      }

      // return props.isKey == 3 ? "1px solid #4F4F4F" : "none";
    }};
    width: 1px;
    height: 50px;
    right: 0;
    top: 10px;
    position: absolute;
  }
  // background-color: red;
`;
export const CardBodyTitle = styled.p`
  color: #808080;
`;
export const CardTimeLineText = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 500;
`;
// divider card body code
export const CardBodyDivider = styled.div`
  position: absolute;
  height: 1px;
  width: calc(100% - 24px);
  background-color: #808080;
  margin: 40px;
`;
// action area component
export const CardUpperActionButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #333333;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  // background: url("/assets/eye.svg") no-repeat;
  padding: 3px;
`;
export const ToggleButton = styled.button`
  border-radius: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const ActionButtonArea = styled.div<any>`
  width: 130px;
  min-height: 50px;
  position: absolute;
  right: 35px;
  top: -7px;
  border-radius: 8px;
  background-color: #333333;
  padding: ${(props: any) => (props.$isAction === 'paddings' ? '4px' : '0px')};
  transition: all 0.5s ease-in-out;
  padding: 5px 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  &:before {
    content: '';
    position: absolute;
    top: 10px;
    right: -20px;
    width: 0;
    height: 0;
    border-left: 10px solid #333333;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: #7e7e7e;
  color: white;
  &:hover {
    background-color: #26a5e0;
  }
`;
export const CardFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  // padding: 12px 0px;
`;
