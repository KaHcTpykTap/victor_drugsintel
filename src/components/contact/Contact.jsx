import React, { useState } from 'react';
import { ContactContainer } from './styles/ContactStyles';
import HeaderSpan from '../headerSpan/HeaderSpan';
import Grid from '@mui/material/Grid';

const Contact = () => {

  const topHeader = 'FOR MORE INFORMATION';
  const header = 'Contact Us';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleClick = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmit(true);
  }

  return (
    <ContactContainer>
      <HeaderSpan header={header} topHeader={topHeader} />
      <Grid container spacing={12} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={10} md={6} >

        </Grid>
        <Grid item xs={12} sm={10} md={6}  >
          <input
            placeholder="Your Name"
            onChange={event => setName(event.target.value)}
            type='text'
            value={name}
          />

          <input
            placeholder="Your Email"
            onChange={event => setEmail(event.target.value)}
            type='email'
            value={email}
          />
          <input
            placeholder="Subject"
            onChange={event => setSubject(event.target.value)}
            type='text'
            value={subject}
          />
          <textarea
            placeholder="Message"
            onChange={event => setMessage(event.target.value)}
            value={message}
          />
          {submit ?
            <div className='c-submit'>
              We recieved your message and will contact you shortly
            </div>
            : <button onClick={handleClick}>Submit</button>}

        </Grid>
      </Grid>

    </ContactContainer>
  )
}

export default Contact