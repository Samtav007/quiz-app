import React from 'react';

function StartQuiz({ toggle }) {
  return (
    <>
      <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ff6347', fontSize: '3rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Welcome to the Quiz!</h1>
          <button style={{ backgroundColor: '#ff6347', color: '#ffffff', padding: '10px 20px', borderRadius: '4px', border: 'none', fontSize: '1.5rem', cursor: 'pointer', marginTop: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }} onClick={toggle}>Play</button>
        </div>
      </div>
    </>
  );
}

export default StartQuiz;
