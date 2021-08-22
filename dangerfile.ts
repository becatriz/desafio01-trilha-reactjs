import { danger, fail, warn, message, markdown } from "danger";


const componentsFiles = danger.git.fileMatch("./src/components/**");
const componentsTestFiles = danger.git.fileMatch(
  "./src/__tests__/components/**"
);

const helperFiles = danger.git.fileMatch("./src/helpers/*.ts");
const helperTestFiles = danger.git.fileMatch("./src/helpers/*.spec.ts");

if (componentsFiles.created && !componentsTestFiles.created) {
  warn(
    "Ops! Foi criado um UI components novo, mas não foi criado o teste para ele 😓"
  );
}

if (helperFiles.edited && !helperTestFiles.edited) {
  fail(
    "Ops! Foi criado um novo helper, mas não foi criado o teste para ele 😓"
  );
}
