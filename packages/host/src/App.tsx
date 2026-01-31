import { lazy, Suspense } from 'react';

const Lagavulin = lazy(() => import('remote_whiskey/Lagavulin'));
const Signet = lazy(() => import('remote_whiskey/Signet'));

function App(): JSX.Element {
  return (
    <div>
      <h1>맛있는 술을 먹고 싶어요.</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Lagavulin />
        <Signet />
      </Suspense>
    </div>
  );
}

export default App;
