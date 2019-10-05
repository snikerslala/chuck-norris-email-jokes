import React, { useState, useEffect } from 'react';
import UserNameList from './UserNameList';
import userData from '../userData';
import EmailList from './emails/EmailList';
import emailData from './emails/emailData';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [emails, setEmails] = useState([]);
  const [showEmails, setShowEmails] = useState(false);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleUserChange = id => {
    setUserId(id);
    const allEmails = emailData(id, users, userId);
    setEmails(allEmails);
  };
  const handleEmailList = () => {
    setShowEmails(!showEmails);
  };
  return (
    <main role='main' className='App-main'>
      <h1>Choose the user</h1>
      <UserNameList users={users} handleChange={handleUserChange} />
      <p>
        {userId
          ? `This user has
            ${
              emails.length === 1
                ? '1 valid email address'
                : `${emails.length} valid email addresses`
            }`
          : ''}
      </p>

      {/* *************show the user email list sorted by domain + email name*********** */}
      <input
        type='button'
        value={!showEmails ? 'Show the email list' : 'Hide the email list'}
        onClick={handleEmailList}
      />
      {showEmails ? <EmailList emails={emails} userId={userId} /> : null}
    </main>
  );
};

export default Main;
