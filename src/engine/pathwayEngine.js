import { PROBLEM_MODULES, NEED_MODULES } from '../data/pathways'

export function buildPathway(category, problem, need) {
  const list = [...(PROBLEM_MODULES[problem] || []), ...(NEED_MODULES[need] || [])]
  if (category !== 'low') list.push('help_01')
  return [...new Set(list)]
}
