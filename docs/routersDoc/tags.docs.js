/**
 * @swagger
 * /api/v1/tags:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Only the logged in user
 *     tags:
 *       - Tags
 *     parameters:
 *       - in: query
 *         name: page
 *         type: integer
 *         example: 1
 *       - in: query
 *         name: size
 *         type: integer
 *         example: 4
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseGetAllTags'
 * /api/v1/tags/{id}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Only the logged in user
 *     tags:
 *       - Tags
 *     parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        example: 1
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 2
 *                 name:
 *                   type: string
 *                   example: Ropa y Accesorios
 *                 description:
 *                   type: string
 *                   example: A series of events involving exposure to one or more hazards.
 *                 img-url:
 *                   type: string
 *                   example: null
 * paths:
 *   /api/v1/tags:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Only administrator
 *       tags:
 *         - Tags
 *       requestBody:
 *         description:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createTag'
 *       responses:
 *         201:
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Has been successfully created
 *   /api/v1/tags/{id}:
 *     put:
 *       security:
 *         - bearerAuth: []
 *       summary: Only administrator
 *       tags:
 *         - Tags
 *       parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          example: 1
 *       requestBody:
 *         description:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateTag'
 *       responses:
 *         201:
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Success update
 *     delete:
 *       security:
 *        - bearerAuth: []
 *       summary: Only administrator
 *       tags:
 *         - Tags
 *       parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          example: 1
 *       responses:
 *         201:
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Remove Tag
 *   /api/v1/tags/{id}/add-image:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Add an image in tags
 *       tags:
 *         - Tags
 *       parameters:
 *         - in: path
 *           name: id
 *           type: integer revisar
 *           example: id
 *       requestBody:
 *         description: Images as form data
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 image:
 *                   type: string
 *                   format: binary
 *                   description: Image
 *       responses:
 *         201:
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Add image
 *         404:
 *           description: not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: not found
 */
