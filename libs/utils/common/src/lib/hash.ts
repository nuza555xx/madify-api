import { compare, hash } from "bcrypt";
const saltOrRounds = 10;

export class MadifyHash {
  static hash(payload: string) {
    return hash(payload, saltOrRounds);
  }

  static compare(payload: string, hashed: string) {
    return compare(payload, hashed);
  }
}
