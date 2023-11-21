import { ProductWidget } from '../types/ProductWidget';
import LinkToPublicProfile from './LinkToPublicProfile';
import WidgetHeader from './WidgetHeader';

type WidgetComponentProps = {
  widget: ProductWidget;
};

const WidgetComponent: React.FC<WidgetComponentProps> = ({ widget }) => {
  return (
    <div className="bg-white space-y-2 w-[230px]">
      <WidgetHeader
        action={widget.action}
        amount={widget.amount}
        type={widget.type}
      />
      <LinkToPublicProfile />

      <div>
        <p className="text-custom-size text-custom-green">Badge color</p>
        {/* <ColorSelector selectedColor={widget.selectedColor} /> */}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-custom-size text-custom-green">Activate badge</p>
        {/* <ToggleSwitch isOn={widget.active} /> */}
      </div>
    </div>
  );
};

export default WidgetComponent;
