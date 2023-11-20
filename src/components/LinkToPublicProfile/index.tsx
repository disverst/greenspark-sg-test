import React, { useState } from 'react';
import Tooltip from './Tooltip';
import TooltipIcon from './TooltipIcon';
import Link from './Link';

const LinkToPublicProfile: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="flex items-center">
      <Link />
      <div
        className="ml-1 relative"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <TooltipIcon />
        <div
          style={{
            opacity: isTooltipVisible ? 1 : 0,
            visibility: isTooltipVisible ? 'visible' : 'hidden',
            transition:
              'opacity 300ms ease-in-out, visibility 300ms ease-in-out',
          }}
        >
          <Tooltip />
        </div>
      </div>
    </div>
  );
};

export default LinkToPublicProfile;
