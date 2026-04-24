

## Garantir que o preview sempre abra com a versão mais recente

Hoje o site é um PWA com Service Worker (`vite-plugin-pwa`). Quando você publica uma atualização, o navegador às vezes ainda mostra a versão antiga em cache até que você feche e reabra a aba algumas vezes. Vamos corrigir isso para que **toda vez que o chat/preview abrir, a versão mais nova seja exibida imediatamente**.

### O que vou alterar

**1. `vite.config.ts` — Forçar o novo Service Worker a assumir o controle na hora**
- Adicionar `skipWaiting: true` e `clientsClaim: true` no Workbox.
- Definir `cleanupOutdatedCaches: true` para remover caches antigos automaticamente.
- Adicionar uma regra `NetworkFirst` para HTML/navegação (a página principal sempre busca da rede primeiro, com fallback ao cache se estiver offline).
- Manter `CacheFirst` apenas para PDF/EPUB (leitura offline continua funcionando).

**2. `src/main.tsx` — Verificação robusta de atualização**
- Substituir o registro manual atual por um listener que:
  - Detecta quando há um novo Service Worker em `waiting`.
  - Envia mensagem `SKIP_WAITING` para ativá-lo.
  - Recarrega a página automaticamente (uma única vez, com guarda anti-loop).
- Verifica atualizações a cada vez que a aba ganha foco (`visibilitychange`), garantindo que reabrir o preview sempre busque a versão nova.

**3. `index.html` — Meta tags anti-cache para o documento HTML**
- Adicionar `<meta http-equiv="Cache-Control" content="no-cache">` para o shell HTML, evitando que o navegador sirva HTML obsoleto.
- Os assets versionados (JS/CSS com hash) continuam podendo ser cacheados normalmente — o Vite já faz isso.

### Resultado esperado
- Ao reabrir o preview ou voltar para a aba, o site verifica se há nova versão e a aplica automaticamente.
- A leitura offline de livros (PDF/EPUB) continua funcionando exatamente como antes.
- Não há mais necessidade de Ctrl+F5 / limpar cache para ver as últimas alterações.

### Arquivos afetados
- `vite.config.ts` (editado)
- `src/main.tsx` (editado)
- `index.html` (editado)

