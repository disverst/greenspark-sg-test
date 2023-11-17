import { ProductWidget } from '../types/ProductWidget';

async function fetchWidgets(): Promise<ProductWidget[] | null> {
  try {
    const response = await fetch(
      'https://api.mocki.io/v2/016d11e8/product-widgets'
    );

    if (!response.ok) {
      console.error(`Error fetching widgets: ${response.status}`);
      return null;
    }

    const data: ProductWidget[] = await response.json();
    return data;
  } catch (error) {
    console.error('Network error:', error);
    return null;
  }
}

export { fetchWidgets };
