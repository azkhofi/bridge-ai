export const MODULES = {
  stress_01: {
    tag: 'Stres', ico: '🌊', color: '#40ae87', title: 'Kenali Stres Kamu',
    explain: "Stres itu respons alami tubuh pas lagi banyak tuntutan. Dalam kadar pas, stres justru bikin kita fokus. Masalahnya kalau terus-menerus, tubuh nggak sempat 'mengisi ulang' — itu yang bikin capek, gampang emosi, atau susah fokus.",
    activity: { title: 'Cek sinyal stres', time: '5 menit', steps: ['Tarik napas pelan, biar badan rileks dulu.', 'Tulis 3 hal yang paling bikin tegang minggu ini.', 'Tandai mana yang bisa kamu kontrol, mana yang enggak.'] },
    tip: "Nggak semua stres harus 'dilawan' — kadang cukup disadari dulu polanya.",
  },
  stress_02: {
    tag: 'Stres', ico: '🧘', color: '#40ae87', title: 'Cara Sehat Menghadapi Stres',
    explain: 'Coping yang sehat itu bukan menunda atau kabur dari masalah, tapi menenangkan tubuh dulu, baru mikir langkahnya. Tubuh yang tenang bikin otak bisa mikir jernih.',
    activity: { title: 'Napas 4-7-8', time: '2 menit', steps: ['Tarik napas lewat hidung selama 4 detik.', 'Tahan napas selama 7 detik.', 'Hembuskan pelan lewat mulut selama 8 detik.', 'Ulangi 4 kali.'] },
    tip: 'Lakukan pas lagi panik atau sebelum tidur.',
  },
  academic_01: {
    tag: 'Akademik', ico: '🗂️', color: '#3899fe', title: 'Atur Tugas Biar Nggak Keteteran',
    explain: "Rasa kewalahan soal tugas seringnya bukan karena kamu nggak mampu, tapi karena semuanya kerasa numpuk jadi satu. Memecah tugas jadi bagian kecil bikin semuanya lebih gampang dimulai.",
    activity: { title: 'To-do 3 teratas', time: '5 menit', steps: ['Tulis semua tugas yang kepikiran.', 'Pilih 3 yang paling penting / deadline paling dekat.', 'Pecah masing-masing jadi langkah 20–30 menit.', 'Kerjakan satu langkah saja dulu.'] },
    tip: 'Mulai dari yang paling kecil — momentum itu penting.',
  },
  anxiety_01: {
    tag: 'Kecemasan', ico: '💭', color: '#3899fe', title: 'Kenali Kecemasanmu',
    explain: "Cemas itu alarm tubuh yang nyala pas merasa terancam. Kadang alarmnya nyala padahal nggak ada bahaya beneran. Mengenali pemicunya bantu kamu bedain mana yang perlu direspons, mana yang cuma pikiran muter-muter.",
    activity: { title: 'Bedah kekhawatiran', time: '5 menit', steps: ['Tulis satu hal yang bikin khawatir.', 'Tanya: "apa yang sebenarnya aku takutkan?"', 'Tulis bukti nyata vs asumsi.', 'Tentukan satu langkah kecil yang bisa dilakukan.'] },
    tip: "Cemas paling kuat pas dibiarkan 'muter' sendiri — nulis itu menghentikan putarannya.",
  },
  anxiety_02: {
    tag: 'Kecemasan', ico: '🌬️', color: '#3899fe', title: 'Grounding & Napas',
    explain: "Grounding itu cara 'mengembalikan' dirimu ke saat ini pas pikiran ke mana-mana. Dengan fokus ke indra, otak berhenti panik karena sadar kamu aman di sini dan sekarang.",
    activity: { title: 'Grounding 5-4-3-2-1', time: '3 menit', steps: ['Sebut 5 hal yang bisa kamu lihat.', '4 hal yang bisa disentuh.', '3 hal yang bisa didengar.', '2 hal yang bisa dicium.', '1 hal yang bisa dikecap.'] },
    tip: 'Pakai saat jantung mulai deg-degan atau pikiran nggak berhenti.',
  },
  sleep_01: {
    tag: 'Tidur', ico: '🌙', color: '#f5a623', title: 'Tidur yang Bikin Pulih',
    explain: "Tidur itu waktu otak 'ngebersihin' dan memproses emosi. Kalau tidur kacau, kecemasan dan mood jadi gampang turun. Menjaga sleep hygiene itu kayak merawat mesin biar tetap lancar.",
    activity: { title: 'Rutinitas sebelum tidur', time: 'malam', steps: ['Tentukan jam tidur yang sama tiap malam.', '30–60 menit sebelumnya, jauhkan HP.', 'Lakukan hal tenang: baca, stretching, dengerin musik lembut.', 'Jaga kamar redup dan sejuk.'] },
    tip: 'Layar HP sebelum tidur itu musuh utama kualitas tidur.',
  },
  mood_01: {
    tag: 'Mood', ico: '🌦️', color: '#7a5af8', title: 'Kenali Mood & Perasaanmu',
    explain: 'Mood yang naik-turun itu wajar. Tapi kalau rasa sedih, kosong, atau males berlarut-larut dan mengganggu kegiatan, itu sinyal yang perlu diperhatikan — bukan tanda kamu lemah.',
    activity: { title: 'Cek mood minggu ini', time: '5 menit', steps: ['Gambar garis mood-mu 7 hari terakhir (naik-turun).', 'Tandai hari yang paling berat.', 'Tanya: "ada kejadian apa waktu itu?"', 'Catat pola yang muncul.'] },
    tip: 'Menyadari pola adalah langkah pertama yang sering dilewatin.',
  },
  mood_02: {
    tag: 'Mood', ico: '✨', color: '#7a5af8', title: 'Hal Kecil yang Menyenangkan',
    explain: "Saat mood turun, kita cenderung berhenti melakukan hal yang dulu kita suka — padahal justru itu yang bikin makin tenggelam. Satu aktivitas kecil, walau cuma 5 menit, bisa 'menyalakan' lagi sedikit energi.",
    activity: { title: 'Aktivasi 5 menit', time: '5 menit', steps: ['Pilih satu hal kecil yang biasanya kamu suka (musik, jalan, gambar).', 'Jadwalkan 5 menit hari ini.', 'Lakukan tanpa nunggu "mood lagi bagus".', 'Catat rasanya sesudahnya.'] },
    tip: 'Motivasi muncul setelah mulai, bukan sebelum mulai.',
  },
  social_01: {
    tag: 'Sosial', ico: '🤝', color: '#f1487c', title: 'Koneksi Itu Penting',
    explain: 'Manusia memang butuh merasa terhubung. Saat lagi berat, insting kita kadang malah menjauh dari orang lain. Padahal ngobrol — bahkan yang ringan — bisa sangat menolong.',
    activity: { title: 'Jangkau 1 orang', time: '5 menit', steps: ['Pilih satu orang yang kamu percaya.', 'Kirim pesan singkat atau ajak ngobrol.', 'Mulai dari topik ringan dulu.', 'Nggak harus langsung curhat yang berat.'] },
    tip: 'Minta didengarkan itu bukan tanda lemah.',
  },
  social_02: {
    tag: 'Sosial', ico: '💬', color: '#f1487c', title: 'Sampaikan yang Kamu Rasakan',
    explain: 'Seringkali konflik atau rasa jauh itu muncul karena kita nggak bisa menyampaikan apa yang kita mau dengan jelas. Komunikasi asertif = jujur tanpa nyakitin diri sendiri maupun orang lain.',
    activity: { title: 'Kalimat "Aku"', time: '5 menit', steps: ['Pilih satu hal yang ingin kamu sampaikan.', 'Susun: "Aku merasa … ketika … aku butuh …"', 'Latih pelan-pelan.', 'Sampaikan dengan tenang.'] },
    tip: "Mulai dari 'Aku merasa', bukan 'Kamu selalu', biar nggak jadi serangan.",
  },
  emotion_01: {
    tag: 'Emosi', ico: '🎨', color: '#40ae87', title: 'Kenali & Kelola Emosi',
    explain: 'Emosi itu informasi, bukan musuh. Semua emosi — termasuk sedih dan marah — itu valid. Kuncinya bukan menahan, tapi memberi nama dan tempat yang tepat, supaya nggak meledak atau malah ketahan.',
    activity: { title: 'Beri nama emosimu', time: '2 menit', steps: ['Berhenti sebentar.', 'Tanya: "aku lagi ngerasa apa?"', 'Beri nama spesifik (bukan cuma "bad mood").', 'Terima tanpa menghakimi, tulis kalau perlu.'] },
    tip: 'Emosi yang diberi nama biasanya kehilangan separuh kekuatannya.',
  },
  help_01: {
    tag: 'Bantuan', ico: '🆘', color: '#3899fe', title: 'Kapan Harus Minta Bantuan',
    explain: 'Minta bantuan itu bukan berarti kamu gagal. Justru itu langkah paling dewasa dan paling berani. Ada tanda-tanda yang menunjukkan waktunya kamu nggak nangani sendirian.',
    activity: { title: 'Siapkan langkahmu', time: '5 menit', steps: ['Kenali tanda: keluhan menetap lebih dari 2 minggu.', 'Mengganggu tidur, nafsu makan, atau belajar.', 'Muncul pikiran menyakiti diri.', 'Siapkan siapa yang mau dihubungi & simpan nomornya.'] },
    tip: 'Lebih cepat minta bantuan = lebih cepat pulih.',
  },
}
