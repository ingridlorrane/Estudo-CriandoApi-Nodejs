"use strict";
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = async (req, res) => {
  const products = await Product.find(
    {
      active: true,
    },
    "title price slug"
  );
  res.json(products);
};

exports.getBySlug = async (req, res) => {
  const product = await Product.findOne(
    {
      slug: req.params.slug,
      active: true,
    },
    "title description price slug tags"
  );
  res.json(product);
};

exports.getById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

exports.getByTag = async (req, res) => {
  const products = await Product.find(
    {
      tags: req.params.tag,
      active: true,
    },
    "title description price slug tags"
  );
  res.json(products);
};

exports.create = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      slug: req.body.slug,
    },
  });
  res.sendStatus(204);
};

exports.delete = async (req, res) => {
  await Product.findOneAndRemove(req.params.id);
  res.sendStatus(204);
};
