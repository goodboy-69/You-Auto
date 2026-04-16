/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import LandingPageView from './components/LandingPageView';
import DashboardView from './components/DashboardView';
import NicheResearchView from './components/NicheResearchView';
import ContentGenView from './components/ContentGenView';

export default function App() {
  const [view, setView] = useState('landing');

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardView />;
      case 'niche':
        return <NicheResearchView />;
      case 'content':
        return <ContentGenView />;
      default:
        return <LandingPageView onGetStarted={() => setView('dashboard')} />;
    }
  };

  return (
    <Layout activeView={view} onViewChange={setView}>
      {renderView()}
    </Layout>
  );
}
