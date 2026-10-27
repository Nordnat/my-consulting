import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { createRequire } from 'node:module';

const nodeRequire = createRequire(import.meta.url);

/**
 * Dynamically compiles and loads a TypeScript file directly from source,
 * resolving local relative imports (.ts / .tsx / .js).
 */
export function requireTs(relativeFilePath) {
  const absolutePath = path.resolve(relativeFilePath);
  const code = fs.readFileSync(absolutePath, 'utf-8');

  const transpileResult = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  });

  const moduleObj = { exports: {} };
  const dirname = path.dirname(absolutePath);

  const customRequire = (importPath) => {
    // Resolve Next.js @/ alias to project root
    let target = importPath;
    if (target.startsWith('@/')) {
      target = path.resolve(target.slice(2));
    } else if (target.startsWith('.')) {
      target = path.resolve(dirname, target);
    } else {
      return nodeRequire(target);
    }

    if (fs.existsSync(target + '.ts')) return requireTs(target + '.ts');
    if (fs.existsSync(target + '.tsx')) return requireTs(target + '.tsx');
    if (fs.existsSync(target + '.js')) return requireTs(target + '.js');
    if (fs.existsSync(target)) return requireTs(target);

    return nodeRequire(importPath);
  };

  const fn = new Function('require', 'exports', 'module', '__filename', '__dirname', transpileResult.outputText);
  fn(customRequire, moduleObj.exports, moduleObj, absolutePath, dirname);

  return moduleObj.exports;
}
