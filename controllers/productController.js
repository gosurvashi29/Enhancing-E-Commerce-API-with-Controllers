const getProducts=(req, res) => {
  
    res.send("Adding a new product");
  };



  const getProductsById=(req, res) => {
  
    res.send(`Fetching product with ID: ${req.params.id}`);
  };



  const postProducts=(req, res) => {
    res.send("Adding a new product");
   };

   const putProducts=(req, res) => {
    res.send("Put request called.");
   };
   

   const deleteProducts=(req, res) => {
    res.send("Delete request called.");
   };

  module.exports={
    getProducts,
    getProductsById,
    postProducts,putProducts,
    deleteProducts
  }