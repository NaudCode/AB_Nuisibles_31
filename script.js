document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadVCard').addEventListener('click', function() {
        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:AB Nuisibles 31
TEL;TYPE=WORK,VOICE:0651661300
EMAIL:contact@abnuisibles31.fr
END:VCARD
        `;
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contact.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});