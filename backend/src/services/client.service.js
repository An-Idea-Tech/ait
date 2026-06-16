import Client from "../models/client.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { deleteFromCloudinary, buildImageObject } from "./upload.service.js";

const BASE_FILTER = { isDeleted: false };

export const getAllClients = async () => {
  return Client.find({ ...BASE_FILTER, isPublished: true })
    .select("name logo website order")
    .sort({ order: 1 })
    .lean();
};

export const adminGetAllClients = async () => {
  return Client.find(BASE_FILTER).sort({ order: 1 }).lean();
};

export const createClient = async (data, file) => {
  if (!file) throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Logo image is required", ERROR_CODES.UPLOAD_ERROR);
  const logo = buildImageObject(file);
  return Client.create({ ...data, logo });
};

export const updateClient = async (id, data, file) => {
  const client = await Client.findOne({ _id: id, ...BASE_FILTER });
  if (!client) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Client not found", ERROR_CODES.NOT_FOUND);

  if (file) {
    if (client.logo?.publicId) await deleteFromCloudinary(client.logo.publicId);
    data.logo = buildImageObject(file);
  }

  return Client.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteClient = async (id) => {
  const client = await Client.findOne({ _id: id, ...BASE_FILTER });
  if (!client) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Client not found", ERROR_CODES.NOT_FOUND);
  if (client.logo?.publicId) await deleteFromCloudinary(client.logo.publicId);
  client.isDeleted = true;
  await client.save();
};
