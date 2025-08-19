import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaBlog, FaCalendar, FaUser, FaArrowRight, FaSearch, FaTags } from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'blockchain', name: 'Blockchain', count: 8 },
    { id: 'ai', name: 'Artificial Intelligence', count: 6 },
    { id: 'telemedicine', name: 'Telemedicine', count: 5 },
    { id: 'healthcare', name: 'Healthcare Innovation', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Blockchain in Healthcare: A Comprehensive Guide",
      excerpt: "Explore how blockchain technology is revolutionizing healthcare data management, patient privacy, and medical record security.",
      category: "blockchain",
      author: "Dr. Sarah Johnson",
      date: "2024-12-15",
      readTime: "8 min read",
      featured: true,
      tags: ["Blockchain", "Healthcare", "Security"]
    },
    {
      id: 2,
      title: "AI-Powered Diagnostics: Transforming Patient Care",
      excerpt: "Discover how artificial intelligence is enhancing diagnostic accuracy and enabling personalized treatment plans.",
      category: "ai",
      author: "Michael Chen",
      date: "2024-12-12",
      readTime: "6 min read",
      featured: false,
      tags: ["AI", "Diagnostics", "Patient Care"]
    },
    {
      id: 3,
      title: "Telemedicine Best Practices for Healthcare Providers",
      excerpt: "Essential guidelines and strategies for implementing effective telemedicine services in your practice.",
      category: "telemedicine",
      author: "Dr. Amara Okafor",
      date: "2024-12-10",
      readTime: "10 min read",
      featured: true,
      tags: ["Telemedicine", "Best Practices", "Healthcare Providers"]
    },
    {
      id: 4,
      title: "Decentralized Healthcare: Breaking Down Barriers",
      excerpt: "How decentralized systems are making healthcare more accessible and affordable for global communities.",
      category: "healthcare",
      author: "Emma Rodriguez",
      date: "2024-12-08",
      readTime: "7 min read",
      featured: false,
      tags: ["Decentralization", "Global Health", "Accessibility"]
    },
    {
      id: 5,
      title: "Smart Contracts in Medical Insurance: A Game Changer",
      excerpt: "Understanding how smart contracts are streamlining insurance claims and reducing healthcare costs.",
      category: "blockchain",
      author: "Dr. Alex Thompson",
      date: "2024-12-05",
      readTime: "9 min read",
      featured: false,
      tags: ["Smart Contracts", "Insurance", "Cost Reduction"]
    },
    {
      id: 6,
      title: "The Role of AI in Preventive Healthcare",
      excerpt: "How artificial intelligence is shifting healthcare focus from treatment to prevention and early intervention.",
      category: "ai",
      author: "Dr. Priya Patel",
      date: "2024-12-03",
      readTime: "5 min read",
      featured: false,
      tags: ["AI", "Preventive Care", "Early Detection"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <FaBlog className="text-white text-4xl" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            HelCon <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Stay updated with the latest insights, trends, and innovations in healthcare technology, 
            blockchain, AI, and the future of medical care.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaTags className="mr-3 text-blue-600" />
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.id ? 'bg-blue-500' : 'bg-gray-200'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Posts */}
              {selectedCategory === 'all' && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                      <article 
                        key={post.id}
                        className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                      >
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                          <span className="text-blue-600 text-sm font-medium capitalize">{post.category}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <FaUser />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaCalendar />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>

                        <button className="group flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          <span>Read More</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* All Posts */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
                </h2>
                
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article 
                      key={post.id}
                      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-blue-600 text-sm font-medium capitalize bg-blue-50 px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            {post.featured && (
                              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <FaUser />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <FaCalendar />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                              <span>{post.readTime}</span>
                            </div>

                            <button className="group flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                              <span>Read Article</span>
                              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                    <p className="text-gray-600">Try adjusting your search or category filter.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Stay Updated with HelCon Insights
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Subscribe to our newsletter and get the latest healthcare technology insights delivered to your inbox.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-none outline-none text-lg"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ healthcare professionals and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;