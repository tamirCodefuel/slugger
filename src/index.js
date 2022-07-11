export function slugger (...args) {
  return args.replace(/\s+/g, '-').join('-').toLowerCase()
}
