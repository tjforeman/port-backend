
exports.up = function(knex) {
    return knex.schema.createTable('data', tbl => {
        tbl.increments();
    
         tbl
        .text('name', 128)
        .notNullable()
    
         tbl
        .text('email')
        .notNullable();
    
        tbl
        .text('message')
        .notNullable();
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('data');
};
