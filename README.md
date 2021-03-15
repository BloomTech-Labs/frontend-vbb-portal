Village Portal is an open-sourced `school-based mentoring management platform`. Village Book Builders accelerates learners globally through virtual mentoring, learning libraries, and community-directed educational solutions. Village Portal helps schedule hundreds of virtual mentors with mentees worldwide; this connection catalyzes further impact. Other features are in development. Village Portal's mission is to enable mentors to teach courageous learners and communities <strong><em>how to fish</em></strong>. By increasing literacy, research, and educational skills, we hope to enable innovation economies in villages globally. Village Portal is an essential step towards a better future. Are you interested in the cause? Reach out to us at hr@villagebookbuilders.org. Learn more @ www.villagebookbuilders.org.

This project is broken up into a separate backend and frontend repository. The backend contains the Django project which uses the Django Rest Framework to host a simple API and can be found at [backend-vbb-portal](https://github.com/VilllageBookBuilders/backend-vbb-portal). The frontend uses React and queries data from the API.

Install node.js and get the backend server running beforehand!

Run the following commands inside of the repository folder to get started:
npm:

```bash
npm i
npm start
```

yarn:

```bash
yarn
yarn start
```

These commands (respectively)

1. npm/yarn i (install the node_js modules) (node js needs to be installed on your computer first)
2. npm/yarn start (this will create a temporary local server which reloads on detecting newly-saved changes to the codebase)
3. ctrl + c (when pressed in the terminal window running the node server will close the server)

For the Youtube tutorials associated with this code (and preparing it for production), click here https://youtu.be/uZgRbnIsgrA

*Note: run server on local Host : http://localhost:8000/signin
*Note: to access, django admin, go to http://localhost:8000/admin/
Username and Password: \$\$;
Note: Discard any database changes on your local server (**DON'T PUSH**)

## Docs and valuable links

- [Swagger docs for standalone python backend ](https://vbb-backend.herokuapp.com/swagger/)

## Terminology

- Users:

  - Mentor
  - Mentee
  - Admin

- Session: Represents the template of a slot ( think of this as the cookie cutter you make the cookies (slots) from )

- Slot: Represents an individual meeting created from the session slot
