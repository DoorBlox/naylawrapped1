import React from 'react';

export default function Slide01({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-[#B6FF00] font-body text-on-background overflow-hidden h-screen w-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#B6FF00] border-b-4 border-black">
        <div className="text-2xl font-black text-black uppercase font-headline tracking-tighter">Nayla Wrapped</div>
        <div className="flex items-center gap-6">
          <span className="text-[#000000] font-headline font-bold uppercase tracking-tighter text-xl">01 / 09</span>
        </div>
      </header>
      
      <div className="fixed top-[72px] left-0 w-full h-3 z-50 border-b-2 border-black flex">
        <div className="w-[11%] h-full bg-[#FF5A5F]"></div>
      </div>
      
      <main className="relative flex-grow w-full overflow-y-auto overflow-x-hidden pt-24 pb-32 custom-scrollbar">
        <div className="absolute inset-0 checkerboard pointer-events-none min-h-screen opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-[#FFEA70] border-4 border-black px-6 py-2 hard-shadow-sm -rotate-2">
              <span className="font-headline font-black uppercase text-xl md:text-2xl">2024 REWIND</span>
            </div>
            <div className="bg-[#FF5A5F] text-white border-4 border-black px-6 py-2 hard-shadow-sm rotate-6">
              <span className="font-headline font-black uppercase text-xl md:text-2xl">THE NAYLA EDITION</span>
            </div>
          </div>
          
          <div className="relative mb-12 py-8">
            <div className="absolute -top-16 left-0 md:-left-20 text-[#FF5A5F] select-none opacity-80 rotate-12 -z-10">
              <span className="material-symbols-outlined text-7xl md:text-9xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
            <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-white hero-stroke drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              Ready<br/>For Your<br/>Wrapped?
            </h1>
            <div className="absolute -bottom-16 right-0 md:-right-20 text-[#CCCCFF] select-none opacity-80 -rotate-12 -z-10">
              <span className="material-symbols-outlined text-7xl md:text-9xl" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            </div>
          </div>
          
          <div className="bg-black text-white px-8 py-4 border-4 border-[#FF5A5F] rotate-1 max-w-2xl w-full">
            <p className="font-headline font-bold text-xl md:text-2xl uppercase tracking-tight">
              A look back at the moments that made this year unforgettable.
            </p>
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-24 left-0 w-full flex justify-center pointer-events-none z-40">
        <p className="font-headline font-bold text-[10px] md:text-xs uppercase tracking-widest text-black bg-[#B6FF00]/80 px-4 py-1">
          2026 by anggepajaspiderman
        </p>
      </div>
      
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center p-4 md:p-6 pointer-events-none [&>*]:pointer-events-auto bg-gradient-to-t from-[#B6FF00] via-[#B6FF00] to-transparent pt-12">
        <div className="w-24"></div>
        <button onClick={onNext} className="bg-[#FF5A5F] text-white border-4 border-black px-6 py-3 flex items-center gap-2 font-headline font-bold text-lg uppercase hard-shadow-sm hover:bg-[#FFEA70] hover:text-black transition-transform duration-75 active:scale-95">
          <span>Let&apos;s Go</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
}
