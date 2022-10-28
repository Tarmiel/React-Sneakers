import React, { createContext, useCallback, useContext, useState, useMemo, useEffect } from "react";
import items from "../DB/items.json";

const ShopContext = createContext({
  favoriteItems: [], //ids of items in favorite
  cartItems: [], //ids of items in cart
  purchasedItems: [],
  toggleCartItem: () => {},
  toggleFavoriteItem: () => {},
  isInFavorite: () => false,
  isInCart: () => false,
  isCartOpen: false,
  toggleCart: () => {},
  totalPrice: 0, //total price of items in the cart
});

const ShopHook = () => {
  const [favoriteItems, setFavoriteItems] = useState(JSON.parse(localStorage.getItem("favoriteItems")) || []);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const [purchasedItems, setPurchasedItems] = useState(JSON.parse(localStorage.getItem("purchasedItems")) || []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
  }, [purchasedItems]);

  const isInFavorite = useCallback(
    (id) => {
      return favoriteItems.includes(id);
    },
    [favoriteItems]
  );

  const isInCart = useCallback(
    (id) => {
      return cartItems.includes(id);
    },
    [cartItems]
  );

  const createOrder = (ids) => {
    ids.forEach((id) => {
      addToPurchase(id);
    });
    setCartItems([]);
  };

  const addToPurchase = (id) => {
    if (!purchasedItems.includes(id)) setPurchasedItems((prev) => [...prev, id]);
  };
  const toggleFavoriteItem = (id) => {
    if (isInFavorite(id)) return setFavoriteItems((prev) => prev.filter((itemId) => id !== itemId));

    setFavoriteItems((prev) => [...prev, id]);
  };
  const toggleCartItem = (id) => {
    if (isInCart(id)) return setCartItems((prev) => prev.filter((itemId) => id !== itemId));

    setCartItems((prev) => [...prev, id]);
  };

  const totalPrice = useMemo(() => {
    return items.filter((item) => cartItems.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  return {
    favoriteItems,
    cartItems,
    toggleCartItem,
    toggleFavoriteItem,
    isInFavorite,
    isInCart,
    isCartOpen,
    setIsCartOpen,
    totalPrice,
    purchasedItems,
    addToPurchase,
    createOrder,
  };
};

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const hook = ShopHook();

  return <ShopContext.Provider value={hook}>{children}</ShopContext.Provider>;
};
