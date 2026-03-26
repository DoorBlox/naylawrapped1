import React from 'react';

export default function Slide04({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  return (
    <div className="font-body text-on-background selection:bg-secondary-container h-screen w-screen overflow-hidden flex flex-col bg-[#f8f5ff]">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#FF5A5F] dark:bg-[#FF5A5F] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-2xl font-black text-black uppercase font-headline tracking-tighter">
          Nayla Wrapped
        </div>
        <div className="flex items-center gap-4">
          <span className="font-headline font-bold uppercase tracking-tighter text-lg md:text-xl text-black">04 / 09</span>
        </div>
      </header>
      
      <main className="h-screen w-full pt-24 pb-48 px-6 overflow-y-auto overflow-x-hidden relative custom-scrollbar">
        <div className="fixed inset-0 pointer-events-none -z-10" style={{ backgroundImage: 'repeating-conic-gradient(#000000 0% 25%, #FFEA70 0% 50%)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px', opacity: 0.1 }}></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="mb-12 text-center md:text-left md:w-full">
            <div className="inline-block bg-[#FFEA70] border-2 border-black px-4 py-1 hard-shadow mb-4 rotate-[-1deg]">
              <span className="font-headline font-bold uppercase text-black tracking-tight">Best Memories 2025</span>
            </div>
            <h1 className="font-headline font-black text-6xl md:text-8xl text-black uppercase tracking-tighter leading-none">
              FAVORITE MOMENTS
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full pb-12">
            <div className="md:col-span-7 relative group">
              <div className="absolute -inset-1 bg-black translate-x-2 translate-y-2"></div>
              <div className="relative bg-white border-4 border-black p-2 h-[400px] md:h-[500px]">
                <img alt="Memory 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8XsJ0aECidCbDaDV2zImlLDgK7cLBAFErYBIzj3CXMF3B4eMD5Y4Jq0GThU-NhcSnnuJ2gPLFmMDHz8Cme1GxRvCtfDPr5Ab3RWUz9C87iej254sWAL1uzalB_CR9VMJpUhRM32T992HpU06i7w0w6Hi2yjvwvb48ZruMqIBpFyj6YOLKfcdZlAVgQM-VGs3rrMyy3rTtJSSq1v9o2npz3j4MA6pXSxzY_XeP00kKnPhwwDaB6cTXUX1XgNDlLVpbf94Srt-XKV8D" />
                <div className="absolute bottom-6 right-6 bg-[#B6FF00] border-2 border-black px-4 py-2 hard-shadow font-headline font-black italic -rotate-3">
                  UNFORGETTABLE
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="relative group self-end w-full md:w-3/4">
                <div className="absolute -inset-1 bg-[#CCCCFF] translate-x-2 translate-y-2 border-2 border-black"></div>
                <div className="relative bg-white border-4 border-black p-2 h-[240px]">
                  <img alt="Memory 2" className="w-full h-full object-cover border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR3WdaSY4-Os2VQxchP1MPqCrH2a0Z7RA5Ljb33qSDZ3L9SOfpK3k1WLjHGrTfSSSUWhyaDydvMhbPhisMTVpzndvHUs0GuMdb5ZY5xfnfU0WMaXjwbKXNLJLM6jXouA1KBzb2MdS1CU2rK0N2JTNOTFIJ8AZyYbxr9jG190uaNI6bsp1F5T1uP3F9JxFYMsO6kC9RtCNE0PPXCHsMaQMBLjilDD74SFdgnxGcuTqnf4B4dojrZiy21hLxvSOpByPABqXqa-bmvPCJ" />
                </div>
              </div>
              
              <div className="relative group self-start w-full md:w-5/6">
                <div className="absolute -inset-1 bg-[#FF5A5F] -translate-x-2 translate-y-2 border-2 border-black"></div>
                <div className="relative bg-white border-4 border-black p-2 h-[240px] rotate-2">
                  <img alt="Memory 3" className="w-full h-full object-cover border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAeRMsxXJEWZ0jg-xwsrAxGz-Ic2-WEku3qLm9eewHaU7b4RXcY03YH4HPiVPU3-hY58KTU0ak240vWKoKD-4BP1T1WxbhLxFIIAIjb-UIKd9HEGQt0iFGmf9qlTX8C8n1XFQhlAbhYRsBoWxnOeH0wmoPWpq5_IqOsWlw7DdAL3NR5oDcv24FJS21dNcuVQJn9-d7BP2HprCggjHmrXF0C0iD1Nycz4n6SmSbswdjymFAOIgNf_zJU1L2zw5a9RNtkAXvVbClWZwu" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative bg-white border-4 border-black p-2 h-[300px] -rotate-1 md:mt-8">
                <div className="absolute -top-4 -left-4 bg-black text-white p-2 font-headline font-bold text-xs">04 / 12</div>
                <img alt="Memory 4" className="w-full h-full object-cover grayscale border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCitfyuLUvjv-j63GEF9P7wRvVcv-3yFvlNQXhCm9Cq_o5fre7a0-whgfBwwHQTC4aw4Js5xVzdmKPnSxzpbHGSugXBdXPWGimMIQYEVHsRcSlzYggYW0_oRRCAZ7TCV7zb3FL7LGzd2lN7cVYvn9arVH2Ju2AoWaINJdMvNdBN78CeImgeOlsD2t7Ms2Ev_tY8FQN1HRzRAMJdXjcDJoGbEHfQow-GWGjVzpuWkT2uJnJU5nzWzX-JWRiBHr-XgUCE7UsTPGJJLUD5" />
              </div>
              <div className="relative bg-white border-4 border-black p-2 h-[300px] rotate-1">
                <img alt="Memory 5" className="w-full h-full object-cover border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_GtSoeqqnqB1fnautCEAZA5Yl-LkmwqpKvT78bNePmgkIzthUthRP6xzD9pGl3D2jTTQNZToY6bX61dlI_r_snqkd7HdM_Tc3DSiSapN51NnW2iZQsdsO-HXo-a7tk_Ofizdch57FvFOt4NnXJRy_YsKUf-LxlTyC1nIFdDMAES7KYf6c6hOUxMZ_ZRN13ntUZkPvt2EP7yWZrXivLENRR5ELHPHiehCnQlLCtUawsmpSCVa2wS_k8NtgAzXa1vTu6AJwTeYC4P1v" />
              </div>
              <div className="relative bg-white border-4 border-black p-2 h-[300px] -rotate-2 md:-mt-4">
                <div className="absolute -bottom-4 -right-4 bg-[#FFEA70] border-2 border-black px-3 py-1 font-headline font-black uppercase text-black">BEST NIGHT</div>
                <img alt="Memory 6" className="w-full h-full object-cover border-2 border-black" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ORzUpNFtKImGCDpOVugiSw52O82kMoc7Ww3CcLZIolBeKTP1tm3xDqKpTdA8KQ50-RhDn6WAVZJUi17oMjbYCBF127rQ1VOU3sNnGROh6Hbiwi5y_F5VGPvAnbjLSW4O0qC_nEgTGNTmpb5rrRVRHnLs9xIA5CXt2QdvVprqF3AtZNJvAGxcLZQiDWZT-OQUZn9zSCVGz3ejTxFJ3m7HUPlxv8XAsOrveTRGqtfGppRiA74czoWbggRIM7vocPyywD9KFrd-rq1k" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-24 left-0 w-full flex justify-center items-center pointer-events-none z-40">
        <div className="bg-white border-2 border-black px-4 py-1 hard-shadow">
          <p className="font-body font-bold text-[10px] uppercase tracking-widest text-black">
            © 2026 BY ANGGEPAJASPIDERMAN
          </p>
        </div>
      </footer>
      
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-6 bg-[#CCCCFF] border-t-4 border-black">
        <button onClick={onPrev} className="transition-transform duration-75 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center bg-white text-black border-2 border-black px-8 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="material-symbols-outlined mb-1">arrow_back</span>
          <span className="font-headline font-bold uppercase text-xs">Back</span>
        </button>
        <button onClick={onNext} className="transition-transform duration-75 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center bg-[#B6FF00] text-black border-2 border-black px-8 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="material-symbols-outlined mb-1">arrow_forward</span>
          <span className="font-headline font-bold uppercase text-xs">Next</span>
        </button>
      </nav>
    </div>
  );
}
