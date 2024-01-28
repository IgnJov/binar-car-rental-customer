import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Update the import statement
import { routes } from '../../Platinum Challenge/src/Routes/Route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
