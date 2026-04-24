

## Refinar a notificação de novidades: animação suave + acessibilidade completa

Vou aprimorar o `UpdatesBanner` para que ele apareça com uma transição elegante e seja totalmente utilizável por teclado e leitores de tela.

### O que vou alterar

**1. Animação suave de entrada e saída (`src/components/UpdatesBanner.tsx`)**
- Adicionar slide-down + fade-in ao montar (em vez de aparecer instantaneamente).
- Animar a saída ao fechar (slide-up + fade-out) antes de desmontar, usando um pequeno timeout (~250ms).
- Substituir o `animate-pulse` agressivo do sino por uma animação `bell-ring` mais discreta (leve oscilação a cada 4s), respeitando `prefers-reduced-motion` (sem movimento quando o usuário pediu menos animação).

**2. Acessibilidade completa**
- Trocar o container por um `<aside>` com `role="region"` e `aria-label="Novidades do site"` — mais semântico que `role="status"` para conteúdo persistente com ações.
- Manter `aria-live="polite"` apenas no anúncio inicial, para o leitor de tela ler o título quando o banner aparece, sem repetir a cada interação.
- **Foco gerenciado**: ao abrir, mover o foco para o link principal (de forma não intrusiva — só após pequeno delay) e armazenar o elemento previamente focado para devolvê-lo ao fechar.
- **Navegação por teclado**:
  - `Tab` percorre: link da novidade → botão "Fechar".
  - `Esc` fecha o banner (atalho global enquanto o banner está visível).
  - `Enter` / `Espaço` no link e no botão funcionam normalmente (já nativo).
- **Foco visível**: adicionar `focus-visible:outline` com cor de contraste forte sobre o fundo `bg-primary` (anel `ring-2 ring-primary-foreground`).
- **Rótulos descritivos**:
  - Link: `aria-label="Abrir novidade: <título>"`.
  - Botão fechar: `aria-label="Fechar notificação de novidades"`.
  - Contador "+N novidades" envolvido em `<span aria-label="mais N novidades disponíveis">`.
- **Ícone decorativo**: manter `aria-hidden="true"` no `<Bell>`.

**3. Tokens de animação reutilizáveis (`tailwind.config.ts` + `src/index.css`)**
- Adicionar keyframes:
  - `slide-down-fade` (entrada): `translateY(-8px)` + `opacity 0` → `translateY(0)` + `opacity 1`, 280ms ease-out.
  - `slide-up-fade` (saída): inverso, 220ms ease-in.
  - `bell-ring`: leve rotação ±10° em 4s infinito.
- Registrar `animation: { "slide-down-fade": "...", "slide-up-fade": "...", "bell-ring": "..." }`.
- No `src/index.css`, adicionar regra `@media (prefers-reduced-motion: reduce)` que neutraliza essas animações (apenas opacidade, sem movimento, e bell estático).

### Comportamento final
- Banner desliza suavemente do topo ao surgir, com leitor de tela anunciando: "Novidades do site: Novo livro: Memórias Ácidas de Bryan Kubrick. +1 novidade".
- Usuário pode pressionar `Tab` para focar o link, `Esc` para fechar, ou usar mouse normalmente.
- Ao fechar, o banner some com animação reversa e o foco retorna ao elemento anterior.
- Quem ativou "reduzir movimento" no SO vê apenas fade simples, sem deslizamento.

### Arquivos afetados
- `src/components/UpdatesBanner.tsx` (refatorado)
- `tailwind.config.ts` (novos keyframes/animations)
- `src/index.css` (regra `prefers-reduced-motion`)

