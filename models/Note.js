/**
 * @swagger
 *  components:
 *      schemas: 
 *          Note:
 *              type: object
 *              required:
 *                  - title
 *                  - content
 *              properties:
 *                  id: 
 *                      type: integer
 *                      readOnly: true
 *                      description: The id of the note.
 *                  title: 
 *                      type: string
 *                      description: The title of the note.
 *                  content: 
 *                      type: string
 *                      description: The content of the note.
 */
module.exports = (sequelize, DataTypes) => {
    var Note = sequelize.define('Note', {
        title: { type: DataTypes.STRING, allowNull: false},
        content: { type: DataTypes.TEXT, allowNull: false }
    });

    return Note;
};