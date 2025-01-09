import express from "express";
import {
  toggleLike,
  activateAd,
  getAllProductAds,
  getProductAdById,
  updateProductAd,
  deleteProductAd,
  createProductAd, uploadImages, processImages,getUserAds,get_need_to_refresh_ads,getActiveAds,getInActiveAds,getFavoriteAds
} from "../controllers/product.controller";  // Update the path based on your project structure
import { runInContext } from "vm";
import { isAuthenticated } from "../middleware/auth";



const productAdRouter = express.Router(); // Named the router for better identification

 productAdRouter.post("/create-product", uploadImages, processImages, createProductAd);
// productAdRouter.post("/create-product", createProductAd);

productAdRouter.get("/get-my-FavoriteAds",isAuthenticated, getFavoriteAds);
productAdRouter.get("/getall-products", getAllProductAds);
productAdRouter.get("/find-by-user-id/:userId", getUserAds);
productAdRouter.get("/getMyNeed_to_refresh_ads",isAuthenticated ,get_need_to_refresh_ads);//needtorefresh
productAdRouter.get("/getMyActiveAds",isAuthenticated ,getActiveAds);
productAdRouter.get("/getMyInactiveAds",isAuthenticated ,getInActiveAds);
productAdRouter.post('/activateAd/:adId', isAuthenticated, activateAd);

productAdRouter.get("/getproduct/:id", getProductAdById);


productAdRouter.put("update-product/:id", updateProductAd);
productAdRouter.delete('/delete-product/:id', deleteProductAd);

productAdRouter.put('/like/:productId', toggleLike);

export default productAdRouter;
