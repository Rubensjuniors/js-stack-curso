import { createHmac } from "node:crypto";
import { generateSignature } from "./generateSignature";

interface ISignOptions {
  exp: number;
  data: Record<string, any>;
  secret: string;
}

export function sign({ data, secret, exp }: ISignOptions) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    iat: Date.now(),
    ...data,
    exp,
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url"
  );
  const encodedpayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  const signature = generateSignature({
    secret,
    header: encodedHeader,
    payload: encodedpayload,
  });

  return `${encodedHeader}.${encodedpayload}.${signature}`;
}
