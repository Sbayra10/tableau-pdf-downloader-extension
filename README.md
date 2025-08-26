# Tableau PDF Downloader Extension

**TR (Türkçe) — Hızlı Özet**  
Bu Tableau eklentisi, dashboard içindeki **seçtiğin worksheet (sayfa)**'leri tek tıkla **tek bir PDF** olarak indirmeni sağlar.  
Kullanım, kurulum ve dağıtım adımları aşağıdadır.

**EN (English) — Quick Summary**  
This Tableau extension lets you export **selected worksheets** in your dashboard to a **single PDF** with one click.  
See installation and deployment steps below.

---

## 📁 Proje Yapısı
```
pdfDownloader.html     # Eklentinin UI/host sayfası
pdfDownloader.js       # İş mantığı (Extensions API çağrıları)
pdfDownloader.trex     # Manifest dosyası (Tableau'ya eklenti tanımı)
README.md              # Bu dosya
LICENSE                # MIT Lisansı
```

## ✅ Özellikler
- Dashboard'taki **tüm worksheet** adlarını otomatik listeler.
- **Çoklu seçim** yapıp **tek PDF** olarak dışa aktarır.
- A4 boyutu ve dikey (portrait) yönlendirme ile indirir.
- Filtre sekmelerini PDF'e dahil etmez (istenirse kodla açılabilir).

## 🔧 Gereksinimler
- Tableau Desktop/Server (Extensions desteği açık olmalıdır).
- HTTPS üzerinden barındırma (GitHub Pages önerilir) **veya** yerel `.trex` dosyasını “My Extensions” ile yükleme.

## 🚀 Kurulum & Kullanım (Yerel .trex ile — en hızlı başlangıç)
1. Tableau Dashboard’ında **Objects** panelinden **Extension** nesnesini sürükleyip bırak.
2. Açılan pencerede **"My Extensions"** seç → `pdfDownloader.trex` dosyasını seç.
3. Gerekli izinleri onayla.
4. Eklentide listelenen worksheet’leri işaretle → **"Seçilenleri PDF İndir"** butonuna bas.

> Not: Yerel kullanımda `.html` ve `.js` dosyaları `.trex` içindeki URL ile **uyumlu** olmalı. Eğer `.trex` içinde bir URL tanımlıysa ve bu URL’e erişilemiyorsa, **Network-hosted** (GitHub Pages) kullanımına geçin.

## 🌐 GitHub ile Paylaşım ve Barındırma (Önerilen)
Aşağıdaki adımlarla projeyi herkese açık paylaşabilir ve `.trex` dosyasını **URL üzerinden** kullanabilirsiniz.

### 1) GitHub reposu oluştur
- GitHub’da **yeni public repo** aç: `tableau-pdf-downloader-extension`
- Bu dosyaları ve `pdfDownloader.*` ile `.trex`’i yükleyin.

### 2) GitHub Pages’i aç
- **Settings → Pages**  
  - **Build and deployment**: *Deploy from branch*  
  - **Branch**: `main` — **Folder**: `/ (root)` → **Save**
- Birkaç dakika sonra siteniz şu şekilde olur:  
  `https://USERNAME.github.io/tableau-pdf-downloader-extension/pdfDownloader.html`

### 3) `.trex` manifest’ini güncelle
- `pdfDownloader.trex` içinde **<url>...</url>** veya **sourceUrl** benzeri alanda, yukarıdaki **GitHub Pages URL**’ini kullanın.
- Değişikliği commit’leyin.

### 4) Tableau’da URL ile yükle
- Dashboard’a **Extension** eklerken **URL’den** yükleme seçeneğini kullanın ve `.trex` dosyasının **Raw** URL’sini yapıştırın:  
  Örn: `https://raw.githubusercontent.com/USERNAME/tableau-pdf-downloader-extension/main/pdfDownloader.trex`

> **Önemli:** GitHub Pages için allowlist gerekebilir. Tableau Server/Online’da **Settings → Extensions** bölümünden `github.io` domain’ini **Allowlist**’e ekleyin.

## 🛡️ Güvenlik Notları
- Eklenti yalnızca Tableau Extensions API kullanır, tarayıcı içinde çalışır.
- PDF dışa aktarma için `workbook.exportPdfAsync(...)` çağrısını kullanır.
- HTTPS barındırma güvenlik için zorunludur (GitHub Pages zaten HTTPS sağlar).
- Kurumsal ortamlarda domain allowlist (white-list) eklenmesi gerekir.

## 🧩 Kodda Parametreler
`pdfDownloader.js` içinde örnek PDF ayarları:
```js
const pdfSettings = {
  sheets: selected,                  // Seçilen worksheet adları
  includeFilterTabs: false,          // Filtre sekmeleri PDF'e dahil edilmesin
  orientation: tableau.PdfOrientation.Portrait,
  pageSize: tableau.PdfPageSize.A4
};
```
İhtiyaca göre `Landscape`, `Letter` vb. değerlerle düzenleyebilirsiniz.

## 🧪 Sorun Giderme
- **Extensions devre dışı**: Tableau Desktop’ta *Help → Settings and Performance → Manage External Extensions* kısmından izin verin.
- **Mixed content/HTTPS hatası**: `.html/.js` ve `.trex` mutlaka **HTTPS** üzerinden servis edilmeli.
- **PDF indirme başarısız**: Dashboard’ı yeniden açın, sayfaları yeniden seçin; bazı kurumsal proxy’ler dosya indirmeyi engelleyebilir.

## 📣 Paylaşım
- GitHub repo linkinizi Tableau Topluluğu, LinkedIn, ya da şirket içi SharePoint/Confluence üzerinden paylaşabilirsiniz.
- Dilerseniz Tableau Extension Gallery’ye başvuru yaparak daha geniş kitleye açabilirsiniz.

---

## 📜 Lisans
MIT Lisansı (aşağıya bakınız).

**(c) 2025-08-26 Sezer Bayrak**
