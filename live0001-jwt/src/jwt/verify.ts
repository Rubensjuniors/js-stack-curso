import { generateSignature } from "./generateSignature";

interface IVerifyOptions {
  token: string;
  secret: string;
}

export function verify({ token, secret }: IVerifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split(".");

  const signature = generateSignature({
    secret,
    header: headerSent,
    payload: payloadSent,
  });

  if (signatureSent !== signature) {
    throw new Error("Token Invalido");
  }
  const decodedPayload = JSON.parse(Buffer.from(payloadSent, 'base64url').toString("utf-8"));

  if (decodedPayload?.exp < Date.now()) {
    throw new Error('Tokene Expirado')
  }

  return decodedPayload;
}
