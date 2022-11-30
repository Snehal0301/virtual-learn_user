import * as Yup from "yup"
import 'yup-phone'
export const mobilenumberSchema = Yup.object({
   mobilenumber: Yup.string().phone()
    .required()
});