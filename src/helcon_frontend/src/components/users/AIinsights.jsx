import React, { useState } from 'react';

function AiInsights() {
    const [userInput, setUserInput] = useState('');
    const [insights, setInsights] = useState('');

    const generateInsights = () => {
        // This is where you would integrate with your AI model
        // to process health data and generate insights.
        // For now, let's just set a placeholder message.
        setInsights('Generating personalized health insights based on your data...');
    };

    const handleChatInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const sendChatMessage = () => {
        // This is where you would send the user's chat message
        // to your AI model for interaction.
        console.log('User message:', userInput);
        // You would likely want to display the AI's response here as well
        setUserInput(''); // Clear the input after sending
    };

    return (
        <div className="container mx-auto p-4"> {/* Added container and padding */}
            <h1 className="text-2xl font-bold mb-4 text-primary_1">AI Health Insights</h1> {/* Applied text size, weight, margin bottom, and primary color */}
            <p className="mb-4 text-gray-700"> {/* Added margin bottom and gray text color */}
                This page provides personalized health insights based on your data using
                the power of AI. You can generate insights or ask questions about your
                health data.
            </p>

            <button
                onClick={generateInsights}
                className="bg-primary_1 text-white px-4 py-2 rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary_1 focus:ring-opacity-50" // Styled button with primary colors and padding
            >
                Generate Health Insights
            </button>

            <div className="insights-display mt-4 p-4 bg-gray-200 rounded"> {/* Added margin top, padding, background, and rounded corners */}
                {insights && <p className="text-gray-800">{insights}</p>} {/* Applied text color */}
            </div>

            <div className="chat-container mt-4 flex"> {/* Added margin top and flex display */}
                <input
                    type="text"
                    placeholder="Ask a question about your health data..."
                    value={userInput}
                    onChange={handleChatInputChange}
                    className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary_1" // Styled input
                />
                <button
                    onClick={sendChatMessage}
                    className="bg-primary_1 text-white px-4 py-2 rounded-r hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary_1 focus:ring-opacity-50" // Styled button
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default AiInsights;