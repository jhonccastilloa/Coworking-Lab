/**
 * @swagger
 * components:
 *   schemas:
 *      responseauthSignup:
 *          type:object
 *          properties:
 *              first_name:
 *                  type:string
 *                  desciption: User firstName
 *              last_name:
 *                  type:string
 *                  description: User lastName
 *              email:
 *                  type: string
 *                  description: User email
 *              password:
 *                  type:string
 *                  description: User password
 *              required:
 *                  -first_name
 *                  -last_name
 *                  -email
 *                  -password
 *              example:
 *                  first_name: diego
 *                  last_name: murcia
 *                  email: diego@mail.com
 *                  password: 123diego
 *
 *      responseauthLogin:
 *          type:object
 *          properties:
 *              email:
 *                  type: string
 *                  description: User email
 *              password:
 *                  type:string
 *                  description: User password
 *              required:
 *                  -email
 *                  -password
 *              example:
 *                  email: diego@mail.com
 *                  password: 123diego
 *
 *      responseForgetPassword:
 *          type:object
 *          properties:
 *              email:
 *                  type:string
 *                  description: User email
 *  *           example:
 *                  email: diego@mail.com
 *
 *  *      responseRestorePassword:
 *          type:object
 *          properties:
 *              email:
 *                  type:string
 *                  description: User email
 *  *           example:
 *                  email: diego@mail.com
 */
