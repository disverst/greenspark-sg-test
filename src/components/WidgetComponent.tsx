import { ProductWidget } from '../types/ProductWidget';
import WidgetHeader from './WidgetHeader';

type WidgetComponentProps = {
  widget: ProductWidget;
};

const WidgetComponent: React.FC<WidgetComponentProps> = ({ widget }) => {

  return (
    <div className="bg-white space-y-4 w-[230px]">
      <WidgetHeader
        action={widget.action}
        amount={widget.amount}
        type={widget.type}
      />
      <div className="flex items-center justify-between">
        <p className="text-green-600">Link to Public Profile</p>
        {/* <Checkbox checked={widget.linked} /> */}
      </div>

      <div>
        <p className="text-green-600">Badge color</p>
        {/* <ColorSelector selectedColor={widget.selectedColor} /> */}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-green-600">Activate badge</p>
        {/* <ToggleSwitch isOn={widget.active} /> */}
      </div>
    </div>
  );
};

export default WidgetComponent;
