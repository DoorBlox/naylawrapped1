import React from 'react';

export default function Slide09({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-[#FF5A5F] font-body text-on-background overflow-hidden h-screen w-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#FF5A5F] border-b-4 border-black">
        <div className="text-2xl font-black text-black uppercase font-headline tracking-tighter">Nayla Wrapped</div>
        <div className="flex items-center gap-6">
          <span className="text-[#000000] font-headline font-bold uppercase tracking-tighter text-xl">09 / 09</span>
        </div>
      </header>
      
      <div className="fixed top-[72px] left-0 w-full h-3 z-50 border-b-2 border-black flex">
        <div className="w-full h-full bg-[#B6FF00]"></div>
      </div>
      
      <main className="relative flex-grow w-full overflow-y-auto overflow-x-hidden pt-24 pb-32 custom-scrollbar">
        <div className="absolute inset-0 checkerboard pointer-events-none min-h-screen"></div>
        
        <div className="absolute top-1/2 -left-16 w-64 h-80 border-8 border-black overflow-hidden -rotate-12 opacity-30 pointer-events-none -z-10">
          <img alt="abstract festive celebration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdQkoGJiKe2n1JlJLTf92LKu7W-oNUe3pOrk6TmZabM0k5pXQHL3xk2-idIoA69iXsZXhXEyd4a-NOkK83_D9SFse3tFE683WDUClyU_QuReMcdpS9DpvT3GKWrrh6htZ08EDldpPr5Sl6T1kWQ1Y0puH-BHmUe13Y_xlgK2i2fUcadDPKG_264DpB1VFD9XJXZQDEMQltyLOHgjHt40_SdOoOt9oKczL4ClQ9geoQADRmlQV3QRtoII7M4dk9SZ1Bo8UY1d9elXM" />
        </div>
        <div className="absolute top-1/4 -right-12 w-48 h-48 border-8 border-black overflow-hidden rotate-45 opacity-30 pointer-events-none -z-10">
          <img alt="minimal geometric birthday" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeFXISkNJWUYTQ03YG_n4iLSnzkS9HcGYjoOd1O9vhRsZ6WA7x38SA-tJETASGgXfTooDETjs7r4-HdoUlUruKlr_tJWoDp8Fcx9mrT43dKjLuYmudV4e6f1munO4CfPuomMseJq3PcRdRVpnRmtArSCeiIrIJOnJ3APk3lqgqkYNRyHIu1QAgVEGxGv7vMLNIbSYfDDRL78OtHBP1joTjbso88rRefDsj513OwIvOrlZMFCLx9FCeHi3F3OtXDh59e9XT-elWKtat" />
        </div>
        <div className="absolute top-20 right-10 w-48 h-48 border-[10px] border-[#B6FF00] rounded-full opacity-30 pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 border-[15px] border-[#CCCCFF] rotate-12 opacity-20 pointer-events-none -z-10"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-[#FFEA70] border-4 border-black px-6 py-2 hard-shadow-sm -rotate-2">
              <span className="font-headline font-black uppercase text-xl md:text-2xl">2024 ICONIC</span>
            </div>
            <div className="bg-[#B6FF00] border-4 border-black px-6 py-2 hard-shadow-sm rotate-6">
              <span className="font-headline font-black uppercase text-xl md:text-2xl">LEVEL UP</span>
            </div>
          </div>
          
          <div className="relative mb-12 py-8">
            <div className="absolute -top-16 left-0 md:-left-20 text-[#B6FF00] select-none opacity-80 rotate-12 -z-10">
              <span className="material-symbols-outlined text-7xl md:text-9xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
            <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-white hero-stroke drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              Happy<br/>Birthday,<br/>Nayla
            </h1>
            <div className="absolute -bottom-16 right-0 md:-right-20 text-[#CCCCFF] select-none opacity-80 -rotate-12 -z-10">
              <span className="material-symbols-outlined text-7xl md:text-9xl" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            </div>
          </div>
          
          <div className="bg-black text-white px-8 py-4 border-4 border-[#B6FF00] rotate-1 max-w-2xl w-full">
            <p className="font-headline font-bold text-xl md:text-2xl uppercase tracking-tight">
              And the next year will be even more iconic.
            </p>
          </div>
          
          <div className="flex gap-12 mt-16 items-center">
            <div className="hidden sm:flex flex-col gap-8">
              <div className="w-10 h-10 bg-black border-4 border-white rotate-45"></div>
              <div className="w-16 h-16 bg-[#B6FF00] border-4 border-black rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">celebration</span>
              </div>
            </div>
            <div className="w-24 h-24 dot-grid border-4 border-black bg-white"></div>
            <div className="hidden sm:flex flex-col gap-8 items-end">
              <div className="w-12 h-12 bg-[#CCCCFF] border-4 border-black rotate-12"></div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-24 left-0 w-full flex justify-center pointer-events-none z-40">
        <p className="font-headline font-bold text-[10px] md:text-xs uppercase tracking-widest text-black bg-[#FF5A5F]/80 px-4 py-1">
          2026 by anggepajaspiderman
        </p>
      </div>
      
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center p-4 md:p-6 pointer-events-none [&>*]:pointer-events-auto bg-gradient-to-t from-[#FF5A5F] via-[#FF5A5F] to-transparent pt-12">
        <button onClick={onPrev} className="bg-white text-black border-4 border-black px-6 py-3 flex items-center gap-2 font-headline font-bold text-lg uppercase hard-shadow-sm hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="hidden sm:inline">Back</span>
        </button>
        <button className="bg-[#B6FF00] text-black border-4 border-black px-6 py-3 flex items-center gap-2 font-headline font-bold text-lg uppercase hard-shadow-sm hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95">
          <span>Share Your Year</span>
          <span className="material-symbols-outlined">share</span>
        </button>
      </footer>
    </div>
  );
}
