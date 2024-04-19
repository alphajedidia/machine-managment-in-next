async function envoyerEmail(nom_client: string, email_client: string, engins: { nom_engin: string, quantite: number }[], total: number): Promise<void> {
    const transporteur = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'votre-email@gmail.com',
            pass: 'votre-mot-de-passe'
        }
    });

    const message = {
        from: 'votre-email@gmail.com',
        to: email_client,
        subject: 'Confirmation de location',
        text: `Bonjour ${nom_client},\n\nVotre location a été créée avec succès. Voici les détails :\n\nEngins loués:\n${engins.map(e => `${e.nom_engin}: ${e.quantite}`).join('\n')}\n\nPrix total: ${total} euros\n\nMerci de nous avoir choisis !`
    };

    // Envoi de l'e-mail
    await transporteur.sendMail(message);
}