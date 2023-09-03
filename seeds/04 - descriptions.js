/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('descriptions').del();
  await knex('descriptions').insert([
    { description_id: 1, question_id: 1, description: `HTML stands for HyperText Markup Language. It's the standard markup language used to create web pages.` }]);
};