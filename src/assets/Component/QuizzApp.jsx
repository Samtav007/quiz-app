import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: 'What is ReactJS?',
      options: ['Server-side framework', 'user interface framework', 'both a and b', 'none of the above'],
      answer: 'Server-side framework',
    },
    {
      question: 'React.js is written in which of the following language?',
      options: ['JavaScript', 'Java', 'C', 'C++'],
      answer: 'JavaScript',
    },
    {
      question: 'What is a state in React?',
      options: ['A permanent storage.', 'Internal storage of the component.', 'External storage of the component.', 'None of the above.'],
      answer: 'Internal storage of the component.',
    },
    {
      question: 'What is the return value of the useState hook?',
      options: ['Pair of current state and function updating it', 'Current State', 'Function updating the current state', 'UseState returns nothing'],
      answer: 'Pair of current state and function updating it',
    },
    {
      question: 'How many elements can a valid react component return?',
      options: ['1', '2', '3', '4'],
      answer: '1',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [highlight, sethighltight ] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }


    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  function togglehighlight(){
    sethighltight(!highlight)
  }

  return (
    <div style={{ backgroundColor: darkMode ? '#051937' : '#f7fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: darkMode ? '#ffffff' : '#000000' }}>
      <button style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: darkMode ? '#2c3e50' : '#3498db', color: '#ffffff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div style={{ backgroundColor: darkMode ? '#1b2b59' : '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '32px' }}>
        {showScore ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: darkMode ? '#2ecc71' : '#2d3748', marginBottom: '16px', textShadow: darkMode ? '0px 0px 10px #2ecc71' : 'none' }}>Quiz Finished</h2>
            <p style={{ fontSize: '18px', color: darkMode ? '#f7f7f7' : '#4a5568', marginBottom: '16px' }}>You scored {score} out of {questions.length}</p>
            <button style={{ backgroundColor: '#2ecc71', color: '#ffffff', fontWeight: 'bold', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', border: 'none', boxShadow: '0px 0px 10px #2ecc71' }} onClick={resetQuiz}>Retry</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <div style={{ fontSize: '16px', color: darkMode ? '#f7f7f7' : '#4a5568', color: highlight ? 'red' : 'blue', marginBottom: '16px' }}>{questions[currentQuestion].question}</div>
            </div>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} style={{ width: '100%', backgroundColor: darkMode ? '#2ecc71' : '#edf2f7', color: darkMode ? '#ffffff' : '#4a5568', fontWeight: 'bold', padding: '10px 20px', borderRadius: '4px', marginBottom: '8px', cursor: 'pointer', boxShadow: darkMode ? '0px 0px 10px #2ecc71' : 'none' }} onClick={() => handleAnswerOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
              <button onClick={togglehighlight}>Highlight</button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
