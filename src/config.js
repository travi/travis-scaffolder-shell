import writeYaml from '../third-party-wrappers/write-yaml';

export default function ({projectRoot}) {
  return writeYaml(
    `${projectRoot}/.travis.yml`,
    {
      language: 'generic',
      notifications: {email: false},
      before_install: 'curl -Lo- "https://raw.githubusercontent.com/bpkg/bpkg/master/setup.sh" | bash',
      install: 'bpkg getdeps',
      script: 'make test'
    }
  );
}
