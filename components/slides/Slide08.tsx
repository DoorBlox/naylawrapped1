import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

export default function Slide08({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [maskEnabled, setMaskEnabled] = useState(true);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setUploading(true);
      try {
        const res = await fetch(imageSrc);
        const blob = await res.blob();
        
        const formData = new FormData();
        formData.append('file', blob, 'spiderman-capture.jpg');
        
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        
        const data = await uploadRes.json();
        setUploadUrl(data.url);
        
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'nayla-spiderman.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      } catch (error) {
        console.error('Upload failed', error);
      } finally {
        setUploading(false);
      }
    }
  }, [webcamRef]);

  return (
    <div className="bg-background font-body text-on-background overflow-hidden h-screen w-screen flex flex-col">
      <header className="shrink-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-[#FF5A5F] border-b-4 border-black h-[64px] md:h-[72px]">
        <div className="text-xl md:text-2xl font-black text-black uppercase font-headline tracking-tighter truncate">Nayla Wrapped</div>
        <div className="flex items-center gap-6">
          <span className="font-headline font-bold uppercase tracking-tighter text-lg md:text-xl text-black">08 / 09</span>
        </div>
      </header>
      
      <div className="shrink-0 w-full h-2 md:h-3 z-50 border-b-4 border-black bg-black/20">
        <div className="w-[88%] h-full bg-[#B6FF00]"></div>
      </div>
      
      <main className="flex-grow flex flex-col md:flex-row bg-[#FF5A5F] relative overflow-y-auto overflow-x-hidden custom-scrollbar">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-10 left-10 w-32 h-32 border-l-4 border-t-4 border-black pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-4 border-b-4 border-black pointer-events-none hidden md:block"></div>
        
        <section className="flex-1 flex flex-col relative border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden group min-h-[500px] md:min-h-0">
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
            <div className="bg-[#FFEA70] border-2 border-black px-3 py-0.5 md:px-4 md:py-1 inline-block rotate-[-2deg] hard-shadow-sm md:hard-shadow mb-1 md:mb-2">
              <span className="font-headline font-black uppercase text-base md:text-xl text-black tracking-tight">BEFORE</span>
            </div>
            <div className="bg-white border-2 border-black px-2 py-0.5 md:px-3 md:py-1 block md:inline-block rotate-[1deg]">
              <span className="font-label font-bold text-[10px] md:text-sm text-black uppercase">JANUARY 2024</span>
            </div>
          </div>
          <div className="flex-grow relative overflow-hidden bg-[#CCCCFF] flex items-center justify-center">
            <div className="absolute inset-0 checkerboard"></div>
            <img alt="A candid portrait of a young person" className="w-full h-full object-cover mix-blend-multiply opacity-80 grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiuVqhfArJqAeOexrkSIX6gF-91UZQzgMz1sLMumqNjFsbicQszHPhxyyxnJk6Xx0BIec7lZbsG7G-kVO13fdSbReVW8eDCLV6znPxSrrZ0TEnpTjVgBFE5sLkJXHyHRBSoVeK1s8fo7e7BN4BQrLZjNlpsF6XozlVZqCw42YLmFJpYusekoGGksPj7zzrQK50NMThdu2PU0wKrkI-sZ0X6QI8fGGtFNcC9l1LJ-bS_beOzlLssox_qfdYVtgx7ln3oEHJbOJc_kHI" />
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 pointer-events-none opacity-20">
              <svg className="w-full h-full fill-none stroke-black stroke-[0.5]" viewBox="0 0 100 100">
                <path d="M0,100 Q50,50 100,0 M0,80 Q40,40 80,0 M0,60 Q30,30 60,0 M0,40 Q20,20 40,0"></path>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-28 md:left-6 z-20">
            <h2 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tighter leading-none drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Normal<br/>Human
            </h2>
          </div>
        </section>
        
        <section className="flex-1 flex flex-col relative overflow-hidden bg-black group min-h-[600px] md:min-h-0">
          <div className="absolute top-4 right-4 md:right-6 z-20 text-right">
            <div className="bg-[#B6FF00] border-2 border-black px-3 py-0.5 md:px-4 md:py-1 inline-block rotate-[3deg] hard-shadow-sm md:hard-shadow mb-1 md:mb-2">
              <span className="font-headline font-black uppercase text-base md:text-xl text-black tracking-tight">SUPERHERO ERA</span>
            </div>
            <div className="block">
              <div className="bg-white border-2 border-black px-2 py-0.5 md:px-3 md:py-1 inline-block rotate-[-1deg]">
                <span className="font-label font-bold text-[10px] md:text-sm text-black uppercase">SEE NAYLA NOW</span>
              </div>
            </div>
          </div>
          <div className="flex-grow relative flex items-center justify-center bg-[#1A1A2E] px-4 pt-20">
            <div className="absolute w-40 h-40 md:w-64 md:h-64 border-2 border-dashed border-[#B6FF00] rounded-full animate-pulse opacity-50 z-5"></div>
            
            <div className="relative z-25 flex flex-col items-center text-center max-w-full w-full h-full justify-center">
              {!capturedImage ? (
                <div className="relative w-full max-w-md aspect-video md:aspect-square overflow-hidden border-4 border-[#B6FF00] rounded-lg mb-4">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-full h-full object-cover"
                    videoConstraints={{ facingMode: "user" }}
                  />
                  {maskEnabled && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-1/2 opacity-80 text-red-600 fill-current">
                        <path d="M50 10 C 20 10, 10 40, 10 60 C 10 80, 30 90, 50 95 C 70 90, 90 80, 90 60 C 90 40, 80 10, 50 10 Z" />
                        <path d="M30 45 C 40 40, 45 45, 45 55 C 45 60, 35 60, 30 55 C 25 50, 25 45, 30 45 Z" fill="white" stroke="black" strokeWidth="2"/>
                        <path d="M70 45 C 60 40, 55 45, 55 55 C 55 60, 65 60, 70 55 C 75 50, 75 45, 70 45 Z" fill="white" stroke="black" strokeWidth="2"/>
                        <line x1="50" y1="10" x2="50" y2="95" stroke="black" strokeWidth="1" />
                        <line x1="10" y1="60" x2="90" y2="60" stroke="black" strokeWidth="1" />
                        <line x1="20" y1="30" x2="80" y2="80" stroke="black" strokeWidth="1" />
                        <line x1="20" y1="80" x2="80" y2="30" stroke="black" strokeWidth="1" />
                      </svg>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-full max-w-md aspect-video md:aspect-square overflow-hidden border-4 border-[#B6FF00] rounded-lg mb-4">
                  <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="flex gap-4">
                <button onClick={() => setMaskEnabled(!maskEnabled)} className="bg-white text-black border-[3px] md:border-4 border-black px-4 py-2 flex items-center gap-2 pointer-events-auto hover:bg-gray-200 transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-30">
                  <span className="font-headline font-bold text-sm uppercase">Toggle Mask</span>
                </button>
                
                {!capturedImage ? (
                  <button onClick={capture} disabled={uploading} className="bg-[#B6FF00] text-black border-[3px] md:border-4 border-black px-6 py-2 md:px-10 md:py-4 flex items-center gap-2 md:gap-3 pointer-events-auto hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-30">
                    <span className="material-symbols-outlined text-xl md:text-2xl font-bold">photo_camera</span>
                    <span className="font-headline font-black text-lg md:text-2xl uppercase tracking-tighter">{uploading ? 'Capturing...' : 'Capture'}</span>
                  </button>
                ) : (
                  <button onClick={() => {setCapturedImage(null); setUploadUrl(null);}} className="bg-[#FFEA70] text-black border-[3px] md:border-4 border-black px-6 py-2 md:px-10 md:py-4 flex items-center gap-2 md:gap-3 pointer-events-auto hover:bg-white transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-30">
                    <span className="material-symbols-outlined text-xl md:text-2xl font-bold">refresh</span>
                    <span className="font-headline font-black text-lg md:text-2xl uppercase tracking-tighter">Retake</span>
                  </button>
                )}
              </div>
              {uploadUrl && (
                <p className="mt-4 text-white text-sm">Saved to Vercel Blob!</p>
              )}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 md:bottom-28 md:right-8 z-20 pointer-events-none">
            <p className="font-headline font-black text-3xl md:text-5xl lg:text-6xl text-[#B6FF00] uppercase tracking-tighter leading-none text-right">
              LEVEL<br/>MAXED
            </p>
          </div>
        </section>
        
        <div className="absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          <div className="bg-black text-white font-headline font-black text-xl md:text-3xl px-4 py-1 md:px-6 md:py-2 rotate-[-10deg] border-[3px] md:border-4 border-[#B6FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest">
            VS
          </div>
        </div>
      </main>
      
      <footer className="shrink-0 w-full z-50 flex flex-col bg-[#FF5A5F] border-t-4 border-black">
        <div className="w-full flex justify-center py-2 bg-black/5">
          <p className="font-label font-bold text-[8px] md:text-[10px] text-black uppercase tracking-widest">© 2026 BY ANGGEPAJASPIDERMAN</p>
        </div>
        <nav className="w-full flex justify-between items-center px-4 py-4 md:px-8 md:py-6 gap-4">
          <button onClick={onPrev} className="bg-white text-black border-2 md:border-4 border-black px-4 py-2 md:px-8 md:py-4 flex items-center gap-1 md:gap-2 hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-lg md:text-2xl">arrow_back</span>
            <span className="font-headline font-bold text-sm md:text-xl uppercase tracking-tighter">Back</span>
          </button>
          <button onClick={onNext} className="bg-[#B6FF00] text-black border-2 md:border-4 border-black px-4 py-2 md:px-8 md:py-4 flex items-center gap-1 md:gap-2 hover:bg-[#FFEA70] transition-transform duration-75 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-headline font-bold text-sm md:text-xl uppercase tracking-tighter">Next</span>
            <span className="material-symbols-outlined text-lg md:text-2xl">arrow_forward</span>
          </button>
        </nav>
      </footer>
    </div>
  );
}
