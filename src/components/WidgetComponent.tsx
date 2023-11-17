import React from 'react';
import { ProductWidget } from '../types/ProductWidget';

type WidgetComponentProps = {
  widget: ProductWidget;
};

const WidgetComponent: React.FC<WidgetComponentProps> = ({ widget }) => {
  return (
    <div className="widget">
      <h3>Widget ID: {widget.id}</h3>
      <p>Type: {widget.type}</p>
      <p>Amount: {widget.amount}</p>
      <p>Action: {widget.action}</p>
      <p>Active: {widget.active ? 'Yes' : 'No'}</p>
      <p>Linked: {widget.linked ? 'Yes' : 'No'}</p>
      <p>Color: {widget.selectedColor}</p>
    </div>
  );
};

export default WidgetComponent;
