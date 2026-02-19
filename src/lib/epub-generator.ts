import JSZip from "jszip";
import { saveAs } from "file-saver";
import type { Poem } from "@/data/poesia-da-alma";
import type { Chapter } from "@/data/os-atribulados";

interface BookInfo {
  title: string;
  author: string;
  year: string;
  aboutAuthor: string;
}

export async function generateEpub(info: BookInfo, poems: Poem[]) {
  const zip = new JSZip();

  // mimetype must be first and uncompressed
  zip.file("mimetype", "application/epub+zip", { compression: "STORE" });

  // META-INF/container.xml
  zip.file(
    "META-INF/container.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
  );

  // Stylesheet
  zip.file(
    "OEBPS/style.css",
    `body { font-family: Georgia, serif; margin: 1em; line-height: 1.6; color: #333; }
h1 { font-size: 2em; text-align: center; margin: 2em 0 0.5em; color: #4a2c1a; }
h2 { font-size: 1.4em; text-align: center; margin: 2em 0 1em; color: #6b3a2a; border-bottom: 1px solid #ccc; padding-bottom: 0.5em; }
p { margin: 0.2em 0; text-align: center; }
.author { text-align: center; font-style: italic; margin: 0.5em 0 2em; color: #666; }
.about { text-align: left; font-style: italic; margin: 2em 1em; }
.break { margin: 1em 0; }`
  );

  // Generate poem XHTML files
  const poemFiles: string[] = [];
  poems.forEach((poem, i) => {
    const id = `poem_${i}`;
    poemFiles.push(id);
    const content = poem.lines
      .map((l) => (l === "" ? '<p class="break">&#160;</p>' : `<p>${escapeXml(l)}</p>`))
      .join("\n");

    zip.file(
      `OEBPS/${id}.xhtml`,
      `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(poem.title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<h2>${escapeXml(poem.title)}</h2>
${content}
</body>
</html>`
    );
  });

  // Title page
  zip.file(
    "OEBPS/title.xhtml",
    `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(info.title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<h1>${escapeXml(info.title)}</h1>
<p class="author">${escapeXml(info.author)}</p>
<p class="author">${escapeXml(info.year)}</p>
</body>
</html>`
  );

  // About page
  zip.file(
    "OEBPS/about.xhtml",
    `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>Sobre o autor</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<h2>Sobre o Autor</h2>
<p class="about">${escapeXml(info.aboutAuthor)}</p>
</body>
</html>`
  );

  // content.opf
  const manifestItems = [
    '<item id="style" href="style.css" media-type="text/css"/>',
    '<item id="title" href="title.xhtml" media-type="application/xhtml+xml"/>',
    ...poemFiles.map(
      (id) => `<item id="${id}" href="${id}.xhtml" media-type="application/xhtml+xml"/>`
    ),
    '<item id="about" href="about.xhtml" media-type="application/xhtml+xml"/>',
    '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',
  ].join("\n    ");

  const spineItems = [
    '<itemref idref="title"/>',
    ...poemFiles.map((id) => `<itemref idref="${id}"/>`),
    '<itemref idref="about"/>',
  ].join("\n    ");

  zip.file(
    "OEBPS/content.opf",
    `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookID" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(info.title)}</dc:title>
    <dc:creator>${escapeXml(info.author)}</dc:creator>
    <dc:language>pt-BR</dc:language>
    <dc:identifier id="BookID">urn:uuid:${crypto.randomUUID()}</dc:identifier>
  </metadata>
  <manifest>
    ${manifestItems}
  </manifest>
  <spine toc="ncx">
    ${spineItems}
  </spine>
</package>`
  );

  // toc.ncx
  const navPoints = [
    `<navPoint id="title" playOrder="1"><navLabel><text>Capa</text></navLabel><content src="title.xhtml"/></navPoint>`,
    ...poemFiles.map(
      (id, i) =>
        `<navPoint id="${id}" playOrder="${i + 2}"><navLabel><text>${escapeXml(poems[i].title)}</text></navLabel><content src="${id}.xhtml"/></navPoint>`
    ),
    `<navPoint id="about" playOrder="${poemFiles.length + 2}"><navLabel><text>Sobre o Autor</text></navLabel><content src="about.xhtml"/></navPoint>`,
  ].join("\n    ");

  zip.file(
    "OEBPS/toc.ncx",
    `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head><meta name="dtb:uid" content="urn:uuid:book"/></head>
  <docTitle><text>${escapeXml(info.title)}</text></docTitle>
  <navMap>
    ${navPoints}
  </navMap>
</ncx>`
  );

  const blob = await zip.generateAsync({ type: "blob", mimeType: "application/epub+zip" });
  const filename = info.title.toLowerCase().replace(/\s+/g, "-") + ".epub";
  saveAs(blob, filename);
}

export async function generateProseEpub(info: BookInfo, chapters: Chapter[]) {
  const zip = new JSZip();

  zip.file("mimetype", "application/epub+zip", { compression: "STORE" });

  zip.file(
    "META-INF/container.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
  );

  zip.file(
    "OEBPS/style.css",
    `body { font-family: Georgia, serif; margin: 1.5em; line-height: 1.8; color: #333; }
h1 { font-size: 2em; text-align: center; margin: 2em 0 0.5em; color: #4a2c1a; }
h2 { font-size: 1.5em; text-align: left; margin: 2em 0 1em; color: #6b3a2a; border-bottom: 1px solid #ccc; padding-bottom: 0.5em; }
p { margin: 0.8em 0; text-align: justify; text-indent: 1.5em; }
p.first { text-indent: 0; }
.author { text-align: center; font-style: italic; margin: 0.5em 0 2em; color: #666; text-indent: 0; }
.about { text-align: left; font-style: italic; margin: 2em 1em; text-indent: 0; }
.subtitle { text-align: center; font-style: italic; margin: 0.5em 0 1em; color: #666; font-size: 1.1em; text-indent: 0; }`
  );

  const chapterFiles: string[] = [];
  chapters.forEach((chapter, i) => {
    const id = `chapter_${i}`;
    chapterFiles.push(id);
    const content = chapter.paragraphs
      .map((p, pi) => `<p${pi === 0 ? ' class="first"' : ''}>${escapeXml(p)}</p>`)
      .join("\n");

    zip.file(
      `OEBPS/${id}.xhtml`,
      `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(chapter.title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<h2>${escapeXml(chapter.title)}</h2>
${content}
</body>
</html>`
    );
  });

  zip.file(
    "OEBPS/title.xhtml",
    `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${escapeXml(info.title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<h1>${escapeXml(info.title)}</h1>
<p class="author">${escapeXml(info.author)}</p>
<p class="author">${escapeXml(info.year)}</p>
</body>
</html>`
  );

  zip.file(
    "OEBPS/about.xhtml",
    `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>Sobre o autor</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<h2>Sobre o Autor</h2>
<p class="about">${escapeXml(info.aboutAuthor)}</p>
</body>
</html>`
  );

  const manifestItems = [
    '<item id="style" href="style.css" media-type="text/css"/>',
    '<item id="title" href="title.xhtml" media-type="application/xhtml+xml"/>',
    ...chapterFiles.map(
      (id) => `<item id="${id}" href="${id}.xhtml" media-type="application/xhtml+xml"/>`
    ),
    '<item id="about" href="about.xhtml" media-type="application/xhtml+xml"/>',
    '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',
  ].join("\n    ");

  const spineItems = [
    '<itemref idref="title"/>',
    ...chapterFiles.map((id) => `<itemref idref="${id}"/>`),
    '<itemref idref="about"/>',
  ].join("\n    ");

  zip.file(
    "OEBPS/content.opf",
    `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookID" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(info.title)}</dc:title>
    <dc:creator>${escapeXml(info.author)}</dc:creator>
    <dc:language>pt-BR</dc:language>
    <dc:identifier id="BookID">urn:uuid:${crypto.randomUUID()}</dc:identifier>
  </metadata>
  <manifest>
    ${manifestItems}
  </manifest>
  <spine toc="ncx">
    ${spineItems}
  </spine>
</package>`
  );

  const navPoints = [
    `<navPoint id="title" playOrder="1"><navLabel><text>Capa</text></navLabel><content src="title.xhtml"/></navPoint>`,
    ...chapterFiles.map(
      (id, i) =>
        `<navPoint id="${id}" playOrder="${i + 2}"><navLabel><text>${escapeXml(chapters[i].title)}</text></navLabel><content src="${id}.xhtml"/></navPoint>`
    ),
    `<navPoint id="about" playOrder="${chapterFiles.length + 2}"><navLabel><text>Sobre o Autor</text></navLabel><content src="about.xhtml"/></navPoint>`,
  ].join("\n    ");

  zip.file(
    "OEBPS/toc.ncx",
    `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head><meta name="dtb:uid" content="urn:uuid:book"/></head>
  <docTitle><text>${escapeXml(info.title)}</text></docTitle>
  <navMap>
    ${navPoints}
  </navMap>
</ncx>`
  );

  const blob = await zip.generateAsync({ type: "blob", mimeType: "application/epub+zip" });
  const filename = info.title.toLowerCase().replace(/\s+/g, "-") + ".epub";
  saveAs(blob, filename);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
