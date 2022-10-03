export const getDrugTitles = title => {
  const ind = title.indexOf('(')
  const name = title.substring(0, ind - 1)
  const type = title.substring(ind + 1, title.length - 1)
  return { name, type }
}