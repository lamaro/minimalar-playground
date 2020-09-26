
import auth0 from 'lib/auth0';

export default async (req, res) => {
    try {
        res.status(200).json({});
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }

};