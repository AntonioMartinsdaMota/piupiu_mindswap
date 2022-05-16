import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';



dbConnect();

export default async (req, res) => {
 const method = req.method;

    switch (method) {
        case 'GET':
            try {
                const notes = await Note.find();
                res.status(200).json({success: true, data: notes});
            }
            catch (e) {
                res.status(400).json({method: get,success: false, error: e.message});
                
            }
            break;
        case 'POST':
            try {
                const note = await Note.create(req.body);
                res.status(201).json({success: true, data: note});
            }
            catch (e) {
                res.status(400).json({success: false, error: e.message});
            }
            break;
        default:
            res.status(400).json({success: false, error: 'Bad request'});
    }
}

