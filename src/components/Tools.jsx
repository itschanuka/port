import React from 'react';

const Tools = ({ toolsTab, setToolsTab, languages, frameworks, tools, design }) => {
  const renderTools = (items) =>
    items.map((tool, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-6 transition-all duration-300 transform border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-lg group"
      >
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full" style={{ backgroundColor: `${tool.color}20` }}>
          <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
        </div>
        <h3 className="font-semibold text-white transition-colors group-hover:text-purple-400">{tool.name}</h3>
      </div>
    ));

  return (
    <section id="tools" className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
          Tools & Technics
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex p-2 border rounded-xl bg-white/5 backdrop-blur-md border-white/10">
            {['All', 'Languages', 'Frameworks', 'Tools', 'Design'].map((category) => (
              <button
                key={category}
                onClick={() => setToolsTab(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  toolsTab === category ? 'bg-gradient-to-r from-purple-600 to-pink-800 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {(toolsTab === 'All' || toolsTab === 'Languages') && renderTools(languages)}
          {(toolsTab === 'All' || toolsTab === 'Frameworks') && renderTools(frameworks)}
          {(toolsTab === 'All' || toolsTab === 'Tools') && renderTools(tools)}
          {(toolsTab === 'All' || toolsTab === 'Design') && renderTools(design)}
        </div>
      </div>
    </section>
  );
};

export default Tools;
