


  const getCartById=(req, res) => {
  
    res.send(`Fetching cart for user with ID: ${req.params.userId}`);
  };



  const postCart=(req, res) => {
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
   };

   
  module.exports={
    
    getCartById,
    postCart
  }