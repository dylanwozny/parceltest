import makeElement from "./makeElement";

//

const render = function (template, data) {
  const templateStringLiteral = template(data);

  makeElement(templateStringLiteral);
  return null;
};

export default render;
