'use client';
import { useEffect, useState } from 'react';
import { fetchWidgets } from '../utils/fetchWidgets';
import { ProductWidget } from '../types/ProductWidget';
import WidgetComponent from '../components/WidgetComponent';

export default function Home() {
  const [widgets, setWidgets] = useState<ProductWidget[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadWidgets() {
      try {
        const fetchedWidgets = await fetchWidgets();
        if (fetchedWidgets) {
          setWidgets(fetchedWidgets);
        } else {
          setWidgets([]);
          setError('Failed to load widgets. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching widgets:', error);
        setWidgets([]);
        setError('An error occurred while fetching widgets.');
      }
    }

    loadWidgets();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white p-10 rounded-lg shadow-custom">
        <h3 className="text-xl font-semibold mb-[9px]">Per product widgets</h3>
        <div className="h-0.5 bg-gray-300 mb-4"></div>
        <div className="flex flex-col space-y-9 md:flex-row md:space-y-0 md:space-x-14">
          {widgets.map((widget) => (
            <WidgetComponent
              key={widget.id}
              widget={widget}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
