/* eslint-disable no-console */

import { writeFile } from 'fs/promises';
import day from '../src/utils/day';

const TIMESTAMP = day().format('YYYYMMDDHHmm');

writeFile('./build.dot', TIMESTAMP, 'utf8')
  .then(() => console.log('Success write build file'))
  .catch(err => `Error writing build.dot: ${err.message}`);
