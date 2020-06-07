/**
 * @swagger
 *  components:
 *      schemas: 
 *          Note:
 *              type: object
 *              required:
 *                  - content
 *              properties:
 *                  id: 
 *                      type: integer
 *                      readOnly: true
 *                      description: The id of the note.
 *                  content: 
 *                      type: string
 *                      description: The content of the note.
 */
module.exports = (sequelize, DataTypes) => {
    var Note = sequelize.define('Note', {
        content: { type: DataTypes.STRING, allowNull: false }
    });

    return Note;
};