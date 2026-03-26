import React from 'react';

export default function Slide05({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary-container selection:text-black min-h-screen flex flex-col h-screen w-screen overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px', backgroundColor: '#f8f5ff' }}>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#FF5A5F] dark:bg-[#FF5A5F] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-2xl font-black text-black uppercase font-headline tracking-tighter">Nayla Wrapped</div>
        <div className="flex items-center gap-4">
          <span className="font-headline font-bold uppercase tracking-tighter text-lg md:text-xl text-black">05 / 09</span>
        </div>
      </header>
      
      <main className="flex-grow pt-24 pb-48 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-y-auto custom-scrollbar">
        <div className="mb-12 relative">
          <div className="inline-block bg-[#B6FF00] border-2 border-black px-4 py-1 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-headline font-bold uppercase text-black tracking-tight">Personal Core</span>
          </div>
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-black uppercase leading-none tracking-tighter mb-4">
            WHAT MAKES<br/>YOU YOU
          </h1>
          <div className="h-2 w-32 bg-[#FF5A5F] border-2 border-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#FFEA70] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col min-h-[300px] transition-transform hover:-rotate-1">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-5xl text-black">fitness_center</span>
              <div className="bg-white border-2 border-black px-3 py-1 font-headline font-bold text-xs uppercase">Level 99</div>
            </div>
            <h3 className="font-headline font-black text-3xl text-black uppercase mb-4">Resilient</h3>
            <p className="text-black font-medium leading-tight mb-4 flex-grow overflow-y-auto pr-2">
              Like a skyscraper in a storm, you flex but never break. Your ability to bounce back from challenges is your strongest asset this year.
            </p>
            <div className="w-full bg-black h-12 flex items-center px-4 justify-between">
              <span className="text-[#B6FF00] font-headline font-bold text-sm tracking-widest uppercase">Unstoppable</span>
              <span className="material-symbols-outlined text-[#B6FF00]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
            </div>
          </div>
          
          <div className="bg-[#CCCCFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col min-h-[300px] transition-transform hover:rotate-1">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-5xl text-black">favorite</span>
              <div className="bg-[#B6FF00] border-2 border-black px-3 py-1 font-headline font-bold text-xs uppercase">Rare Find</div>
            </div>
            <h3 className="font-headline font-black text-3xl text-black uppercase mb-4">Kind</h3>
            <p className="text-black font-medium leading-tight mb-4 flex-grow overflow-y-auto pr-2">
              In a world of noise, your empathy is a melody. You&apos;ve consistently put others first, creating a ripple effect of warmth and genuine connection.
            </p>
            <div className="flex gap-2">
              <div className="bg-white border-2 border-black px-2 py-1 text-[10px] font-bold uppercase">Empathetic</div>
              <div className="bg-white border-2 border-black px-2 py-1 text-[10px] font-bold uppercase">Patient</div>
            </div>
          </div>
          
          <div className="bg-[#FF5A5F] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col min-h-[300px] transition-transform hover:-rotate-2">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-5xl text-black">shield</span>
              <div className="bg-black text-white border-2 border-white px-3 py-1 font-headline font-bold text-xs uppercase">Fearless</div>
            </div>
            <h3 className="font-headline font-black text-3xl text-black uppercase mb-4">Brave</h3>
            <p className="text-black font-medium leading-tight mb-4 flex-grow overflow-y-auto pr-2">
              Courage isn&apos;t the absence of fear, but the decision that something else is more important. You took the leap when it mattered most.
            </p>
            <div className="border-t-2 border-black pt-4 flex items-center gap-2">
              <span className="font-headline font-black text-xl italic">&quot;NO RETREAT&quot;</span>
            </div>
          </div>
          
          <div className="bg-[#B6FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col min-h-[300px] transition-transform hover:rotate-2">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-5xl text-black">brush</span>
              <div className="bg-white border-2 border-black px-3 py-1 font-headline font-bold text-xs uppercase">Visionary</div>
            </div>
            <h3 className="font-headline font-black text-3xl text-black uppercase mb-4">Creative</h3>
            <p className="text-black font-medium leading-tight mb-4 flex-grow overflow-y-auto pr-2">
              You don&apos;t just see the world as it is, but as it could be. Your unique perspective has transformed ordinary moments into masterpieces.
            </p>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-4 bg-black"></div>
              <div className="h-4 bg-white border border-black"></div>
              <div className="h-4 bg-[#FF5A5F]"></div>
              <div className="h-4 bg-[#FFEA70]"></div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-24 left-0 w-full flex justify-center items-center pointer-events-none z-40">
        <div className="font-body font-bold text-[10px] uppercase tracking-widest text-black bg-white/80 backdrop-blur-sm px-4 py-1 border-2 border-black">
          © 2026 BY ANGGEPAJASPIDERMAN
        </div>
      </footer>
      
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#CCCCFF] border-t-4 border-black">
        <button onClick={onPrev} className="transition-transform duration-75 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center bg-white text-black border-2 border-black px-10 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="material-symbols-outlined mb-1">arrow_back</span>
          <span className="font-headline font-bold uppercase text-xs">Back</span>
        </button>
        <button onClick={onNext} className="transition-transform duration-75 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center bg-[#B6FF00] text-black border-2 border-black px-10 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="material-symbols-outlined mb-1">arrow_forward</span>
          <span className="font-headline font-bold uppercase text-xs">Next</span>
        </button>
      </nav>
    </div>
  );
}
