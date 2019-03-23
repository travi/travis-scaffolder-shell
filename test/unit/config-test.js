import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as yamlWriter from '../../third-party-wrappers/write-yaml';
import scaffoldConfig from '../../src/config';

suite('config file generation', () => {
  let sandbox;
  const projectRoot = any.string();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(yamlWriter, 'default');

    yamlWriter.default.resolves();
  });

  teardown(() => sandbox.restore());

  test('that a base config is created for a shell project', async () => {
    await scaffoldConfig({projectRoot});

    assert.calledWith(
      yamlWriter.default,
      `${projectRoot}/.travis.yml`,
      {
        language: 'generic',
        notifications: {email: false},
        install: 'bpkg getdeps',
        script: 'make test'
      }
    );
  });
});
