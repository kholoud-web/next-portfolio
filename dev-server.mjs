import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

// Convert any --host arguments to -H for next dev compatibility
const args = ['dev'];
const rawArgs = process.argv.slice(2);
for (let i = 0; i < rawArgs.length; i++) {
  if (rawArgs[i] === '--host') {
    args.push('-H', rawArgs[++i] || '0.0.0.0');
  } else if (rawArgs[i].startsWith('--host=')) {
    args.push('-H', rawArgs[i].split('=')[1]);
  } else {
    args.push(rawArgs[i]);
  }
}

// Ensure port 3000 and 0.0.0.0
if (!args.includes('-p') && !args.includes('--port')) {
  args.push('-p', '3000');
}
if (!args.includes('-H') && !args.includes('--hostname')) {
  args.push('-H', '0.0.0.0');
}

const nextBin = resolve(process.cwd(), 'node_modules/next/dist/bin/next');
const child = spawn(process.execPath, [nextBin, ...args], { stdio: 'inherit' });

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on('SIGINT', () => forwardSignal('SIGINT'));
process.on('SIGTERM', () => forwardSignal('SIGTERM'));

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
