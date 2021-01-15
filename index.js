const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./img/taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./img/taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./img/bota-negra.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./img/bota-azul.jpg",
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./img/zapato-rojo.jpg",
  },
];

const form = document.forms[0];
const listado = document.getElementById("lista-de-productos");

const mostrarProducto = (array) => {
  listado.innerHTML = "";
  array.forEach((zapato) => {
    listado.innerHTML += `
  <div class="contenedorProducto">
  <div class="foto"><img src="${zapato.img}"></div>
  <div class="titulo">${zapato.nombre}</div>
  </div>
  `;
  });
};
const noHayProductos = document.querySelector("h2");
const filtro = document.querySelector("#filtro");
const selecTipo = document.querySelector("#tipo");
const selecColor = document.querySelector("#color");

form.onsubmit = (e) => {
  e.preventDefault();

  filtradoPorBusqueda = productos.filter((producto) => {
    let nombreProducto = producto.nombre.toLowerCase();
    // console.log(producto.nombre);
    // console.log(nombreProducto.includes(filtro.value));
    if (nombreProducto.includes(filtro.value)) {
      return producto;
    }
  });

  filtradoPorTipo = productos.filter((producto) => {
    return producto.tipo === selecTipo.value;
  });

  filtradoPorColor = productos.filter((producto) => {
    return producto.color === selecColor.value;
  });

  const noHayStock = () => {
    if (noHayProductos.className === "") {
      noHayProductos.classList.add("hidden");
    }
  };

  let filtradoColorTipo = [];
  if (selecTipo.value && selecColor.value && filtro.value) {
    filtradoTotal = productos.filter((producto) => {
      let nombreProducto = producto.nombre.toLowerCase();
      return (
        // console.log(
        selecTipo.value === producto.tipo &&
        selecColor.value === producto.color &&
        nombreProducto.includes(filtro.value)
      );
    });
    noHayStock();
    mostrarProducto(filtradoTotal);
  } else if (selecTipo.value && selecColor.value) {
    filtradoColorTipo = productos.filter((producto) => {
      return (
        selecTipo.value === producto.tipo && selecColor.value === producto.color
      );
    });
    noHayStock();
    mostrarProducto(filtradoColorTipo);
  } else if (filtro.value && selecColor.value) {
    filtroBusquedaColor = productos.filter((producto) => {
      let nombreProducto = producto.nombre.toLowerCase();
      return (
        selecTipo.value === producto.tipo &&
        nombreProducto.includes(filtro.value)
      );
    });
  } else if (filtro.value && selecTipo.value) {
    let nombreProducto = producto.nombre.toLowerCase();
    filtroBusquedaTipo = productos.filter((producto) => {
      return (
        selecColor.value === producto.color &&
        nombreProducto.includes(filtro.value)
      );
    });
  } else if (filtro.value) {
    mostrarProducto(filtradoPorBusqueda);
  } else if (selecTipo.value) {
    noHayStock();
    mostrarProducto(filtradoPorTipo);
  } else if (selecColor.value) {
    noHayStock();
    mostrarProducto(filtradoPorColor);
  } else {
    noHayStock();
    mostrarProducto(productos);
  }
  if (listado.innerHTML === "") {
    noHayProductos.classList.remove("hidden");
  }
};
