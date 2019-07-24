function validatecreateUser(req, res, next) {
  try {
    const { username, password, department } = req.body;
    if (!username || !password || !department) {
      return res.status(400).json({ error: 'missing user data' });
    } else if (
      username.length < 2 ||
      password.length < 2 ||
      department.length < 2
    ) {
      return res.status(400).json({ error: 'characters should be up to 2' });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({ error: ' could not validate user input' });
  }
}

module.exports = validatecreateUser
