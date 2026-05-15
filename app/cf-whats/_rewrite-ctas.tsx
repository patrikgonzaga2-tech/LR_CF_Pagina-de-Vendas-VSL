'use client'

import { useEffect } from 'react'

const WHATSAPP_HREF = 'https://wa.link/secacomigo3'

// Reescreve em runtime todos os botões de CTA que apontam pra âncora #planos
// ou pro checkout direto (payfast.greenn) — em /cf-whats todos devem ir
// direto pra conversa no WhatsApp pra reduzir fricção do funil.
export function RewriteCtas() {
  useEffect(() => {
    const selectors = ['a[href="#planos"]', 'a[href*="payfast.greenn"]']
    document
      .querySelectorAll<HTMLAnchorElement>(selectors.join(','))
      .forEach((a) => {
        a.href = WHATSAPP_HREF
        a.target = '_blank'
        a.rel = 'noopener noreferrer'
      })
  }, [])

  return null
}
