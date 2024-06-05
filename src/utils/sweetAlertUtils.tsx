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
<<<<<<< HEAD
    background:'#fefefe'

 
    
   
=======
    background:'#fdfdfd'
>>>>>>> 52feb4767bed2ba20aaa446f7ab351423300cf35
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

export const showSuccess = (title: string, text: string) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    iconColor: '#00ac28',
  
  });
};

