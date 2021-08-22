import { danger, fail, warn, message, markdown } from "danger";

const componentsFiles = danger.git.fileMatch("./src/components/**");
const componentsTestFiles = danger.git.fileMatch(
  "./src/__tests__/components/**"
);

if (componentsFiles.created && !componentsTestFiles.created) {
  warn(
    "Ops! Foi criado um UI components novo, mas não foi criado o teste para ele 😓"
  );
}
