"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line2 = exports.line1 = exports.matrix2 = exports.matrix1 = exports.mTmatrix2 = exports.mTmatrix1 = exports.letters = exports.ogrid2 = exports.ogrid1 = exports.grid2 = exports.grid1 = void 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
exports.letters = letters;
var mTmatrix1 = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
];
exports.mTmatrix1 = mTmatrix1;
var mTmatrix2 = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
];
exports.mTmatrix2 = mTmatrix2;
var matrix1 = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
];
exports.matrix1 = matrix1;
var matrix2 = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
];
exports.matrix2 = matrix2;
var line1 = '  ';
exports.line1 = line1;
for (var i = 0; i < matrix1.length; i += 1) {
    exports.line1 = line1 += "  ".concat(letters[i]);
}
var line2 = '  ';
exports.line2 = line2;
for (var i = 0; i < matrix2.length; i += 1) {
    exports.line2 = line2 += "  ".concat(letters[i]);
}
function grid1() {
    console.log(line1);
    for (var y = 0; y < matrix1.length; y += 1) {
        console.log("".concat(y + 1, " [ ").concat(matrix1[y].join('  '), " ]"));
    }
}
exports.grid1 = grid1;
function grid2() {
    console.log(line2);
    for (var y = 0; y < matrix2.length; y += 1) {
        console.log("".concat(y + 1, " [ ").concat(matrix2[y].join('  '), " ]"));
    }
}
exports.grid2 = grid2;
function ogrid1() {
    console.log(line1);
    for (var y = 0; y < mTmatrix1.length; y += 1) {
        console.log("".concat(y + 1, " [ ").concat(mTmatrix1[y].join('  '), " ]"));
    }
}
exports.ogrid1 = ogrid1;
function ogrid2() {
    console.log(line2);
    for (var y = 0; y < mTmatrix2.length; y += 1) {
        console.log("".concat(y + 1, " [ ").concat(mTmatrix2[y].join('  '), " ]"));
    }
}
exports.ogrid2 = ogrid2;
