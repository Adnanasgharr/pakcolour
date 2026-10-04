'use client';

import { useState } from 'react';

const UNITS = ['Kg', 'Liter'];

export default function ProductPriceCalculator({
  basePrice = 0,
  defaultUnit = 'Kg',
  allowUnitChange = false, // Set to false by default to keep unit locked
  isOutOfStock = false,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState(defaultUnit);

  const totalPrice = Number(basePrice) * Number(quantity);

  if (!basePrice || basePrice <= 0) {
    return (
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-slate-500 text-sm font-semibold italic">
        Price available on request
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 space-y-3 shadow-sm">
      <div className="flex justify-between items-center text-xs text-slate-600">
        <span>Base Rate:</span>
        <span className="font-bold text-[#0A2540] text-sm">
          PKR {Number(basePrice).toLocaleString()} / {selectedUnit}
        </span>
      </div>

      {/* Quantity & Unit Section */}
      <div className="flex items-center gap-3">
        <label className="text-xs font-semibold text-[#0A2540] whitespace-nowrap">
          Quantity & Unit:
        </label>

        <div className="flex-1 flex gap-2">
          {/* Quantity Input */}
          <input
            type="number"
            min="1"
            disabled={isOutOfStock}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-1/2 px-3 py-1.5 text-sm font-bold text-[#0A2540] bg-white border border-[#D8DEE4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A2540] disabled:bg-slate-100 disabled:cursor-not-allowed"
          />

          {/* Unit Display / Selector */}
          {allowUnitChange ? (
            <select
              value={selectedUnit}
              disabled={isOutOfStock}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="w-1/2 px-3 py-1.5 text-sm font-semibold text-[#0A2540] bg-white border border-[#D8DEE4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A2540] disabled:bg-slate-100 cursor-pointer"
            >
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          ) : (
            <div className="w-1/2 px-3 py-1.5 text-sm font-bold text-[#0A2540] bg-[#F1F5F9] border border-[#D8DEE4] rounded-md flex items-center justify-center select-none">
              {defaultUnit}
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Price Total */}
      <div className="pt-3 border-t border-[#E2E8F0] flex justify-between items-baseline">
        <span className="text-xs font-medium text-slate-600">
          Estimated Total ({quantity} {selectedUnit}):
        </span>
        <span className="text-xl font-bold text-[#0A2540]">
          PKR {totalPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
}