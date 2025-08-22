import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {useEffect, useRef} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const refTextoDigitado = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (refTextoDigitado.current) {
      refTextoDigitado.current.focus();
    }
  }, []);

  const handleTextoDigitado = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = event.target;
    textArea.style.height = "auto";
    const alturaMaxima = window.innerHeight /6;
   
    if (textArea.scrollHeight < alturaMaxima) {
      textArea.style.height = textArea.scrollHeight + "px";
      // textArea.style.height = alturaMaxima + "px";
    } else {
      textArea.style.height = alturaMaxima + "px";
    }    
  }

  const handleTextoResposta = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = event.target;
    // textArea.style.height = "auto";
    const alturaMaxima = window.innerHeight / 2;
    if (textArea.scrollHeight < alturaMaxima) {
      textArea.style.height = textArea.scrollHeight + "px";
    } else {
      textArea.style.height = alturaMaxima + "px";
    }
  }
  
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20`}
    >
      <header className="flex flex-col items-center justify-center gap-2">
        <Image
          className="h-24 w-24"
          src="/logo.png"
          alt="Logo"          
          width={96}
          height={96}
          style={{ objectFit: "cover" }}      
        />
        <h1 className="text-2xl font-bold">Zyrus Chat</h1>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center border border-gray-300 rounded-md p-8 max-w-2xl w-full">
        <textarea 
          className="border border-gray-300 rounded-md p-2 w-full max-w-md h-[200px] resize-none"
          onInput={handleTextoResposta}>
          
        </textarea>    
        <textarea
          placeholder="Digite algo..."
          className="border border-gray-300 rounded-md p-2 w-full max-w-md hover:border-gray-400 focus:border-blue-500 focus:outline-none resize-none transition duration-200 hover:scale-102 hover:translate-y-0.2"
          ref={refTextoDigitado}
          onInput={handleTextoDigitado}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Todos direitos reservados © 2025
      </footer>
    </div>
  );
}
