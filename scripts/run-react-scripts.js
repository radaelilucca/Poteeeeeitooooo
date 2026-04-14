const { spawnSync } = require('child_process');
const path = require('path');

const command = process.argv[2];

if (!command) {
  console.error('Missing react-scripts command.');
  process.exit(1);
}

const majorVersion = Number(process.versions.node.split('.')[0]);
const env = { ...process.env };

if (majorVersion >= 17) {
  const currentNodeOptions = env.NODE_OPTIONS || '';
  const legacyFlag = '--openssl-legacy-provider';

  if (!currentNodeOptions.includes(legacyFlag)) {
    env.NODE_OPTIONS = currentNodeOptions
      ? `${currentNodeOptions} ${legacyFlag}`
      : legacyFlag;
  }
}

const reactScriptsBin = path.resolve(
  __dirname,
  '..',
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'react-scripts.cmd' : 'react-scripts'
);

const result = spawnSync(reactScriptsBin, [command, ...process.argv.slice(3)], {
  env,
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status === null ? 1 : result.status);
