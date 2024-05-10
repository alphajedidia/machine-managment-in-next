import Swal, { SweetAlertResult } from 'sweetalert2';

export const ConfirmationDialogue = (title: string, text: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    iconColor: '#ffde00',
    showCancelButton: true,
    confirmButtonColor: '#fec60d',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Annuler',
    confirmButtonText: 'Oui, supprimer !'
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

export const showSuccessDeleteEntrepot = () => {
  Swal.fire({
    title: 'Supprimé !',
    text: "L'entrepôt a été supprimé avec succès !",
    icon: 'success',
    iconColor: '#00ac28' 
  });
};
export const showSuccessAddEntrepot  = () => {
  Swal.fire({
    title: 'Ajouté !',
    text: "L'entrepôt a été ajouté avec succès !",
    icon: 'success',
    iconColor: '#00ac28' 
  });
};
export const showSuccessAddEngin  = () => {
  Swal.fire({
    title: 'Ajouté !',
    text: "L'engin a été ajouté avec succès !",
    icon: 'success',
    iconColor: '#00ac28' 
  });
};