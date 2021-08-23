import React from 'react';
import { LayoutContainer, LayoutFooter, LayoutHeader } from './layout';
import { PageHome } from './pages/home';

function App() {
  return (
    <div className="App">
      <LayoutHeader />
      <LayoutContainer>
        <PageHome />
      </LayoutContainer>
      <LayoutFooter />
    </div>
  );
}

export default App;
