import { DOMAINS } from '../data/domains'
import { RESULT_EXPLAIN } from '../data/ckgCodes'

const BASE_SCORES = { stress: 0, anxiety: 0, mood: 0, sleep: 0, social: 0 }

export function scoreQuiz(quiz, answers) {
  const total = answers.reduce((a, b) => a + b, 0)
  const max = quiz.questions.length * 3

  // kategori relatif terhadap skor maksimal
  const ratio = total / max
  let category = 'low'
  if (ratio >= 0.6) category = 'high'
  else if (ratio >= 0.3) category = 'mid'

  const primary = quiz.domain
  const primaryScore = Math.max(1, Math.round((total / max) * 4))

  const domainScores = { ...BASE_SCORES, [primary]: primaryScore }

  const topDomains = [DOMAINS[primary].short]

  const explain =
    RESULT_EXPLAIN[category] +
    ' Area yang paling menonjol dari jawabanmu: ' + DOMAINS[primary].short + '.'

  return {
    code: 'SELF-' + quiz.id.toUpperCase(),
    quizTitle: quiz.title,
    category,
    domainScores,
    explain,
    topDomains,
  }
}
