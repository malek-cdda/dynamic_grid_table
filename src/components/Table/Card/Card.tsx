import React from 'react';
import { Card } from './StyledComponent';
import CardButtonArea from './CardButtonArea';
import CardBody from './CardBody';
import CardHeaderArea from './CardHeader';
const CardComponent = ({
  project,
  cardObject,
  actionButtonPosition,
  handleShowActionBtn,
  showActionBtn
}: any) => {
  return (
    <Card $actionButtonPosition={cardObject?.options?.actionBtn === 'top' ? 'top' : ''}>
      {/*   card header area  */}

      {cardObject?.header && <CardHeaderArea project={project} cardObject={cardObject} />}

      {/*   card body area  */}
      {cardObject?.body && <CardBody project={project} cardObject={cardObject} />}

      {/* action area code here  */}
      {cardObject?.action && (
        <CardButtonArea
          cardObject={cardObject}
          project={project}
          actionButtonPosition={actionButtonPosition}
          handleShowActionBtn={handleShowActionBtn}
          showActionBtn={showActionBtn}
        />
      )}
    </Card>
  );
};

export default CardComponent;
