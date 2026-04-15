# DeadByRandomizer

> Gerador de builds aleatórias para Dead by Daylight.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Sobre o Projeto

O **DeadByRandomizer** é uma aplicação web que gera builds aleatórias para o jogo Dead by Daylight. Escolha jogar como **Survivor** ou **Killer** e deixe o randomizer montar sua build.

Acesse online: [dead-by-randomizer.vercel.app](https://dead-by-randomizer.vercel.app)

---

## Funcionalidades até o momento

- Randomizer de perks para Survivor e Killer
- Responsividade

---

## Estrutura de Pastas

```
DeadByRandomizer/
│
├── index.html              # Página principal
├── Randomizer.html         # Página do randomizer
├── README.md
│
├── assets/
│   ├── data/
│   │   ├── Killer.json     # Dados dos perks killer
│   │   └── Survivor.json   # Dados dos perks survivor
│   │
│   └── images/
│       ├── background/     # Imagem de fundo
│       ├── icons/          # Ícones da interface
│       ├── perks/
│       │   ├── killer/     # Imagens dos perks killer
│       │   └── survivor/   # Imagens dos perks survivor
│
├── css/
│   └── styles.css          # Estilos globais
│
└── scripts/
    └── script.js           # Lógica do randomizer
```

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript | Lógica do randomizer |
| JSON | Armazenamento local dos dados |

---

## Roadmap

- [ ] API de perks atualizada automaticamente
- [ ] Integração com Supabase (banco de dados)
- [ ] Sistema de autenticação (login/cadastro)
- [ ] Página de builds salvas

---

## Aviso

Este é um projeto **pessoal** e não possui afiliação com a **Behaviour Interactive** ou o jogo **Dead by Daylight**. Todos os direitos do jogo pertencem aos seus respectivos donos.

---

## Autor

Feito por [Gabriel Fernandes de Lara](https://github.com/gabrielfernandesdelara)
