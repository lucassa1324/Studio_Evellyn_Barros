// next.config.mjs
import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  async redirects() {
    return [
    
    {
        source: '/cabecalho',
        destination: '/cabecalho.css', 
        permanent: false,  
    },
    {
      source: '/css/:path*',
      destination: '/css/:path*',
    },
    {
        source: '/',
        destination: '/index.html', // Redireciona para o index.html na raiz
        permanent: false,

    },   
    {
        source: '/agendamento', // URL que você deseja acessar
        destination: '/agendamento.html', // URL do arquivo HTML
        permanent: false,
      },
      
      // 🚨 NOVO REDIRECIONAMENTO 301 GLOBAL (DEVE ESTAR NESTE PROJETO ANTIGO)
      {
        source: '/:path*', // Captura TODAS as requisições restantes
        destination: 'https://studio-evellyn-barros.vercel.app/:path*', // Redireciona para o seu novo domínio, mantendo o caminho (path)
        permanent: true, // ESTE É O 301: MOVIDO PERMANENTEMENTE
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
});
