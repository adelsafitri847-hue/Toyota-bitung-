function beli(namaMobil, harga) {
  let nomor = "62895327715278"

  let pesan = `Halo Astrido Toyota 🚗
Saya tertarik:
Mobil: ${namaMobil}
Harga: Rp ${parseInt(harga).toLocaleString()}

Mohon info lebih lanjut`;

  window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`);
}