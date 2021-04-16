import { TokenProvider } from './TokenContext';
import Parent from './components/Parent';

function App() {
  return (
    <TokenProvider>
      <Parent />
    </TokenProvider>
  );
}

export default App;
