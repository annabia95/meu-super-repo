var DiasdeSemana;
(function (DiasdeSemana) {
    DiasdeSemana[DiasdeSemana["Domingo"] = 1] = "Domingo";
    DiasdeSemana[DiasdeSemana["Segunda"] = 2] = "Segunda";
    DiasdeSemana[DiasdeSemana["Te\u00E7a"] = 3] = "Te\u00E7a";
    DiasdeSemana[DiasdeSemana["Quarta"] = 4] = "Quarta";
    DiasdeSemana[DiasdeSemana["Quinta"] = 5] = "Quinta";
    DiasdeSemana[DiasdeSemana["Sexta"] = 6] = "Sexta";
    DiasdeSemana[DiasdeSemana["S\u00E1bado"] = 7] = "S\u00E1bado";
})(DiasdeSemana || (DiasdeSemana = {}));
var primeiroDia = DiasdeSemana.Domingo;
var setimoDia = DiasdeSemana.Sábado;
console.log(primeiroDia);
console.log(setimoDia);
