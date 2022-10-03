export const DRUGS_URL = text => `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${text}&ef=RXCUIS`

export const ERRORS_URL = ids => `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${ids}`