/**
 * CraveBite - Food Delivery Application Logic
 * Pure Vanilla JavaScript with LocalStorage Persistence
 */

// ============================================================================
// Food Menu Catalog
// ============================================================================
const FOOD_MENU = [
  {
    id: "dish-1",
    name: "Truffle Double Smash Burger",
    category: "burger",
    price: 13.99,
    rating: 4.9,
    reviews: 240,
    restaurant: "Burger Craftsman",
    deliveryTime: "20-25 min",
    badge: "Bestseller",
    description: "Two 100% Angus beef smashed patties, black truffle aioli, melted aged cheddar, and caramelized onions on a brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-2",
    name: "Woodfired Margherita Pizza",
    category: "pizza",
    price: 14.50,
    rating: 4.8,
    reviews: 185,
    restaurant: "Napoli Firewood Oven",
    deliveryTime: "25-30 min",
    badge: "Chef's Pick",
    description: "San Marzano tomato base, fresh buffalo mozzarella, fragrant sweet basil leaves, and a drizzle of cold-pressed virgin olive oil.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-3",
    name: "Salmon Teriyaki Poke Bowl",
    category: "asian",
    price: 16.20,
    rating: 4.9,
    reviews: 310,
    restaurant: "Tokyo Bowl & Roll",
    deliveryTime: "20-30 min",
    badge: "Healthy",
    description: "Fresh Atlantic sashimi salmon, sushi rice, avocado slices, edamame, pickled ginger, and homemade sesame teriyaki sauce.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-4",
    name: "Artisan Pepperoni & Hot Honey",
    category: "pizza",
    price: 15.99,
    rating: 4.9,
    reviews: 420,
    restaurant: "Napoli Firewood Oven",
    deliveryTime: "25-35 min",
    badge: "Hot Deal",
    description: "Crispy cup-and-char pepperoni, rich mozzarella blend, crushed chili flakes, and hot spicy wildflower honey.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-5",
    name: "Crispy Korean BBQ Wings (8pcs)",
    category: "burger",
    price: 11.50,
    rating: 4.7,
    reviews: 142,
    restaurant: "Seoul Street Bites",
    deliveryTime: "15-25 min",
    badge: "Crispy",
    description: "Double-fried chicken wings coated in sweet gochujang glaze, toasted sesame seeds, and scallions. Served with ranch dip.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-6",
    name: "Mediterranean Greek Crunch Salad",
    category: "salads",
    price: 10.99,
    rating: 4.8,
    reviews: 95,
    restaurant: "Green Leaf Kitchen",
    deliveryTime: "15-20 min",
    badge: "Vegan",
    description: "Crisp romaine, Kalamata olives, diced cucumbers, heirloom cherry tomatoes, creamy feta cheese block, and oregano lemon dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-7",
    name: "Spicy Crunch Dragon Sushi Roll",
    category: "asian",
    price: 15.00,
    rating: 4.9,
    reviews: 280,
    restaurant: "Tokyo Bowl & Roll",
    deliveryTime: "20-30 min",
    badge: "Bestseller",
    description: "Tempura shrimp, spicy bluefin tuna, cucumber, topped with avocado wrap, tobiko caviar, unagi eel sauce, and spicy sriracha mayo.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-8",
    name: "Avocado & Quinoa Power Bowl",
    category: "salads",
    price: 12.50,
    rating: 4.7,
    reviews: 84,
    restaurant: "Green Leaf Kitchen",
    deliveryTime: "15-25 min",
    badge: "Organic",
    description: "Organic tricolor quinoa, roasted sweet potatoes, organic baby spinach, roasted chickpeas, Hass avocado, and tahini dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-9",
    name: "Molten Belgian Chocolate Lava Cake",
    category: "desserts",
    price: 7.99,
    rating: 5.0,
    reviews: 360,
    restaurant: "Sweet Treats Atelier",
    deliveryTime: "15-20 min",
    badge: "Dessert",
    description: "Warm dark chocolate sponge filled with flowing molten chocolate fudge. Served with Madagascar vanilla bean gelato cup.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-10",
    name: "New York Creamy Berry Cheesecake",
    category: "desserts",
    price: 6.99,
    rating: 4.8,
    reviews: 175,
    restaurant: "Sweet Treats Atelier",
    deliveryTime: "15-20 min",
    badge: "Dessert",
    description: "Classic velvety New York baked cheesecake over graham cracker crust, topped with wild strawberries and raspberry coulis.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-11",
    name: "Ceremonial Iced Matcha Latte",
    category: "drinks",
    price: 5.25,
    rating: 4.9,
    reviews: 215,
    restaurant: "Zen Cafe Co.",
    deliveryTime: "10-15 min",
    badge: "Drink",
    description: "Authentic Kyoto ceremonial stone-ground matcha whisked with oat milk and lightly sweetened with organic agave nectar.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dish-12",
    name: "Tropical Mango Passion Smoothie",
    category: "drinks",
    price: 5.95,
    rating: 4.8,
    reviews: 130,
    restaurant: "Zen Cafe Co.",
    deliveryTime: "10-15 min",
    badge: "Drink",
    description: "Fresh Alphonso mango chunks blended with passion fruit purée, Greek yogurt, coconut water, and a touch of raw clover honey.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80"
  }
];

// ============================================================================
// State Management
// ============================================================================
const STORAGE_KEYS = {
  CART: "cravebite_cart_items_v1",
  PROMO: "cravebite_applied_promo"
};

let cart = []; // [{ dishId, quantity }]
let currentCategory = "all";
let currentSearch = "";
let appliedDiscount = 0; // 0.3 for 30% discount
let promoCodeName = "";

// ============================================================================
// DOM References
// ============================================================================
const foodGrid = document.getElementById("foodGrid");
const emptyMenu = document.getElementById("emptyMenu");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");
const itemCountDisplay = document.getElementById("itemCountDisplay");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetFilterBtn = document.getElementById("resetFilterBtn");

// Cart Elements
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartBadge = document.getElementById("cartBadge");
const cartDrawerCount = document.getElementById("cartDrawerCount");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const subtotalAmount = document.getElementById("subtotalAmount");
const discountRow = document.getElementById("discountRow");
const discountAmount = document.getElementById("discountAmount");
const deliveryFeeAmount = document.getElementById("deliveryFeeAmount");
const taxAmount = document.getElementById("taxAmount");
const totalAmount = document.getElementById("totalAmount");
const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoFeedback = document.getElementById("promoFeedback");
const checkoutBtn = document.getElementById("checkoutBtn");

// Modal Elements
const checkoutModalBackdrop = document.getElementById("checkoutModalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const checkoutFormStep = document.getElementById("checkoutFormStep");
const orderSuccessStep = document.getElementById("orderSuccessStep");
const orderForm = document.getElementById("orderForm");
const confirmedOrderId = document.getElementById("confirmedOrderId");
const trackDoneBtn = document.getElementById("trackDoneBtn");

// Location & Offers
const currentLocation = document.getElementById("currentLocation");
const heroOffersBtn = document.getElementById("heroOffersBtn");
const toastContainer = document.getElementById("toastContainer");

// ============================================================================
// Initialization
// ============================================================================
function initApp() {
  loadCartFromStorage();
  renderFoodMenu();
  updateCartUI();
  bindEvents();
}

// ----------------------------------------------------------------------------
// Local Storage Handling
// ----------------------------------------------------------------------------
function loadCartFromStorage() {
  const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      console.error("Cart parsing error:", e);
      cart = [];
    }
  }

  const savedPromo = localStorage.getItem(STORAGE_KEYS.PROMO);
  if (savedPromo === "CRAVE30") {
    appliedDiscount = 0.3;
    promoCodeName = "CRAVE30";
    promoInput.value = "CRAVE30";
  }
}

function saveCartToStorage() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
}

// ============================================================================
// Menu Rendering
// ============================================================================
function getFilteredDishes() {
  return FOOD_MENU.filter((item) => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch =
      currentSearch.trim() === "" ||
      item.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.restaurant.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function renderFoodMenu() {
  const dishes = getFilteredDishes();
  foodGrid.innerHTML = "";

  if (dishes.length === 0) {
    emptyMenu.style.display = "block";
    itemCountDisplay.textContent = "0 dishes found";
    return;
  }

  emptyMenu.style.display = "none";
  itemCountDisplay.textContent = `${dishes.length} ${dishes.length === 1 ? "dish" : "dishes"} available`;

  dishes.forEach((dish) => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.dataset.id = dish.id;

    card.innerHTML = `
      <div class="food-img-wrap">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
        <span class="food-badge">${dish.badge}</span>
        <div class="delivery-badge">
          <i class="fa-solid fa-clock"></i>
          <span>${dish.deliveryTime}</span>
        </div>
      </div>
      <div class="food-info">
        <div class="food-meta">
          <span class="restaurant-name">${dish.restaurant}</span>
          <div class="food-rating">
            <i class="fa-solid fa-star"></i>
            <span>${dish.rating} (${dish.reviews})</span>
          </div>
        </div>
        <h4 class="food-title">${dish.name}</h4>
        <p class="food-desc">${dish.description}</p>
        <div class="food-bottom">
          <span class="food-price">$${dish.price.toFixed(2)}</span>
          <button class="btn-add-cart" data-id="${dish.id}">
            <i class="fa-solid fa-plus"></i>
            <span>Add</span>
          </button>
        </div>
      </div>
    `;

    foodGrid.appendChild(card);
  });
}

// ============================================================================
// Cart Logic & Drawer
// ============================================================================
function addToCart(dishId) {
  const existing = cart.find((item) => item.dishId === dishId);
  const dish = FOOD_MENU.find((d) => d.id === dishId);

  if (!dish) return;

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ dishId, quantity: 1 });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added ${dish.name} to cart!`);
}

function updateCartQuantity(dishId, delta) {
  const index = cart.findIndex((item) => item.dishId === dishId);
  if (index === -1) return;

  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  // Update badges
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalCount;
  cartDrawerCount.textContent = `${totalCount} ${totalCount === 1 ? "item" : "items"}`;

  // Render Cart Items
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your bag is empty</h4>
        <p>Looks like you haven't added anything yet. Explore delicious meals from our menu!</p>
      </div>
    `;
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = "0.5";
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = "1";

    cart.forEach((cartItem) => {
      const dish = FOOD_MENU.find((d) => d.id === cartItem.dishId);
      if (!dish) return;

      const itemTotal = (dish.price * cartItem.quantity).toFixed(2);

      const el = document.createElement("div");
      el.className = "cart-item";
      el.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h5 class="cart-item-title">${dish.name}</h5>
          <span class="cart-item-price">$${itemTotal}</span>
        </div>
        <div class="cart-qty-ctrls">
          <button class="qty-btn btn-minus" data-id="${dish.id}">-</button>
          <span class="qty-display">${cartItem.quantity}</span>
          <button class="qty-btn btn-plus" data-id="${dish.id}">+</button>
        </div>
      `;
      cartItemsContainer.appendChild(el);
    });
  }

  // Calculate Totals
  calculateOrderTotals();
}

function calculateOrderTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const dish = FOOD_MENU.find((d) => d.id === item.dishId);
    return sum + (dish ? dish.price * item.quantity : 0);
  }, 0);

  // Delivery fee: $2.99, free if subtotal >= 30, $0 if empty cart
  let deliveryFee = subtotal === 0 ? 0 : subtotal >= 30 ? 0 : 2.99;
  const discount = subtotal * appliedDiscount;
  const tax = subtotal * 0.08; // 8% tax
  const total = Math.max(0, subtotal - discount + deliveryFee + tax);

  subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;

  if (appliedDiscount > 0 && subtotal > 0) {
    discountRow.style.display = "flex";
    discountAmount.textContent = `-$${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = "none";
  }

  deliveryFeeAmount.textContent = deliveryFee === 0 && subtotal > 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`;
  taxAmount.textContent = `$${tax.toFixed(2)}`;
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

// ----------------------------------------------------------------------------
// Promo Code Handler
// ----------------------------------------------------------------------------
function handleApplyPromo() {
  const code = promoInput.value.trim().toUpperCase();

  if (code === "CRAVE30") {
    appliedDiscount = 0.3;
    promoCodeName = "CRAVE30";
    localStorage.setItem(STORAGE_KEYS.PROMO, "CRAVE30");
    promoFeedback.style.display = "block";
    promoFeedback.className = "promo-feedback success";
    promoFeedback.textContent = "Coupon applied! You got 30% OFF! 🎉";
    calculateOrderTotals();
    showToast("30% discount applied to your order!");
  } else if (code === "") {
    appliedDiscount = 0;
    promoCodeName = "";
    localStorage.removeItem(STORAGE_KEYS.PROMO);
    promoFeedback.style.display = "none";
    calculateOrderTotals();
  } else {
    promoFeedback.style.display = "block";
    promoFeedback.className = "promo-feedback error";
    promoFeedback.textContent = "Invalid code. Try using: CRAVE30";
  }
}

// ----------------------------------------------------------------------------
// Cart Drawer Open/Close
// ----------------------------------------------------------------------------
function openCart() {
  cartDrawer.classList.add("active");
  cartBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================================================
// Checkout Modal Handlers
// ============================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add some dishes first.");
    return;
  }
  closeCart();
  checkoutModalBackdrop.style.display = "flex";
  checkoutFormStep.style.display = "block";
  orderSuccessStep.style.display = "none";
}

function closeCheckoutModal() {
  checkoutModalBackdrop.style.display = "none";
}

function handleConfirmOrder(e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if (!name || !address) return;

  // Generate random order id
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  confirmedOrderId.textContent = `CB-${randomNum}`;

  // Switch to success step
  checkoutFormStep.style.display = "none";
  orderSuccessStep.style.display = "block";

  // Clear Cart
  cart = [];
  saveCartToStorage();
  updateCartUI();

  showToast("Order placed successfully! 🍕🚀");
}

// ============================================================================
// Toast Notification
// ============================================================================
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ============================================================================
// Events Binding
// ============================================================================
function bindEvents() {
  // Add to cart delegation from menu
  foodGrid.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".btn-add-cart");
    if (addBtn) {
      const id = addBtn.dataset.id;
      addToCart(id);
    }
  });

  // Quantity controls in cart
  cartItemsContainer.addEventListener("click", (e) => {
    const minusBtn = e.target.closest(".btn-minus");
    if (minusBtn) {
      updateCartQuantity(minusBtn.dataset.id, -1);
      return;
    }

    const plusBtn = e.target.closest(".btn-plus");
    if (plusBtn) {
      updateCartQuantity(plusBtn.dataset.id, 1);
      return;
    }
  });

  // Category filter clicks
  categoryTabs.addEventListener("click", (e) => {
    const pill = e.target.closest(".cat-pill");
    if (!pill) return;

    document.querySelectorAll(".cat-pill").forEach((btn) => btn.classList.remove("active"));
    pill.classList.add("active");

    currentCategory = pill.dataset.category;
    const catName = pill.querySelector("span:last-child").textContent;
    currentCategoryTitle.textContent = currentCategory === "all" ? "All Delicious Dishes" : catName;

    renderFoodMenu();
  });

  // Search input filter
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.style.display = currentSearch ? "block" : "none";
    renderFoodMenu();
  });

  clearSearchBtn.addEventListener("click", () => {
    currentSearch = "";
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    renderFoodMenu();
  });

  resetFilterBtn.addEventListener("click", () => {
    currentSearch = "";
    currentCategory = "all";
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    document.querySelectorAll(".cat-pill").forEach((btn) => btn.classList.remove("active"));
    document.querySelector('.cat-pill[data-category="all"]').classList.add("active");
    currentCategoryTitle.textContent = "All Delicious Dishes";
    renderFoodMenu();
  });

  // Cart Drawer open/close
  openCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);

  // Promo code
  applyPromoBtn.addEventListener("click", handleApplyPromo);
  promoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleApplyPromo();
    }
  });

  // Checkout modal
  checkoutBtn.addEventListener("click", openCheckoutModal);
  closeModalBtn.addEventListener("click", closeCheckoutModal);
  checkoutModalBackdrop.addEventListener("click", (e) => {
    if (e.target === checkoutModalBackdrop) closeCheckoutModal();
  });
  orderForm.addEventListener("submit", handleConfirmOrder);

  trackDoneBtn.addEventListener("click", () => {
    closeCheckoutModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Location selector change prompt
  currentLocation.parentElement.addEventListener("click", () => {
    const newLoc = prompt("Enter your delivery address / area:", currentLocation.textContent);
    if (newLoc && newLoc.trim()) {
      currentLocation.textContent = newLoc.trim();
      showToast(`Delivery location set to: ${newLoc.trim()}`);
    }
  });

  // Hero offers button
  heroOffersBtn.addEventListener("click", () => {
    openCart();
    promoInput.value = "CRAVE30";
    handleApplyPromo();
  });

  // Newsletter form
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Thanks for subscribing! Check your email for special coupons.");
    e.target.reset();
  });
}

// Start application
document.addEventListener("DOMContentLoaded", initApp);
