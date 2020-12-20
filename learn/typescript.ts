interface Person {
  firstname: string;
  lastname: number;
}

function greeter(person: Person) {
  return "Hello, " + person.firstname + person.lastname;
}

let user = { firstname: "wang", lastname: "jing" };

document.body.innerHTML = greeter(user);
