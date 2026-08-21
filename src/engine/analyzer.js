import { CKG_CODES, RESULT_EXPLAIN } from '../data/ckgCodes'
import { DOMAINS } from '../data/domains'

export function analyze(code) {
  const meta = CKG_CODES[code]
  if (!meta) return null

  const topDomains = Object.keys(meta.domainScores)
    .sort((a, b) => meta.domainScores[b] - meta.domainScores[a])
    .slice(0, 2)
    .filter((k) => meta.domainScores[k] >= 2)
    .map((k) => DOMAINS[k].short)

  const explain =
    RESULT_EXPLAIN[meta.category] +
    (topDomains.length
      ? ' Area yang paling menonjol dari jawabanmu: ' + topDomains.join(' dan ') + '.'
      : '')

  return {
    code,
    category: meta.category,
    domainScores: { ...meta.domainScores },
    explain,
    topDomains,
  }
}
