import { faker } from "@faker-js/faker";

const personName = faker.person.fullName()
const personBio = faker.person.bio()

console.log(`Hi! My name is ${personName}. I am a ${personBio}.`)
