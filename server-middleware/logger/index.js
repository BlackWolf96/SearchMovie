export default function (req, res, next) {
  console.log(`Url is ${req.url}`)
  next()
}