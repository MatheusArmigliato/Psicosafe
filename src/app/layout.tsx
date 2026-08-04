import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PsicoSafe — Gestão de riscos psicossociais que respeita a NR-1',
  description: 'Centralize mapeamento de riscos psicossociais, ouvidoria anônima, atestados e planos de ação. Em uma plataforma. Em semanas, não meses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
