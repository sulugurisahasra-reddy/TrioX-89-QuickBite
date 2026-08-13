/**
 * QuickBite Drive-Through Restaurant Application
 * Vanilla JavaScript Engine
 */

// 1. MOCK DATA (20 Food Items across all categories)
const FOOD_DATA = [
    {
        id: 1,
        name: "Classic Chicken Burger",
        category: "burgers",
        price: 179,
        description: "Crispy chicken, lettuce, cheese and our signature sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        vegetarian: false,
        customizable: true
    },
    {
        id: 2,
        name: "Crispy Chicken Burger",
        category: "burgers",
        price: 199,
        description: "Extra crispy chicken patty, jalapeños, cheese, and spicy mayo.",
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        vegetarian: false,
        customizable: true
    },
    {
        id: 3,
        name: "Double Cheese Burger",
        category: "burgers",
        price: 249,
        description: "Double layered juicy patty with dual melted cheddar cheese slices.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        vegetarian: false,
        customizable: true
    },
    {
        id: 4,
        name: "Spicy Paneer Burger",
        category: "burgers",
        price: 169,
        description: "Crispy fried cottage cheese patty loaded with mint mayo and onions.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        vegetarian: true,
        customizable: true
    },
    {
        id: 5,
        name: "Classic Combo",
        category: "combos",
        price: 299,
        description: "Classic Chicken Burger + Medium French Fries + Soft Drink.",
        image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        vegetarian: false,
        customizable: false
    },
    {
        id: 6,
        name: "Chicken Feast Combo",
        category: "combos",
        price: 399,
        description: "2 Crispy Chicken Burgers + 4 Wings + 2 Cold Drinks.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        vegetarian: false,
        customizable: false
    },
    {
        id: 7,
        name: "Family Combo",
        category: "combos",
        price: 699,
        description: "4 Burgers + Loaded Fries + 6 Nuggets + 4 Soft Drinks.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
        rating: 5.0,
        vegetarian: false,
        customizable: false
    },
    {
        id: 8,
        name: "Burger + Fries Combo",
        category: "combos",
        price: 229,
        description: "Choice of any Single Burger along with Peri Peri French Fries.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        vegetarian: true,
        customizable: false
    },
    {
        id: 9,
        name: "Margherita Pizza",
        category: "pizza",
        price: 219,
        description: "Classic mozzarella cheese pizza topped with freshly picked basil.",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        vegetarian: true,
        customizable: true
    },
    {
        id: 10,
        name: "Farmhouse Pizza",
        category: "pizza",
        price: 279,
        description: "Crispy capsicum, juicy tomatoes, mushrooms, and sweet corn.",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        vegetarian: true,
        customizable: true
    },
    {
        id: 11,
        name: "Chicken Tikka Pizza",
        category: "pizza",
        price: 329,
        description: "Spicy chicken tikka chunks, red paprika, and melted cheese.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        vegetarian: false,
        customizable: true
    },
    {
        id: 12,
        name: "Spicy Veggie Pizza",
        category: "pizza",
        price: 259,
        description: "Red chillies, jalapeños, onions, and spicy tomato spread.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
        rating: 4.4,
        vegetarian: true,
        customizable: true
    },
    {
        id: 13,
        name: "French Fries",
        category: "sides",
        price: 99,
        description: "Golden, salted crispy potatoes cooked to perfection.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        vegetarian: true,
        customizable: false
    },
    {
        id: 14,
        name: "Loaded Fries",
        category: "sides",
        price: 149,
        description: "Fries topped with hot liquid cheddar cheese & sliced jalapeños.",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        vegetarian: true,
        customizable: false
    },
    {
        id: 15,
        name: "Chicken Nuggets",
        category: "sides",
        price: 159,
        description: "6 pieces of crisp bite-sized tender chicken breasts.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        vegetarian: false,
        customizable: false
    },
    {
        id: 16,
        name: "Mozzarella Sticks",
        category: "sides",
        price: 139,
        description: "Gooey melted mozzarella cheese wrapped in crunchy breading.",
        image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        vegetarian: true,
        customizable: false
    },
    {
        id: 17,
        name: "Coca-Cola",
        category: "drinks",
        price: 59,
        description: "Chilled refreshing 300ml carbonated soft drink.",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        vegetarian: true,
        customizable: false
    },
    {
        id: 18,
        name: "Chocolate Shake",
        category: "drinks",
        price: 129,
        description: "Rich chocolate syrup blended with vanilla ice cream.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        vegetarian: true,
        customizable: false
    },
    {
        id: 19,
        name: "Chocolate Brownie",
        category: "desserts",
        price: 99,
        description: "Dense, fudgy chocolate brownie topped with chocolate drizzle.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        vegetarian: true,
        customizable: false
    },
    {
        id: 20,
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: 119,
        description: "Warm chocolate cake with molten chocolate oozing from the center.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        vegetarian: true,
        customizable: false
    }
];

// Available Customization Options Definition
const CUSTOMIZATION_OPTIONS = {
    sizes: [
        { name: "Regular", price: 0 },
        { name: "Large", price: 40 }
    ],
    buns: [
        { name: "Classic Bun", price: 0 },
        { name: "Whole Wheat Bun", price: 20 }
    ],
    cheeses: [
        { name: "No Extra Cheese", price: 0 },
        { name: "Cheddar Cheese", price: 30 },
        { name: "Mozzarella Cheese", price: 30 }
    ],
    toppings: [
        { name: "Extra Lettuce", price: 10 },
        { name: "Jalapeño Slices", price: 15 },
        { name: "Extra Patty", price: 60 },
        { name: "Signature Sauce", price: 10 }
    ]
};

// Available Promo Codes
const VALID_COUPONS = {
    'WELCOME50': { type: 'flat', value: 50 },
    'BURGER20': { type: 'percent', value: 0.20 },
    'FAMILY150': { type: 'flat', value: 150 }
};

// 2. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('quickbite_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentCustomizingItem = null;
let appliedCoupon = JSON.parse(localStorage.getItem('quickbite_coupon')) || null;
let currentCheckoutStep = 1;
let selectedSlot = "12:30 PM";

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderMenu();
    updateCartUI();
    setupEventListeners();
    generatePickupSlots();
});

// 4. MENU RENDERING & FILTERING
function renderMenu() {
    const grid = document.getElementById('food-grid');
    const noResults = document.getElementById('no-results');
    grid.innerHTML = '';

    const filtered = FOOD_DATA.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'food-card';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy">
                    <span class="veg-indicator ${item.vegetarian ? 'veg' : 'non-veg'}">
                        ${item.vegetarian ? '🟢 Veg' : '🔴 Non-Veg'}
                    </span>
                </div>
                <div class="card-body">
                    <div class="card-meta">
                        <span class="rating">⭐ ${item.rating}</span>
                        <span class="text-muted">${item.category.toUpperCase()}</span>
                    </div>
                    <h3 class="food-title">${item.name}</h3>
                    <p class="food-desc">${item.description}</p>
                    <div class="card-footer">
                        <span class="price">₹${item.price}</span>
                        <div class="card-actions">
                            ${item.customizable ? `<button class="btn btn-secondary btn-sm" onclick="openCustomModal(${item.id})">Customize</button>` : ''}
                            <button class="btn btn-primary btn-sm" onclick="quickAddToCart(${item.id})">+ Add</button>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// 5. CUSTOMIZATION MODAL
function openCustomModal(id) {
    const item = FOOD_DATA.find(f => f.id === id);
    if (!item) return;

    currentCustomizingItem = { ...item, calculatedPrice: item.price, selectedOptions: [] };
    
    document.getElementById('custom-food-title').textContent = `Customize ${item.name}`;
    document.getElementById('custom-food-base-price').textContent = `Base Price: ₹${item.price}`;
    
    const body = document.getElementById('custom-modal-body');
    body.innerHTML = `
        <div class="custom-section">
            <h4>Choose Size</h4>
            ${CUSTOMIZATION_OPTIONS.sizes.map((s, idx) => `
                <label class="option-label">
                    <span><input type="radio" name="sizeOpt" value="${s.price}" ${idx===0?'checked':''} onchange="recalcCustomPrice()"> ${s.name}</span>
                    <span>+₹${s.price}</span>
                </label>
            `).join('')}
        </div>
        <div class="custom-section">
            <h4>Extra Cheese</h4>
            ${CUSTOMIZATION_OPTIONS.cheeses.map((c, idx) => `
                <label class="option-label">
                    <span><input type="radio" name="cheeseOpt" value="${c.price}" ${idx===0?'checked':''} onchange="recalcCustomPrice()"> ${c.name}</span>
                    <span>+₹${c.price}</span>
                </label>
            `).join('')}
        </div>
        <div class="custom-section">
            <h4>Extra Toppings</h4>
            ${CUSTOMIZATION_OPTIONS.toppings.map(t => `
                <label class="option-label">
                    <span><input type="checkbox" name="toppingOpt" value="${t.price}" data-name="${t.name}" onchange="recalcCustomPrice()"> ${t.name}</span>
                    <span>+₹${t.price}</span>
                </label>
            `).join('')}
        </div>
    `;

    recalcCustomPrice();
    document.getElementById('custom-modal-overlay').classList.add('active');
}

function recalcCustomPrice() {
    if (!currentCustomizingItem) return;
    let total = currentCustomizingItem.price;

    const sizeOpt = document.querySelector('input[name="sizeOpt"]:checked');
    if (sizeOpt) total += parseInt(sizeOpt.value);

    const cheeseOpt = document.querySelector('input[name="cheeseOpt"]:checked');
    if (cheeseOpt) total += parseInt(cheeseOpt.value);

    const toppingOpts = document.querySelectorAll('input[name="toppingOpt"]:checked');
    toppingOpts.forEach(t => total += parseInt(t.value));

    currentCustomizingItem.calculatedPrice = total;
    document.getElementById('custom-calculated-price').textContent = `₹${total}`;
}

// 6. CART MANAGEMENT & CALCULATIONS
function quickAddToCart(id) {
    const item = FOOD_DATA.find(f => f.id === id);
    if (!item) return;

    const cartItemId = `${item.id}-default`;
    const existing = cart.find(i => i.cartItemId === cartItemId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            cartItemId,
            id: item.id,
            name: item.name,
            price: item.price,
            unitPrice: item.price,
            image: item.image,
            customizations: 'Standard',
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${item.name} to cart!`);
}

function addCustomizedToCart() {
    if (!currentCustomizingItem) return;

    const custDetails = [];
    const sizeOpt = document.querySelector('input[name="sizeOpt"]:checked');
    if (sizeOpt && sizeOpt.value > 0) custDetails.push("Large Size");

    const cheeseOpt = document.querySelector('input[name="cheeseOpt"]:checked');
    if (cheeseOpt && cheeseOpt.value > 0) custDetails.push("Extra Cheese");

    const toppingOpts = document.querySelectorAll('input[name="toppingOpt"]:checked');
    toppingOpts.forEach(t => custDetails.push(t.dataset.name));

    const custString = custDetails.length > 0 ? custDetails.join(', ') : 'Customized';
    const cartItemId = `${currentCustomizingItem.id}-${Date.now()}`;

    cart.push({
        cartItemId,
        id: currentCustomizingItem.id,
        name: currentCustomizingItem.name,
        price: currentCustomizingItem.calculatedPrice,
        unitPrice: currentCustomizingItem.calculatedPrice,
        image: currentCustomizingItem.image,
        customizations: custString,
        quantity: 1
    });

    saveCart();
    updateCartUI();
    document.getElementById('custom-modal-overlay').classList.remove('active');
    showToast(`Added customized ${currentCustomizingItem.name}!`);
}

function updateCartQuantity(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.cartItemId !== cartItemId);
        showToast(`Item removed from cart.`);
    }

    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const badge = document.getElementById('cart-count');
    list.innerHTML = '';

    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
        list.innerHTML = `<div class="text-center text-muted" style="padding: 40px 0;">Your cart is empty. Add items from menu!</div>`;
    } else {
        cart.forEach(item => {
            totalItems += item.quantity;
            subtotal += item.unitPrice * item.quantity;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-cust">${item.customizations}</div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateCartQuantity('${item.cartItemId}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity('${item.cartItemId}', 1)">+</button>
                        <span style="margin-left:auto; font-weight:700;">₹${item.unitPrice * item.quantity}</span>
                    </div>
                </div>
            `;
            list.appendChild(div);
        });
    }

    badge.textContent = totalItems;

    // Financial Calculations
    const tax = Math.round(subtotal * 0.05);
    const packaging = subtotal > 0 ? 15 : 0;
    let discount = 0;

    if (appliedCoupon && subtotal > 0) {
        if (appliedCoupon.type === 'flat') {
            discount = appliedCoupon.value;
        } else if (appliedCoupon.type === 'percent') {
            discount = Math.round(subtotal * appliedCoupon.value);
        }
    }

    const finalTotal = Math.max(0, subtotal + tax + packaging - discount);

    document.getElementById('summary-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('summary-tax').textContent = `₹${tax}`;
    document.getElementById('summary-packaging').textContent = `₹${packaging}`;
    
    const discRow = document.getElementById('discount-row');
    if (discount > 0) {
        discRow.classList.remove('hidden');
        document.getElementById('summary-discount').textContent = `-₹${discount}`;
    } else {
        discRow.classList.add('hidden');
    }

    document.getElementById('summary-total').textContent = `₹${finalTotal}`;
    document.getElementById('review-total-price').textContent = `₹${finalTotal}`;
}

function saveCart() {
    localStorage.setItem('quickbite_cart', JSON.stringify(cart));
}

// 7. COUPON SYSTEM
function applyCouponCode(code) {
    const cleanCode = code.trim().toUpperCase();
    const msg = document.getElementById('coupon-message');

    if (!cleanCode) {
        msg.textContent = 'Please enter a coupon code.';
        msg.className = 'coupon-msg error';
        return;
    }

    if (VALID_COUPONS[cleanCode]) {
        appliedCoupon = VALID_COUPONS[cleanCode];
        localStorage.setItem('quickbite_coupon', JSON.stringify(appliedCoupon));
        msg.textContent = `Coupon '${cleanCode}' applied successfully!`;
        msg.className = 'coupon-msg success';
        updateCartUI();
        showToast('Coupon Applied!');
    } else {
        msg.textContent = 'Invalid coupon code.';
        msg.className = 'coupon-msg error';
    }
}

// 8. PICKUP SLOTS & CHECKOUT FLOW
function generatePickupSlots() {
    const slotsGrid = document.getElementById('slots-grid');
    const times = ["12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM", "1:00 PM", "1:15 PM"];
    slotsGrid.innerHTML = '';

    times.forEach((t, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `slot-btn ${t === selectedSlot ? 'selected' : ''} ${idx === 4 ? 'disabled' : ''}`;
        btn.textContent = t;
        if (idx !== 4) {
            btn.onclick = () => {
                document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedSlot = t;
                showToast(`Selected slot: ${t}`);
            };
        }
        slotsGrid.appendChild(btn);
    });
}

function switchCheckoutStep(step) {
    if (step === 2 && cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    if (step === 3) {
        const name = document.getElementById('cust-name').value;
        const phone = document.getElementById('cust-phone').value;
        if (!name || !phone) {
            showToast('Please enter required pickup details!');
            return;
        }

        // Render Review Screen
        const revItems = document.getElementById('review-items-list');
        revItems.innerHTML = cart.map(i => `<p><span>${i.quantity}x ${i.name}</span> <span>₹${i.unitPrice * i.quantity}</span></p>`).join('');

        const method = document.querySelector('input[name="pickupMethod"]:checked').value;
        document.getElementById('rev-method').textContent = method;
        document.getElementById('rev-slot').textContent = `Today, ${selectedSlot}`;
        document.getElementById('rev-name').textContent = name;
        document.getElementById('rev-phone').textContent = phone;
        document.getElementById('rev-vehicle').textContent = document.getElementById('vehicle-no').value || 'N/A';
    }

    currentCheckoutStep = step;
    
    // Toggle indicators
    [1, 2, 3].forEach(i => {
        const ind = document.getElementById(`step-indicator-${i}`);
        const cnt = document.getElementById(`checkout-step-${i}`);
        if (i === step) {
            ind.classList.add('active');
            cnt.classList.add('active');
        } else {
            ind.classList.remove('active');
            cnt.classList.remove('active');
        }
    });

    // Toggle Footer Buttons
    const prevBtn = document.getElementById('prev-step-btn');
    const nextBtn = document.getElementById('next-step-btn');
    const placeBtn = document.getElementById('place-order-btn');

    if (step === 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        placeBtn.classList.add('hidden');
        nextBtn.textContent = 'Proceed to Pickup Details';
    } else if (step === 2) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        placeBtn.classList.add('hidden');
        nextBtn.textContent = 'Review Order';
    } else if (step === 3) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
        placeBtn.classList.remove('hidden');
    }
}

// 9. ORDER TRACKING SIMULATION
function placeOrderAndTrack() {
    const orderNum = 'QB' + Math.floor(10000 + Math.random() * 90000);
    document.getElementById('track-order-id').textContent = `Order #${orderNum}`;
    
    // Close Drawer & Open Tracking Modal
    document.getElementById('cart-drawer').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
    document.getElementById('tracking-modal-overlay').classList.add('active');

    // Reset Cart
    cart = [];
    appliedCoupon = null;
    localStorage.removeItem('quickbite_cart');
    localStorage.removeItem('quickbite_coupon');
    updateCartUI();

    // Progress Animation Stages Simulation
    const fill = document.getElementById('progress-fill-line');
    const steps = [
        document.getElementById('p-step-1'),
        document.getElementById('p-step-2'),
        document.getElementById('p-step-3'),
        document.getElementById('p-step-4')
    ];

    fill.style.width = '0%';
    steps.forEach((s, idx) => idx === 0 ? s.classList.add('active') : s.classList.remove('active'));

    setTimeout(() => {
        fill.style.width = '33%';
        steps[1].classList.add('active');
    }, 3000);

    setTimeout(() => {
        fill.style.width = '66%';
        steps[2].classList.add('active');
        document.getElementById('track-estimated-time').textContent = 'Ready at Drive-Thru Window!';
    }, 7000);
}

// 10. THEME & TOAST UTILITIES
function initTheme() {
    const savedTheme = localStorage.getItem('quickbite_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('quickbite_theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 11. EVENT LISTENERS
function setupEventListeners() {
    // Theme
    document.getElementById('theme-toggle').onclick = toggleTheme;

    // Mobile Navigation
    const ham = document.getElementById('hamburger-btn');
    const menu = document.getElementById('nav-menu');
    ham.onclick = () => menu.classList.toggle('active');

    // Cart Drawer Toggles
    const cartBtn = document.getElementById('cart-toggle-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart-btn');

    const openCartFunc = () => {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    };

    const closeCartFunc = () => {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    };

    cartBtn.onclick = openCartFunc;
    closeCart.onclick = closeCartFunc;
    cartOverlay.onclick = closeCartFunc;

    // Search and Filter
    document.getElementById('menu-search').oninput = (e) => {
        searchQuery = e.target.value;
        renderMenu();
    };

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            renderMenu();
        };
    });

    // Customization Modal Controls
    document.getElementById('close-modal-btn').onclick = () => {
        document.getElementById('custom-modal-overlay').classList.remove('active');
    };
    document.getElementById('add-custom-item-btn').onclick = addCustomizedToCart;

    // Coupon Claim Buttons on Deals Section
    document.querySelectorAll('.claim-btn').forEach(btn => {
        btn.onclick = () => {
            const code = btn.dataset.code;
            openCartFunc();
            document.getElementById('coupon-input').value = code;
            applyCouponCode(code);
        };
    });

    document.getElementById('apply-coupon-btn').onclick = () => {
        applyCouponCode(document.getElementById('coupon-input').value);
    };

    // Checkout Navigation
    document.getElementById('next-step-btn').onclick = () => switchCheckoutStep(currentCheckoutStep + 1);
    document.getElementById('prev-step-btn').onclick = () => switchCheckoutStep(currentCheckoutStep - 1);
    document.getElementById('place-order-btn').onclick = placeOrderAndTrack;

    // Tracking Modal Close
    document.getElementById('close-tracking-btn').onclick = () => {
        document.getElementById('tracking-modal-overlay').classList.remove('active');
    };
    document.getElementById('finish-tracking-btn').onclick = () => {
        document.getElementById('tracking-modal-overlay').classList.remove('active');
    };

    // Contact Form Submission
    document.getElementById('contact-form').onsubmit = (e) => {
        e.preventDefault();
        showToast('Thank you! Your message has been sent.');
        e.target.reset();
    };
}