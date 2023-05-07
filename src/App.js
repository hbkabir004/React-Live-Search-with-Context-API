import { createContext, useState } from 'react';
import Characters from './components/Characters';
import Search from './components/Search';

export const QueryContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  
  return (
    <QueryContext.Provider value={[query, setQuery]}>
      <Search/>
      <Characters />
    </QueryContext.Provider>


  );
}

export default App;
