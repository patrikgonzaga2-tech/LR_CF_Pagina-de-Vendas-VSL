import type { Metadata } from 'next'
import { RandomizerRedirect } from './_randomizer-redirect'

export const metadata: Metadata = {
  title: 'Comunidade Corpo Feliz — Treinos Hormonais · Laüra Rosa',
  robots: { index: false, follow: false },
}

export default function RootRandomizer() {
  return <RandomizerRedirect />
}
