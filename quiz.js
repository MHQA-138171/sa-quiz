const { int32 } = require('numjs/src/dtypes');

nj = require('numjs')
sm = require('silly-matrix')
l = 13.5 // enter your length
fc = [
    [2, 1, 0, 0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 1, 0, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1 / 2, 1 / 4, 0, 0],
    [0, 0, 0, 0, 1 / 4, 1 / 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 1 / 2, 1 / 4],
    [0, 0, 0, 0, 0, 0, 1 / 4, 1 / 4]];
fc = sm.coef(fc, l / 6)
b = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
f = sm.produce(sm.transpose(b), sm.produce(fc, b));
m1 = sm.produce([[f[2][0], f[2][1]], [f[3][0], f[3][1]]], [[1], [1]])
m2 = [[f[2][2], f[2][3]], [f[3][2], f[3][3]]]
m2 = sm.coef(sm.inverse(m2), -1)
reactions = sm.produce(m2, m1)
deflections = sm.produce(f, [[1], [1], [reactions[0][0]], [reactions[1][0]]])
console.log(reactions);
console.log(deflections);