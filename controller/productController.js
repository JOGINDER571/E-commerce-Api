import product from "../modal/productModal.js";

//creating the product by post method
export const createProduct = async (request, response) => {
  try {
    const { name, quantity } = request.body;

    if (!name || !quantity) {
      return response.status(401).json({ error: "fill the properly" });
    }
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
    return response.status(400).json({
      error: "not created",
    });
  }
};

//here get the all product by get method
export const getProducts = async (request, response) => {
  try {
    const findProduct = await product.find({});
    //   console.log(tables);
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
    const { id: pid } = request.params;
    const {number} = request.query;
   
    if (!number) {
      response.status(402).json({ error: "write correctly" });
    }
    const prod = await product.findOne({ _id: pid });
    
    let newQ = prod.quantity + (+number);
    console.log(prod.quantity+ (+number));
    if (newQ > 0) {
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

  //   try {
  //     const id = request.params.id;
  //     let update = request.body;
  //     const options={new:true};
  //     const result =await product.findByIdAndUpdate(id, update,options);
  //     if (result) {
  //       return response.status(200).json({ message: "updated successfully" });
  //     } else {
  //       return response.status(402).json({ error: "Process Failed" });
  //     }
  //   } catch (error) {
  //     return response.status(402).json({ error: "Process Failed" });
  //   }
};

// delete product
export const deleteProduct = async (request, response) => {
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
