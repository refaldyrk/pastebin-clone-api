import {Elysia} from 'elysia'
import {findByID, insert} from "../service/Paste";
export const PasteController = new Elysia(
    {prefix: "api"}
)
    .post("/", async({set, body}) => {

       try {
           // @ts-ignore
           if (body.text == "" || body.text == undefined) {
               set.status = 401
               return {
                   message: "text can't be empty"
               }
           }

           // @ts-ignore
           const result=  await insert(body.text)
           set.status = 200
           return {
               message: `success add paste and your id ${result}`
           }
       } catch (err) {
           set.status = 500
           return {
               message: err
           }
       }
    })
    .get("/:id", async ({set, params: {id}}) => {
       try {
           if (id == "") {
               set.status = 400
               return {
                   message: "id can't be empty"
               }
           }

           const data = await findByID(id)
           set.status = 200
           return {
               message: "success fetch data",
               data: data
           }
       } catch (e) {
           set.status = 500
           return {
               message: e
           }
       }
    })
