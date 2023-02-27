

const fetchUsers = async () => {
    // const users = await fetch("https://jsonplaceholder.typicode.com/users").json();
    // console.log("99",users)
    // return users;

    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then((jsonRes) => JSON.stringify(jsonRes))
        .catch(err => err)
    return users;
}

export { fetchUsers }


