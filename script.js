function kirimWA(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let wa = document.getElementById("wa").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    let text = `*KONSULTASI NOTARIS*
------------------------
Nama: ${nama}
No WA: ${wa}
Email: ${email}
Pesan:
${pesan}`;

    let nomorTujuan = "6285864765882";

    let url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
}