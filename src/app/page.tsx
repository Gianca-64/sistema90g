 import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function Sistema90gLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Image 
              src="/logo-90g.jpg" 
              alt="Sistema90G" 
              width={80} 
              height={80}
              className="mb-8 rounded-full"
            />
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Stai per firmare<br />
              15.000€ di cucina?<br />
              Ti evito l'errore da<br />
              800€.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Sono Gian Carlo. Non faccio rilievi. Analizzo il progetto del 
              mobilificio e ti do la Checklist delle 3 quote che devi farti 
              garantire SCRITTE prima di firmare. Se sbagliano loro, 
              pagano loro. Non tu.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#prezzi" className="rounded-xl bg-[#B5946A] px-6 py-4 text-lg font-bold text-white hover:bg-[#9d7e58]">
                Vedi il Check-up<br />147€
              </a>
              <a href="https://wa.me/393275478485" target="_blank" className="rounded-xl border-2 border-[#B5946A] px-6 py-4 text-lg font-medium text-[#B5946A]">
                Scrivimi su<br />WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Consulenza d'uso 100% online • No rilievi tecnici • Consegna max 24h • sistema90g@icloud.com
            </p>
          </div>
          <div>
            <Image
              src="/hero-errore-800.png"
              alt="Errore invisibile nel progetto"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3 ERRORI */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            I 3 errori che ti costano 800€ dopo il montaggio
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Il 70% li scopre quando è troppo tardi. Io te li faccio intercettare PRIMA di firmare.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <Image
                src="/problema-frigo.png"
                alt="Il frigo non entra"
                width={400}
                height={250}
                className="rounded-lg"
