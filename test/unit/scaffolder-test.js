import {assert} from 'chai';
import {scaffold} from '../../src';

suite('scaffolder', () => {
  test('that the config is scaffolded', () => {
    assert.deepEqual(scaffold(), {});
  });
});
