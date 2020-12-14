import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase'
import Admin from './components/Admin'
import Home from './components/Home'




function App() {
  const [user] = useAuthState(firebase.auth())
  const [value, loading, error] = useCollection(firebase.firestore().collection('test'))
  return (
    <div>
      {user ? <Admin /> : <Home />}
    </div>
  );
}

export default App;
