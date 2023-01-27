function getNames({ first_name, last_name }) {
    if (last_name)
        return (first_name + last_name);
    return first_name;
}
console.log(getNames({ first_name: 'om', last_name: 'prakash' }));
