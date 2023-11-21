const Tooltip: React.FC = () => {
  return (
    <div className="shadow-custom2 absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 inline-flex flex-col items-center gap-3 rounded-md py-6 px-4 bg-white text-center">
      <span
        style={{
          width: '216px',
          color: '#212121',
          fontFamily: 'Cabin, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: 'normal',
        }}
      >
        This widget links directly to your public profile so that you can easily
        share your impact with your customers. Turn it off here if you do not
        want the badge to link to it.
      </span>
      <a
        href="#"
        className="font-bold text-custom-size text-custom-green"
      >
        View Public Profile
      </a>
    </div>
  );
};

export default Tooltip;
