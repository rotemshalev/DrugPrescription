export const parseResponse = (data, selectedDrugs) => (
  data[1]
    .map((drug, index) => ({ title: drug, id: data[2]["RXCUIS"][index][0] }))
    .filter(d => !selectedDrugs.some(drug => drug.title === d.title))
)
