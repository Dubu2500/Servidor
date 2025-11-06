Tarea 3

- ejercicio1: utils.js (suma, resta, multiplica, divide) + pruebas con Jest
- ejercicio2: app.js (GET /test -> { mensaje: 'ok' }) + pruebas con Supertest
- ejercicio3: authMiddelware.js (JWT) + app.js (GET /admin -> { mensae: 'ok' } con token) + pruebas

Instalacion y uso
1) cd tarea3
2) npm install
3) Ejecutar todas las pruebas: npm test
   - Prueba especifica: npx jest ejercicio3/admin.test.js
   - Modo watch: npm run test:watch

Notas
- No se incluyen server.js ni scripts de start; las pruebas usan Supertest directamente.
- JWT usa un secreto por defecto ('secretito'); en produccion puedes definir JWT_SECRET.
