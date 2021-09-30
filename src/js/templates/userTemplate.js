/*

userData model data structure any give user.

user={
id:string
name:string
phoneNumber:string
website:string

}

*/

const userTemplate = function (id, name, phone, website) {
  const template = `
        <ul class="user">
        <li>id: ${id}</li>
        <li>name: ${name}</li>
        <li>phone number: ${phone}</li>
        <li>website ${website}</li>
        </ul>
    `;
  return template;
};

export default userTemplate;
