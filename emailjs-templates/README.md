# EmailJS Template Kurulum Talimatları

Bu klasörde EmailJS dashboard'ınızda kullanmanız gereken email template'leri bulunmaktadır.

## Dosyalar

1. **contact-form-template.html** - Contact formu için template (template_04ubgfy)
2. **quote-request-template.html** - Quote request formu için template (template_cexyhmi)

## Kurulum Adımları

### 1. EmailJS Dashboard'a Git
https://dashboard.emailjs.com/admin/templates

### 2. Contact Form Template'i Güncelle

1. Sol menüden **template_04ubgfy** seç
2. `contact-form-template.html` dosyasını aç
3. İçeriğin tamamını kopyala
4. EmailJS template düzenleyicisine yapıştır
5. **Save** butonuna bas

### 3. Quote Request Template'i Güncelle

1. Sol menüden **template_cexyhmi** seç
2. `quote-request-template.html` dosyasını aç
3. İçeriğin tamamını kopyala
4. EmailJS template düzenleyicisine yapıştır
5. **Save** butonuna bas

## Template Değişkenleri

### Contact Form (template_04ubgfy)
- `{{from_name}}` - Müşteri adı
- `{{from_email}}` - Müşteri email'i
- `{{phone}}` - Telefon numarası
- `{{service}}` - İlgilenilen servis
- `{{message}}` - Mesaj içeriği
- `{{current_date}}` - Gönderim tarihi

### Quote Request (template_cexyhmi)
- `{{from_name}}` - Müşteri adı
- `{{from_email}}` - Müşteri email'i
- `{{phone}}` - Telefon numarası
- `{{address}}` - Proje adresi
- `{{service}}` - İstenen servis
- `{{message}}` - Proje detayları
- `{{current_date}}` - Gönderim tarihi

## Test

Kurulumdan sonra:
1. Web sitenizde her iki formu da doldurun
2. Email kutunuzu kontrol edin
3. Email'lerin güzel formatlanmış şekilde geldiğinden emin olun

## Sorun Giderme

Eğer email gelmiyorsa:
1. EmailJS Service ID'nin doğru olduğundan emin olun
2. Template ID'lerinin doğru olduğundan emin olun
3. EmailJS dashboard'da "Auto-Reply" ayarlarını kontrol edin
4. Browser console'da hata mesajlarını kontrol edin
