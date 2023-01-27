interface names{
    first_name:string,
    last_name?:string
}

function getNames({first_name,last_name}:names):string{
    if(last_name)
    return (first_name+last_name)
    return first_name
}
console.log(getNames({first_name:'om',last_name:'prakash'}))