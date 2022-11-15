import { body } from "express-validator";
import prisma from "../db";

export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  console.log(products);
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);
  console.log("updates: ", updates);
  res.json({ data: updates });
};

export const getUpdate = async (req, res) => {
  const updateId = req.params.id;
  const update = await prisma.update.findFirst({
    where: {
      id: updateId,
    },
  });
  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
  //const { productId, ...rest } = req.body;
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });
  if (!product) {
    res.json({ message: null });
  }
  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: { connect: { id: product.id } },
    },
  });
  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);
  const match = updates.find((update) => update.id === req.params.id);
  if (!match) {
    res.json({ message: "Null" });
  }
  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({ data: updatedUpdate });
};

export const deleteupdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);
  const match = updates.find((update) => update.id === req.params.id);
  if (!match) {
    res.json({ message: "Null" });
  }
  const deletedUpdate = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    data: deletedUpdate,
  });
};
