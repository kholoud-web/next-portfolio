'use client';

import React, { useState } from 'react';
import { X, ExternalLink, Maximize2, Laptop, Tablet, Smartphone, Check, ShoppingBag, CloudRain, CheckSquare, Rocket, Sparkles } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';

interface LivePreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenCaseStudy
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Interactive mini-states for live demo simulations:
  // E-commerce state
  const [cartCount, setCartCount] = useState(2);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Weather state
  const [selectedCity, setSelectedCity] = useState<'San Francisco' | 'Tokyo' | 'London'>('San Francisco');
  
  // Kanban state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Implement Auth with JWT', col: 'In Progress', priority: 'High' },
    { id: 2, title: 'Optimize Bundle with Dynamic Imports', col: 'To Do', priority: 'Medium' },
    { id: 3, title: 'Design System Typography Audit', col: 'Done', priority: 'Low' }
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Space Tourism state
  const [destination, setDestination] = useState<'Moon' | 'Mars' | 'Europa'>('Moon');

  if (!isOpen || !project) return null;

  const deviceWidthClass = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto',
    mobile: 'max-w-[390px] mx-auto'
  }[deviceMode];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn text-left"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-[92vh] bg-[#11151D] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#171C26]/90 gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <h3 id="preview-modal-title" className="text-sm font-semibold text-[#F5F5F7] flex items-center gap-2">
                {project.title}
                <span className="text-xs px-2 py-0.5 rounded bg-[#0B0D12] text-[#10B981] border border-white/10 font-mono">
                  Interactive Demo
                </span>
              </h3>
            </div>
          </div>

          {/* Viewport Width Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-[#0B0D12] p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded transition-colors ${deviceMode === 'desktop' ? 'bg-[#171C26] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
              title="Desktop View (100%)"
              aria-label="Desktop view"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded transition-colors ${deviceMode === 'tablet' ? 'bg-[#171C26] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
              title="Tablet View (768px)"
              aria-label="Tablet view"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded transition-colors ${deviceMode === 'mobile' ? 'bg-[#171C26] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
              title="Mobile View (390px)"
              aria-label="Mobile view"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                onOpenCaseStudy(project);
              }}
            >
              View Full Architecture
            </Button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
              aria-label="Close demo preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Container */}
        <div className="flex-1 overflow-y-auto bg-[#0B0D12] p-4 sm:p-6 transition-all duration-300">
          <div className={`transition-all duration-300 ${deviceWidthClass}`}>
            {/* Simulation Header / Address bar */}
            <div className="rounded-t-xl bg-[#171C26] border border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <div className="bg-[#0B0D12] px-4 py-1 rounded-md text-[11px] font-mono text-[#D1D5DB] border border-white/5 flex items-center gap-2">
                <span className="text-emerald-400">https://</span>
                <span>{project.slug}.kholoud-mahmoud.dev</span>
              </div>
              <span className="text-[11px]">Production Environment</span>
            </div>

            {/* Interactive Simulation Sandbox */}
            <div className="rounded-b-xl border-x border-b border-white/10 bg-[#0B0D12] overflow-hidden min-h-[500px]">
              {/* Project-Specific Live Interactive Component */}

              {/* 1. UPSEEDS INTERACTIVE SIMULATION */}
              {project.id === 'upseeds' && (
                <div className="p-6 space-y-6 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h4 className="text-lg font-bold text-white">Upseeds Deal Pipeline</h4>
                      <p className="text-xs text-[#A1A1AA]">Seed &amp; Series A Sourcing Radar</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 px-3 rounded-lg bg-[#171C26] text-xs">
                        <span className="text-[#A1A1AA]">Active Pipeline: </span>
                        <span className="font-bold text-emerald-400">$14.8M</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive deal cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: 'Nura AI', ask: '$1.2M', stage: 'Seed', traction: '+340% MoM', sector: 'Decentralized AI' },
                      { name: 'GreenLeap', ask: '$2.0M', stage: 'Seed Round', traction: '12 Pilots', sector: 'CleanTech' },
                      { name: 'Finura', ask: '$850k', stage: 'Pre-Seed', traction: '$45k MRR', sector: 'FinTech' }
                    ].map((deal) => (
                      <div key={deal.name} className="p-4 rounded-xl bg-[#171C26] border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white">{deal.name}</span>
                          <span className="text-[11px] text-[#57D6C5] bg-[#57D6C5]/10 px-2 py-0.5 rounded">
                            {deal.sector}
                          </span>
                        </div>
                        <div className="text-xs space-y-1 text-[#A1A1AA]">
                          <div>Target Ask: <span className="text-white font-medium">{deal.ask}</span></div>
                          <div>Stage: <span className="text-white">{deal.stage}</span></div>
                          <div>Traction: <span className="text-emerald-400">{deal.traction}</span></div>
                        </div>
                        <button
                          onClick={() => alert(`Reviewing deal pitch deck for ${deal.name}`)}
                          className="w-full py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                        >
                          Review Pitch Deck
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. E-COMMERCE INTERACTIVE SIMULATION */}
              {project.id === 'ecommerce' && (
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-lg font-bold text-white tracking-widest">AURORA</span>
                    <div className="flex items-center gap-2 text-xs bg-[#171C26] px-3 py-1.5 rounded-lg border border-white/10">
                      <ShoppingBag className="w-4 h-4 text-[#10B981]" />
                      <span>Shopping Bag ({cartCount})</span>
                    </div>
                  </div>

                  {/* Category switcher */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {['All', 'Audio', 'Lighting', 'Accessories'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                          activeCategory === cat ? 'bg-[#059669] text-white font-semibold' : 'bg-[#171C26] text-[#A1A1AA] hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Interactive Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: 'Beosound Explore Speaker', price: '$199', category: 'Audio' },
                      { name: 'MW75 Active Headphones', price: '$599', category: 'Audio' },
                      { name: 'Minimalist Travertine Lamp', price: '$299', category: 'Lighting' }
                    ]
                      .filter((p) => activeCategory === 'All' || p.category === activeCategory)
                      .map((product) => (
                        <div key={product.name} className="p-4 rounded-xl bg-[#171C26] border border-white/10 space-y-3">
                          <div className="h-32 bg-[#11151D] rounded-lg flex items-center justify-center text-xs text-[#A1A1AA]">
                            Product Showcase Image
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-white">{product.name}</span>
                            <span className="font-bold text-[#10B981]">{product.price}</span>
                          </div>
                          <button
                            onClick={() => setCartCount((prev) => prev + 1)}
                            className="w-full py-1.5 text-xs font-semibold rounded-lg bg-[#57D6C5] text-black hover:bg-[#48c4b3] transition-colors"
                          >
                            Add to Bag
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* 3. WEATHERFLOW INTERACTIVE SIMULATION */}
              {project.id === 'weather' && (
                <div className="p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <CloudRain className="w-5 h-5 text-[#57D6C5]" />
                      <span className="font-bold text-white">WeatherFlow Radar</span>
                    </div>

                    {/* City Selector */}
                    <div className="flex items-center gap-1 bg-[#171C26] p-1 rounded-lg">
                      {(['San Francisco', 'Tokyo', 'London'] as const).map((city) => (
                        <button
                          key={city}
                          onClick={() => setSelectedCity(city)}
                          className={`text-xs px-3 py-1 rounded-md transition-colors ${
                            selectedCity === city ? 'bg-[#059669] text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Metric Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-[#171C26] border border-white/10 space-y-1">
                      <span className="text-xs text-[#A1A1AA]">Current Temp</span>
                      <div className="text-4xl font-extrabold text-white">
                        {selectedCity === 'San Francisco' ? '64°F' : selectedCity === 'Tokyo' ? '18°C' : '14°C'}
                      </div>
                      <span className="text-xs text-[#57D6C5]">Partly Cloudy · Humidity 68%</span>
                    </div>
                    <div className="p-5 rounded-xl bg-[#171C26] border border-white/10 space-y-1">
                      <span className="text-xs text-[#A1A1AA]">Air Quality Index</span>
                      <div className="text-4xl font-extrabold text-emerald-400">42</div>
                      <span className="text-xs text-[#A1A1AA]">Good · PM2.5: 12 µg/m³</span>
                    </div>
                    <div className="p-5 rounded-xl bg-[#171C26] border border-white/10 space-y-1">
                      <span className="text-xs text-[#A1A1AA]">Wind Radar</span>
                      <div className="text-4xl font-extrabold text-[#10B981]">14 mph</div>
                      <span className="text-xs text-[#A1A1AA]">North Gusts · 1014 hPa</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. SYNCFLOW TASK MANAGEMENT SIMULATION */}
              {project.id === 'task-management' && (
                <div className="p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-bold text-white">Sprint 14 Kanban Board</h4>
                      <p className="text-xs text-[#A1A1AA]">Reactive State Synchronization</p>
                    </div>

                    {/* New Task Inline */}
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Add rapid task..."
                        value={newTaskInput}
                        onChange={(e) => setNewTaskInput(e.target.value)}
                        className="bg-[#171C26] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#059669]"
                      />
                      <button
                        onClick={() => {
                          if (newTaskInput.trim()) {
                            setTasks([
                              ...tasks,
                              { id: Date.now(), title: newTaskInput.trim(), col: 'To Do', priority: 'High' }
                            ]);
                            setNewTaskInput('');
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#059669] text-white text-xs font-semibold hover:bg-[#047857]"
                      >
                        + Add
                      </button>
                    </div>
                  </div>

                  {/* Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['To Do', 'In Progress', 'Done'].map((col) => (
                      <div key={col} className="p-3.5 rounded-xl bg-[#171C26] border border-white/10 space-y-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-[#A1A1AA]">
                          <span>{col}</span>
                          <span className="w-5 h-5 rounded-full bg-[#11151D] flex items-center justify-center text-white text-[10px]">
                            {tasks.filter((t) => t.col === col).length}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {tasks
                            .filter((t) => t.col === col)
                            .map((task) => (
                              <div
                                key={task.id}
                                className="p-3 rounded-lg bg-[#11151D] border border-white/5 space-y-2 text-xs"
                              >
                                <p className="font-medium text-white">{task.title}</p>
                                <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]">
                                  <span className="text-amber-400">{task.priority}</span>
                                  <button
                                    onClick={() => {
                                      setTasks(
                                        tasks.map((t) =>
                                          t.id === task.id
                                            ? { ...t, col: col === 'To Do' ? 'In Progress' : col === 'In Progress' ? 'Done' : 'To Do' }
                                            : t
                                        )
                                      );
                                    }}
                                    className="text-[10px] text-[#57D6C5] hover:underline"
                                  >
                                    Move →
                                  </button>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. ASTRA VOX SPACE TOURISM SIMULATION */}
              {project.id === 'space-tourism' && (
                <div className="p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <span className="font-bold text-white tracking-widest text-sm flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-[#10B981]" />
                      ASTRA VOX EXPEDITIONS
                    </span>
                    <div className="flex items-center gap-2 bg-[#171C26] p-1 rounded-lg">
                      {(['Moon', 'Mars', 'Europa'] as const).map((dest) => (
                        <button
                          key={dest}
                          onClick={() => setDestination(dest)}
                          className={`text-xs px-3 py-1 rounded-md transition-colors ${
                            destination === dest ? 'bg-[#57D6C5] text-black font-semibold' : 'text-[#A1A1AA] hover:text-white'
                          }`}
                        >
                          {dest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4 text-left">
                      <span className="text-xs uppercase tracking-widest text-[#10B981]">
                        Destination Dossier
                      </span>
                      <h4 className="text-3xl font-extrabold text-white">
                        {destination === 'Moon' ? 'Luna Station Alpha' : destination === 'Mars' ? 'Olympus Mons Outpost' : 'Europa Subsurface Ocean'}
                      </h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        {destination === 'Moon'
                          ? 'Experience 1/6th gravity, stroll through historic Apollo landing sanctuaries, and observe Earth from the tranquility of the lunar crater resort.'
                          : destination === 'Mars'
                          ? 'Venture 225 million kilometers across deep space to humanity’s next frontier. Guided rover excursions through Valles Marineris.'
                          : 'Dive beneath 15 kilometers of pristine planetary ice to discover hydro-thermal habitats in our solar system’s most mysterious ocean.'}
                      </p>
                      <div className="flex items-center gap-6 pt-2 text-xs">
                        <div>
                          <span className="text-[#A1A1AA] block text-[11px]">AVG DISTANCE</span>
                          <span className="font-bold text-white text-sm">
                            {destination === 'Moon' ? '384,400 KM' : destination === 'Mars' ? '225M KM' : '628M KM'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#A1A1AA] block text-[11px]">TRAVEL TIME</span>
                          <span className="font-bold text-white text-sm">
                            {destination === 'Moon' ? '3 DAYS' : destination === 'Mars' ? '9 MONTHS' : '3.2 YEARS'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl bg-[#171C26] border border-white/10 overflow-hidden flex items-center justify-center p-6 text-center">
                      <div className="space-y-2">
                        <Rocket className="w-10 h-10 text-[#57D6C5] mx-auto animate-bounce" />
                        <span className="text-xs font-semibold text-white block">
                          Starship Starliner-X Ready for Docking
                        </span>
                        <span className="text-[11px] text-[#A1A1AA] block">
                          Pressurized habitat cabins · Mach 18 Orbital Velocity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#171C26] flex items-center justify-between text-xs text-[#A1A1AA]">
          <span>Full production-grade component state active in memory</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Close Sandbox
          </Button>
        </div>
      </div>
    </div>
  );
};
