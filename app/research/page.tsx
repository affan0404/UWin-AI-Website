"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CornerNeuralPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 text-blue-900 overflow-hidden relative">
      {/* Back button */}
      <button 
        onClick={handleBackClick}
        className="absolute top-4 left-4 z-20 flex items-center px-4 py-2 bg-white border border-blue-200 rounded-md shadow-sm hover:bg-blue-50 transition-colors text-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      {/* Subtle dotted grid background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>
      
      {/* Top-left: Classic neural network */}
      <div className="absolute top-12 left-12 w-64 h-64 opacity-70">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className="nodes-and-links">
            {/* Input layer */}
            {[0, 1, 2, 3].map((i) => (
              <circle 
                key={`input-${i}`} 
                cx="30" 
                cy={40 + i * 40} 
                r="4" 
                fill="#3B82F6" 
              />
            ))}
            
            {/* Hidden layer */}
            {[0, 1, 2, 3, 4].map((i) => (
              <circle 
                key={`hidden-${i}`} 
                cx="100" 
                cy={30 + i * 35} 
                r="4" 
                fill="#2563EB"
              />
            ))}
            
            {/* Output layer */}
            {[0, 1, 2].map((i) => (
              <circle 
                key={`output-${i}`} 
                cx="170" 
                cy={50 + i * 50} 
                r="4" 
                fill="#1E40AF"
              />
            ))}
            
            {/* Connections from input to hidden */}
            {[0, 1, 2, 3].map((input) => (
              [0, 1, 2, 3, 4].map((hidden) => (
                <line 
                  key={`i${input}-h${hidden}`} 
                  x1="30" 
                  y1={40 + input * 40} 
                  x2="100" 
                  y2={30 + hidden * 35} 
                  stroke="#93C5FD" 
                  strokeWidth="0.5" 
                  strokeOpacity="0.4"
                />
              ))
            ))}
            
            {/* Connections from hidden to output */}
            {[0, 1, 2, 3, 4].map((hidden) => (
              [0, 1, 2].map((output) => (
                <line 
                  key={`h${hidden}-o${output}`} 
                  x1="100" 
                  y1={30 + hidden * 35} 
                  x2="170" 
                  y2={50 + output * 50} 
                  stroke="#93C5FD" 
                  strokeWidth="0.5" 
                  strokeOpacity="0.4"
                />
              ))
            ))}
          </g>
        </svg>
        <div className="text-center mt-2 font-serif text-xs text-blue-600">Neural Architecture</div>
      </div>
      
      {/* Top-right: Radial neural network */}
      <div className="absolute top-12 right-12 w-64 h-64 opacity-70">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className="neural-cluster-topright">
            <circle cx="100" cy="100" r="50" fill="none" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="100" cy="100" r="35" fill="none" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.5" />
            
            {/* Radial nodes */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x = 100 + Math.cos(angle) * 50;
              const y = 100 + Math.sin(angle) * 50;
              return (
                <circle 
                  key={`radial-node-${i}`} 
                  cx={x} 
                  cy={y} 
                  r="3" 
                  fill="#3B82F6" 
                  fillOpacity="0.7"
                />
              );
            })}
            
            {/* Connect to center */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x = 100 + Math.cos(angle) * 50;
              const y = 100 + Math.sin(angle) * 50;
              return (
                <line 
                  key={`radial-connection-${i}`} 
                  x1="100" 
                  y1="100" 
                  x2={x} 
                  y2={y} 
                  stroke="#93C5FD" 
                  strokeWidth="0.5" 
                  strokeOpacity="0.5"
                />
              );
            })}
          </g>
        </svg>
        <div className="text-center mt-2 font-serif text-xs text-blue-600">Radial Network</div>
      </div>
      
      {/* Center paragraph with elegant styling */}
      <div className="relative max-w-3xl mx-auto my-16 bg-white p-10 rounded-lg shadow-sm border border-blue-100 z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <h2 className="text-3xl font-serif font-bold mb-6 text-blue-800">
        Research Board
        </h2>
        <p className="leading-relaxed text-lg text-blue-700 font-semi-bold">
        The AI Club's Research Board is dedicated to advancing AI knowledge through collaborative research projects. Members explore cutting-edge topics like machine learning, computer vision, and natural language processing, gaining hands-on experience with real-world applications. The board provides mentorship, resources, and opportunities to publish findings or present at conferences. By fostering a research-driven environment, the AI Club empowers students to push the boundaries of AI innovation.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <span className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600">Clothing</span>
          <span className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600">Stickers</span>
          <span className="px-4 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-600">Merch</span>
        </div>
      </div>
      
      {/* Directly underneath text box: Recurrent neural network */}
      <div className="relative max-w-3xl mx-auto opacity-70">
        <svg viewBox="0 0 600 150" className="w-full">
          <g className="recurrent-network">
            {/* Recurrent neural network pattern */}
            <rect x="170" y="15" width="260" height="120" rx="8" fill="none" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.3" />
            
            {/* Input nodes */}
            <circle cx="120" cy="50" r="5" fill="#3B82F6" fillOpacity="0.6" />
            <circle cx="120" cy="100" r="5" fill="#3B82F6" fillOpacity="0.6" />
            <line x1="95" y1="50" x2="120" y2="50" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="95" y1="100" x2="120" y2="100" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.4" />
            
            {/* Output nodes */}
            <circle cx="480" cy="50" r="5" fill="#3B82F6" fillOpacity="0.6" />
            <circle cx="480" cy="100" r="5" fill="#3B82F6" fillOpacity="0.6" />
            <line x1="480" y1="50" x2="505" y2="50" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="480" y1="100" x2="505" y2="100" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.4" />
            
            {/* Internal nodes */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={`memory-cell-${i}`}>
                <rect x={220 + i * 80} y="35" width="40" height="80" rx="4" fill="none" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.3" />
                <circle cx={240 + i * 80} cy="75" r="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.5" />
                <text x={240 + i * 80} y="78" textAnchor="middle" fontSize="10" fill="#3B82F6">m</text>
              </g>
            ))}
            
            {/* Forward connections */}
            <line x1="120" y1="50" x2="220" y2="50" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="120" y1="100" x2="220" y2="100" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="260" y1="50" x2="300" y2="50" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="260" y1="100" x2="300" y2="100" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="340" y1="50" x2="380" y2="50" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="340" y1="100" x2="380" y2="100" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="420" y1="50" x2="480" y2="50" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="420" y1="100" x2="480" y2="100" stroke="#93C5FD" strokeWidth="0.8" strokeOpacity="0.5" />
            
            {/* Recurrent connections */}
            <path d="M260,40 C280,20 300,20 320,40" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="2,2" />
            <path d="M340,40 C360,20 380,20 400,40" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="2,2" />
          </g>
        </svg>
        <div className="text-center font-serif text-xs text-blue-600">Long Short-Term Memory Network</div>
      </div>

      {/* Bottom-left: Data visualization */}
      <div className="absolute bottom-12 left-12 w-64 h-64 opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Data wave patterns */}
          <path 
            d="M0,100 Q25,80 50,100 T100,100 T150,100 T200,100" 
            fill="none" 
            stroke="#60A5FA" 
            strokeWidth="1.5" 
            strokeOpacity="0.6" 
          />
          <path 
            d="M0,120 Q25,140 50,120 T100,120 T150,120 T200,120" 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="1.5" 
            strokeOpacity="0.5" 
          />
          
          {/* Data points */}
          {[30, 70, 110, 150].map((x, i) => (
            <circle 
              key={`data-point-${i}`}
              cx={x} 
              cy={100 - (i % 2) * 20 + (i % 3) * 10} 
              r="3" 
              fill="#1E40AF" 
            />
          ))}
          
          {/* Bar chart element */}
          <rect x="20" y="150" width="10" height="20" fill="#BFDBFE" />
          <rect x="40" y="140" width="10" height="30" fill="#93C5FD" />
          <rect x="60" y="130" width="10" height="40" fill="#60A5FA" />
          <rect x="80" y="145" width="10" height="25" fill="#3B82F6" />
          <rect x="100" y="135" width="10" height="35" fill="#2563EB" />
        </svg>
        <div className="text-center mt-2 font-serif text-xs text-blue-600">Analytics Insights</div>
      </div>

      {/* Bottom-right: Convolutional network */}
      <div className="absolute bottom-12 right-12 w-64 h-64 opacity-70">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className="convolutional-network">
            {/* Input layer */}
            <rect x="10" y="70" width="30" height="60" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="0.5" />
            
            {/* Convolutional layers */}
            <rect x="50" y="60" width="20" height="80" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="0.5" />
            <rect x="80" y="50" width="15" height="100" fill="#93C5FD" stroke="#60A5FA" strokeWidth="0.5" />
            <rect x="105" y="65" width="10" height="70" fill="#60A5FA" stroke="#60A5FA" strokeWidth="0.5" />
            
            {/* Fully connected layers */}
            {[0, 1, 2, 3].map((i) => (
              <circle 
                key={`fc-input-${i}`} 
                cx="130" 
                cy={75 + i * 15} 
                r="3" 
                fill="#3B82F6" 
              />
            ))}
            
            {[0, 1].map((i) => (
              <circle 
                key={`fc-hidden-${i}`} 
                cx="150" 
                cy={85 + i * 30} 
                r="3" 
                fill="#2563EB" 
              />
            ))}
            
            <circle cx="180" cy="100" r="3" fill="#1E40AF" />
            
            {/* Connections */}
            {[0, 1, 2, 3].map((input) => (
              [0, 1].map((hidden) => (
                <line 
                  key={`fc-c-${input}-${hidden}`} 
                  x1="130" 
                  y1={75 + input * 15} 
                  x2="150" 
                  y2={85 + hidden * 30} 
                  stroke="#93C5FD" 
                  strokeWidth="0.3" 
                  strokeOpacity="0.5"
                />
              ))
            ))}
            
            {[0, 1].map((hidden) => (
              <line 
                key={`fc-out-${hidden}`} 
                x1="150" 
                y1={85 + hidden * 30} 
                x2="180" 
                y2="100" 
                stroke="#93C5FD" 
                strokeWidth="0.3" 
                strokeOpacity="0.5"
              />
            ))}
            
            {/* Layer connections */}
            <path d="M40,100 L50,100" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.5" />
            <path d="M70,100 L80,100" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.5" />
            <path d="M95,100 L105,100" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.5" />
            <path d="M115,100 L126,100" stroke="#60A5FA" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>
        </svg>
        <div className="text-center mt-2 font-serif text-xs text-blue-600">Convolutional Network</div>
      </div>
      
      {/* Subtle blue accents */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      <div className="absolute left-1/3 top-1/3 w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
    </div>
  );
}