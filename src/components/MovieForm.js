import React, { useState } from 'react';

const MovieForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:',date);
    // Add your form submission logic here
  };

  return (
    <div style={styles.container}>
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <label style={styles.label}>
        Opening Text:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <label style={styles.label}>
        Release Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
    </div>
  );
};

export default MovieForm;

const styles = {
    container : {
        border: '2px solid #ccc',
        borderRadius: '4px',
        width: '500px',
        padding: '15px',   
        marginBottom: '10px'  
    },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '300px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: 'dark',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
