# Hostinger Deployment Talimatları

Formların çalışması için aşağıdaki adımları takip edin:

## 1. Son Değişiklikleri Alın

```bash
git pull origin main
```

## 2. Production Build Yapın

```bash
npm install
npm run build
```

Bu komut `dist` klasörünü oluşturacak.

## 3. Hostinger'e Yükleyin

### Yöntem A: File Manager ile (Manuel)
1. Hostinger kontrol paneline giriş yapın
2. File Manager'ı açın
3. `public_html` klasörüne gidin
4. Tüm mevcut dosyaları silin (önemli: backup alın!)
5. `dist` klasöründeki **içeriği** (dist klasörünün kendisini değil!) `public_html`'e yükleyin

### Yöntem B: Git Deployment (Otomatik)
1. Hostinger kontrol paneline giriş yapın
2. Git Deployment bölümüne gidin
3. "Pull" veya "Deploy" butonuna tıklayın
4. Build komutunu kontrol edin: `npm run build`
5. Deploy target'ı kontrol edin: `dist` klasörünün içeriği `public_html`'e gitmeliş

## 4. Cache Temizleme

### Browser Cache
- Chrome/Edge: `Ctrl + Shift + Delete` > Cache'i temizle
- Veya: `Ctrl + Shift + R` (hard refresh)

### Hostinger Cache
1. Hostinger kontrol paneline gidin
2. Website > Cache yönetimi
3. "Clear Cache" veya "Purge Cache" butonuna tıklayın

## 5. Test Edin

1. Sitenize gidin (örn: kitchdesigns.com)
2. Formu doldurun ve gönderin
3. Eğer hata alırsanız:
   - `F12` tuşuna basın (Developer Console)
   - Console sekmesine gidin
   - Hata mesajlarını görün
   - Ekran görüntüsü alıp bana gönderin

## Yapılan Değişiklikler

✅ Supabase bağlantı ayarları doğrudan koda eklendi (fallback values)
✅ EmailJS ayarları doğrudan koda eklendi (fallback values)
✅ Debug logları eklendi (hata durumunda console'da detaylı bilgi göreceksiniz)
✅ Build yapıldı ve hazır durumda

## Sorun Yaşıyorsanız

Formu test edin ve hata alırsanız:
1. F12 tuşuna basın
2. Console sekmesine gidin
3. Ekran görüntüsü alın
4. Bana gönderin

Ben veritabanını test ettim ve çalışıyor. Problem muhtemelen cache veya eski dosyalar yüzünden.
