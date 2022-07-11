export function slugger (...args) {

    const newArr = args.map(element => {
        return element.replace(/\s+/g, '-')
    });
  return newArr.join('-').toLowerCase()
}
