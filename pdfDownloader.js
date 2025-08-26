(async function () {
    // Tableau Extensions API başlat
    await tableau.extensions.initializeAsync();

    // Tüm worksheet isimlerini al
    const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
    const container = document.getElementById("workbookList");

    // Checkbox listesi oluştur
    worksheets.forEach(ws => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" value="${ws.name}"> ${ws.name}`;
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });

    // PDF indirme butonu
    document.getElementById("downloadBtn").addEventListener("click", async () => {
        const selected = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
                             .map(cb => cb.value);

        if (selected.length === 0) {
            alert("Lütfen en az bir sayfa seçin!");
            return;
        }

        const workbook = tableau.extensions.dashboardContent.workbook;
        const pdfSettings = {
            sheets: selected,       // Seçilen sayfalar
            includeFilterTabs: false,
            orientation: tableau.PdfOrientation.Portrait,
            pageSize: tableau.PdfPageSize.A4
        };

        try {
            const pdfBlob = await workbook.exportPdfAsync(pdfSettings);
            const link = document.createElement("a");
            link.href = URL.createObjectURL(pdfBlob);
            link.download = "dashboard.pdf";
            link.click();
        } catch (err) {
            console.error(err);
            alert("PDF indirme sırasında bir hata oluştu.");
        }
    });
})();
