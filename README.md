# React Leaflet PERN Stack Project

Merhaba! Bu, hiçbir tutorial takip etmeden sıfırdan geliştirdiğim PERN Stack projesidir (PostgreSQL - Express.js - React - Node.js). Projeyi sizlerle paylaşmaktan mutluluk duyarım. 🎉 

## Kullanıcı İmkanları

- Leaflet ile oluşturulmuş haritada istenilen konuma enlem ve boylam değerleri girilerek marker (işaret) ekleyebilir. (isteğe bağlı açıklama ve aktif/pasif durumu belirtilebilir)
- Sol taraftaki tablodan eklenmiş/güncellenmiş verileri görüntüleyebilir, filtreleyebilir/arayabilir (enlem, boylam, açıklama veya active durumu) veya ilgili bölgelere zoom yapabilir.
- Yeni marker ekleyebilir, var olan marker'ı silebilir veya güncelleyebilir. (CRUD İşlemleri)

## Özellikler

- PostgreSQL veritabanı bağlantısıyla veriler üzerinde yapılan işlemleri anlık olarak görebilir, ekleme, silme ve güncelleme işlemleri gerçekleştirilebilir.
- Zarif, anlaşılır ve kullanıcı dostu arayüz.
- Postgres dökümü alınabilir (backup) ve veritabanını yeniden oluşturabilir olması (recreate).
- Var olan tüm marker'ları görüntüleyip, zoom in/zoom out yapabilme.
- Sol taraftaki tablodan tüm verilere erişip yapılan CRUD işlemlerini anlık olarak görüntüleme.

## Teknolojiler

### Backend 📌 
- **Node.js:** Hızlı ve etkili bir şekilde server-side (sunucu tarafı) kod yazmak için kullanıldı.
- **Express.js:** Kolayca yönlendirme, middleware ve HTTP istekleri işleme yeteneklerinden faydalanmak için kullanıldı.
- **Sequelize ORM:** Veritabanı etkileşimini kolaylaştırmak ve PostgreSQL gibi SQL tabanlı veritabanlarıyla etkileşim kurabilmek için kullanıldı.
- **PostgreSQL:** Veritabanı olarak kullanıldı.

### Frontend 📌 
- **React Leaflet:** Leaflet.js kütüphanesi kullanıldı.
- **Axios:** Veri alışverişi için kullanıldı. Sunucu ile veri alışverişi Axios ile sağlandı.
- **React Context API:** Farklı bileşenler arasında veri iletimi ve paylaşımını kolaylaştırmak için kullanıldı.
- **PrimeReact:** Kullanıcı arayüzüne özel ve stilize edilmiş öğeler entegre edilmiştir.
- **Hooklar**
- **React Router:** Sayfa yönlendirmesi ve yönetimi için kullanıldı.
- **Form Yapısı:** Formları etkili bir şekilde yönetmek için React Hook'ları ve kontrol bileşenleri kullanıldı. Kullanıcı girişi ve form iletileri bu yapı kullanılarak kolayca yönetilmektedir.

- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Hello! This is a PERN Stack project (PostgreSQL - Express.js - React - Node.js) that I developed from scratch without following any tutorials. I would like to share the project with you. 🎉 

## User Features

- Users can add markers (pins) to the map created with Leaflet by entering latitude and longitude values for any desired location (optional description can be added, and the user can specify whether it is active or inactive).
- View and filter/search added/updated data from the table on the left (by entering latitude, longitude, description, or the active status) or navigate to relevant regions (zooming to the desired region).
- Users can add new markers, delete existing ones, or update them. (CRUD Operations)

## Features

- Real-time visibility of all operations on data with PostgreSQL database connection; addition, deletion, and update operations can be performed.
- Elegant, understandable, and user-friendly interface.
- Ability to take a Postgres dump (backup) and recreate the database.
- Viewing all existing markers and zooming in/zooming out.
- Real-time access to all data from the table on the left and viewing CRUD operations.

## Technologies

### Backend 📌 
- **Node.js:** Used for writing server-side code efficiently and quickly.
- **Express.js:** Utilized for easy routing, middleware, and handling HTTP requests.
- **Sequelize ORM:** Used to facilitate database interaction and interact with SQL-based databases like PostgreSQL. Sequelize transforms database operations into JavaScript objects, allowing for more programmatic and understandable execution of database operations.
- **PostgreSQL:** PostgreSQL database is used in the project.

### Frontend 📌 
- **React Leaflet:** Utilized the Leaflet.js library.
- **Axios:** Used for data exchange. Data exchange with the server is handled through Axios.
- **React Context API:** Used for easy data transmission and sharing between different components.
- **PrimeReact:** Integrated custom-styled UI elements using PrimeReact components.
- **Hooks**
- **React Router:** Used for page navigation and management.
- **Form Structure:** React Hooks and control components are used to effectively manage forms. User input and form submissions are easily handled using this structure.

![image](https://github.com/esincaglakiral/ReactLeafletMapApp/assets/68962573/ffcfcdc7-987e-41c7-ba10-8d16e48325a0)
![image](https://github.com/esincaglakiral/ReactLeafletMapApp/assets/68962573/980c786c-ca8f-496d-91a2-1da806cf05ba)
![image](https://github.com/esincaglakiral/ReactLeafletMapApp/assets/68962573/f3ec53c6-44ec-43e3-bf0d-cc894c506afe)
![image](https://github.com/esincaglakiral/ReactLeafletMapApp/assets/68962573/2b354b13-42bb-4c67-9ddb-a8996634e0a3)


