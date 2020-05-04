import fs from 'fs';

export const readFile = (file: string) => {
  return fs.existsSync(file) ? fs.readFileSync(file).toString() : null;
};

export const writeFile = (file: string, content: string) => {
  fs.writeFileSync(file, content);
};
