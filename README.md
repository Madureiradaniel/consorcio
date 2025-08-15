# 🚀 Consórcio Futurista - Landing Page

Uma landing page futurista para consórcios com tecnologia blockchain, implementando design glassmorphism, animações suaves e internacionalização completa.

## ✨ Características

- 🎨 **Design Futurista**: Paleta de cores neon (azul, ciano, roxo) sobre fundo escuro
- 🌐 **Internacionalização**: Suporte completo a Português (Brasil) e Inglês
- 🔄 **Troca de Idioma**: Seletor fixo no topo direito sem recarregar a página
- ✨ **Glassmorphism**: Efeitos de vidro translúcido com bordas neon
- 🎭 **Animações**: Animações suaves ao scroll usando Framer Motion
- 📱 **Responsivo**: Layout otimizado para todos os dispositivos
- 🎯 **Performance**: Otimizado com Vite e Tailwind CSS

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React i18next** - Sistema de internacionalização
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
consorcio/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx      # Header com navegação e seletor de idioma
│   │   ├── Hero.jsx        # Seção principal hero
│   │   ├── HowItWorks.jsx  # Como funciona o sistema
│   │   ├── Benefits.jsx    # Benefícios da plataforma
│   │   ├── Technology.jsx  # Explicação da tecnologia
│   │   ├── CTA.jsx         # Call to action com formulário
│   │   ├── Footer.jsx      # Rodapé com links
│   │   └── FloatingParticles.jsx # Partículas flutuantes
│   ├── locales/            # Arquivos de tradução
│   │   ├── pt.json        # Português (Brasil)
│   │   └── en.json        # Inglês
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   ├── i18n.js            # Configuração de internacionalização
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── tailwind.config.js     # Configuração do Tailwind
├── postcss.config.js      # Configuração do PostCSS
└── index.html             # HTML principal
```

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### 3. Build para Produção

```bash
npm run build
```

### 4. Preview do Build

```bash
npm run preview
```

## 🌐 Sistema de Internacionalização

### Arquivos de Tradução

- **`src/locales/pt.json`** - Português (Brasil)
- **`src/locales/en.json`** - Inglês

### Uso nos Componentes

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('hero.title')}</h1>;
};
```

### Troca de Idioma

O seletor de idioma está localizado no header, no canto superior direito. A troca é instantânea e não recarrega a página.

## 🎨 Personalização

### Cores Neon

As cores neon estão definidas no `tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#00d4ff',
    cyan: '#00ffff',
    purple: '#8b5cf6',
    pink: '#ec4899',
    green: '#00ff88'
  }
}
```

### Animações

As animações estão configuradas no CSS e podem ser personalizadas no `src/index.css`.

## 📱 Responsividade

A landing page é totalmente responsiva e inclui:

- Layout mobile-first
- Breakpoints para tablet e desktop
- Navegação mobile com menu hambúrguer
- Grids adaptativos para diferentes tamanhos de tela

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Linting do código

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte ou dúvidas, entre em contato através de:

- Email: contato@consorciofuturista.com
- Website: [consorciofuturista.com](https://consorciofuturista.com)

---

**Desenvolvido com ❤️ pela equipe Consórcio Futurista** 