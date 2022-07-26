import Seasons from "./exe_3";
import Months from "./exe_2";
var readlineSync = require('readline-sync');



function defineSeason () {
const month:string = readlineSync.question('Infome o mês: ')
const hemi:string = readlineSync.question('Informe o hemisfério (N/S): ')
  if(hemi === 'N') {
    if(month === Months.Setembro) {
      return `As estações deste mês são: ${Seasons.Outono} e ${Seasons.Verão}`
    }
    if(month === Months.Dezembro) {
      return `As estações deste mês são: ${Seasons.Outono} e ${Seasons.Inverno}`
    }
    if(month === Months.Março) {
      return `As estações deste mês são: ${Seasons.Primavera} e ${Seasons.Inverno}`
    }
    if(month === Months.Junho) {
      return `As estações deste mês são: ${Seasons.Primavera} e ${Seasons.Verão}`
    }
  }
  if(hemi === 'S') {
    if(month === Months.Março) {
      return`As estações deste mês são: ${Seasons.Outono} e ${Seasons.Verão}`
    }
    if(month === Months.Junho) {
      return `As estações deste mês são: ${Seasons.Outono} e ${Seasons.Inverno}`
    }
    if(month === Months.Setembro) {
      return `As estações deste mês são: ${Seasons.Primavera} e ${Seasons.Inverno}`
    }
    if(month === Months.Dezembro) {
      return `As estações deste mês são: ${Seasons.Primavera} e ${Seasons.Verão}`
    }
  }
}

defineSeason()