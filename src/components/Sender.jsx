import React from 'react';
import RetrieveText from './RetrieveText';
import SaveText from './SaveText';
import '../App.css'

function Sender() {
  return (
    <div className="container">
      <header className="header">
        <h1>Secure Text Storage</h1>
        <p>Save your text and retrieve it with a unique number.</p>
      </header>
      <main className="main-content">
        <SaveText />
        <hr className="divider" />
        <RetrieveText />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Text Storage Service</p>
      </footer>
    </div>
  );
}

export default Sender;
