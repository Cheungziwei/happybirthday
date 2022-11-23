import express from 'express';
var router = express.Router();

router.post('/', async (req, res) =>{
    try{
      const newDream = new req.models.Dream({
        dream: req.body.dream
      })
  
      await newDream.save()
  
      res.send({"status": "success"})
    } catch(error){
      console.log("Error saving new post", error)
      res.status(500).json({"status": "error", "error": error})
    }
  });


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
