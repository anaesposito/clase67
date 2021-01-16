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
  //// nombre del zapato en minuscula
  let nombreProducto = (producto) => {
    return producto.nombre.toLowerCase();
  };
  //// funcion q valida si en el input hay value
  let productoBuscado = (producto) => {
    return nombreProducto(producto).includes(filtro.value);
  };

  ///filtro por busqueda
  filtradoPorBusqueda = productos.filter((producto) => {
    if (productoBuscado(producto)) {
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

  if (selecTipo.value && selecColor.value && filtro.value) {
    filtradoTotal = productos.filter((producto) => {
      return (
        selecTipo.value === producto.tipo &&
        selecColor.value === producto.color &&
        productoBuscado(producto)
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
      nombreProducto(producto);
      return selecTipo.value === producto.tipo && productoBuscado(producto);
    });
  } else if (filtro.value && selecTipo.value) {
    filtroBusquedaTipo = productos.filter((producto) => {
      return selecColor.value === producto.color && productoBuscado(producto);
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
