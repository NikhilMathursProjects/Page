import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="logo">EduRev</div>
                <div className="header-buttons">
                    <button className="login-btn">Login</button>
                    <button className="join-btn">Join now!</button>
                </div>
            </header>

            <div className="hero-section">
                <div className='textsection'>
                    <h1>Unlocking India's Potential Through <span>Innovative Learning</span></h1>
                    <p>Empowering students across India with top educators, innovative courses, and personalized digital learning experiences.</p>
                    <button className="get-started-btn">Get started!</button>    
                </div>
            </div>

            <div className="features">
                <div className="feature-box">
                    <h3>Live Learning, Anytime, Anywhere</h3>
                    <p>Engage in daily live classes where you can chat with educators, ask questions, participate in live polls, and get your doubts cleared in real-time.</p>
                </div>
                <div className="feature-box">
                    <h3>Interactive Learning, On Your Schedule</h3>
                    <p>Enhance your understanding with dedicated practice sessions, mock tests, and detailed lecture notes in PDF format.</p>
                </div>
                <div className="feature-box">
                    <h3>Interactive Learning, On Your Schedule</h3>
                    <p>Strengthen your knowledge with our practice tools, mock tests, and detailed lecture notes.</p>
                </div>
            </div>
        </div>
    );
}

export default App;
