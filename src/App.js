import {ChatEngine} from 'react-chat-engine';

import './App.css';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height ='100vh'

      projectID = 'f6816b8e-406e-4bec-b2de-16e593418a8c'
      userName = {localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // userName='jsproject'
      // userName='zaczimer'
      // userSecret='1q2w3e'
      renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
  );
};

export default App;
