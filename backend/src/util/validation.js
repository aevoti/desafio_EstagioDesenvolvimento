function notInformed(field, message) {
  if (!field || !field.length) {
    throw { message };
  }
}

function passwordsEqual(password, confirmPassword, message) {
  if (password !== confirmPassword) {
    throw { message };
  }
}

module.exports = {
  notInformed,
  passwordsEqual,
};
