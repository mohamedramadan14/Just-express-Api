import prisma from "../db";

/** Get All Products realted to current signed in user*/

export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });
  res.json({ data: user.products });
};

/** Get specific product based on id */

export const getProduct = async (req, res) => {
  const productId = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id: productId,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};

/** add/create new Product */

export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });
    res.json({ data: product });
  } catch (error) {
    next(error);
  }
};

/** update existing product */
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(typeof productId);
  const updatedProduct = await prisma.product.update({
    where: {
      id_belongsToId: {
        id: productId,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({ data: updatedProduct });
};

/** delete existing Product */
export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const deletedproduct = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: productId,
        belongsToId: req.user.id,
      },
    },
  });
  res.json({ data: deletedproduct });
};
