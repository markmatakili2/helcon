import React, { useState } from 'react';
import { FaBrain, FaChartLine, FaHeartbeat, FaUserMd, FaLightbulb, FaSearch } from 'react-icons/fa';

function AiInsights() {
    const [userInput, setUserInput] = useState('');
    const [insights, setInsights] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('general');
    const [isGenerating, setIsGenerating] = useState(false);

    const categories = [
        { id: 'general', name: 'General Health', icon: <FaHeartbeat /> },
        { id: 'trends', name: 'Health Trends', icon: <FaChartLine /> },
        { id: 'recommendations', name: 'Recommendations', icon: <FaLightbulb /> },
        { id: 'risk', name: 'Risk Assessment', icon: <FaUserMd /> }
    ];

    const sampleInsights = {
        general: "Based on your recent health data, your overall health score is 85/100. Your cardiovascular health is excellent, and your sleep patterns have improved by 15% over the last month. Consider maintaining your current exercise routine.",
        trends: "Your health trends show consistent improvement over the past 3 months. Blood pressure readings are within normal range, and your stress levels have decreased by 20%. Keep up the great work!",
        recommendations: "AI recommends: 1) Increase water intake to 8 glasses daily, 2) Add 10 minutes of meditation to your routine, 3) Schedule a routine check-up in 2 months, 4) Consider adding omega-3 supplements to your diet.",
        risk: "Your current risk assessment shows low risk for cardiovascular disease and diabetes. However, family history indicates monitoring cholesterol levels every 6 months. Overall risk score: Low (15/100)."
    };

    const generateInsights = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setInsights(sampleInsights[selectedCategory]);
            setIsGenerating(false);
        }, 2000);
    };

    const handleChatInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const sendChatMessage = () => {
        if (!userInput.trim()) return;
        
        console.log('User message:', userInput);
        // Generate AI response based on user input
        const responses = [
            "Based on your query, I recommend consulting with a healthcare provider for personalized advice.",
            "Your health data suggests maintaining your current wellness routine. Would you like specific recommendations?",
            "I've analyzed your patterns and found some interesting insights. Let me generate a detailed report for you.",
            "That's a great question! Based on current health trends, here's what I recommend..."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setInsights(randomResponse);
        setUserInput('');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                            <FaBrain className="text-white text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">AI Health Insights</h1>
                            <p className="text-gray-600">Personalized health analysis powered by artificial intelligence</p>
                        </div>
                    </div>
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Select Insight Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`p-4 rounded-xl border-2 transition-all ${
                                    selectedCategory === category.id
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                                }`}
                            >
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="text-2xl">{category.icon}</div>
                                    <span className="font-medium">{category.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Generate Insights Button */}
                <div className="mb-8">
                    <button
                        onClick={generateInsights}
                        disabled={isGenerating}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                        <FaBrain />
                        <span>{isGenerating ? 'Generating Insights...' : 'Generate AI Health Insights'}</span>
                    </button>
                </div>

                {/* Insights Display */}
                <div className="mb-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                            <FaLightbulb className="text-yellow-500" />
                            <span>Your Health Insights</span>
                        </h2>
                        
                        {isGenerating ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-gray-600">Analyzing your health data...</span>
                                </div>
                            </div>
                        ) : insights ? (
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                                <p className="text-gray-800 leading-relaxed text-lg">{insights}</p>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <FaBrain className="text-6xl text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-600">Select a category and click "Generate AI Health Insights" to get personalized recommendations</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Chat Interface */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                            <FaSearch className="text-blue-600" />
                            <span>Ask AI About Your Health</span>
                        </h2>
                        <p className="text-gray-600 mt-2">Get instant answers to your health-related questions</p>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Ask about your health data, symptoms, or get recommendations..."
                                value={userInput}
                                onChange={handleChatInputChange}
                                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                                className="flex-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                            />
                            <button
                                onClick={sendChatMessage}
                                disabled={!userInput.trim()}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                            >
                                <span>Send</span>
                            </button>
                        </div>
                        
                        {/* Quick Questions */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "What's my health score?",
                                    "Any health risks?",
                                    "Recommend exercises",
                                    "Diet suggestions"
                                ].map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setUserInput(question);
                                            sendChatMessage();
                                        }}
                                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AiInsights;