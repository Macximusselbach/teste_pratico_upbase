const dbService = require('./dbService.js');
const helper = require('../helper.js');
const configs = require('../dbConfigs.js');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, configs.listPerPage);
  const rows = await dbService.query(
    `SELECT id, first_name, last_name, user_name, email, password, created_at, updated_at
    FROM student LIMIT ${offset},${configs.listPerPage};`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta
  }
};

async function create(student) {
  const result = await dbService.query(
    `INSERT INTO student (first_name, last_name, user_name, email, password) 
    VALUES ('${student.first_name}', '${student.last_name}', '${student.user_name}', '${student.email}', '${student.password}');`
  );

  if (result.affectedRows) {
    return 'Student created!';
  }

};

async function update(id, student) {
  const result = await dbService.query(
    `UPDATE student 
    SET first_name='${student.first_name}', last_name='${student.last_name}', user_name='${student.user_name}', 
    email='${student.email}', password='${student.password}'
    WHERE id='${id}'`
  );

  if (result.affectedRows) {
    return 'Student updated!';
  }

};

async function remove(id){
  const result = await dbService.query(
    `DELETE FROM student WHERE id='${id}'`
  );

  if (result.affectedRows) {
    return 'Student deleted!';
  }

}

module.exports = {
  getMultiple,
  create,
  update,
  remove
};