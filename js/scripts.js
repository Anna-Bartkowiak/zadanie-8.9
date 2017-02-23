var ileLini = 8;
function rysujChoinke(ileLini) {
  for(var i=0; i< ileLini; i++) {
    var star='';
    //console.log('wartosc i: ' + i);
    for(var j=0; j<i*2-1; j++) {
      star +='*';
      console.log(star);// + '    wartosc j:' +j);
    }
  }
}
rysujChoinke(ileLini);