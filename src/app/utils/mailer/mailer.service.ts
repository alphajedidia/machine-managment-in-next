import * as nodemailer from 'nodemailer'

export default async function SendEmail(nom_client: string, email_client: string, engins: { nom_engin: string, quantite: number }[], total: number): Promise<void> {
    const transporteur = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mihajasoaalain85@gmail.com',
            pass: 'zqzwmqukizaqwszh'
        }
    });

    const message = {
        from: 'mihajasoaalain85@gmail.com',
        to: email_client,
        subject: 'Confirmation de location',
        text: `Bonjour ${nom_client},\n\nVotre location a été créée avec succès. Voici les détails :\n\nEngins loués:\n${engins.map(e => `${e.nom_engin}: ${e.quantite}`).join('\n')}\n\nPrix total: ${total} Ariary\n\nMerci de nous avoir choisis !`
    };
    try {
        await transporteur.sendMail(message);
        console.log("email envoyer")
    } catch (error) {
        console.error(error)
    }
}