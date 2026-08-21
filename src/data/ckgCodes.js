export const CKG_CODES = {
  'MH-S1': { category: 'low', domainScores: { stress: 1, anxiety: 1, mood: 0, sleep: 1, social: 1 } },
  'MH-S2': { category: 'mid', domainScores: { stress: 3, anxiety: 2, mood: 2, sleep: 2, social: 2 } },
  'MH-S3': { category: 'high', domainScores: { stress: 4, anxiety: 4, mood: 3, sleep: 3, social: 3 } },
}

export const RESULT_EXPLAIN = {
  low: 'Secara umum, sinyal-sinyal yang kamu jawab masih dalam rentang yang wajar dan sehat. Bukan berarti nggak ada beban sama sekali — hanya saja tanda-tandanya masih ringan dan bisa dikelola lewat kebiasaan baik sehari-hari.',
  mid: 'Ada beberapa sinyal yang mulai terlihat dan layak buat kamu perhatikan, tapi belum darurat. Ini momen yang pas untuk belajar memahami diri dan mencoba langkah-langkah kecil, sebelum semuanya terasa makin berat.',
  high: 'Sinyalnya cukup kuat untuk menyarankan kamu segera mendapat dukungan dari orang yang tepat, seperti psikolog atau konselor. Ini bukan diagnosis — dan kamu nggak perlu menghadapinya sendirian.',
}
