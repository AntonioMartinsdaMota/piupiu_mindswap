import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';

dbConnect();

export default async (req, res) => {

   const {id} = req.query;
   console.log(id);

    const method = req.method;

    switch (method) {
        case 'GET':
            try {
                const post = await Post.findById(id)

                if (!post) {
                    return res.status(404).json({
                        message: 'Post not found',
                    });
                }
                res.status(200).json(post);
            } catch (error) {
                res.status(500).json({
                    message: error.message,
                });

            }
            break;
    

        default:
            res.status(400).json({
                message: 'Bad request',
            });
    }
}









         


