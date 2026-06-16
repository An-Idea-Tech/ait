import * as clientService from "../services/client.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

export const adminGetAll = asyncHandler(async (req, res) => {
  const data = await clientService.adminGetAllClients();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Clients fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await clientService.createClient(req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Client created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await clientService.updateClient(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Client updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await clientService.deleteClient(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Client deleted successfully"));
});
