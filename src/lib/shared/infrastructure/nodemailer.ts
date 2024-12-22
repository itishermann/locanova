import nodemailer from "nodemailer";
import { env } from "./env";

if (env.NODE_ENV === "development") {
	// We add this setting to tell nodemailer the host isn't secure during dev
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}
export const mailTransporter = nodemailer.createTransport({
	url: env.EMAIL_SERVER,
	from: env.EMAIL_FROM,
});
