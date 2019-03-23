import writeYaml from '../third-party-wrappers/write-yaml';

export default function ({projectRoot}) {
  return writeYaml(
    `${projectRoot}/.travis.yml`,
    {language: 'generic', notifications: {email: false}, install: 'bpkg getdeps', script: 'make test'}
  );
}
