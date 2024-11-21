import { run, bench, lineplot } from './node_modules/mitata/src/main.mjs';

lineplot(() => {
  bench('forEach($size items)', function* (ctx) {
    const size = ctx.get('size');
    const arr = Array.from({ length: size }, (_, i) => i);
    let sum = 0;

    yield () => {
      arr.forEach(x => { sum += x });
    };
  })
  .range('size', 10, 1_000_000);

  bench('for...of($size items)', function* (ctx) {
    const size = ctx.get('size');
    const arr = Array.from({ length: size }, (_, i) => i);
    let sum = 0;

    yield () => {
      for (const x of arr) {
        sum += x;
      }
    };
  })
  .range('size', 10, 1_000_000);
});

await run();
