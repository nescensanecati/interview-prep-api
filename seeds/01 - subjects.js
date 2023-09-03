/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<vosubject_id> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('subjects').del();
    await knex('subjects').insert([
      {
        subject_id:1,
        subject: 'HTML',
      },
      {
        subject_id:2,
        subject: 'CSS',
      },
      {
        subject_id:3,
        subject: 'SCSS',
      },
      {
        subject_id:4,
        subject: 'JAVASCRIPT',
      },
      {
        subject_id:5,
        subject: 'REACT',
      },
      {
        subject_id:6,
        subject: 'MYSQL',
      }
    ]);
  };