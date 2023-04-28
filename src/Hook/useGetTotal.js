export const useGetTotal = (arr) => {
  let total = 0
  arr.forEach(item => {
    total += item.price || 0
  })
  return total
}
