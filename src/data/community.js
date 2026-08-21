export function seedPosts() {
  return [
    {
      id: 'p1',
      author: 'Anonim · Kelas 11',
      mood: 2,
      time: '2 jam lalu',
      title: 'Capek sama ujian terus-menerus',
      body: 'Akhir-akhir ini rasanya tiap minggu ada ulangan. Aku udah belajar tapi tetep cemas banget. Ada yang ngerasain sama nggak?',
      likes: 12,
      replies: [
        { author: 'Anonim · Kelas 12', body: 'Aku juga gitu. Aku mulai pakai teknik napas 4-7-8 sebelum ulangan, ngebantu banget.' },
        { author: 'Anonim · Kelas 10', body: 'Kamu nggak sendirian. Coba pecah belajar jadi 20 menit, jangan belajar maraton.' },
      ],
    },
    {
      id: 'p2',
      author: 'Anonim · Kelas 9',
      mood: 3,
      time: '5 jam lalu',
      title: 'Ternyata journaling bikin lega',
      body: 'Aku baru coba tulis 3 hal yang disyukuri tiap malam. Minggu pertama kerasa aneh, tapi sekarang mood-ku lebih stabil. Rekomendasi banget.',
      likes: 8,
      replies: [],
    },
  ]
}

export const COMMUNITY_RULES = [
  'Hargai privasi — jangan sebut nama atau identitas asli siapa pun.',
  'Boleh berbagi, tapi jangan memberikan diagnosis atau saran medis.',
  'Kalau kamu melihat teman dalam bahaya, arahkan ke halaman bantuan darurat.',
]
