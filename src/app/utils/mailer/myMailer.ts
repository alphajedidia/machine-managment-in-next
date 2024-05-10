

export default function message (email_client,) = {
    from: 'votre-email@gmail.com',
    to: email_client,
    subject: 'Confirmation de location',
    text: `Bonjour ${nom_client},\n\nVotre location a été créée avec succès. Voici les détails :\n\nEngins loués:\n${engins.map(e => `${e.nom_engin}: ${e.quantite}`).join('\n')}\n\nPrix total: ${total} Ariary\n\nMerci de nous avoir choisis !`
};
