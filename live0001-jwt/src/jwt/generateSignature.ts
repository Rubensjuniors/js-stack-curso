import { createHmac } from "crypto";

interface IgenerateSignatureOptions {
  secret: string;
  payload: string;
  header: string;
}

export function generateSignature({
  secret,
  payload,
  header,
}: IgenerateSignatureOptions) {
  const hmac = createHmac("sha256", secret);
  const signature = hmac
    .update(`${header}.${payload}`)
    .digest("base64url");

  return signature;
}
