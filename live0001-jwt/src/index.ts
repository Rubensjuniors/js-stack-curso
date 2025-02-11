import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "larissa";

const token = sign({
  data: {
    sub: "@rubens",
    id: "22382",
  },
  exp: Date.now() + 24 * 60 * 60 * 1000,
  secret,
});

const hasVerify = verify({
  token,
  secret,
});

console.log({token, hasVerify});
