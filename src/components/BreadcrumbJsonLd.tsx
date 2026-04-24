// Helper para gerar JSON-LD de BreadcrumbList (schema.org).
// Use o componente <BreadcrumbJsonLd /> dentro de <Helmet> para emitir
// um <script type="application/ld+json"> com a trilha de navegação.

import { Helmet } from "react-helmet-async";

export interface Crumb {
  name: string;
  url: string; // URL absoluta
}

interface Props {
  items: Crumb[];
  /**
   * @id estável do BreadcrumbList. Necessário se outro nó (ex.: WebPage)
   * for referenciá-lo via { "@id": ... }.
   */
  id?: string;
}

const BreadcrumbJsonLd = ({ items, id }: Props) => {
  if (!items.length) return null;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
  if (id) data["@id"] = id;
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;
