import React from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import Chat from './Chat';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App h-screen grid grid-cols-6  grid-rows-6">
      <Nav/>
      {user ? <Chat /> : <Welcome/>}
    </div>
  );
}

export default App;
