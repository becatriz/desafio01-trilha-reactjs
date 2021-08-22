import { danger, fail, warn, message, markdown } from "danger";

const hasPRCorrectTitle = danger.github.pr.title.includes("[BS-") || danger.github.pr.title.includes("fix:")

const hasNumberOfLinesAddedInPRAllowed = (danger.github.pr.additions * danger.github.pr.deletions) > 0


const componentsFiles = danger.git.fileMatch("./src/components/**");
const componentsTestFiles = danger.git.fileMatch(
  "./src/__tests__/components/**"
);

const helperFiles = danger.git.fileMatch("./src/helpers/*.ts");
const helperTestFiles = danger.git.fileMatch("./src/helpers/*.spec.ts");

const stylesFiles = danger.git.fileMatch("./src/styles/**");

if (componentsFiles.created && !componentsTestFiles.created) {
  warn(
    "Ops! Foi criado um UI components novo, mas não foi criado o teste para ele 😓"
  );
}

if (helperFiles.edited && !helperTestFiles.edited) {
  fail(
    "Ops! Foi criado um novo helper, mas não foi criado o teste para ele ⛔"
  );
}

if(!hasPRCorrectTitle){
  fail("Ops! Titulo da PR esta incorreto. Um exemplo correto seria [BS-2802] ajusta elemento css ou fix: ajusta elemento css")
}

if(hasNumberOfLinesAddedInPRAllowed){
  warn("Eita! Essa PR parece grande demais 😱")
}

if(danger.github.pr.requested_reviewers.length === 0){
  warn("Ops! Não se esqueça de marcar alguém para revisar esta PR")
}

if(stylesFiles.edited){
  message("É recomendado marcar o usuário Zé nessa PR, pois houveram mudanças nos estilos globais")
}


