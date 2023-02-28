const a_sobre_mi = document.getElementById("a_sobre_mi");
a_sobre_mi.addEventListener( 'mouseover' , changeBackground('#ccc', 'sobre_mi') , false);
a_sobre_mi.addEventListener( 'mouseout' , changeBackground('#fff', 'sobre_mi'), false );

const a_experiencia = document.getElementById("a_experiencia");
a_experiencia.addEventListener( 'mouseover' , changeBackground('#ccc', 'experiencia') , false);
a_experiencia.addEventListener( 'mouseout' , changeBackground('#fff', 'experiencia') , false);

const a_educacion = document.getElementById("a_educacion");
a_educacion.addEventListener( 'mouseover' , changeBackground('#ccc', 'educacion') , false);
a_educacion.addEventListener( 'mouseout' , changeBackground('#fff', 'educacion') , false);

const a_conocimientos = document.getElementById("a_conocimientos");
a_conocimientos.addEventListener( 'mouseover' , changeBackground('#ccc', 'conocimientos'), false );
a_conocimientos.addEventListener( 'mouseout' , changeBackground('#fff', 'conocimientos') , false);

function changeBackground(color,id) {
    document.getElementById(id).style.background = color;
}
