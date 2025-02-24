// EJERCICIOS DE FETCH Y MANIPULACIÓN DE DATOS
// ========================================
/* 
API: https://randomuser.me/api/
Documentación: https://randomuser.me/documentation
*/

// Ejercicio 1: Datos básicos
// =========================
// Obtener nombre completo, email y foto de 6 usuarios
async function getBasicInfo() {
  const res = await fetch("https://randomuser.me/api/?results=6");
  const finalRes = await res.json();
  const results = finalRes.results.map((result) => {
    return {
      name: `${result.name.first} ${result.name.last}`,
      email: result.email,
      picture: result.picture.medium,
    };
  });
  console.log(results);
}
// getBasicInfo();

// Ejercicio 2: Información de contacto
// ==================================
// Para cada usuario, obtener: username, email, teléfono y móvil

  // Tu código aquí:
  // 1. Hacer fetch de 6 usuarios
  // 2. Extraer solo la información de contacto
  // Resultado esperado:
  // [
  //   {
  //     username: "blackdog173",
  //     email: "usuario@example.com",
  //     phone: "123-456-789",
  //     cell: "666-777-888"
  //   },
  //   ...
  // ]
  async function getContactInfo() {
    const contactRes = await fetch("https://randomuser.me/api/?results=6")
    const finalContactRes = await contactRes.json();
    const result = finalContactRes.results.map((results) => {
      return {
        username: results.login.username,
        email: results.email,
        phone: results.phone,
        cell: results.cell
      };
    });
console.log(result)
}
// getContactInfo();

// Ejercicio 3: Datos de localización
// ================================
// Para cada usuario, obtener: país, estado/provincia, ciudad y código postal

  // Tu código aquí:
  // 1. Hacer fetch de 6 usuarios
  // 2. Extraer solo la información de localización
  // Resultado esperado:
  // [
  //   {
  //     country: "Spain",
  //     state: "Cantabria",
  //     city: "Barcelona",
  //     postcode: "12345"
  //   },
  //   ...
  // ]
  async function getLocationInfo() {
    const locationRes = await fetch("https://randomuser.me/api/?results=6")
    const finalLocation = await locationRes.json();
    const finalResLocation = finalLocation.results.map((result) => {
      return {
        country: result.location.country,
        state: result.location.state,
        city: result.location.city,
        postcode: result.location.postcode,
      };
    });
    console.log(finalResLocation);
}
// getLocationInfo();

// Ejercicio 4: Información de login
// ===============================
// Para cada usuario, obtener: username, password y uuid

  // Tu código aquí:
  // 1. Hacer fetch de 6 usuarios
  // 2. Extraer solo la información de login
  // Resultado esperado:
  // [
  //   {
  //     username: "blackdog173",
  //     password: "12345",
  //     uuid: "7dd0gg88-5fff-4444..."
  //   },
  //   ...
  // ]
  async function getLoginInfo() {
    const loginRes = await fetch("https://randomuser.me/api/?results=6")
    const finalRes = await loginRes.json();
    const finalLoginRes = finalRes.results.map((result) => {
      return {
        username: result.login.username,
        password: result.login.password,
        uuid: result.login.uuid,
      };
    });
    console.log(finalLoginRes);
}
// getLoginInfo();

// Ejercicio 5: Datos personales
// ===========================
// Para cada usuario, obtener: nombre completo, edad, fecha de nacimiento (en formato legible) y nacionalidad

  // Tu código aquí:
  // 1. Hacer fetch de 6 usuarios
  // 2. Extraer y formatear la información personal
  // 3. La fecha debe estar en formato DD/MM/YYYY
  // Resultado esperado:
  // [
  //   {
  //     fullName: "Ana García",
  //     age: 25,
  //     birthdate: "15/03/1998",
  //     nationality: "ES"
  //   },
  //   ...
  // ]
  async function getPersonalInfo() {
    try {
      const personalRes = await fetch("https://randomuser.me/api/?results=6")
      if(personalRes.status !== 200) throw new Error('call error')
      const finalRes = await personalRes.json();
      const finalPersonalRes = finalRes.results.map((result) => {
        return { 
          fullName: `${result.name.first} ${result.name.last}`,
          age: result.dob.age,
          birthdate: result.dob.date,
          nationality: result.nat,
        };
      });
      console.log(finalPersonalRes);
  } catch(e) {
      console.log(e)
  }
}
// getPersonalInfo();
  
// Ejercicio 6: Información combinada
// ================================
// Para cada usuario, combinar datos personales con localización

  // Tu código aquí:
  // 1. Hacer fetch de 6 usuarios
  // 2. Combinar datos personales con localización
  // Resultado esperado:
  // [
  //   {
  //     fullName: "Ana García",
  //     age: 25,
  //     country: "Spain",
  //     city: "Barcelona",
  //     email: "ana.garcia@example.com"
  //   },
  //   ...
  // ]
  async function getCombinedInfo() {
    const infoRes = await fetch ("https://randomuser.me/api/?results=6")
    const infoPersonalRes = await infoRes.json();
    const finalInfoPersonal = infoPersonalRes.results.map((result) =>{
      return {
        fullName: `${result.name.first} ${result.name.last}`,
        age: result.dob.age,
        country: result.location.country,
        city: result.location.city,
        email: result.email,
      };
    })
    console.log(finalInfoPersonal);
}
// getCombinedInfo();

// Ejercicio 7: Datos para una red social
// ====================================
// Para cada usuario, obtener los datos que se mostrarían en un perfil social

  // Tu código aquí:
  // 1. Hacer fetch de 6 usuarios
  // 2. Extraer y combinar los datos relevantes para un perfil social
  // Resultado esperado:
  // [
  //   {
  //     username: "blackdog173",
  //     fullName: "Ana García",
  //     age: 25,
  //     city: "Barcelona",
  //     country: "Spain",
  //     email: "ana.garcia@example.com",
  //     picture: "url_de_la_foto"
  //   },
  //   ...
  // ]
  async function getSocialInfo() {
    const socialInfo = await fetch("https://randomuser.me/api/?results=6")
    const socialInfoRes = await socialInfo.json();
    const finalSocialInfo = socialInfoRes.results.map((result) => {
      return {
        userName: result.login.username,
        fullName: `${result.name.first} ${result.name.last}`,
        age: result.dob.age,
        city: result.location.city,
        country: result.location.country,
        email: result.email,
        picture: result.picture.medium,
      };
    })
    console.log(finalSocialInfo);
}
// getSocialInfo();

// Para probar los ejercicios, descomenta la función que quieras ejecutar:
  getBasicInfo();
//  getContactInfo();
//  getLocationInfo();
//  getLoginInfo();
//  getPersonalInfo();
//  getCombinedInfo();
//  getSocialInfo();

// EJERCICIO OPCIONAL: ¡Conecta los datos con HTML! 🚀
// ================================================
/*
Ahora que ya sabes manipular los datos, ¿te animas a mostrarlos en una página web?
Usa el siguiente HTML como base (es el mismo que creamos antes) y modifícalo para mostrar
los datos reales de la API en lugar del contenido de ejemplo.

Sugerencias:
1. Usa la función getBasicInfo() como base
2. Para cada usuario, crea una tarjeta con su foto, nombre y email
3. Reemplaza las imágenes de placeholder con las fotos reales de los usuarios
4. Bonus: añade la ciudad y país de cada usuario

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
    <!-- Aquí va todo el CSS que creamos antes... -->
</head>
<body>
    <div class="container">
        <header>
            <h1 class="site-title">Random Users Blog</h1>
            <p class="site-description">Real people, real stories</p>
        </header>
        
        <main>
            <div class="posts-grid">
                <!-- Aquí irían las tarjetas de los usuarios -->
                <!-- Ejemplo de estructura para cada usuario:
                <article class="post-card">
                    <img src="${user.picture.large}" alt="${user.name}" class="post-image">
                    <div class="post-content">
                        <h2 class="post-title">${user.name}</h2>
                        <p class="post-excerpt">${user.email}</p>
                        <p class="post-location">${user.location.city}, ${user.location.country}</p>
                    </div>
                </article>
                -->
            </div>
        </main>
    </div>
</body>
</html>
*/
