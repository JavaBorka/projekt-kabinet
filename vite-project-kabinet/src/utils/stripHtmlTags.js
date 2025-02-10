// Regulární výraz neošetří případy, když jsou v textu tři tečky ...
// export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

export const stripHTMLTags = html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }