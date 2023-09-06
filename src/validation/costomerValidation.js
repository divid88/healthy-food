import { object, string, number, date, InferType, ref } from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const PHONE_NO_REGEX = /^[0-9]{11}$/

export const loginSchema = object().shape({
    email: string().email("آدرس ایمیل معتبر نیست!!").required("آدرس ایمیل الزامیست !!"),
    password: string().required("رمز عبور الزامیست !!")
})


export const registerSchema = object().shape({
    email: string().email("آدرس ایمیل معتبر نیست!!").required("آدرس ایمیل الزامیست !!"),
    mobile_number: string().matches(PHONE_NO_REGEX, 'شماره تلفن باید عدد ۹ رقمی باشد.').required("شماره تلفن الزامیست!!"),
    password: string().required("رمز عبور الزامیست !!"),
    passwordConfirmation: string().oneOf([ref('password'), null], "با پسورد مچ نیست.")
})