'use strict';

const state={
  alumna: null
}

const alumnado = $.get('http://laboratoria.cuadra.co:9339/api/v1/students/',(data) =>{
  state.alumna = data;
  alumnas(state.alumna);
});

const lista = $('ol');

const alumnas = (alumna) =>{
  alumna.forEach((element)=>{
    const li = $(`<li class="col-4">${element.name}<input type="checkbox"></li> `)
    lista.append(li);
});
}
