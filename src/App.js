import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

const ContactItem = styled.li`
  background: #f9f9f9;
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactName = styled.h2`
  margin: 0;
  font-size: 1.2em;
`;

const ContactEmail = styled.p`
  margin: 5px 0 0;
  color: #555;
`;

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the contacts:', error);
      });
  }, []);

  return (
    <Container>
      <Title>Contacts</Title>
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactDetails>
              <ContactName>{contact.name}</ContactName>
              <ContactEmail>{contact.email}</ContactEmail>
            </ContactDetails>
          </ContactItem>
        ))}
      </ContactList>
    </Container>
  );
}

export default App;
