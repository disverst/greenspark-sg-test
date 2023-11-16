import { ProductWidget } from '../types/ProductWidget';

async function fetchWidgets(): Promise<ProductWidget[]> {
  const response = await fetch(
    'https://getgreenspark.wiremockapi.cloud/product-widgets'
  );
  const data: ProductWidget[] = await response.json();
  return data;
}

export { fetchWidgets };
