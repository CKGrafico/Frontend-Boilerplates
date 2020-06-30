const fetch = require("node-fetch");
const { promises: fs } = require("fs");

const pages = [
  { id: "basic", title: "JavaScript + SASS" },
  { id: "vue", title: "Vue + TypeScript + SASS" },
  { id: "react", title: "React + TypeScript + SASS" },
  { id: "ts", title: "TypeScript + SASS" },
  { id: "phaser", title: "Phaser + React + TS" },
  { id: "cypress", title: "Cypress + TypeScript" },
  { id: "nuxt", title: "Nuxt + TypeScript + SASS" },
  { id: "node-ts", title: "Node + TypeScript" },
];

const template = ({ id, title }, content) => `---
id: ${id}
title: ${title}
---
${content}`;

const urlTemplate = (id) => `https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/${id}/README.md`;

// From https://gist.github.com/Atinux/fd2bcce63e44a7d3addddc166ce93fb2
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

function cleanContent(content) {
  let text = content.replace(/(.*<h2 )/gs, "<h2 ");
  text = text.replace(/(\#\#\# 🎩 Contributors).*/gs, "");

  return text;
}

const downloadPages = async () => {
  await asyncForEach(pages, async (page) => {
    const response = await fetch(urlTemplate(page.id));
    const content = await response.text();
    const textContentFile = template(page, cleanContent(content));

    await fs, fs.writeFile(`./docs/${page.id}.md`, textContentFile);
  });
};

downloadPages();
