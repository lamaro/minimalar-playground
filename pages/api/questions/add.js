import auth0 from 'lib/auth0';
import { firebase } from 'lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
    try {
        const { name, company, question } = req.body;

        //Add auth0
        const session = await auth0.getSession(req);
        if (!session || !session.user) {
            res.writeHead(302, {
              Location: '/api/login'
            });
            res.end();
            return;
        }

        const { user } = session
        const { name:username } = user

        //Agrego document en la collection de questions (usando firebase con async/await)
        const responseKey = await firebaseDB.ref('questions').push({
            username,
            name,
            company,
            question,
            highlight: false
        }).getKey()

        //Devuelvo el usuario recien creado
        res.status(200).json({"status":"added", "id": responseKey, username, name, company, question });

    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }

};