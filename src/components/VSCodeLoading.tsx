import { useEffect, useState } from 'react';
import { Folder, FolderOpen, FileText, Play, Terminal, Check } from 'lucide-react';

interface VSCodeLoadingProps {
  onLoadingComplete: () => void;
}

export const VSCodeLoading = ({ onLoadingComplete }: VSCodeLoadingProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [fileTreeExpanded, setFileTreeExpanded] = useState<string[]>([]);

  const steps = [
    { text: "Opening VS Code...", duration: 800 },
    { text: "Loading workspace...", duration: 600 },
    { text: "Expanding file tree...", duration: 1000 },
    { text: "Installing dependencies...", duration: 1200 },
    { text: "Starting dev server...", duration: 800 },
    { text: "Portfolio ready!", duration: 500 },
  ];

  const fileStructure = [
    { name: "📁 srikrishna-portfolio", type: "folder", level: 0, delay: 0 },
    { name: "📁 src", type: "folder", level: 1, delay: 200 },
    { name: "📁 components", type: "folder", level: 2, delay: 400 },
    { name: "📄 Hero.tsx", type: "file", level: 3, delay: 600 },
    { name: "📄 About.tsx", type: "file", level: 3, delay: 700 },
    { name: "📄 Projects.tsx", type: "file", level: 3, delay: 800 },
    { name: "📄 Skills.tsx", type: "file", level: 3, delay: 900 },
    { name: "📁 pages", type: "folder", level: 2, delay: 1000 },
    { name: "📄 Index.tsx", type: "file", level: 3, delay: 1100 },
    { name: "📄 App.tsx", type: "file", level: 1, delay: 1200 },
    { name: "📄 package.json", type: "file", level: 1, delay: 1300 },
  ];

  const terminalCommands = [
    "npm install",
    "✓ Dependencies installed successfully",
    "npm run dev",
    "Local: http://localhost:8080/",
    "✓ Server started successfully",
    "Opening browser...",
    "✓ Portfolio loaded!"
  ];

  useEffect(() => {
    // Simulate VS Code loading steps
    const stepTimer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Complete loading
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }
    }, steps[currentStep]?.duration || 500);

    // File tree expansion animation
    if (currentStep === 2) {
      fileStructure.forEach((file, index) => {
        setTimeout(() => {
          setFileTreeExpanded(prev => [...prev, file.name]);
        }, file.delay);
      });
    }

    // Terminal commands animation
    if (currentStep >= 3) {
      terminalCommands.forEach((command, index) => {
        setTimeout(() => {
          setTerminalLines(prev => [...prev, command]);
        }, index * 400);
      });
    }

    return () => clearTimeout(stepTimer);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#1e1e1e] text-[#cccccc] font-mono overflow-hidden">
      {/* VS Code Title Bar */}
      <div className="h-8 bg-[#323233] flex items-center px-4 text-sm border-b border-[#454545]">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
        </div>
        <span className="text-[#cccccc]">Visual Studio Code - Srikrishna Portfolio</span>
      </div>

      {/* Main VS Code Interface */}
      <div className="flex h-full">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4">
          <div className="w-6 h-6 opacity-60">
            <FileText className="w-full h-full" />
          </div>
          <div className="w-6 h-6 opacity-60">
            <Folder className="w-full h-full" />
          </div>
          <div className="w-6 h-6 opacity-60">
            <Terminal className="w-full h-full" />
          </div>
        </div>

        {/* Sidebar - File Explorer */}
        <div className="w-64 bg-[#252526] border-r border-[#454545]">
          <div className="p-3 text-xs font-semibold text-[#cccccc] uppercase tracking-wide border-b border-[#454545]">
            Explorer
          </div>
          <div className="p-2">
            {currentStep >= 2 && (
              <div className="space-y-1">
                {fileStructure.map((file, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 py-1 px-2 text-sm transition-all duration-300 ${
                      fileTreeExpanded.includes(file.name) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{ paddingLeft: `${file.level * 16 + 8}px` }}
                  >
                    {file.type === 'folder' ? (
                      <FolderOpen className="w-4 h-4 text-[#dcb67a]" />
                    ) : (
                      <FileText className="w-4 h-4 text-[#519aba]" />
                    )}
                    <span className="text-[#cccccc]">{file.name.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="h-10 bg-[#2d2d30] border-b border-[#454545] flex items-center px-3">
            {currentStep >= 1 && (
              <div className="bg-[#1e1e1e] px-3 py-2 text-sm border-r border-[#454545] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#519aba]" />
                <span>Portfolio.tsx</span>
              </div>
            )}
          </div>

          {/* Editor Content */}
          <div className="flex-1 bg-[#1e1e1e] p-4 relative overflow-hidden">
            {currentStep >= 1 && (
              <div className="space-y-2 text-sm">
                <div className="text-[#569cd6]">import</div>
                <div className="text-[#9cdcfe] ml-4">React, {'{'}useState, useEffect{'}'}</div>
                <div className="text-[#569cd6] ml-4">from</div>
                <div className="text-[#ce9178] ml-4">'react';</div>
                <div className="text-[#569cd6] mt-4">import</div>
                <div className="text-[#9cdcfe] ml-4">{'{'} Hero, About, Projects, Skills {'}'}</div>
                <div className="text-[#569cd6] ml-4">from</div>
                <div className="text-[#ce9178] ml-4">'./components';</div>
                
                <div className="text-[#569cd6] mt-6">const</div>
                <div className="text-[#dcdcaa] ml-4">Portfolio</div>
                <div className="text-[#d4d4d4] ml-4">= () =&gt; {'{'}</div>
                <div className="text-[#569cd6] ml-8">return</div>
                <div className="text-[#d4d4d4] ml-8">(</div>
                <div className="text-[#808080] ml-12">&lt;!-- Building amazing portfolio... --&gt;</div>
                <div className="text-[#d4d4d4] ml-8">);</div>
                <div className="text-[#d4d4d4] ml-4">{'};'}</div>
              </div>
            )}

            {/* Loading Animation Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#1e1e1e]/90 backdrop-blur-sm">
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <div className="absolute inset-0 border-4 border-[#007acc] rounded-full animate-spin border-t-transparent"></div>
                    <div className="absolute inset-2 bg-[#007acc] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SN</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl font-semibold text-[#cccccc] mb-2">
                  {steps[currentStep]?.text}
                </div>
                <div className="text-sm text-[#888888]">
                  Step {currentStep + 1} of {steps.length}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Panel */}
          {currentStep >= 3 && (
            <div className="h-40 bg-[#1e1e1e] border-t border-[#454545]">
              <div className="h-8 bg-[#2d2d30] flex items-center px-3 text-sm border-b border-[#454545]">
                <Terminal className="w-4 h-4 mr-2" />
                <span>Terminal</span>
              </div>
              <div className="p-3 space-y-1 text-sm">
                <div className="text-[#569cd6]">srikrishna@portfolio:~/srikrishna-portfolio$</div>
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={`animate-fade-in ${
                      line.startsWith('✓') 
                        ? 'text-[#28ca42]' 
                        : line.includes('http://') 
                        ? 'text-[#007acc]' 
                        : 'text-[#cccccc]'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {line.startsWith('npm') || line.startsWith('✓') ? (
                      <span className="text-[#569cd6]">$ </span>
                    ) : null}
                    {line}
                  </div>
                ))}
                {currentStep >= 4 && (
                  <div className="flex items-center text-[#cccccc]">
                    <span className="text-[#569cd6]">$ </span>
                    <span className="animate-pulse">|</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">
        <div className="flex items-center gap-4">
          <span>⚡ Ready</span>
          <span>React</span>
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
      </div>
    </div>
  );
};