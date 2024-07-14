import Swal from "sweetalert2";

const Alert = (mssg, ttl, ico, styl)=>{
    Swal.fire({
        title: ttl,
        text: mssg,
        icon: ico,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: styl
      });
};

export default Alert