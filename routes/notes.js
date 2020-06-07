const express = require('express');
const router = express.Router();
const models = require('../models');

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Note management
 */

/** GET Notes listing.
 * @swagger
 * /API/notes:
 *    get:
 *      tags: [Notes]
 *      description: |
 *        This should return a list of all notes. <br> <br>
 *      responses: 
 *        "200":
 *          description: Array containing all Notes.
 *          content: 
 *            application/json: 
 *              schema: 
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/Note'
 *        "500": 
 *          description: Server may be down - Internal Server Error.
 *          content: 
 *            application/json:
 *              schema: 
 *                $ref: '#/components/schemas/Error'
 */
router.get("/", function (req, res, next) {
  models.Note.findAll({ attributes: ['id', 'content'] })
    .catch(err => {
      return next(err);
    }).then(function (notes) {
      res.json(notes)
    });
});

/** GET Note by id
 * @swagger
 * /API/notes/id/{noteId}:
 *    get:
 *      tags: [Notes]
 *      description: |
 *        This should return a note by entering it's id. <br> <br>
 *        When you enter an id of a note that doesn't exist, it should return a 400 error.
 *      parameters: 
 *        - in: path
 *          name: noteId
 *          required: true
 *          schema:
 *            type: integer
 *            description: Id of the note.
 *      responses: 
 *        "200":
 *          description: Note with the matching id.
 *          content: 
 *            application/json: 
 *              schema: 
 *                $ref: '#/components/schemas/Note'
 *        "400": 
 *          description: Bad Request, Note doesn't exist.
 *          content: 
 *            application/json:
 *              schema: 
 *                $ref: '#/components/schemas/Error'
 *        "500": 
 *          description: Server may be down - Internal Server Error.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.param("noteId", function (req, res, next, id) {
  models.Note.findOne({ attributes: ['id', 'content'], where: { id: id } })
    .catch(err => {
      return next(err);
    }).then(function (note) {
      if (!note) {
        return res.status(400).json("Note with id: " + id + " not found.");
      } else {
        req.receivedNote = note;
        return next();
      }
    });
});
router.get("/id/:noteId", function (req, res, next) {
  res.json(req.receivedNote);
});

/** POST Create Note
 * @swagger
 * /API/notes/create:
 *    post:
 *      tags: [Notes]
 *      description: |
 *        This request is used for creating notes. <br> <br>
 *      requestBody: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required: 
 *                - content
 *              properties:
 *                content:
 *                  type: string
 *                  description: The ncontetn of the note.
 *      responses: 
 *        "200":
 *          description: Note that has been created.
 *          content: 
 *            application/json: 
 *              schema: 
 *                  $ref: '#/components/schemas/Note'
 *        "400": 
 *          description: Bad Reqeust, required fields are not filled out.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        "500": 
 *          description: Server may be down - Internal Server Error.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post("/create", function (req, res, next) {
  if (!req.body.content)
    return res.status(400).json("Please fill out all necessary fields.");

  //Creating Note
  let note = models.Note.build({
    content: req.body.content
  });

  note.save().catch(err => {
    return next(err);
  }).then(() => {
    return res.json(note);
  })
});

/** PATCH update note
 * @swagger
 * /API/notes/updateNote:
 *    patch:
 *      tags: [Notes]
 *      description: |
 *        This request is used for updating a note. <br> <br>
 *        If the note doesn't exist, an error 500 will be thrown. <br> <br>
 *      requestBody: 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required: 
 *                - id
 *                - content
 *              properties:
 *                id: 
 *                  type: integer
 *                  description: The id of the note that needs to be updated.
 *                content:
 *                  type: string
 *                  description: The content of the note that needs to be updated.
 *      responses: 
 *        "200":
 *          description: The updated note.
 *          content: 
 *            application/json: 
 *              schema: 
 *                 $ref: '#/components/schemas/Note'
 *        "500":
 *          description: Server may be down - Internal Server Error.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch("/updateNote", function (req, res, next) {
  models.Note.update({ content: req.body.content }, { where: { id: req.body.id } }).catch(err => {
    return next(err);
  }).then(() => {
    models.Note.findOne({ attributes: ['id', 'content'], where: { id: req.body.id } }).catch(err => {
      return next(err);
    }).then(function (note) {
      return res.json(note)
    });
  });
});

/** DELETE Delete Note
 * @swagger
 * /API/notes/delete/{noteId}:
 *    delete:
 *      tags: [Notes]
 *      description: |
 *        This request is used for deleting notes. <br> <br>
 *        Returns true when note is deleted successfully, false when it failed.
 *      parameters:
 *        - in: path
 *          name: noteId
 *          required: true
 *          schema:
 *            type: integer
 *            description: Id of the note.
 *      responses: 
 *        "200":
 *          description: Boolean.
 *          content: 
 *            application/json: 
 *              schema: 
 *                  type: boolean
 *        "500": 
 *          description: Server may be down - Internal Server Error.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.param("dNoteId", function (req, res, next, id) {
  models.Note.destroy({ where: { id: id } })
    .catch(err => {
      return next(err);
    }).then(() => {
      return next();
    });
});
router.delete("/delete/:dNoteId", function (req, res, next) {
  res.json(true);
});

module.exports = router;