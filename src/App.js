import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccoutProvider';
function App() {

  const clientId = '267809618976-4efhqvoka1s24mlkf3ubtia4132o4933.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
