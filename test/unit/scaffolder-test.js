import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as configScaffolder from '../../src/config';
import {scaffold} from '../../src';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(configScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the config is scaffolded', async () => {
    const projectRoot = any.string();

    assert.deepEqual(await scaffold({projectRoot}), {});
    assert.calledWith(configScaffolder.default, {projectRoot});
  });
});
