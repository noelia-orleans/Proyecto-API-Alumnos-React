// Importas el módulo 'http' usando sintaxis ES Modules
import http from 'http';

// Defines un pequeño array con usuarios de ejemplo
const usuarios = [
  { id: 1, nombre: 'Rodrigo',  apellidos: 'Alcántara Gutierrez', urlImagen: 'https://randomuser.me/api/portraits/men/1.jpg',   fechaNacimiento: '2003-05-25', email: "rodrigo@cpilosenlaces.com"},
  { id: 2, nombre: 'Evis', apellidos: 'Amponsah Omane', urlImagen: 'https://randomuser.me/api/portraits/men/2.jpg', fechaNacimiento: '2008-02-30', email: "evis@cpilosenlaces.com" },
  { id: 3, nombre: 'Daniel',  apellidos: 'Carindatoiu', urlImagen: 'https://randomuser.me/api/portraits/men/3.jpg',   fechaNacimiento: '2006-04-15', email: "daniel@cpilosenlaces.com" },
  { id: 4, nombre: 'Cristian', apellidos: 'Ceamanos', urlImagen: 'https://randomuser.me/api/portraits/men/4.jpg', fechaNacimiento: '2004-10-30', email: "cristian@cpilosenlaces.com" },
  { id: 5, nombre: 'Andrés',  apellidos: 'Dimidov Argente', urlImagen: 'https://randomuser.me/api/portraits/men/5.jpg',   fechaNacimiento: '2001-05-25', email: "andres@cpilosenlaces.com"},
  { id: 6, nombre: 'Abdehrraman', apellidos: 'Labiod Toumi', urlImagen: 'https://randomuser.me/api/portraits/men/6.jpg', fechaNacimiento: '1985-10-30', email: "abdehrraman@cpilosenlaces.com" },
  { id: 7, nombre: 'Gonzalo',  apellidos: 'Lázaro Rodrigo', urlImagen: 'https://randomuser.me/api/portraits/men/7.jpg',   fechaNacimiento: '2008-02-12', email: "gonzalo@cpilosenlaces.com"},
  { id: 8, nombre: 'Noelia', apellidos: 'Orleans López', urlImagen: 'https://randomuser.me/api/portraits/women/1.jpg', fechaNacimiento: '1999-07-23', email: "noelia@cpilosenlaces.com" },
  { id: 9, nombre: 'Sergio',  apellidos: 'Ruiz Peinado', urlImagen: 'https://randomuser.me/api/portraits/men/8.jpg',   fechaNacimiento: '2002-05-20', email: "sergio@cpilosenlaces.com"},
  { id: 10, nombre: 'Jorge', apellidos: 'Ucendo Thomas', urlImagen: 'https://randomuser.me/api/portraits/men/9.jpg', fechaNacimiento: '2005-10-03', email: "jorge@cpilosenlaces.com"},
  { id: 11, nombre: 'Máximo',  apellidos: 'Yuste Palacián', urlImagen: 'https://randomuser.me/api/portraits/men/10.jpg',   fechaNacimiento: '2001-05-28',email: "maximo@cpilosenlaces.com" }
];

// Crea el servidor HTTP con soporte básico para CORS
const server = http.createServer((req, res) => {
  // Permite las peticiones desde el frontend en el puerto 5173
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/api/usuarios') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(usuarios));
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor API muy sencillo en http://localhost:3000');
});