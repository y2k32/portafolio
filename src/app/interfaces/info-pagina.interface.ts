interface InfoPaginaInterface {
  titulo?: string;
  nombre?: string;
  datospersonales?: Datospersonales;
  conocimientodev?: Conocimientodev;
  formacion?: Formacion;
}

interface Formacion {
  titulo?: string;
  escuela?: string;
  anio?: string;
}

interface Conocimientodev {
  titulo?: string;
  lenguajes?: string;
  libfram?: string;
  bd?: string;
}

interface Datospersonales {
  titulo?: string;
  ciudad?: string;
  colonia?: string;
  calle?: string;
  numero_calle?: string;
  numero_tel?: string;
  email?: string;
  estado_civil?: string;
}