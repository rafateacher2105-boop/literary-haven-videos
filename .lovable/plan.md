

## Plano: Adicionar "O Quarto Sábio" na seção Clássicos

### O que sera feito

Adicionar o livro **"O Quarto Sábio e Sua Busca do Cristo"** de Henry Van Dyke na aba "Clássicos" da Biblioteca Publica, usando a capa enviada pelo usuario.

### Passos

1. **Copiar a imagem** de `user-uploads://1775182679502.png` para `src/assets/cover-quarto-sabio.png`

2. **Atualizar `src/components/ClassicsModal.tsx`**:
   - Adicionar `import coverQuartoSabio from "@/assets/cover-quarto-sabio.png";`
   - Adicionar entrada no array `classicBooks`:
     ```ts
     {
       title: "O Quarto Sábio",
       author: "Henry Van Dyke",
       cover: coverQuartoSabio,
       description: "Um classico sobre fe e sacrificio. A jornada de Artaban, o quarto mago, em busca do Cristo."
     }
     ```
   - Sem PDF por enquanto (aparecera com etiqueta "Em breve")

### Observacao

Nenhum PDF foi enviado, entao o livro ficara listado sem link de download. Basta enviar o arquivo depois para ativar o botao.

