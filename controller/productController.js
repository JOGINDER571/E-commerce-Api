import product from "../modal/productModal.js";

//creating the product by post method
export const createProduct = async (request, response) => {
  try {
    //destructure the request body
    const { name, quantity } = request.body;
    // check all fields are not empty
    if (!name || !quantity) {
      return response.status(401).json({ error: "fill the properly" });
    }
    //here save the data in database
    const newProduct = await product.create({
      name,
      quantity,
    });

    if (newProduct) {
      return response.status(201).json({
        success: true,
        data: newProduct,
        message: "created",
      });
    } else {
      return response.status(400).json({
        error: "not created in",
      });
    }
  } catch (error) {
    //return if error
    return response.status(400).json({
      error: "not created",
    });
  }
};

//here get the all product by get method
export const getProducts = async (request, response) => {
  try {
    //here find the all product from database 
    const findProduct = await product.find({});
    //   
    if (findProduct.length > 0) {
      response.status(200).json({
        success: true,
        data: findProduct,
        message: "product listed here",
      });
    } else {
      response.status(400).json({
        success: false,
        data: "no product found",
      });
    }
  } catch (error) {
    response.status(400).json({ error });
  }
};

// get product by id
export const getProductById = async (request, response) => {
    //find the specific product by id
  const foundProduct = await product.findById(request.params.id);
  if (foundProduct) {
    response.status(200).json({
      success: true,
      data: foundProduct,
    });
  } else {
    response.status(404).json({
      success: false,
      data: "no particular product found",
    });
  }
};

//update the product
export const updateProduct = async (request, response) => {
  try {
    //take the id and query by destructuring the body
    const { id: pid } = request.params;
    const {number} = request.query;
   //number must be greater than 0
    if (!number) {
      response.status(402).json({ error: "write correctly" });
    }
    const prod = await product.findOne({ _id: pid });
    //add the number
    let newQ = prod.quantity + (+number);
    
    if (newQ > 0) {
        //store the new quantity in the database
      const updatedQ = await product.findByIdAndUpdate(
        { _id: pid },
        { quantity: newQ },
        { new: true }
      );
      response.status(200).json({
        success: true,
        data: updatedQ,
        message: "successfully updated",
      });
    } else {
      response.status(401).json({
        success: false,
        message: "quantity can not be less than or = 0",
      });
    }
  } catch (error) {
    return response.status(401).json({ error: "Process Failed" });
  }

  
};

// delete product

export const deleteProduct = async (request, response) => {
    //delete the specific product by id
  const delProduct = await product.findByIdAndDelete(request.params.id);
  if (delProduct) {
    response.status(200).json({
      success: true,
      message: "deleted",
    });
  } else {
    response.status(404).json({
      success: false,
      data: "no particular product found",
    });
  }
};
