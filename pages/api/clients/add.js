import auth0 from 'lib/auth0';
import { firebase } from 'lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
    try {
        const { name, company, question } = req.body;
        //Add auth0

        // const session = await auth0.getSession(req);
        // if (!session || !session.user) {
        //     res.writeHead(302, {
        //       Location: '/api/login'
        //     });
        //     res.end();
        //     return;
        // }

        //Agrego registro en la collection de questions
        const responseKey = await firebaseDB.ref('questions').push({
            name,
            company,
            question,
            highlight: false
        }).getKey()
        res.status(200).json({ 'id': responseKey, name, company, question });

    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }

};