import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import POS from './components/POS';
import Inventory from './components/Inventory';
import Reservations from './components/Reservations';
import Reports from './components/Reports';
import Branches from './components/Branches';
import { AnimatePresence } from 'motion/react';

type View = 'dashboard' | 'pos' | 'inventory' | 'reservations' | 'reports' | 'branches';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard key="dashboard" />;
      case 'pos':
        return <POS key="pos" />;
      case 'inventory':
        return <Inventory key="inventory" />;
      case 'reservations':
        return <Reservations key="reservations" />;
      case 'reports':
        return <Reports key="reports" />;
      case 'branches':
        return <Branches key="branches" />;
      default:
        return <Dashboard key="dashboard" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <TopBar />
      
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>
    </div>
  );
}
