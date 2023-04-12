/**
 * @swagger
 * components:
 *   schemas:
 *
 *     requestUpdatePublicationType:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: artistas y conciertos
 *         description:
 *           type: string
 *
 *
 *     responseGetAllPubliblicationsTypes:
 *       type: object
 *       properties:
 *         result:
 *           type: object
 *           properties:
 *             count:
 *               type: integer
 *               example: 4
 *             totalPages:
 *               type: integer
 *               example: 2
 *             currentPage:
 *               type: integer
 *               example: 1
 *
 *
 *     responseGetPublicationById:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 5
 *         name:
 *           type: string
 *           example: artistas y conciertos
 *         description:
 *           type: string
 *           example: all about abastecimiento
 *
 */
