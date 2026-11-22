var ornekIslemler = [
  { tarih: "2026-11-12", tur: "gider", aciklama: "Sinema", kategori: "Eğlence", tutar: 280 },
  { tarih: "2026-11-10", tur: "gider", aciklama: "Kitap", kategori: "Eğitim", tutar: 210 },
  { tarih: "2026-11-08", tur: "gider", aciklama: "Elektrik", kategori: "Fatura", tutar: 321 },
  { tarih: "2026-11-05", tur: "gider", aciklama: "Toplu taşıma", kategori: "Ulaşım", tutar: 150 },
  { tarih: "2026-11-02", tur: "gider", aciklama: "Market", kategori: "Gıda", tutar: 486 },
  { tarih: "2026-11-01", tur: "gelir", aciklama: "Aile desteği", kategori: "Diğer", tutar: 7000 },
  { tarih: "2026-11-01", tur: "gelir", aciklama: "Burs", kategori: "Burs", tutar: 8000 }
];

function listeyiAl() {
  var liste = islemleriOku();
  if (!liste) {
    liste = ornekIslemler;
    islemleriKaydet(liste);
  }
  return liste;
}

function tarihYaz(iso) {
  var parca = iso.split("-");
  return parca[2] + "." + parca[1] + "." + parca[0];
}

function hucreEkle(satir, yazi, sinif) {
  var hucre = document.createElement("td");
  hucre.textContent = yazi;
  if (sinif) {
    hucre.className = sinif;
  }
  satir.appendChild(hucre);
}

function tabloyuDoldur(liste) {
  var govde = document.getElementById("kayitlar");
  govde.innerHTML = "";

  for (var i = 0; i < liste.length; i++) {
    var islem = liste[i];
    var satir = document.createElement("tr");
    hucreEkle(satir, tarihYaz(islem.tarih));
    hucreEkle(satir, islem.tur === "gelir" ? "Gelir" : "Gider");
    hucreEkle(satir, islem.aciklama);
    hucreEkle(satir, islem.kategori);
    hucreEkle(satir, islem.tutar, islem.tur);
    govde.appendChild(satir);
  }
}

document.getElementById("islemFormu").addEventListener("submit", function (olay) {
  olay.preventDefault();

  var form = olay.target;
  var kategori = form.kategori;
  var liste = listeyiAl();

  liste.unshift({
    tarih: form.tarih.value,
    tur: form.tur.value,
    aciklama: form.aciklama.value,
    kategori: kategori.options[kategori.selectedIndex].text,
    tutar: Number(form.tutar.value)
  });

  islemleriKaydet(liste);
  tabloyuDoldur(liste);
  form.reset();
});

tabloyuDoldur(listeyiAl());
