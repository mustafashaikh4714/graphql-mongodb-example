import jwt from 'jsonwebtoken'
export default (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7 days' })
}
