import React from 'react';
import {
  CardHeaderWrapper,
  CardHeader,
  CardLeftArea,
  CardHeaderTitle,
  CardHeaderSubtitle,
  CardPosition,
  CardCounting,
  CardFollowing
} from './StyledComponent';
import Image from 'next/image';
const CardHeaderArea = ({ project, cardObject }: any) => {
  const { title, subtitle, image } = cardObject?.header || {};
  // Function to get the dynamic value from the object
  const getDynamicValue = (obj: any, keys: string) => {
    const keysArray = keys.split('.');
    return keysArray.reduce(
      (value, key) => (value && value[key] !== undefined ? value[key] : undefined),
      obj
    );
  };

  return (
    <CardHeaderWrapper>
      <CardHeader>
        {image && (
          <CardLeftArea>
            {typeof image === 'string' ? (
              <Image src={getDynamicValue(project, image)} alt="" fill></Image>
            ) : (
              image && image(project)
            )}
          </CardLeftArea>
        )}
        <div>
          {/* title  */}
          {typeof title === 'string' ? (
            <CardHeaderTitle>
              {
                getDynamicValue(project, title) // projectteams
              }
            </CardHeaderTitle>
          ) : (
            title && title(project)
          )}

          {typeof subtitle === 'string' ? (
            <CardHeaderSubtitle>
              {
                getDynamicValue(project, subtitle) // projectteams
              }
            </CardHeaderSubtitle>
          ) : (
            subtitle && subtitle(project)
          )}
        </div>
      </CardHeader>
    </CardHeaderWrapper>
  );
};

export default CardHeaderArea;
