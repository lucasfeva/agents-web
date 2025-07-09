# NLW Agents

Uma aplicação web para gerenciar agentes de IA construída com Next.js 15 e React Query.

## Stack Tecnológica

- **Framework**: Next.js 15.3.5 com App Router
- **Runtime**: React 19
- **Gerenciamento de Estado**: @tanstack/react-query 5.81.5
- **Estilização**: Tailwind CSS com class-variance-authority
- **Componentes UI**: Primitivos do Radix UI
- **Temas**: next-themes para modo escuro/claro
- **Ícones**: lucide-react
- **Qualidade de Código**: Biome para linting e formatação

## Estrutura do Projeto

```bash
src/
├── app/                   # Next.js App Router pages
│   ├── create-room/       # Room creation page
│   ├── room/              # Room listing and detail pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── providers/         # Context providers
│   └── theme/             # Theme components
└── lib/
```

## Configuração

1. **Instalar dependências**

```bash
npm install
```

2. **Executar servidor de desenvolvimento**

```bash
npm run dev
```

3. **Build para produção**

```bash
npm run build
npm start
```

## Desenvolvimento

O projeto utiliza:

- **App Router** para roteamento e layouts
- **React Query** para gerenciamento de estado do servidor
- **Tailwind CSS** para estilização com classes utilitárias
- **Theme Provider** para alternância entre temas claro/escuro
- **Biome** para formatação e linting de código

### Padrões Arquiteturais

- **Component-based Architecture** com React 19
- **Server Components** para renderização otimizada
- **Custom Hooks** para lógica reutilizável
- **Provider Pattern** para gerenciamento de contexto global
- **Atomic Design** na organização dos componentes

### Estrutura de Dados

- **React Query** para cache e sincronização de estado servidor
- **Context API** para estado global da aplicação
- **Local Storage** para persistência de configurações do usuário

### Convenções de Código

- **TypeScript** para tipagem estática
- **Tailwind CSS** com classes utilitárias
- **Biome** para formatação automática e linting
- **Componentes funcionais** com hooks
- **Nomenclatura em camelCase** para variáveis e funções
