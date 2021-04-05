# Lambda Labs Clone - Village Portal (VBB)

Village Portal is a open-sourced `school-based mentoring managment platform`. Development is lead by Village Book Builders volunteers. Village Book Builders accelerates learners globally through virtual mentoring, learning libraries, and special educational community-wide interventions. Village Portal helps schedule hundreds of virtual volunteer mentors in global time zones. Other Features are in development.

This project is broken up into a separate backend and frontend repository. The backend contains the Django project which uses the Django Rest Framework to host a simple API and can be found at [backend-vbb-portal](https://github.com/VilllageBookBuilders/backend-vbb-portal). The frontend uses React and queries data from the API.

## Installation
1. `npm i -g yarn`
2. run `yarn` in root of project
3. Create `.env` file - example found in `.env.sample`
3. `yarn start`


For the Youtube tutorials associated with this code (and preparing it for production), click here https://youtu.be/uZgRbnIsgrA

## API Docs and valuable links

- [Swagger docs for standalone python backend ](https://vbb-backend.herokuapp.com/swagger/)

## Terminology

- Users:

  - Mentor
  - Mentee
  - Admin

- Session: Represents the template of a slot ( think of this as the cookie cutter you make the cookies (slots) from )

- Slot: Represents an individual meeting created from the session slot

## Coding

Examples of component patterns can be found under examples as can redux folder structure.
