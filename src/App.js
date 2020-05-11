import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Homepage = lazy(() => import('./pages/Homepage'));
const DescriptionPage = lazy(() => import('./pages/DescriptionPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));

const App = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<h1>Loading</h1>}>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/description' component={DescriptionPage} />
          <Route exact path='/calculator' component={CalculatorPage} />
        </Suspense>
      </Switch>
    </>
  )
};

export default App;
