export const  searchConversation=async(req,res)=>{
    const query = req.query.query.toLowerCase();
    try {
      const conversations = await Conversation.find({
        fullName: { $regex: query, $options: 'i' },
      });
      res.json(conversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      res.status(500).send('Server error');
    }
  };