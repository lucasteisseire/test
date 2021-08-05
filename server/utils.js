const casual = require('casual');


 const createDummyUsers = () => {
  const users = []
  for (let i = 0; i < 2000; i++) {
    users.push({ name: casual.name, address: casual.address})
  }
  return users
}

module.exports = {
 createDummyUsers
}