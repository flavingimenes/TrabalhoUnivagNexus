# 🚀 Nexus-RPG

### Plataforma de Aprendizado Gamificada para Programação

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Plataforma educacional gamificada que transforma o aprendizado de programação em uma jornada espacial — com planetas, missões, desafios e progressão do usuário.

---

## 📖 Sobre o Projeto

O **Nexus-RPG** é um projeto extensionista integrador de **Engenharia de Software da UNIVAG**, que une **educação, tecnologia e gamificação** para tornar o aprendizado de programação mais interativo e motivador.

Em vez do ensino tradicional, o usuário avança por uma jornada espacial: explora planetas, completa missões e responde desafios de programação, acumulando progresso conforme evolui.

---

## 🔗 Repositórios

| Parte do Projeto | Link |
|---|---|
| 📱 Frontend | [Repositório Frontend](https://github.com/flavingimenes/TrabalhoUnivagNexus) |
| ⚙️ Backend | [Repositório Backend](https://github.com/dhiogonasc/nexus-server) |

---

## 🎯 Objetivo

Auxiliar estudantes no aprendizado de programação por meio de conteúdo progressivo e gamificado, aplicando na prática: desenvolvimento mobile/web, API REST, banco de dados relacional, autenticação e UX.

---

## ✨ Funcionalidades

- 🔐 Cadastro, login e autenticação com token (JWT)
- 🌌 Identidade visual espacial e exploração de planetas temáticos
- 🪐 Sistema de missões com questões de múltipla escolha e feedback
- 📊 Progresso do usuário e resultado ao final de cada missão
- 👤 Perfil com visualização da jornada de aprendizagem
- 📱💻 Interface responsiva (mobile e web)
- ⬇️ Landing page com download do APK Android

---

## 🛠️ Como Funciona

```
Cadastro → Login → Planeta → Missão → Desafios → Resultado → Progresso
```

O usuário se cadastra, escolhe um planeta e completa missões respondendo desafios de múltipla escolha. Ao final de cada missão, recebe o resultado e tem seu progresso atualizado, liberando novas etapas conforme evolui.

---

## 🧰 Tecnologias

<table>
<tr>
<td valign="top" width="33%">

**📱 Mobile**
- React Native + Expo
- TypeScript
- Expo Router
- Axios
- Expo Secure Store
- React Native Reanimated

</td>
<td valign="top" width="33%">

**🌐 Landing Page**
- Next.js + React
- TypeScript
- Tailwind CSS
- React Icons

</td>
<td valign="top" width="33%">

**⚙️ Backend**
- Java + Spring Boot
- Spring Security
- JPA / Hibernate
- JWT
- 🗄️ PostgreSQL

</td>
</tr>
</table>

---

## 🗄️ Banco de Dados

PostgreSQL armazena usuários, planetas, missões, questões, respostas e progresso — permitindo acompanhar o avanço individual de cada usuário.

---

## 📂 Estrutura do Projeto

```bash
Nexus-RPG/
├── landing-page/        # Next.js — site de apresentação
├── mobile-app/           # React Native + Expo
│   ├── app/              # telas (mission, planet, account...)
│   └── src/               # components, services, styles
├── api/                  # Spring Boot
│   ├── controllers/ services/ repositories/
│   ├── models/ security/
│
└── README.md
```

---

## ▶️ Como Executar

**Pré-requisitos:** `Node.js` · `NPM` · `Expo CLI` · `Android Studio`/`Expo Go` · `Java JDK` · `PostgreSQL`

**📱 App Mobile**
```bash
cd client && npm install && npx expo start
```
Abra em dispositivo Android, emulador, navegador ou Expo Go.

**🌐 Landing Page**
```bash
npm install && npm run dev
```
Acesse `http://localhost:3000`

**⚙️ Backend**
```bash
./mvnw spring-boot:run
```
> Configure as credenciais do banco antes de executar.

---

## 📦 APK Android

A landing page disponibiliza um botão para download direto do APK do Nexus-RPG.

---

## 👥 Integrantes

| 👤 Alunos |
|---|
| Flávio Gimenes |
| Dhiogo Nascimento |
| Matheus OKada |
| Guilherme Augusto |
---

---

## 🎓 Status

Desenvolvido para fins acadêmicos — **Projeto Extensionista Integrador, 5º semestre de Engenharia de Software, UNIVAG**.

---

<div align="center">

Feito por estudantes de Engenharia de Software — UNIVAG

</div>
