import React from 'react';

export default function Slide06({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-[#FF5A5F] font-body text-black h-screen w-screen overflow-hidden selection:bg-[#B6FF00] selection:text-black flex flex-col">
      <header className="flex-none w-full z-50 flex justify-between items-center px-6 py-3 bg-[#FF5A5F] border-b-4 border-black">
        <div className="text-xl md:text-2xl font-black text-black uppercase font-headline">Nayla Wrapped</div>
        <div className="font-headline font-bold uppercase tracking-tighter text-lg md:text-xl text-black">06 / 09</div>
      </header>
      
      <nav className="flex-none w-full h-2 md:h-3 z-50 border-b-2 border-black bg-black/20">
        <div className="w-[66%] h-full bg-[#B6FF00]"></div>
      </nav>
      
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden custom-scrollbar">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="checkerboard absolute inset-0"></div>
          <div className="absolute -top-20 -right-20 w-48 md:w-96 h-48 md:h-96 border-[8px] md:border-[12px] border-black opacity-10 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-24 md:w-48 h-24 md:h-48 border-4 border-black rotate-12 opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
          <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter mb-8 md:mb-12 text-black leading-[0.9] md:leading-[0.85] text-center md:text-left">
            YEAR IN <br className="hidden md:block"/>NUMBERS
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pb-32">
            <div className="col-span-2 md:col-span-2 bg-[#FFEA70] border-2 md:border-4 border-black p-4 md:p-8 relative overflow-hidden flex flex-col justify-between group hard-shadow">
              <div className="dot-grid absolute inset-0 opacity-10"></div>
              <div className="relative z-10 flex justify-between items-start mb-4 md:mb-8">
                <span className="bg-black text-[#FFEA70] px-3 py-1 font-headline font-bold uppercase text-xs md:text-lg border-2 border-black">Caffeine Intake</span>
                <span className="material-symbols-outlined text-2xl md:text-5xl">coffee</span>
              </div>
              <div className="relative z-10 flex items-baseline gap-2 md:gap-4">
                <span className="font-headline font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">512</span>
                <span className="font-headline font-bold text-lg md:text-3xl uppercase border-b-4 md:border-b-[6px] border-black">Cups</span>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-1 md:row-span-2 bg-[#CCCCFF] border-2 md:border-4 border-black p-4 md:p-10 flex flex-col items-center justify-center relative hard-shadow">
              <div className="relative w-full aspect-square flex items-center justify-center max-w-[200px]">
                <div className="absolute inset-0 border-[10px] md:border-[20px] border-black/10 rounded-full"></div>
                <div className="absolute inset-3 md:inset-6 border-[10px] md:border-[20px] border-black/20 rounded-full"></div>
                <div className="absolute inset-6 md:inset-12 border-[10px] md:border-[20px] border-black rounded-full border-t-transparent -rotate-45"></div>
                <div className="text-center relative z-10">
                  <span className="font-headline font-black text-4xl md:text-7xl block">12</span>
                  <span className="font-headline font-bold uppercase text-xs md:text-xl">Cities</span>
                </div>
              </div>
              <div className="mt-4 md:mt-10 bg-black text-white w-full text-center py-2 md:py-3 font-headline font-bold uppercase tracking-widest text-xs md:text-lg">
                Explored
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-1 bg-[#B6FF00] border-2 md:border-4 border-black p-4 md:p-8 flex flex-col justify-between -rotate-1 hard-shadow">
              <div className="flex items-end gap-1.5 md:gap-3 h-16 md:h-32 mb-4">
                <div className="w-full bg-black h-[40%]"></div>
                <div className="w-full bg-black h-[60%]"></div>
                <div className="w-full bg-black h-[90%]"></div>
                <div className="w-full bg-black h-[75%]"></div>
                <div className="w-full bg-black h-[100%]"></div>
              </div>
              <div>
                <span className="font-headline font-black text-4xl md:text-6xl lg:text-7xl block leading-none">876</span>
                <span className="font-headline font-bold uppercase text-[10px] md:text-base border-2 border-black px-2 py-0.5 bg-white inline-block mt-2">Late Nights</span>
              </div>
            </div>
            
            <div className="col-span-2 md:col-span-2 bg-white border-2 md:border-4 border-black p-4 md:p-10 flex items-center justify-between rotate-1 hard-shadow">
              <div className="max-w-[65%]">
                <h3 className="font-headline font-black text-xl md:text-5xl uppercase leading-tight mb-2 md:mb-4">Social Battery</h3>
                <p className="font-body font-bold text-xs md:text-xl opacity-80 uppercase tracking-tighter">Peak performance reached during summer.</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-[#FF5A5F] border-2 md:border-4 border-black p-2 md:p-6 mb-2">
                  <span className="material-symbols-outlined text-3xl md:text-6xl text-black" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
                </div>
                <span className="font-headline font-black text-2xl md:text-5xl">100%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-2 left-0 w-full text-center z-40 pointer-events-none opacity-60 font-headline font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-black">
        © 2026 by anggepajaspiderman
      </div>
      
      <footer className="flex-none w-full z-50 flex justify-between items-end p-4 md:p-8 pointer-events-none [&>*]:pointer-events-auto bg-gradient-to-t from-[#FF5A5F] via-[#FF5A5F]/80 to-transparent pt-12">
        <button onClick={onPrev} className="bg-white text-black border-2 md:border-4 border-black px-4 md:px-8 py-2 md:py-4 flex items-center gap-2 font-headline font-bold text-sm md:text-2xl uppercase hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <span className="material-symbols-outlined text-lg md:text-3xl">arrow_back</span>
          Back
        </button>
        <div className="hidden md:block bg-[#B6FF00] border-4 border-black px-6 py-4 rotate-12 -translate-y-4 hard-shadow">
          <span className="font-headline font-black text-2xl uppercase">Legendary Year!</span>
        </div>
        <button onClick={onNext} className="bg-[#B6FF00] text-black border-2 md:border-4 border-black px-4 md:px-8 py-2 md:py-4 flex items-center gap-2 font-headline font-bold text-sm md:text-2xl uppercase hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          Next
          <span className="material-symbols-outlined text-lg md:text-3xl">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
}
