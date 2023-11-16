'use client';
import { useEffect, useState } from 'react';
import { fetchWidgets } from '../utils/fetchWidgets';
import { ProductWidget } from '../types/ProductWidget'; // Assuming you have this type defined

export default function Home() {
  const [widgets, setWidgets] = useState<ProductWidget[]>([]);

  useEffect(() => {
    async function loadWidgets() {
      try {
        const fetchedWidgets = await fetchWidgets();
        setWidgets(fetchedWidgets);
      } catch (error) {
        console.error('Error fetching widgets:', error);
      }
    }

    loadWidgets();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      GREENSPARK
      {widgets.map((widget) => (
        <div key={widget.id}>
          {widget.id}. {widget.type}
        </div>
      ))}
    </main>
  );
}
