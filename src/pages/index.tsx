/* eslint-disable no-console */
import { useEffect } from 'react';
import * as Envs from '@/utils/config';

export default function Home() {
  useEffect(() => {
    console.log({ Envs });
  }, []);
  return (
    <h1>Hello World</h1>
  );
}
