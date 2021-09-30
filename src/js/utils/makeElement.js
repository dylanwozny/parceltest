/*

template: template literal with the data

** template must be valid html



conversion create fragment

*/

const makeElement = function (template) {
  let docFrag = document.createRange().createContextualFragment(template);

  console.log(docFrag.children[0]);

  return null;
};

export default makeElement;
