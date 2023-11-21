import Image from 'next/image';

type WidgetHeaderProps = {
  action: string;
  amount: number;
  type: string;
};

const WidgetHeader: React.FC<WidgetHeaderProps> = (props) => {
  const { action, amount, type } = props;
  return (
    <div
      className="flex items-center space-x-2 py-4 px-3 rounded-md mb-4"
      style={{ backgroundColor: '#2E3A8C' }}
    >
      <div className="flex flex-col items-center mr-1">
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center mb-1"
          style={{ backgroundColor: '#FFFF' }}
        >
          <svg
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32713 7.29164C-1.06226 9.67253 4.02999 21.9296 10.6533 21.4816C15.5527 21.1502 17.8611 13.7889 18.371 9.81889C18.8776 5.87477 14.1793 7.4037 14.6139 10.4053C15.2516 14.8093 15.1901 15.599 14.0894 16.7162C12.9887 17.8334 12.3672 17.4676 13.2217 13.0254C14.0762 8.58327 14.2103 5.40648 14.0894 3.29187C13.9686 1.17725 9.38722 -0.973814 10.6637 6.00182C12.0853 13.77 11.4378 18.0695 9.96148 17.1853C8.48516 16.3012 9.21068 12.7723 9.03878 10.9955C8.8298 8.8354 8.46696 8.81281 8.06283 6.4914C7.6587 4.17 9.45978 1.50439 9.03629 0.399162C8.6128 -0.706065 3.98952 1.12964 5.71216 6.43994C8.05003 13.6468 6.96374 15.5315 6.26311 15.599C5.56249 15.6665 4.95393 14.7157 4.59937 13.516C4.24481 12.3164 5.20891 9.61287 4.78162 7.71466C4.37224 5.89603 3.50692 5.1196 1.32713 7.29164Z"
              fill="#2E3A8C"
            />
          </svg>
        </div>
        <p
          className="text-white"
          style={{ fontSize: '10px' }}
        >
          greenspark
        </p>
      </div>
      <div>
        <p
          className="text-white text-sm mb-0.5"
          style={{ fontFamily: 'Cabin, sans-serif', fontSize: '12.41px' }}
        >
          {`This product ${action}`}
        </p>
        <p
          className="text-white font-medium"
          style={{
            fontFamily: 'Cabin, sans-serif',
            fontSize: '17.86px',
          }}
        >
          {`${amount} ${type}`}
        </p>
      </div>
    </div>
  );
};

export default WidgetHeader;
