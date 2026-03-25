import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (name.endsWith('.jsx')) {
      let s = fs.readFileSync(p, 'utf8');
      const orig = s;
      s = s.replace(/<H1><Icon\s+name="[^"]+"\s+className="page-icon"\s*\/>\s*/g, '<H1>');
      if (s === orig) continue;
      s = s.replace(/\r?\nimport \{ Icon \} from '@\/components\/Icon\.jsx';\r?\n/, '\n');
      s = s.replace(/^import \{ Icon \} from '@\/components\/Icon\.jsx';\r?\n/m, '');
      fs.writeFileSync(p, s);
      console.log(p);
    }
  }
}

walk(path.join(process.cwd(), 'src/pages'));
