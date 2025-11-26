# Mekanbul Backend

Mekanbul uygulaması için geliştirilmiş REST API servisidir. Bu proje; mekan listeleme, yorum ekleme ve yönetim işlemlerini sağlayan sunucu tarafı kodlarını içerir.

# Kullanılan Teknolojiler
- Node.js 
- Express.js
- MongoDB
- Mongoose

# Kurulum ve Çalıştırma

1. Projeyi klonlayın:
   git clone https://github.com/FatihSahin0707/mekanbul-backend.git

2. Bağımlılıkları yükleyin:
   npm install

3. Ana dizinde `.env` dosyası oluşturun ve aşağıdakileri ekleyin:
   MONGO_URI=your_connection_string
   PORT=3000

4. Uygulamayı başlatın:
   npm start

# API Uç Noktaları

- GET /api/mekanlar → Tüm mekanları listeler  
- POST /api/mekanlar → Yeni mekan ekler  
- GET /api/mekanlar/:id → ID’ye göre mekan getirir  
- PUT /api/mekanlar/:id → Mekan günceller  
- DELETE /api/mekanlar/:id → Mekan siler  

# Özellikler
- Mekan listeleme  
- Mekan detay görüntüleme  
- Mekan ekleme/güncelleme/silme  
- Yorum ekleme/silme  


