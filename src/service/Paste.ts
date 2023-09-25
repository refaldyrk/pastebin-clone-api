import {PasteModel} from "../model/Paste";
// @ts-ignore
import AES256 from 'aes-everywhere';
import {randomUUID} from "crypto";

export const insert = async (text: String): Promise<string> => {
    const idRandom = randomUUID();
    var ecntext = AES256.encrypt(text, <string>Bun.env.AES_KEY)
    await new PasteModel({
       paste_id: idRandom,
       text: ecntext
   }).save()

    return idRandom
}

export const findByID = async (paste_id: string) => {
  const result  = await PasteModel.findOne({paste_id: paste_id})
    // @ts-ignore
    result.text = AES256.decrypt(result.text, <string>Bun.env.AES_KEY)
    return result
}