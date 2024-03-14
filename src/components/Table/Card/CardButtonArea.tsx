import React, { useEffect } from 'react';
import {
  ActionButton,
  ActionButtonArea,
  CardFooterWrapper,
  CardUpperActionButtonWrapper,
  ToggleButton
} from './StyledComponent';
import Image from 'next/image';
import SVGmodifier from '@/components/SVG_modifier/SVGmodifier';
import styled from 'styled-components';

const FooterActionButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  button:nth-child(1) {
    background-color: #7e7e7e;
    color: white;
  }
  button:nth-child(2) {
    background-color: #26a5e0;
    color: white;
  }
`;
const CardButtonArea = ({
  cardObject,
  project,
  handleShowActionBtn = () => {},
  showActionBtn
}: any) => {
  const { options, render } = cardObject?.action || {};
  const topActingWrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // close action button on click outside
    if (showActionBtn) {
      const handleClick = (e: any) => {
        if (topActingWrapperRef.current && !topActingWrapperRef.current.contains(e.target)) {
          handleShowActionBtn(0);
        }
      };
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [showActionBtn]);

  return (
    <>
      {options && options?.position === 'top' ? (
        //top button actions
        <CardUpperActionButtonWrapper ref={topActingWrapperRef}>
          <ToggleButton onClick={() => handleShowActionBtn(project.id)}>
            <SVGmodifier svg="/assets/icons/verticalDots.svg" width={20} height={20} />
          </ToggleButton>
          {project.id === showActionBtn
            ? cardObject?.action && (
                <ActionButtonArea>
                  {cardObject?.action && render ? (
                    render(project)
                  ) : (
                    <>
                      <ActionButton>View</ActionButton>
                      <ActionButton>Edit</ActionButton>
                      <ActionButton>Delete</ActionButton>
                    </>
                  )}
                </ActionButtonArea>
              )
            : ''}
        </CardUpperActionButtonWrapper>
      ) : (
        // bottom button actions
        <CardFooterWrapper>
          {cardObject?.action && (
            <FooterActionButton>
              {cardObject?.action && render ? (
                render(project)
              ) : (
                <>
                  <ActionButton>action 1</ActionButton>
                  <ActionButton>action 2</ActionButton>
                </>
              )}
            </FooterActionButton>
          )}

          {cardObject?.actions && cardObject?.actions(project)}
        </CardFooterWrapper>
      )}
    </>
  );
};

export default CardButtonArea;
