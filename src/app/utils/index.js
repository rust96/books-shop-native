export const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
}

export const sliceArr = (books, deleteIdx) => {
  if (deleteIdx === 0) {
    return [ ...books.slice(1) ]
  } else if (deleteIdx === books.length - 1) {
    return [ ...books.slice(0, books.length - 1) ]
  } else {
    return [ ...books.slice(0, deleteIdx), ...books.slice(deleteIdx + 1) ]
  }
}
