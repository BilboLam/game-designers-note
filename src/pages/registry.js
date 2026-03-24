import React from "react";

const modules = import.meta.glob("./*.jsx", { eager: true });

export const pages = {};
for (const filePath of Object.keys(modules)) {
  if (filePath.includes("registry")) continue;
  const id = filePath.replace("./", "").replace(".jsx", "");
  const Comp = modules[filePath].default;
  pages[id] = Comp;
}
