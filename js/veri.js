var ANAHTAR = "islemler";

function islemleriOku() {
  var ham = localStorage.getItem(ANAHTAR);
  if (!ham) {
    return null;
  }
  return JSON.parse(ham);
}

function islemleriKaydet(liste) {
  localStorage.setItem(ANAHTAR, JSON.stringify(liste));
}
