import React, { useState } from 'react';
import Link from './Link';
import Tooltip from './Tooltip';
import Checkbox from './Checkbox';
import TooltipIcon from './TooltipIcon';

const LinkToPublicProfile: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="flex items-center justify-start">
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
      <Checkbox />
    </div>
  );
};

export default LinkToPublicProfile;
