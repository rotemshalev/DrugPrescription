import { ERRORS_URL } from '../../../config/consts'

export const parseErrorsResponse = res => {
  const warnings = res[0].fullInteractionType.map(error => error.interactionPair[0].description)
  return [ ...new Set(warnings)]
}

export const getErrorsUrl = drugs => {
  const ids = drugs.reduce((acc, curr) => acc.concat(curr.id), []).join('+')
  return ERRORS_URL(ids)
}