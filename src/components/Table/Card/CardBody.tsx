import React from 'react';
import {
  CardBodyAreaWrapper,
  CardBodyDivider,
  CardBodyTitle,
  CardBodyPartWrapper,
  CardTimeLineText
} from './StyledComponent';
import AvatarComponent from '../components/AvatarGroup/AvatarGroup';
import Progressbar from '../components/Progress/Progress';
import styled from 'styled-components';

const CardBodyold = ({ project, cardObject }: any) => {
  const projectData = [
    {
      title: cardObject?.timeline,
      text: 'TimeLine',
      type: 'timeline'
    },
    {
      title: cardObject?.teams,
      text: 'Project Teams',
      type: 'team'
    },
    {
      title: cardObject?.projecttypes,
      text: 'Project Type',
      type: 'types'
    },
    {
      title: cardObject?.progress,
      text: 'Progress',
      type: 'progress'
    }
  ];
  let value = [];
  for (let i = 0; i < projectData?.length; i++) {
    project[projectData[i]?.title] && value.push(i);
  }
  // console.log(project[cardObject?.teams]);

  return (
    <CardBodyAreaWrapper>
      {cardObject?.timeline && (
        <CardBodyPartWrapper>
          {/* timeline code here  */}

          {typeof cardObject?.timeline !== 'function' && <CardBodyTitle>Time Line </CardBodyTitle>}
          <CardTimeLineText>
            {project[cardObject?.timeline]
              ? project[cardObject?.timeline]
              : typeof cardObject?.timeline === 'function' && cardObject.timeline(project)}
          </CardTimeLineText>
        </CardBodyPartWrapper>
      )}
      {/* teams group as like avatar group code here  */}
      {cardObject?.teams && (
        <CardBodyPartWrapper>
          {typeof cardObject?.teams !== 'function' && <CardBodyTitle>Project Teams </CardBodyTitle>}

          {project[cardObject?.teams] ? (
            <AvatarComponent projectImageData={project[cardObject?.teams]} />
          ) : (
            typeof cardObject.teams === 'function' && cardObject.teams(project)
          )}
        </CardBodyPartWrapper>
      )}
      {cardObject?.type && (
        <CardBodyPartWrapper>
          {/* project type code here  */}
          {typeof cardObject?.type !== 'function' && <CardBodyTitle>Project Type</CardBodyTitle>}
          <CardTimeLineText>
            {project[cardObject?.type]
              ? project[cardObject?.type]
              : typeof cardObject?.type === 'function' && cardObject?.type(project)}
          </CardTimeLineText>
        </CardBodyPartWrapper>
      )}
      {cardObject?.progress && (
        <CardBodyPartWrapper>
          {/* Progressbar code here  */}
          {typeof cardObject?.progress !== 'function' && <CardBodyTitle>Progress</CardBodyTitle>}

          {project[cardObject?.progress] ? (
            <Progressbar progress={project[cardObject?.progress]} />
          ) : (
            typeof cardObject?.progress !== 'string' && cardObject?.progress(project)
          )}
        </CardBodyPartWrapper>
      )}

      {/* {projectData.map((item, index) => {
        return (
          project[item?.title] && (
            <CardBodyPartWrapper
              key={index}
              $isKey={value.length}
              $isIndex={index}>
              <CardBodyTitle>
                {project[item?.title] && item?.text}
              </CardBodyTitle>
              {(item?.type === "types" || item?.type === "timeline") && (
                <CardTimeLineText>
                  {" "}
                  {project[item?.title] && project[item?.title]}
                </CardTimeLineText>
              )}
              {item?.type === "team" && (
                <AvatarComponent projectImageData={project[item?.title]} />
              )}

              {item?.type === "progress" && (
                <Progressbar progress={project[item?.title]} />
              )}
            </CardBodyPartWrapper>
          )
        );
      })} */}
    </CardBodyAreaWrapper>
  );
};

const CardContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  #content {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    ${(props: any) => {
      const even = props?.children?.length % 2 === 0;
      const odd = props?.children?.length % 2 !== 0;

      if (even) {
        return '&:nth-child(odd) {&:after{content:"";position:absolute;top: 16%;right: 0;width: 1px;height: 60%;background-color: #525252;}} &:nth-child(1),&:nth-child(2) { &:before{content:"";position:absolute;top: 0;width:90% ;height: 1px;background-color: transparent;}   }  &:before{content:"";position:absolute;top: 0;width:90% ;height: 1px;background-color: #525252;} ';
      } else if (odd) {
        return ' &:after{content:"";position:absolute;top: 0;width:90% ;height: 1px;background-color: #525252;} &:nth-child(1),&:nth-child(2) { &:after{content:"";position:absolute;top: 0;width:90% ;height: 1px;background-color: transparent;}  }  &:nth-child(odd) { &:before{content:"";position:absolute;top: 16%;right: 0;width: 1px;height: 60%;background-color: #525252;} } &:last-child {  &:after{width:95%}  &:before{content:"";position:absolute;top: 16%;right: 0;width: 1px;height: 60%;background-color: transparent;} } ';
      }
    }}
    &:last-child {
      grid-column: ${(props: any) => (props?.children?.length % 2 === 0 ? 'span 1' : 'span 2')};
    }
  }
`;

const CardContent = styled.div`
  padding: 0.2rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
  text-align: center;
`;

const getDynamicValue = (obj: any, keys: string) => {
  const keysArray = keys.split('.');
  return keysArray.reduce(
    (value, key) => (value && value[key] !== undefined ? value[key] : undefined),
    obj
  );
};
const CardBody = ({ project, cardObject }: any) => {
  return (
    <CardContentWrapper>
      {/* card content 1 */}
      {cardObject?.body?.map((content: any, index: any) => {
        let dyContent;
        if (content?.content && typeof content?.content === 'string') {
          dyContent = getDynamicValue(project, content?.content);
        } else {
          dyContent = content?.content(project);
        }

        return (
          <div id="content" key={index}>
            <CardContent>
              <h4>{content?.title}</h4>
              <div>{dyContent}</div>
            </CardContent>
          </div>
        );
      })}
    </CardContentWrapper>
  );
};

export default CardBody;
