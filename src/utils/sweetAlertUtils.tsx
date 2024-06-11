import Swal, { SweetAlertResult } from 'sweetalert2';

export const ConfirmationDialogue = (title: string, text: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    iconColor: '#ffde00',
    showCancelButton: true,
    cancelButtonColor: '#fec60d',
    confirmButtonColor: '#d33',
    cancelButtonText: 'Annuler',
    confirmButtonText: 'Oui, supprimer !',
    background:'#fdfdfd'
  });
};

export const showErrorAddEntrepot = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    iconColor: '#e7473c',
    text: "Erreur lors de la soumission du formulaire",
    // footer: '<a href="#">Why do I have this issue?</a>'
  });
};
export const showSuccesToCart=() =>{
  return Swal.fire({
    position: "top",
    icon: "success",
    title: "Ajouter à la demande",
    showConfirmButton: false,
    timer: 1500
  });
}

export const showSuccess = (title: string, text: string) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    iconColor: '#00ac28',
  
  });
};

