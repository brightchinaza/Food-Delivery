import userModel from "../models/userModle.js"


// Add item to cart
const addToCart = async (req, res) => {
   try {
     const { userId, itemId } = req.body;
 
     // Directly update and fetch the user's cart data
     const updatedUser = await userModel.findByIdAndUpdate(
       userId,
       {
         $inc: { [`cartData.${itemId}`]: 1 }, // Increment item quantity by 1
       },
       { new: true } // Return the updated document
     );
 
     if (!updatedUser) {
       return res.status(404).json({ success: false, message: "User not found" });
     }
 
     res.json({ success: true, message: "Added to cart", cartData: updatedUser.cartData });
   } catch (error) {
     console.error("Error adding to cart:", error);
     res.status(500).json({ success: false, message: "Error adding to cart" });
   }
 };
 
 // Remove item from cart
 const removeFromCart = async (req, res) => {
   try {
     const { userId, itemId } = req.body;
 
     const user = await userModel.findById(userId);
     if (!user) {
       return res.status(404).json({ success: false, message: "User not found" });
     }
 
     const cartData = user.cartData;
 
     if (cartData[itemId] > 0) {
       cartData[itemId] -= 1;
     }
 
     // Remove item from cart if quantity is zero
     if (cartData[itemId] === 0) {
       delete cartData[itemId];
     }
 
     await userModel.findByIdAndUpdate(userId, { cartData });
 
     res.json({ success: true, message: "Removed from cart", cartData });
   } catch (error) {
     console.error("Error removing from cart:", error);
     res.status(500).json({ success: false, message: "Error removing from cart" });
   }
 };
 
 // Fetch user's cart data
 const getCart = async (req, res) => {
   try {
     const { userId } = req.body;
 
     const user = await userModel.findById(userId);
     if (!user) {
       return res.status(404).json({ success: false, message: "User not found" });
     }
 
     res.json({ success: true, cartData: user.cartData });
   } catch (error) {
     console.error("Error fetching cart data:", error);
     res.status(500).json({ success: false, message: "Error fetching cart data" });
   }
 };
 
 export { addToCart, removeFromCart, getCart };
 