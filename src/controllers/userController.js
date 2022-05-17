const users = []

exports.viewUsers = (req, res) => {
    const user = req.body
    users.push(user)
    console.log(user)
    res.send(users)
}

exports.createUser = (req, res) => {
    const user = req.body
    users.push(user)
    console.log(user)
    res.send(`User ${user} added`)
}

exports.viewUser = (req, res) => {
    const user = req.body
    users.push(user)
    console.log(user)
    res.send(`User ${user} added`)
}