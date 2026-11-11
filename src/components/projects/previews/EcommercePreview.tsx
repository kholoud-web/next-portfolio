'use client';

import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';

const PRODUCTS = [
  { name: 'Beosound Explore Speaker', price: '$199', category: 'Audio' },
  { name: 'MW75 Active Headphones', price: '$599', category: 'Audio' },
  { name: 'Minimalist Travertine Lamp', price: '$299', category: 'Lighting' }
];

export const EcommercePreview: React.FC = () => {
  const [cartCount, setCartCount] = useState(2);
  const [activeCategory, setActiveCategory] = useState('All');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    setAddedItem(productName);
    setTimeout(() => setAddedItem(null), 1800);
  };

  const filteredProducts = PRODUCTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <span className="text-lg font-bold text-white tracking-widest">AURORA</span>
        <div className="flex items-center gap-2 text-xs bg-[#171C26] px-3 py-1.5 rounded-lg border border-white/10">
          <ShoppingBag className="w-4 h-4 text-[#10B981]" />
          <span>Shopping Bag ({cartCount})</span>
        </div>
      </div>

      {addedItem && (
        <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
          <Check className="w-3.5 h-3.5" />
          <span>Added <strong>{addedItem}</strong> to shopping bag.</span>
        </div>
      )}

      {/* Category switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['All', 'Audio', 'Lighting', 'Accessories'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === cat
                ? 'bg-[#059669] text-white font-semibold'
                : 'bg-[#171C26] text-[#A1A1AA] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.name} className="p-4 rounded-xl bg-[#171C26] border border-white/10 space-y-3">
            <div className="h-32 bg-[#11151D] rounded-lg flex items-center justify-center text-xs text-[#A1A1AA]">
              Product Showcase Image
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-white">{product.name}</span>
              <span className="font-bold text-[#10B981]">{product.price}</span>
            </div>
            <button
              onClick={() => handleAddToCart(product.name)}
              className="w-full py-1.5 text-xs font-semibold rounded-lg bg-[#57D6C5] text-black hover:bg-[#48c4b3] transition-colors"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
