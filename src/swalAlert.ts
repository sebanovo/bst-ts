import Swal, { SweetAlertIcon } from "sweetalert2";

export async function promptSwal(title: string) {
  return await Swal.fire({
    title,
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
  });
}

export async function confirDelete() {
  return await Swal.fire({
    title: "Estas seguró?",
    text: "No podras revertir esto!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, reinicia!",
  });
}

export function messageSwal(title: string) {
  Swal.fire({
    title,
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
}

interface checkProp {
  title: string;
  text: string;
  icon: SweetAlertIcon;
}

export function check({ title, text, icon }: checkProp) {
  Swal.fire({
    title,
    text,
    icon,
  });
}
