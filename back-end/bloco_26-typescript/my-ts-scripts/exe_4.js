"use strict";
exports.__esModule = true;
var exe_3_1 = require("./exe_3");
var exe_2_1 = require("./exe_2");
var readlineSync = require('readline-sync');
function defineSeason() {
    var month = readlineSync.question('Infome o mês: ');
    var hemi = readlineSync.question('Informe o hemisfério (N/S): ');
    if (hemi === 'N') {
        if (month === exe_2_1["default"].Setembro) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Outono, " e ").concat(exe_3_1["default"].Verão);
        }
        if (month === exe_2_1["default"].Dezembro) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Outono, " e ").concat(exe_3_1["default"].Inverno);
        }
        if (month === exe_2_1["default"].Março) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Primavera, " e ").concat(exe_3_1["default"].Inverno);
        }
        if (month === exe_2_1["default"].Junho) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Primavera, " e ").concat(exe_3_1["default"].Verão);
        }
    }
    if (hemi === 'S') {
        if (month === exe_2_1["default"].Março) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Outono, " e ").concat(exe_3_1["default"].Verão);
        }
        if (month === exe_2_1["default"].Junho) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Outono, " e ").concat(exe_3_1["default"].Inverno);
        }
        if (month === exe_2_1["default"].Setembro) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Primavera, " e ").concat(exe_3_1["default"].Inverno);
        }
        if (month === exe_2_1["default"].Dezembro) {
            return "As esta\u00E7\u00F5es deste m\u00EAs s\u00E3o: ".concat(exe_3_1["default"].Primavera, " e ").concat(exe_3_1["default"].Verão);
        }
    }
}
defineSeason();
