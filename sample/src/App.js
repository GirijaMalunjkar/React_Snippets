import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to XYZ Business</h1>
        <p>Your one-stop solution for all your business needs.</p>
      </header>
      <main>
        <section className="Services">
          <h2>Our Services</h2>
          <ul>
            <li>Product A</li>
            <li>Product B</li>
            <li>Product C</li>
          </ul>
        </section>
        <section className="About">
          <h2>About Us</h2>
          <p>We are a dedicated team working to provide top-notch solutions to businesses of all sizes.</p>
        </section>
        <section className="Contact">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us at contact@example.com or call us at 123-456-7890.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 XYZ Business. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
