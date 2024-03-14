import React from 'react';
import { Avatar, AvatarGroup, HiddenAvatars } from './StyledComponent';
import Image from 'next/image';

const AvatarComponent = ({ projectImageData }: any) => {
  let teamsLen = projectImageData?.length;

  return (
    <AvatarGroup>
      {projectImageData?.slice(0, 3).map((img: any, index: number) => (
        <Avatar key={index}>
          <Image width={1000} height={1000} alt="" src={img?.image} />
        </Avatar>
      ))}
      {teamsLen > 3 && <HiddenAvatars>+{teamsLen - 3}</HiddenAvatars>}
    </AvatarGroup>
  );
};

export default AvatarComponent;
