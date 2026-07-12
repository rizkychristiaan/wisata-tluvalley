// ===== LANGUAGE SWITCHER (i18n) =====

const translations = {
  id: {
    // Navbar
    nav_about: 'Tentang',
    nav_journey: 'Perjalanan',
    nav_gallery: 'Galeri',
    nav_info: 'Informasi',
    nav_map: 'Lihat Peta',

    // Hero
    hero_sub: 'Surga tersembunyi di Dusun Barong Kulon — kolam tosca alami, hutan bambu lebat, sawah hijau membentang, dan kesegaran alam yang tiada duanya.',
    hero_cta_explore: 'Jelajahi Sekarang',
    hero_cta_map: '📍 Lihat Lokasi',

    // About / Tentang
    about_tag: 'Tentang Destinasi',
    about_title: 'Keajaiban Alam <em>Barong Kulon</em>',
    about_sub: 'Lebih dari sekadar air terjun — sebuah perjalanan menuju ketenangan alam yang sesungguhnya.',
    about_h3: 'Asal-usul Nama',
    about_p1: 'Nama "Tluvalley" (Telu Vali) dicetuskan oleh salah satu warga lokal yang proaktif dalam mempromosikan potensi wisata yang belum diketahui banyak orang.',
    about_p2: 'Nama ini merupakan gabungan dari kata "Telu" (bahasa Jawa yang berarti tiga) dan "Vali" (dari kata valley yang berarti lembah), sehingga maknanya secara harfiah adalah tiga lembah.',
    about_facilities_title: 'Area & Fasilitas Wisata',
    facility1_title: 'Fasilitas Umum',
    facility1_desc: 'Pengunjung dapat menikmati fasilitas tempat duduk, toilet, dan pelampung secara gratis (bukan untuk disewakan).',
    facility2_title: 'Spot Rekreasi',
    facility2_desc: 'Terdapat area berenang serta area memancing (meskipun area memancing saat ini masih dalam tahap evaluasi fungsionalitasnya).',
    facility3_title: 'Eksplorasi Goa',
    facility3_desc: 'Terdapat sebuah goa yang bisa dikunjungi. Karena belum memiliki instalasi listrik, pengunjung harus membawa penerangan sendiri dan pengelola perlu memberikan peringatan awal mengenai satwa liar.',
    facility4_title: 'Area Perahu',
    facility4_desc: 'Terdapat rencana rute perahu dalam peta wisata. Saat ini, area perahu tidak dapat diakses karena debit air sedang surut akibat musim kemarau.',

    // Journey / Perjalanan
    journey_tag: 'Keindahan Sepanjang Jalan',
    journey_title: 'Nikmati Setiap <em>Langkah Perjalanan</em>',
    journey_sub: 'Perjalanan menuju air terjun adalah pengalaman tersendiri yang tak kalah indahnya',
    journey_step1_badge: '🌾 Sawah Hijau',
    journey_step1_title: 'Hamparan Sawah yang Menghijau',
    journey_step1_desc: 'Perjalanan dimulai dengan melewati petak-petak sawah yang menghijau subur. Aroma tanah basah dan pemandangan padi yang bergoyang lembut menyambut setiap pengunjung.',
    journey_step1_tag1: '🏞️ Pemandangan Pedesaan',
    journey_step1_tag2: '📸 Spot Foto',
    journey_step2_badge: '🏞️ Sungai & Kali',
    journey_step2_title: 'Sungai Berbatu yang Jernih',
    journey_step2_desc: 'Di tengah perjalanan, Anda akan menemui sungai berbatu dengan air jernih mengalir. Suara gemericik air dan kesejukan alam menjadi teman setia perjalanan Anda.',
    journey_step2_tag1: '💧 Air Jernih',
    journey_step2_tag2: '🪨 Bebatuan Alami',
    journey_step3_badge: '🎣 Spot Mancing',
    journey_step3_title: 'Area Spot Mancing',
    journey_step3_desc: 'Bagi pengunjung yang gemar memancing, aliran sungai yang tenang di sekitar kawasan ini menyediakan spot memancing alami yang damai dengan suasana hutan yang rindang.',
    journey_step3_tag1: '🎣 Hobi & Santai',
    journey_step3_tag2: '🍃 Suasana Damai',
    journey_step4_badge: '🛶 Naik Perahu',
    journey_step4_title: 'Spot Naik Perahu Sungai',
    journey_step4_desc: 'Nikmati sensasi menyusuri aliran sungai yang tenang dengan perahu tradisional. Rasakan kedekatan dengan alam sekitar yang masih asri.',
    journey_step4_tag1: '🛶 Petualangan',
    journey_step4_tag2: '🌊 Susur Sungai',
    journey_step5_badge: '🪨 Goa Kecil',
    journey_step5_title: 'Goa Kecil Eksotis',
    journey_step5_desc: 'Sebuah lorong goa batu kecil yang terbentuk secara alami. Menambah petualangan seru yang memacu rasa ingin tahu sepanjang trekking Anda.',
    journey_step5_tag1: '🪨 Goa Alami',
    journey_step5_tag2: '🔍 Penjelajahan',
    journey_step6_badge: '💦 Air Terjun!',
    journey_step6_title: 'Surga: Air Terjun Tluvalley',
    journey_step6_desc: 'Dan akhirnya — kolam tosca yang memukau! Air terjun setinggi belasan meter mengalir deras ke kolam alami berwarna hijau kebiruan. Momen yang tak akan terlupakan.',
    journey_step6_tag1: '💚 Kolam Tosca',
    journey_step6_tag2: '✨ Momen Terbaik',

    // Gallery
    gallery_tag: 'Galeri',
    gallery_title: 'Keindahan yang <em>Menakjubkan</em>',
    gallery_sub: 'Setiap sudut menyimpan keindahan yang menunggu untuk ditemukan',

    // Info
    info_tag: 'Informasi Wisata',
    info_title: 'Sebelum Kamu <em>Berkunjung</em>',
    info_sub: 'Semua yang perlu kamu ketahui untuk perjalanan yang sempurna',

    // Map / Lokasi
    map_tag: 'Lokasi',
    map_title: 'Temukan Kami di <em>Peta</em>',
    map_sub: 'Dusun Kerok Kulon, menanti kedatanganmu',

    // Footer
    footer_nav_title: 'Navigasi',
    footer_map: 'Lokasi & Peta',
    footer_info_title: 'Informasi Singkat',
    footer_open: '🕗 Buka: 08.00 – 17.00 WIB',
    footer_ticket: '🎟️ Tiket: Rp 5rb / Rp 25rb',
    footer_trek: '🚶 Trek: ±20 menit jalan kaki',
    footer_desc: 'Wisata alam tersembunyi yang menyimpan keindahan sesungguhnya — Dusun Kerok Kulon, Pacitan, Jawa Timur.',
    footer_kkn: '🎓 Dikembangkan oleh Tim KKN 2026 Natan & Rizky',
    lightbox_no_photo_title: 'Foto Belum Diunggah',
    lightbox_no_photo_desc: 'Silakan letakkan file gambar di direktori proyek dengan nama file yang sesuai agar dapat ditampilkan.',
  },

  en: {
    // Navbar
    nav_about: 'About',
    nav_journey: 'Journey',
    nav_gallery: 'Gallery',
    nav_info: 'Information',
    nav_map: 'View Map',

    // Hero
    hero_sub: 'A hidden paradise in Barong Kulon Hamlet — natural turquoise pools, dense bamboo forests, vast green rice fields, and unparalleled natural freshness.',
    hero_cta_explore: 'Explore Now',
    hero_cta_map: '📍 View Location',

    // About
    about_tag: 'About the Destination',
    about_title: 'The Natural Wonder of <em>Barong Kulon</em>',
    about_sub: 'More than just a waterfall — a journey toward true natural serenity.',
    about_h3: 'Origin of the Name',
    about_p1: 'The name "Tluvalley" (Telu Vali) was coined by a proactive local resident to promote the tourism potential of this hidden gem.',
    about_p2: 'This name is a combination of the word "Telu" (Javanese for three) and "Vali" (from the word valley), literally meaning "three valleys".',
    about_facilities_title: 'Areas & Tourism Facilities',
    facility1_title: 'Public Facilities',
    facility1_desc: 'Visitors can enjoy free facilities such as benches, restrooms, and life jackets (not for rent).',
    facility2_title: 'Recreation Spots',
    facility2_desc: 'Includes swimming areas and fishing spots (fishing is currently undergoing functionality evaluation).',
    facility3_title: 'Cave Exploration',
    facility3_desc: 'Natural cave with no electricity; visitors must bring their own flashlights and be cautious of potential wild animals.',
    facility4_title: 'Boat Area',
    facility4_desc: 'Boat route planned for the tourist map. Currently inaccessible due to low water levels during the dry season.',

    // Journey
    journey_tag: 'Beauty Along the Way',
    journey_title: 'Enjoy Every <em>Step of the Journey</em>',
    journey_sub: 'The path to the waterfall is an experience in itself, equally breathtaking',
    journey_step1_badge: '🌾 Green Rice Field',
    journey_step1_title: 'Lush Green Rice Fields',
    journey_step1_desc: 'The journey begins by passing through lush green rice paddies. The scent of wet soil and the sight of gently swaying paddy fields welcome every visitor.',
    journey_step1_tag1: '🏞️ Countryside View',
    journey_step1_tag2: '📸 Photo Spot',
    journey_step2_badge: '🏞️ River & Stream',
    journey_step2_title: 'Crystal Clear Rocky River',
    journey_step2_desc: 'Midway through, you will encounter a rocky stream with crystal clear flowing water. The sound of trickling water and the freshness of nature are your loyal travel companions.',
    journey_step2_tag1: '💧 Clear Water',
    journey_step2_tag2: '🪨 Natural Rocks',
    journey_step3_badge: '🎣 Fishing Spot',
    journey_step3_title: 'Fishing Spot Area',
    journey_step3_desc: 'For visitors who enjoy fishing, the calm river flow in this area provides a peaceful, natural fishing spot surrounded by shady green trees.',
    journey_step3_tag1: '🎣 Hobby & Relax',
    journey_step3_tag2: '🍃 Serene Atmosphere',
    journey_step4_badge: '🛶 Boat Riding',
    journey_step4_title: 'River Boat Riding Spot',
    journey_step4_desc: 'Enjoy the sensation of cruising down the calm river on a traditional boat. Feel the closeness to the pristine surrounding nature.',
    journey_step4_tag1: '🛶 Adventure',
    journey_step4_tag2: '🌊 River Cruise',
    journey_step5_badge: '🪨 Small Cave',
    journey_step5_title: 'Exotic Small Cave',
    journey_step5_desc: 'A naturally formed small stone cave passage. Adds an exciting touch of adventure that sparks curiosity along your trek.',
    journey_step5_tag1: '🪨 Natural Cave',
    journey_step5_tag2: '🔍 Exploration',
    journey_step6_badge: '💦 Waterfall!',
    journey_step6_title: 'Paradise: Tluvalley Waterfall',
    journey_step6_desc: 'And finally — the stunning turquoise pool! A waterfall cascading down from over a dozen meters into a natural teal-blue pool. A truly unforgettable moment.',
    journey_step6_tag1: '💚 Turquoise Pool',
    journey_step6_tag2: '✨ Best Moment',

    // Gallery
    gallery_tag: 'Gallery',
    gallery_title: 'A <em>Breathtaking</em> Beauty',
    gallery_sub: 'Every corner holds a beauty waiting to be discovered',

    // Info
    info_tag: 'Tourist Information',
    info_title: 'Before You <em>Visit</em>',
    info_sub: 'Everything you need to know for the perfect trip',

    // Map / Location
    map_tag: 'Location',
    map_title: 'Find Us on the <em>Map</em>',
    map_sub: 'Kerok Kulon Hamlet, awaiting your arrival',

    // Footer
    footer_nav_title: 'Navigation',
    footer_map: 'Location & Map',
    footer_info_title: 'Quick Info',
    footer_open: '🕗 Open: 08:00 – 17:00 WIB',
    footer_ticket: '🎟️ Ticket: Rp 5k / Rp 25k',
    footer_trek: '🚶 Trek: ±20 min walk',
    footer_desc: 'A hidden natural paradise that holds the true beauty — Kerok Kulon Hamlet, Pacitan, East Java.',
    footer_kkn: '🎓 Developed by KKN Team 2026 Natan & Rizky',
    lightbox_no_photo_title: 'Photo Not Uploaded',
    lightbox_no_photo_desc: 'Please place the image file in the project directory with the corresponding filename to display it.',
  }
};

let currentLang = 'id';

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active button state
  document.getElementById('btnID').classList.toggle('active', lang === 'id');
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');

  // Update html lang attribute
  document.documentElement.lang = lang;
}
