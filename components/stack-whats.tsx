const stackCats = [
  {
    title: 'Treinos e trilhas',
    items: [
      'Avaliação Física de entrada — seu caminho personalizado, não o de todo mundo',
      'Trilha Completa Iniciante ao Avançado com atualizações mensais',
      'Treinos Hormonais por fase do ciclo',
      'Treinos Mega Curtos de 3 e 5 minutos — para os dias impossíveis',
      'Fichas Academia · Metabólicos · Viagem · Localizados',
      'Relaxamento + Mobilidade + Ioga + Lombar',
    ],
  },
  {
    title: 'Desafios + Nutrição',
    items: [
      'Lipo 21D + Módulo LPF Completo',
      'Seca em 21 + Desafio 7x + 30x + Detox',
      'Calculadora + Plano alimentar + Receitas',
    ],
  },
  {
    title: 'Protocolos + Comunidade',
    items: [
      '4 Protocolos + Encontros ao Vivo gravados',
      'Suporte com a Profe Laüra Rosa todo dia + Comunidade das Musas',
      'A Laüra no WhatsApp todos os dias',
    ],
  },
]

export function StackWhats() {
  return (
    <section id="planos" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ background: 'var(--gd)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span
              className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
              style={{ background: 'var(--o)' }}
            >
              ✦ O que você recebe
            </span>
            <h2
              className="reveal reveal-d1 mt-4 text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px,4.5vw,56px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              Tudo que está<br />
              esperando por você<br />
              dentro da Comunidade.
            </h2>
            <p
              className="reveal reveal-d2 mt-4"
              style={{ fontSize: 17, color: 'rgba(255,255,255,0.88)', lineHeight: 1.8 }}
            >
              Treinos, desafios, nutrição, encontros ao vivo e a Laüra do seu
              lado todo dia. Um ecossistema completo para a mulher que quer
              resultado de verdade.
            </p>
            <div className="reveal reveal-d3 mt-9">
              <a
                href="https://wa.link/secacomigo3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com o time da Laüra no WhatsApp"
                className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  padding: '17px 36px',
                  background: 'var(--o)',
                  color: '#000',
                  boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
                }}
              >
                Quero saber como entrar
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">
                  ›
                </span>
              </a>
              <p
                className="mt-5"
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.55)',
                  maxWidth: 380,
                  lineHeight: 1.55,
                }}
              >
                Fala com a gente. A gente explica tudo e te ajuda a dar o
                primeiro passo.
              </p>
            </div>
          </div>

          <div className="reveal reveal-d2 flex flex-col gap-7">
            {stackCats.map((cat, i) => (
              <div key={i}>
                <div
                  className="flex items-center gap-2.5 mb-2.5"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--o)',
                  }}
                >
                  {cat.title}
                  <span
                    className="flex-1 h-px"
                    style={{ background: 'rgba(245,113,0,0.2)' }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex gap-2.5 items-start px-4 py-2.5 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--o)',
                          fontSize: 9,
                          flexShrink: 0,
                          marginTop: 5,
                        }}
                      >
                        ✦
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
