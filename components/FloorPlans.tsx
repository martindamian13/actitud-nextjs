'use client';

import { useState } from 'react';

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState<'norte' | 'sur'>('norte');

  const pricing = {
    norte: [
      { floor: 'Piso 3', price: 'US$ 4.000' },
      { floor: 'Piso 4', price: 'US$ 6.000' },
      { floor: 'Piso 5', price: 'US$ 8.000' },
      { floor: 'Piso 6', price: 'US$ 10.000' },
    ],
    sur: [
      { floor: 'Piso 3', price: 'US$ 6.000' },
      { floor: 'Piso 4', price: 'US$ 8.000' },
      { floor: 'Piso 5', price: 'US$ 10.000' },
      { floor: 'Piso 6', price: 'US$ 12.000' },
    ],
  };

  return (
    <section id="plantas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-8">PLANTAS DE OFICINAS</h2>
        <p className="text-center text-xl text-medium-gray mb-12">
          Oficinas de planta libre desde 170 m² hasta 175 m²
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab('norte')}
            className={`px-12 py-4 text-lg font-semibold rounded transition-all ${
              activeTab === 'norte'
                ? 'bg-accent-green text-white'
                : 'bg-white border-2 border-light-gray text-dark-gray hover:border-accent-green'
            }`}
          >
            Bloque Norte
          </button>
          <button
            onClick={() => setActiveTab('sur')}
            className={`px-12 py-4 text-lg font-semibold rounded transition-all ${
              activeTab === 'sur'
                ? 'bg-accent-blue text-white'
                : 'bg-white border-2 border-light-gray text-dark-gray hover:border-accent-blue'
            }`}
          >
            Bloque Sur
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Floor Plan Visual */}
          <div className="lg:col-span-2 bg-light-gray p-12 rounded">
            <div
              className={`bg-white h-[500px] rounded flex items-center justify-center relative border-4 ${
                activeTab === 'norte' ? 'border-accent-green' : 'border-accent-blue'
              }`}
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #E6E8EB 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #E6E8EB 0px, transparent 1px, transparent 20px)'
              }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-dark-gray">174 m² Propios</p>
                <p className="text-lg text-medium-gray mt-2">Planta Libre</p>
              </div>
              {activeTab === 'sur' && (
                <div className="absolute top-4 right-4 bg-accent-blue text-white px-4 py-2 rounded font-bold">
                  Esquina
                </div>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-2xl font-bold mb-6">PRECIO x m²</h3>
            <table className="w-full mb-8">
              <thead>
                <tr className="bg-accent-green text-white">
                  <th className="p-3 text-left">OBRA</th>
                  <th className="p-3 text-left">LISTA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border border-light-gray font-semibold">US$ 1.573</td>
                  <td className="p-3 border border-light-gray font-semibold">US$ 1.652</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold mb-6">ADICIONAL POR ALTURA</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-accent-green text-white">
                  <th className="p-3 text-left">Piso</th>
                  <th className="p-3 text-left">Precio</th>
                </tr>
              </thead>
              <tbody>
                {pricing[activeTab].map((item) => (
                  <tr key={item.floor} className="bg-white">
                    <td className="p-3 border border-light-gray">{item.floor}</td>
                    <td className="p-3 border border-light-gray font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
