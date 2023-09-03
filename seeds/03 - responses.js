/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('responses').del();
  await knex('responses').insert([
    { response_id: 1, question_id: 1, response:  `Hyperlink Text Markup Language`, is_correct: true },
    { response_id: 2, question_id: 1, response:  'Hypertext Transfer Markup Language', is_correct: false },
    { response_id: 3, question_id: 1, response:  'Hyper Text Makeup Language', is_correct: false },
    { response_id: 4, question_id: 1, response:  'High-Level Text Markup Language', is_correct: false }
  ]);
};