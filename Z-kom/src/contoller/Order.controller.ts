import { Request, Response } from "express";
import { get } from "lodash";
import {
  createOrder,
  findOrder,
  findOrders,
  findAndUpdate,
  deleteOrder,
} from "../service/Order.service";

export async function createOrderHandler(req: Request, res: Response) {
  const body = req.body;
  const order = await createOrder({ ...body });
  return res.send(order);
}

export async function updateOrderHandler(req: Request, res: Response) {
  const orderId = get(req, "params.orderId");
  const update = req.body;

  const order = await findOrder({ orderId });

  if (!order) {
    return res.sendStatus(404);
  }

  const updatedPost = await findAndUpdate({ orderId }, update, { new: true });

  return res.send(updatedPost);
}

export async function getOrderHandler(req: Request, res: Response) {
  const orderId = get(req, "params.orderId");

  const order = await findOrder({ _id: orderId });

  if (!order) {
    return res.sendStatus(404);
  }

  return res.send(order);
}

export async function getOrderByClientHandler(req: Request, res: Response) {
  const clientId = get(req, "params.clientId");

  const orders = await findOrders({ clientId: clientId });

  if (!orders) {
    return res.sendStatus(404);
  }

  return res.send(orders);
}

export async function deleteOrderHandler(req: Request, res: Response) {
  const orderId = get(req, "params.postId");

  const order = await findOrder({ orderId });

  if (!order) {
    return res.sendStatus(404);
  }

  await deleteOrder({ orderId });

  return res.sendStatus(200);
}
