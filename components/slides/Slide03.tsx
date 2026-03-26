import React from 'react';

export default function Slide03({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-[#FF5A5F] font-body text-black h-screen w-screen overflow-hidden selection:bg-[#B6FF00] flex flex-col">
      <header className="shrink-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-[#FF5A5F] border-b-4 border-black h-[64px] md:h-[72px]">
        <div className="text-xl md:text-2xl font-black text-black uppercase font-headline tracking-tighter">Nayla Wrapped</div>
        <div className="hidden md:flex gap-8">
          <span className="font-headline font-black text-black">Your Wins</span>
        </div>
        <div className="font-headline font-bold uppercase tracking-tighter text-lg md:text-xl text-black">03 / 09</div>
      </header>
      
      <nav className="shrink-0 w-full h-2 md:h-3 z-50 border-y-2 border-black flex">
        <div className="w-[33.3%] h-full bg-[#B6FF00]"></div>
        <div className="w-[66.7%] h-full bg-black/20"></div>
      </nav>
      
      <main className="relative flex-grow w-full overflow-y-auto overflow-x-hidden custom-scrollbar pb-32">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'conic-gradient(#000 90deg, transparent 90deg 180deg, #000 180deg 270deg, transparent 270deg)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-[#B6FF00] border-4 border-black rotate-12 flex items-center justify-center opacity-40 md:opacity-100">
            <span className="material-symbols-outlined text-6xl md:text-8xl text-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
          </div>
          <div className="absolute bottom-20 -right-20 w-48 h-48 md:w-80 md:h-80 border-[10px] md:border-[20px] border-black/10 rounded-full"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-start p-4 md:p-12 gap-8 md:gap-16">
          <div className="text-center md:text-left w-full">
            <div className="inline-block bg-[#FFEA70] border-2 border-black px-3 py-0.5 md:px-4 md:py-1 mb-2 md:mb-4 rotate-[-1deg] hard-shadow-sm">
              <span className="font-headline font-bold uppercase text-black tracking-widest text-[10px] md:text-sm">2025 MILESTONES</span>
            </div>
            <h1 className="font-headline font-black text-5xl md:text-8xl uppercase tracking-tighter text-black leading-none italic">
              YOUR WINS
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full items-stretch">
            <div className="bg-white border-4 border-black p-6 md:p-8 hard-shadow flex flex-col gap-4 md:gap-6 md:rotate-1 md:hover:rotate-0 transition-transform cursor-default group">
              <div className="flex justify-between items-center md:items-start">
                <span className="font-headline font-black text-4xl md:text-6xl text-[#FF5A5F]">#1</span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B6FF00] border-2 border-black flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>trophy</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline font-extrabold text-lg md:text-2xl uppercase mb-2 leading-tight">Master of Consistency</h3>
                <p className="text-sm md:text-lg leading-tight font-medium">300 consecutive days of activity. Unstoppable energy.</p>
              </div>
              <div className="mt-auto pt-4 border-t-2 border-black/10">
                <span className="bg-[#CCCCFF] border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block">TOP 1% ACHIEVER</span>
              </div>
            </div>
            
            <div className="bg-[#B6FF00] border-4 border-black p-6 md:p-8 hard-shadow flex flex-col gap-4 md:gap-6 md:-rotate-1 md:hover:rotate-0 transition-transform cursor-default group">
              <div className="flex justify-between items-center md:items-start">
                <span className="font-headline font-black text-4xl md:text-6xl text-black">#2</span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-black flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>rocket_launch</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline font-extrabold text-lg md:text-2xl uppercase mb-2 leading-tight">Peak Performance</h3>
                <p className="text-sm md:text-lg leading-tight font-medium text-black">Highest productivity spike ever in November. You moved mountains.</p>
              </div>
              <div className="mt-auto pt-4 border-t-2 border-black/20">
                <span className="bg-white border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block">NOVEMBER ELITE</span>
              </div>
            </div>
            
            <div className="bg-[#CCCCFF] border-4 border-black p-6 md:p-8 hard-shadow flex flex-col gap-4 md:gap-6 md:rotate-2 md:hover:rotate-0 transition-transform cursor-default group">
              <div className="flex justify-between items-center md:items-start">
                <span className="font-headline font-black text-4xl md:text-6xl text-black">#3</span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFEA70] border-2 border-black flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>diversity_3</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline font-extrabold text-lg md:text-2xl uppercase mb-2 leading-tight">Community Pillar</h3>
                <p className="text-sm md:text-lg leading-tight font-medium text-black">Shared over 50 projects and collaborated with 12 new partners.</p>
              </div>
              <div className="mt-auto pt-4 border-t-2 border-black/20">
                <span className="bg-white border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block">NETWORK PRO</span>
              </div>
            </div>
          </div>
          
          <div className="w-full opacity-20 pointer-events-none hidden md:block mt-8">
            <div className="flex justify-end pr-10">
              <span className="font-headline font-black text-[10rem] lg:text-[12rem] leading-none text-black select-none uppercase">WINS</span>
            </div>
          </div>
        </div>
        
        <div className="fixed bottom-[80px] md:bottom-[100px] left-0 w-full flex justify-center pointer-events-none z-40">
          <p className="font-headline font-bold text-[10px] md:text-xs uppercase tracking-widest text-black/60 bg-[#FF5A5F]/80 px-4 py-1">
            © 2026 BY ANGGEPAJASPIDERMAN
          </p>
        </div>
      </main>
      
      <footer className="shrink-0 w-full z-50 flex justify-between items-center p-4 md:p-8 bg-[#FF5A5F] border-t-4 border-black h-[80px] md:h-[110px]">
        <button onClick={onPrev} className="bg-white text-black border-2 md:border-4 border-black px-4 py-2 md:px-8 md:py-4 flex items-center gap-2 font-headline font-bold text-base md:text-xl uppercase hard-shadow-sm hover:bg-[#FFEA70] active:scale-95 transition-all">
          <span className="material-symbols-outlined text-xl md:text-2xl">arrow_back</span>
          <span className="hidden md:inline">Back</span>
        </button>
        <button onClick={onNext} className="bg-[#B6FF00] text-black border-2 md:border-4 border-black px-4 py-2 md:px-8 md:py-4 flex items-center gap-2 font-headline font-bold text-base md:text-xl uppercase hard-shadow-sm hover:bg-[#FFEA70] active:scale-95 transition-all">
          <span className="hidden md:inline">Next</span>
          <span className="material-symbols-outlined text-xl md:text-2xl">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
}
