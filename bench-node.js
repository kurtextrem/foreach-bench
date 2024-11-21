const { Suite } = require("bench-node");

const suite = new Suite();

const steps = [10, 80, 640, 5120, 40960, 327680, 1000000];
for (let i = 0; i < steps.length; ++i) {
  const step = steps[i];
  suite.add(`forEach ${step}`, () => {
    const arr = Array.from({ length: step }, (_, i) => i);
    let sum = 0;
    arr.forEach((x) => {
      sum += x;
    });
  });
  suite.add(`for..of ${step}`, () => {
    const arr = Array.from({ length: step }, (_, i) => i);
    let sum = 0;
    for (const x of arr) {
      sum += x;
    }
  });
}

suite.run();
