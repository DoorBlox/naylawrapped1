import React from 'react';

export default function Slide02({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-[#FF5A5F] font-body text-on-surface h-screen w-screen flex flex-col selection:bg-secondary-fixed selection:text-black overflow-hidden">
      <header className="flex-none w-full z-50 flex justify-between items-center px-4 sm:px-6 py-4 bg-[#FF5A5F] border-b-4 border-black relative">
        <div className="text-xl sm:text-2xl font-black text-black uppercase font-headline tracking-tighter">Nayla Wrapped</div>
        <div className="font-headline font-black text-black text-lg sm:text-xl uppercase tracking-tighter">02 / 09</div>
      </header>
      <div className="flex-none w-full h-2 sm:h-3 z-50 border-b-2 border-black bg-black/20 relative">
        <div className="w-[22.2%] h-full bg-[#B6FF00]"></div>
      </div>
      
      <main className="flex-1 overflow-y-auto relative custom-scrollbar">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-10 w-48 sm:w-64 h-48 sm:h-64 border-[3px] border-black opacity-20 rotate-12 pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full border-[3px] border-black opacity-20 pointer-events-none"></div>
        
        <div className="min-h-full w-full flex items-center justify-center p-4 sm:p-8 md:p-12 pb-32 sm:pb-40">
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center sm:items-start gap-8 sm:gap-12">
            <div className="bg-white border-4 border-black p-6 sm:p-10 md:p-16 hard-shadow relative transform -rotate-1 w-full sm:w-auto">
              <h1 className="font-headline font-black text-3xl sm:text-5xl md:text-8xl leading-tight text-black uppercase tracking-tighter relative z-10">
                This is your year,<br/>
                <span className="bg-secondary-fixed px-1 sm:px-2 relative inline-block my-1">beautifully</span><br/>
                wrapped.
              </h1>
              <div className="absolute -top-4 sm:-top-6 right-2 sm:-right-8 flex flex-col gap-3 rotate-3 z-20">
                <div className="bg-tertiary-fixed border-2 border-black px-3 sm:px-4 py-1 sm:py-2 hard-shadow-sm transform hover:-translate-y-1 transition-transform">
                  <span className="font-headline font-bold text-sm sm:text-lg uppercase">Warm</span>
                </div>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-8 left-2 sm:-left-8 flex flex-col gap-3 -rotate-3 z-20">
                <div className="bg-secondary-fixed border-2 border-black px-3 sm:px-4 py-1 sm:py-2 hard-shadow-sm transform hover:scale-105 transition-transform">
                  <span className="font-headline font-bold text-xs sm:text-lg uppercase whitespace-nowrap">Designed for you</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-12 hidden xs:block transform rotate-90 origin-center translate-x-1/2 z-20">
                <div className="bg-[#FFEA70] border-2 border-black px-3 sm:px-4 py-1 sm:py-2 hard-shadow-sm">
                  <span className="font-headline font-bold text-xs sm:text-lg uppercase">Personal</span>
                </div>
              </div>
            </div>
            
            <div className="w-full flex justify-between items-center sm:items-end mt-4">
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="flex gap-1">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-black"></div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-black"></div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-black"></div>
                </div>
                <p className="font-headline font-bold text-black text-[10px] sm:text-sm uppercase tracking-widest">Est. 2026 / ANGGEPAJASPIDERMAN</p>
              </div>
              <div className="hidden sm:block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 border-[3px] border-black flex items-center justify-center p-2 transform rotate-12">
                  <div className="w-full h-full bg-tertiary-fixed border-[3px] border-black flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-black" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="flex-none fixed bottom-0 left-0 w-full z-50 flex justify-between items-end p-4 sm:p-8 pointer-events-none">
        <div className="flex-1 flex justify-between pointer-events-none [&>*]:pointer-events-auto">
          <button onClick={onPrev} className="bg-white text-black border-4 border-black px-4 sm:px-8 py-2 sm:py-4 flex items-center gap-2 font-headline font-bold text-lg sm:text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95">
            <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_back</span>
            <span className="hidden xs:inline">Back</span>
          </button>
          <button onClick={onNext} className="bg-[#B6FF00] text-black border-4 border-black px-4 sm:px-8 py-2 sm:py-4 flex items-center gap-2 font-headline font-bold text-lg sm:text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95">
            <span className="hidden xs:inline">Next</span>
            <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_forward</span>
          </button>
        </div>
      </footer>
      
      <div className="fixed bottom-2 left-0 w-full flex justify-center pointer-events-none z-[60]">
        <span className="font-headline text-[8px] sm:text-[10px] md:text-xs text-black/40 uppercase tracking-[0.2em] select-none">
          © 2026 by anggepajaspiderman
        </span>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-[-1]" style={{ backgroundImage: 'conic-gradient(#000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
    </div>
  );
}
