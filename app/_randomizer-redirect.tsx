'use client'

import { useEffect } from 'react'

const pages = [
  'corpo-feliz-var5.html',
  'corpo-feliz-var6.html',
  'corpo-feliz-var9.html',
  'corpo-feliz-var14.html',
] as const

const variants = ['v5', 'v6', 'v9', 'v14'] as const

export function RandomizerRedirect() {
  useEffect(() => {
    const idx = Math.floor(Math.random() * pages.length)
    const sp = new URLSearchParams(window.location.search)
    sp.set('variante', variants[idx])
    const hash = window.location.hash
    window.location.replace(`/${pages[idx]}?${sp.toString()}${hash}`)
  }, [])

  return null
}
