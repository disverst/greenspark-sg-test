import { ProductWidget } from '../types/ProductWidget';
import widgetsMock from '../mocks/widgetsMock.json';

// async function fetchWidgets(): Promise<ProductWidget[] | null> {
//   try {
//     const response = await fetch(
//       'https://getgreenspark.wiremockapi.cloud/product-widgets'
//     );

//     if (!response.ok) {
//       console.error(`Error fetching widgets: ${response.status}`);
//       return null;
//     }

//     const data: ProductWidget[] = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Network error:', error);
//     return null;
//   }
// }

async function fetchWidgets(): Promise<ProductWidget[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return widgetsMock as ProductWidget[];
}

export { fetchWidgets };
