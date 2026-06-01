"use client";

import { useState } from "react";

import {
  FaRocket,
  FaGamepad,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  MdSchool,
  MdOutlineFileDownload,
  MdKeyboardArrowDown,
} from "react-icons/md";

import {
  GiRingedPlanet,
  GiGalaxy,
  GiMoon,
  GiSparkles,
  GiStarSwirl,
} from "react-icons/gi";

import { TECHNOLOGIES } from "../constants/Technologies";
import { STATS } from "../constants/Stats";
import { FEATURE_GROUPS } from "../constants/Features";

import Image from "next/image";
import Logo from "../assets/logo.png";

const APK_LINK =
  "https://expo.dev/accounts/flavingimenes/projects/client/builds/1a3d92a2-0d60-47c4-a55a-328916810342";



export default function Home() {
  const [openFeature, setOpenFeature] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#05040f] text-white font-sans overflow-x-hidden">
      {/* ─── STARS BACKGROUND ─── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 25% 60%, rgba(255,255,255,0.4) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 40% 30%, rgba(200,180,255,0.5) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,0.6) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 70% 20%, rgba(180,200,255,0.5) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 85% 50%, rgba(255,255,255,0.4) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 92% 75%, rgba(200,180,255,0.6) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 15% 90%, rgba(255,255,255,0.3) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 60% 45%, rgba(255,255,255,0.5) 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 78% 85%, rgba(180,200,255,0.4) 0%, transparent 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(88, 28, 220, 0.18) 0%, transparent 70%)," +
              "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(14, 90, 230, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ─── NAVBAR ─── */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/5 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-3">
          <GiGalaxy className="text-2xl text-violet-300" />

          <span
            className="text-xl font-black tracking-widest uppercase"
            style={{
              background:
                "linear-gradient(135deg, #a78bfa, #60a5fa, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nexus-RPG
          </span>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-32 md:pt-36 md:pb-44">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(109,40,217,0.25) 0%, rgba(30,27,75,0.1) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <Image
          src={Logo}
          alt="Nexus-RPG Logo"
          width={200}
          height={200}
          className="mb-7"
        />

        <p className="text-lg md:text-lg text-white/60 max-w-lg mb-5 leading-relaxed">
          Aprenda programação explorando galáxias, completando missões
          e compreendendo o conteúdo num universo RPG espacial.
        </p>

        <div className="hidden md:block pt-4">
          <p className="inline-flex items-center justify-center gap-2 text-sm text-violet-300/70 mb-10 tracking-wide flex-wrap">
            <MdSchool />
            Educação +
            <FaGamepad />
            Gamificação = aprendizado que não parece estudo
          </p>
        </div>

        <div className="px-6 pt-3">
          <a
            href={APK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            }}
          >
            <span>Baixar o Nexus</span>

            <span className="text-xl group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
              <MdOutlineFileDownload />
            </span>

            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)",
                }}
              />
            </span>
          </a>
        </div>

        <div className="absolute left-4 md:left-16 top-1/3 text-5xl opacity-20 animate-pulse select-none pointer-events-none">
          <GiRingedPlanet />
        </div>

        <div
          className="absolute right-4 md:right-20 top-1/4 text-3xl opacity-15 select-none pointer-events-none"
          style={{ animation: "pulse 3s ease-in-out 1s infinite" }}
        >
          <GiStarSwirl />
        </div>

        <div
          className="absolute right-8 md:right-32 bottom-16 text-4xl opacity-20 select-none pointer-events-none"
          style={{ animation: "pulse 4s ease-in-out 0.5s infinite" }}
        >
          <GiMoon />
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="relative z-10 flex items-center justify-center px-6 md:px-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
        <GiSparkles className="mx-4 text-violet-500/50 text-lg" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
      </div>

      {/* ─── SOBRE ─── */}
      <section className="relative z-10 px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400 mb-4">
              Sobre o Projeto
            </p>

            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6 text-white">
              Programação do jeito que{" "}
              <span
                style={{
                  background: "rgb(213, 139, 232)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                deveria ser ensinada
              </span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-4">
              O Nexus-RPG é um projeto extensionista integrador desenvolvido por
              estudantes de Engenharia de Software do 5º semestre da{" "}
              <a
                href="https://www.univag.com.br"
                className="text-violet-300 font-semibold underline gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                UNIVAG <FaExternalLinkAlt className="inline-block ml-1 mb-1" />
              </a>
              . O objetivo é transformar o aprendizado de programação em uma
              aventura.
            </p>

            <p className="text-white/60 leading-relaxed">
              Em vez de tutoriais entediantes, você explora planetas, aceita
              missões, responde desafios e evolui seu personagem — tudo enquanto
              absorve conceitos reais de desenvolvimento de software.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 border border-white/8 bg-white/3 backdrop-blur-sm hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <s.icon className="text-3xl mb-2 text-violet-300" />
                <p className="font-bold text-sm text-white/90">{s.label}</p>
                <p className="text-xs text-white/40 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FUNCIONALIDADES ─── */}
      <section className="relative z-10 px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400 mb-3">
            Funcionalidades
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-white">
            Uma rápida olhada pelo Nexus-RPG
          </h2>
        </div>

        <div className="space-y-5">
          {FEATURE_GROUPS.map((group, index) => {
            const isOpen = openFeature === index;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/4 to-transparent overflow-hidden transition-all duration-300 hover:border-violet-500/30"
                style={{
                  boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFeature(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                >
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">
                      {group.title}
                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <MdKeyboardArrowDown
                    className={`text-3xl text-violet-300 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="funcionalidades-mobile pb-6 flex place-content-start gap-20">
                      <div className="h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent mb-5" />

                      <ul className="space-y-3 w-80 pt-4">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-lg text-white/80 leading-relaxed font-medium"
                          >
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="">
                        {group.image?.map((img, idx) => (
                          <li key={idx} className="">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={img.width}
                              height={img.height}
                              className="rounded-lg border border-white/10"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── TECNOLOGIAS ─── */}
      <section className="relative z-10 px-6 md:px-16 py-24">
        <div
          className="max-w-5xl mx-auto rounded-3xl border border-white/8 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(109,40,217,0.08) 0%, rgba(14,90,230,0.06) 100%)",
            boxShadow: "0 8px 64px rgba(0,0,0,0.5)",
          }}
        >
          <div className="p-10 md:p-16">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400 mb-3">
                Stack Tecnológica
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-white">
                Construído com tecnologia de ponta
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {TECHNOLOGIES.map((t) => (
                <div
                  key={t.name}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/6 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <t.icon className="text-3xl text-white/80" />

                  <span
                    className={`text-xs font-bold text-center bg-gradient-to-br ${t.color} bg-clip-text text-transparent`}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative z-10 px-6 md:px-16 py-32 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(109,40,217,0.15) 0%, transparent 70%)",
          }}
        />

        <p className="text-xs font-bold tracking-[0.25em] uppercase text-violet-400 mb-4">
          Pronto para jogar?
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          Comece sua jornada{" "}
          <br className="hidden md:block" />
          <span
            style={{
              background:
                "linear-gradient(90deg, #a78bfa, #60a5fa, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            no universo Nexus
          </span>
        </h2>

        <p className="text-white/50 mb-10 text-lg max-w-md mx-auto">
          Baixe agora o APK, instale no Android e embarque nessa aventura
          educacional espacial.
        </p>

        <a
          href={APK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #4f46e5, #0ea5e9)",
          }}
        >
          <FaRocket className="text-2xl" />

          <span>Download Android</span>

          <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
            ↓
          </span>
        </a>

        <p className="mt-6 text-sm text-white/25 tracking-wider">
          Versão para Android
        </p>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-16 py-8 text-center text-white/25 text-xs tracking-wider">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <span className="flex items-center gap-2">
            <GiGalaxy className="text-violet-300" />

            <span>
              <span className="text-white/40 font-bold tracking-widest">
                NEXUS-RPG
              </span>{" "}
              · Projeto Extensionista UNIVAG
            </span>
          </span>

          <span>Engenharia de Software · 5º Semestre</span>
        </div>
      </footer>
    </main>
  );
}