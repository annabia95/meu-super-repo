/* function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "invalid data" });
  }
  if (isNaN(password)) {
    return res.status(400).json({ message: "invalid data" });
  }
  if (password.length >  4 || password.length < 8) {
    return res.status(400).json({ message: "invalid data" });
  }
  next();
}; */