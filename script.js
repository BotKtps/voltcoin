document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menyalin teks ke clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            alert('Nomor rekening berhasil disalin: ' + text);
        }, function(err) {
            console.error('Gagal menyalin teks: ', err);
            alert('Gagal menyalin nomor rekening. Silakan salin secara manual.');
        });
    }

    // Menangani klik tombol "SALIN NOMOR"
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                const accountNumber = this.getAttribute('data-account');
                if (accountNumber) {
                    copyToClipboard(accountNumber);
                }
            }
        });
    });

    // Menangani klik tombol "LIHAT QRIS" (jika menggunakan modal)
    const qrisButton = document.querySelector('.qris-button');
    const qrisModal = document.getElementById('qris-modal');
    const closeButton = document.querySelector('.close-button');

    if (qrisButton && qrisModal && closeButton) {
        qrisButton.addEventListener('click', function() {
            qrisModal.style.display = 'flex'; // Tampilkan modal
        });

        closeButton.addEventListener('click', function() {
            qrisModal.style.display = 'none'; // Sembunyikan modal
        });

        // Sembunyikan modal jika user mengklik di luar area modal
        window.addEventListener('click', function(event) {
            if (event.target == qrisModal) {
                qrisModal.style.display = 'none';
            }
        });
    }
});
