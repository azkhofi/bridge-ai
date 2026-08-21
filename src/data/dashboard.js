export const GURU_TIPS = {
  low: ['Tetap sapa dan pantau seperti biasa.', 'Nggak perlu tindakan khusus dulu.'],
  mid: ['Ajak ngobrol santai di luar kelas — jangan langsung tanya "kamu kenapa".', 'Tawarkan buat cerita ke guru BK kalau nyaman.'],
  high: ['Jangan coba tangani sendirian — segera koordinasi ke BK/psikolog sekolah.', 'Tetap suportif, hindari menghakimi atau membandingkan dengan siswa lain.'],
}

export function seedCases() {
  return [
    {
      id: 'd1', name: 'Raka Ardiansyah', path: 'CKG', urgency: 'high', status: 'Menunggu ditinjau', isNew: false,
      domainScores: { stress: 3, anxiety: 4, mood: 3, sleep: 3, social: 3 },
      why: ['Skor kecemasan pada kuesioner tinggi', 'Pola menarik diri dari lingkar pertemanan', 'Riwayat absensi meningkat'],
    },
    {
      id: 'd2', name: 'Zahra Amelia (Screening mandiri)', path: 'Screening mandiri', urgency: 'mid', status: 'Menunggu ditinjau', isNew: false,
      domainScores: { stress: 3, anxiety: 2, mood: 1, sleep: 3, social: 1 },
      why: ['Pola tidur cukup terganggu', 'Kecemasan meningkat saat scroll media sosial'],
    },
    {
      id: 'd3', name: 'Bimo Satria Nugraha', path: 'CKG', urgency: 'low', status: 'Sudah divalidasi', isNew: false,
      domainScores: { stress: 1, anxiety: 1, mood: 0, sleep: 1, social: 1 },
      why: ['Jawaban skrining sejalan dengan rentang sehat'],
    },
  ]
}
