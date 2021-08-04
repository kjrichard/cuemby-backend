# cuemby-backend

prueba técnica backend 
nodejs- express, mongoDb-atlas

1. Al levantar el servidor automaticamente se guardan los jugadores en la base de datos(configData.js).

2. las rutas estan proteguidas por medio jwt credenciales por defecto.
   header: x-access-token
   token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGE5YjU4ZTYwNDQwMTBlMjdmYTRlOCIsImlhdCI6MTYyODA4NTY3NiwiZXhwIjoxNjI4MTcyMDc2fQ.m4C5Y5h3VrRaJAnOGmsJKboLDdxjDcLHpsqBku0yU6k
3. te puedes registrar como administrador y obtener un nuevo token.
   http://localhost:3000/api/auth/signup
   {
    "email": "admin@cuemby.com",
     "username": "kevin jair richard rosero",
    "password": "12345"
   }
4. inicio de sesion para obtener token
    http://localhost:3000/api/auth/signin
    {
        "email": "admin@cuemby.com",
        "password": "12345"
    } 
 
5. busqueda por equipo 
  http://localhost:3000/api/v1/team
  {
    "name": "r. madrid",
    "page": 1
  }
6. busqueda por nombre.
   http://localhost:3000/api/v1/player?search=mar&page=1&order=asc
