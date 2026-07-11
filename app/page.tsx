import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Comunidade Corpo Feliz — Treinos Hormonais · Laüra Rosa',
  robots: { index: false, follow: false },
}

// A raiz do domínio agora vai sempre para a candidatura por WhatsApp.
// O redirect principal está no next.config (preserva os UTMs); este aqui é
// só uma rede de segurança caso a rota seja atingida diretamente.
export default function Home() {
  redirect('/cf-whats')
}
