export const getRandom = (arr) => {
  return Promise.resolve(arr[Math.floor((Math.random()*arr.length))]);
}
