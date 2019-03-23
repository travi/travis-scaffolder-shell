import scaffoldConfig from './config';

export default async function ({projectRoot}) {
  await scaffoldConfig({projectRoot});

  return {};
}
