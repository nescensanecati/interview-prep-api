/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('questions').del();
    await knex('questions').insert([
        { question_id: 1, subject_id: 1, question: `What does HTML stand for?` }
    ]);
};