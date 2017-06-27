'use strict';

const state={
  alumna: null
}

const alumnado = $.get('https://laboratoria.cuadra.co:9339/api/v1/students/',(data) =>{
  state.alumna = data;
  alumnas(state.alumna);
});

const lista = $('ol');

const alumnas = (alumna) =>{
  alumna.forEach((element)=>{
    const li = $(`<li class="col-12"><span class="col-5">${element.name}</span><input class="col-2"  type="checkbox"></li> `)
    lista.append(li);
});
}
