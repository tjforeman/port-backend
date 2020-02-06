const db = require('../dbconfig')
module.exports = {
    find,
    add
}


function find(){
    return db('data')
}

function add(data){
    return db('data')
    .insert(data)
}