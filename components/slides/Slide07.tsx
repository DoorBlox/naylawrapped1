import React from 'react';

export default function Slide07({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="bg-background font-body text-on-background min-h-screen overflow-x-hidden h-screen w-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#FF5A5F] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-2xl font-black text-black uppercase font-headline tracking-tighter">
          Nayla Wrapped
        </div>
        <div className="flex items-center gap-4">
          <span className="font-headline font-bold uppercase tracking-tighter text-lg md:text-xl text-black">07 / 09</span>
        </div>
      </header>
      
      <main className="pt-24 pb-48 px-4 md:px-12 max-w-7xl mx-auto relative min-h-screen w-full overflow-y-auto custom-scrollbar">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-conic-gradient(#000000 0% 25%, transparent 0% 50%)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px', opacity: 0.05 }}></div>
          <div className="absolute top-40 right-10 w-64 h-64 border-4 border-black opacity-10 rotate-12"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border-[12px] border-[#B6FF00] opacity-20"></div>
        </div>
        
        <div className="relative z-10 mb-12 flex flex-col items-start">
          <div className="bg-[#FFEA70] border-2 border-black px-4 py-1 mb-4 inline-block transform -rotate-1">
            <span className="font-headline font-bold uppercase text-black tracking-tight">07. Appreciation & Idols</span>
          </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl text-black uppercase tracking-tighter leading-[0.9] break-words max-w-3xl">
            SHAPED BY THE BEST.
          </h1>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group relative bg-white border-4 border-black p-4 transition-all duration-75 hover:-translate-y-2 hover:translate-x-2 hard-shadow">
            <div className="aspect-square bg-surface-container overflow-hidden border-2 border-black mb-4">
              <img alt="Idol Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxxO-BHLGPOlTpRCCaBDgvBiH36fq4ZGJOvcwytY6tRgphsaK_H8TqX742Po3Yw8CVMGEOrd19vEsNXG4Oqs8u6iiiFjdW8ZE1anlxH2y7TFoRBq4LEwDIK8XcM0oeF0HUp9EulV58jgzfKwwYQzsDk_YyyiSMRY9cKGu-X0FVdD3Z6bvCQqZ-0-MTSB9BK8VeecAwjUgWazkDa2dJga633nh8WEyvtY3ozEByOEC81InsEzTyhB2AVbECOWi1Z5wiLLL6eDI93xw0" />
            </div>
            <div className="bg-[#B6FF00] border-2 border-black py-1 px-3 absolute top-6 right-6 font-headline font-bold text-sm">DESIGN GURU</div>
            <h3 className="font-headline font-black text-2xl text-black uppercase leading-none">Dieter Rams</h3>
            <p className="text-sm font-bold opacity-70 mt-1 uppercase">Minimalist Icon</p>
          </div>
          
          <div className="group relative bg-[#CCCCFF] border-4 border-black p-4 transition-all duration-75 hover:-translate-y-2 hover:translate-x-2 hard-shadow md:mt-8">
            <div className="aspect-square bg-surface-container overflow-hidden border-2 border-black mb-4">
              <img alt="Idol Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkkSrnkMtiMT0dyp48sAenf5tHo5bXsvMjuiYR4eg-5pFgli-HFNtdZbEN3Mv58OEAgElpSwtnNxF7vyvL4g9HryH-rJwvMXZSrgcpgmeSWrJ1y-1T6wTr3ugYFkDTe9SDTj8EguovDA4btMwzpNw_Jqe5TfZrAFXOtC-stT2DpTsWMuJh3M2d2k83Bgq3442xQKdwemiE13ovu5qSeRt0WGBK3eocKBroNk-j5dcReRkiOC_bSAY355UVVn3jCm5igY6A75S_rmEt" />
            </div>
            <div className="bg-[#FFEA70] border-2 border-black py-1 px-3 absolute top-6 right-6 font-headline font-bold text-sm">ARCHITECT</div>
            <h3 className="font-headline font-black text-2xl text-black uppercase leading-none">Zaha Hadid</h3>
            <p className="text-sm font-bold opacity-70 mt-1 uppercase">Futurist Visionary</p>
          </div>
          
          <div className="group relative bg-white border-4 border-black p-4 transition-all duration-75 hover:-translate-y-2 hover:translate-x-2 hard-shadow">
            <div className="aspect-square bg-surface-container overflow-hidden border-2 border-black mb-4">
              <img alt="Idol Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPr1kdDa0xYYtSAPvy_3zTGfJkBGIMqCSjEwKnAzP1qWIzZ4dKVPztgCXPp7mXEuiVBop_98-2bwQJTr3NVaSjhaIBA3iC4aKGGvZ8XLQ6eLw2pdjI1xuJFxwnXfVHIAzB6OkCoiiVonLkXijygM1kUINn3HQbFnySM9OfszwzABXeYUbmbzWoXI7g6IvEiwyJNDUZUvinwQOxmODTlZV3l1EHup__mY5kk2Vsb8g_AO8_RNMOu13ZBcDT5GqGCqXrcrGruug488iC" />
            </div>
            <div className="bg-primary border-2 border-black py-1 px-3 text-white absolute top-6 right-6 font-headline font-bold text-sm">ENGINEER</div>
            <h3 className="font-headline font-black text-2xl text-black uppercase leading-none">Margaret H.</h3>
            <p className="text-sm font-bold opacity-70 mt-1 uppercase">Code Pioneer</p>
          </div>
          
          <div className="group relative bg-[#FFEA70] border-4 border-black p-4 transition-all duration-75 hover:-translate-y-2 hover:translate-x-2 hard-shadow md:-mt-4">
            <div className="aspect-square bg-surface-container overflow-hidden border-2 border-black mb-4">
              <img alt="Idol Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhF3uQHaTKi0toPSrtaC9AyTK9oYo-4eli9WP_tiuICaMPc1H87Fhg6XeNtX4ZSZ40nd6uMqI5YW2aRgJ9grHWLfJPZNkxxndvGkW4-htS66kandie0q9VUkGNhLn1Nx-xg0uccWERZxlfM5ZSW3Cl3fUhbRXn8TTawYzImERmoXrilpMSup46K4lFnnslOYDrRnaPoOLXQK8H-Q7jtEb88iOsa1MQJCcOppjWxCH9-yAY7F9cCmCTl4HVKom2OqZ0ZEP1B-jjkTT" />
            </div>
            <div className="bg-black text-white border-2 border-white py-1 px-3 absolute top-6 right-6 font-headline font-bold text-sm">ARTIST</div>
            <h3 className="font-headline font-black text-2xl text-black uppercase leading-none">Basquiat</h3>
            <p className="text-sm font-bold opacity-70 mt-1 uppercase">Chaos Master</p>
          </div>
          
          <div className="group relative bg-white border-4 border-black p-4 transition-all duration-75 hover:-translate-y-2 hover:translate-x-2 hard-shadow">
            <div className="aspect-square bg-surface-container overflow-hidden border-2 border-black mb-4">
              <img alt="Idol Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaV_aQtHj_lmvGQrvvRHdgmNiSqV4B61IRyKvHrxMvr542oY0vlzDuFlA4MWCRfKQVEo-2c7dsD0gCUPQuRdf3Y1VFPKUMI25yDG-lkLTqZG2jJUozOn8SJ3xYUaqp5i0VkfX3oHCZ-wQFmj1-2S0xTKOMwf0vM1CPZzlOYhqfQBXcnguG431x9VZ87_vjT-5jDaeIX_h5BJ3IW_BpwQQm015ccFSHo6y_jZU8xhAG37U2Lxrd86z1rE7ZkDiVlq6S3PjcEdVz_VLM" />
            </div>
            <div className="bg-[#B6FF00] border-2 border-black py-1 px-3 absolute top-6 right-6 font-headline font-bold text-sm">MUSICIAN</div>
            <h3 className="font-headline font-black text-2xl text-black uppercase leading-none">Hildur G.</h3>
            <p className="text-sm font-bold opacity-70 mt-1 uppercase">Sound Scaper</p>
          </div>
          
          <div className="group relative bg-[#FF5A5F] border-4 border-black p-4 transition-all duration-75 hover:-translate-y-2 hover:translate-x-2 hard-shadow md:mt-12">
            <div className="aspect-square bg-surface-container overflow-hidden border-2 border-black mb-4">
              <img alt="Idol Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE8HHFUt4J5qv7-JRfRQBEqxs4XMUmvZpoZs6XYXfSDbGSOHWv8PnoAGbzzx9IdA0fk2FpqQMTK8ec32GZI3GzgUVGCN8QzUXPjyCAOILvUTGErbcL0GPZH6DINDsoTF_GGhpcSMDX_pR_EotCoBkbrqsq4HNg-_we1VmcOMJ6FumP9ivSv7-7OATaRe6s5CYdFs1adsLyqmHNFWhC0kxb9rPJO_OVG3ZLJJ0FsKX-8TNYc_32pMtvpHOLXe-fCHxUEKWpwdw8pAai" />
            </div>
            <div className="bg-[#CCCCFF] border-2 border-black py-1 px-3 absolute top-6 right-6 font-headline font-bold text-sm">WRITER</div>
            <h3 className="font-headline font-black text-2xl text-black uppercase leading-none">Baldwin</h3>
            <p className="text-sm font-bold opacity-70 mt-1 uppercase">Truth Speaker</p>
          </div>
        </div>
        
        <div className="relative z-10 max-w-xl">
          <p className="font-body font-bold text-xl md:text-2xl text-black leading-tight border-l-8 border-black pl-6 py-2">
            Innovation isn&apos;t born in a vacuum. It&apos;s the echoes of these giants that keep us pushing forward. Every pixel, every line of code, every design decision is a conversation with the legends.
          </p>
        </div>
      </main>
      
      <footer className="fixed bottom-24 left-0 w-full flex justify-center items-center pointer-events-none z-40">
        <div className="bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto transform rotate-1">
          <span className="font-body font-bold text-[10px] uppercase tracking-widest text-black">
            © 2026 BY ANGGEPAJASPIDERMAN
          </span>
        </div>
      </footer>
      
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#CCCCFF] border-t-4 border-black">
        <button onClick={onPrev} className="flex flex-col items-center justify-center bg-white text-black border-2 border-black px-10 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-75 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:scale-95">
          <span className="material-symbols-outlined text-black mb-1">arrow_back</span>
          <span className="font-headline font-bold uppercase text-xs">Back</span>
        </button>
        <button onClick={onNext} className="flex flex-col items-center justify-center bg-[#B6FF00] text-black border-2 border-black px-10 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-75 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:scale-95">
          <span className="material-symbols-outlined text-black mb-1">arrow_forward</span>
          <span className="font-headline font-bold uppercase text-xs">Next</span>
        </button>
      </nav>
    </div>
  );
}
