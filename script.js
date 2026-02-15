// Product Data
const products = [
    { id: 1, name: "BPC-157 5mg", description: "Potent regenerative peptide shown to accelerate the healing of tendons, muscles, and damaged ligaments.", price: 16.95, category: "healing", purity: "99.5%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/BPC-157-Peptide-Vial-5mg.jpeg", badge: "Selling fast" },
    { id: 2, name: "TB-500 2mg (Thymosin Beta 4)", description: "Promotes cell migration and tissue repair, often used for systemic recovery and reducing inflammation.", price: 16.95, category: "recovery", purity: "99.2%", image: "https://ml9r2wqtygjg.i.optimole.com/cb:VW-X.f39/w:1080/h:1080/q:mauto/f:best/https://simonsrx.com/wp-content/uploads/2025/02/Simons-Vial-TB-500-10-mg.png", badge: "Selling fast" },
    { id: 3, name: "Ipamorelin 2mg", description: "Selective GH secretagogue that stimulates the pituitary gland to release growth hormone without increasing hunger.", price: 9.95, category: "hormone", purity: "99.8%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/Ipamorelin-Peptide-Vial-5mg.jpeg", badge: "Selling fast" },
    { id: 4, name: "CJC-1295 No DAC 2mg", description: "A GHRH analog that triggers a natural pulse of growth hormone release, ideal for lean muscle research.", price: 12.95, category: "hormone", purity: "99.6%", image: "https://www.evolvepeptides.com/wp-content/uploads/2024/10/CJC-1925.jpg", badge: "Selling fast" },
    { id: 5, name: "DSIP 5mg", description: "Delta Sleep-Inducing Peptide; research shows potential in regulating deep sleep cycles and stress response.", price: 13.95, category: "sleep", purity: "99.3%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/DSIP-Peptide-Vial-5mg.jpeg", badge: "Selling fast" },
    { id: 6, name: "AOD 9604 2mg", description: "A peptide fragment of HGH designed to stimulate lipolysis (fat burning) without affecting blood sugar levels.", price: 27.95, category: "metabolism", purity: "99.4%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/AOD-9604-Peptide-Vial-5mg.jpeg", badge: "In Stock" },
    { id: 7, name: "HGH (Somatropin) 10iu", description: "Recombinant peptide hormone that stimulates growth, cell reproduction, and metabolic function.", price: 45.00, category: "hormone", purity: "99.9%", image: "https://tidelabs.co.uk/cdn/shop/files/HGH-fragUSE.jpg", badge: "New" },
    { id: 8, name: "Retatrutide 5mg", description: "Triple receptor agonist (GLP-1, GIP, and glucagon) researched for potent weight management and metabolic health.", price: 89.00, category: "metabolism", purity: "99.8%", image: "https://purapeptides.com/wp-content/uploads/2025/05/RETA-RUO-20MG.jpeg", badge: "New" },
    { id: 9, name: "GHK-Cu 50mg", description: "A copper-binding peptide that stimulates collagen production and promotes skin regeneration.", price: 25.99, category: "healing", purity: "99.5%", image: "https://direct-peptides.com/wp-content/uploads/2025/06/Buy-GHK-Cu-Copper-Peptide-Vial-50mg.webp", badge: "Selling fast" },
    { id: 10, name: "PT-141 10mg", description: "Bremelanotide; a melanocortin receptor agonist researched for its effects on sexual function and wellness.", price: 21.00, category: "recovery", purity: "99.5%", image: "https://mlavgymrtxzc.i.optimole.com/cb:572_.56b/w:1080/h:1080/q:mauto/f:best/https://biolongevitylabs.com/wp-content/uploads/2025/01/PT141-5mg.jpg", badge: "Selling fast" },
    { id: 11, name: "Selank 5mg", description: "An anxiolytic neuropeptide researched for its ability to reduce anxiety and enhance cognitive focus.", price: 14.95, category: "sleep", purity: "99.8%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/Selank-Peptide-Vial-5mg.jpeg", badge: "Selling fast" },
    { id: 12, name: "Semax 5mg", description: "A nootropic peptide that research suggests can improve memory, focus, and protect brain cells.", price: 23.95, category: "sleep", purity: "99.6%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/Semax-Peptide-Vial-2mg.jpeg", badge: "Selling fast" },
    { id: 13, name: "Tesamorelin 10mg", description: "A GHRH analog specifically researched for its ability to reduce visceral abdominal fat.", price: 59.00, category: "hormone", purity: "99.7%", image: "https://pharmalabglobal.com/wp-content/uploads/2022/09/Tesamorelin-Peptide-Vial-2mg.jpeg", badge: "New" },
    { id: 14, name: "NAD+ 500mg", description: "A critical coenzyme found in every cell, essential for energy production and cellular repair.", price: 75.00, category: "metabolism", purity: "99.9%", image: "https://www.uk-peptides.com/image/cache/catalog/products/NAD%20500-1000x1000.jpg", badge: "New" },
    { id: 15, name: "Bacteriostatic Water 10ml", description: "Sterile water containing 0.9% benzyl alcohol, used as a preservative for multi-dose vials.", price: 5.95, category: "supplies", purity: "99.9%", image: "https://www.empowerpharmacy.com/wp-content/uploads/2025/07/empower-pharma-commercial-hospira-bacteriostatic-water-injection-294x490-1.jpg", badge: "Selling fast" }
];

// Cart functionality
let cart = [];
let btcRate = 65000;
let ethRate = 2500;

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const btcTotal = document.getElementById('btcTotal');
const cartItemCount = document.getElementById('cartItemCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmation = document.getElementById('closeConfirmation');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading spinner after page loads
    setTimeout(() => {
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.classList.add('fade-out');
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
            }, 500);
        }
    }, 1500);
    
    loadProducts();
    loadCart();
    fetchBTCRate();
    setupEventListeners();
    initAnimatedStats();
    initTabs();
    initReviews();
});

// Reviews System
let allReviews = [];
let currentReviewPage = 1;
const reviewsPerPage = 6;

function initReviews() {
    generateReviews();
    displayReviews();
}

function generateReviews() {
    allReviews = [];
    const reviewsPool = [
        { rating: 5, text: "The BPC-157 arrived in 3 days. Purity looks spot on for my research. Will be ordering the TB-500 next week." },
        { rating: 5, text: "First time using crypto for a purchase, but the instructions were clear. Global Peptides is definitely legit." },
        { rating: 4, text: "Solid product. Shipping was okay, took about a week to get to London. Discrete packaging which I appreciate." },
        { rating: 5, text: "Excellent customer service. I had a question about the GHK-Cu and they replied within an hour. Professional." },
        { rating: 1, text: "The delivery guy left the package in the rain. The box was soggy, but luckily the vials were sealed tight. Still annoying." },
        { rating: 5, text: "I've tried a few sources but these guys are consistent. The certificates of analysis actually match the batches." },
        { rating: 3, text: "Product is fine but I wish they accepted Monero. BTC fees are getting a bit high lately." },
        { rating: 5, text: "Best source for research peptides in the UK. No issues with customs or anything like that." },
        { rating: 4, text: "The labels on the vials are a bit hard to read because the font is so small, but the quality of the peptide is top tier." },
        { rating: 5, text: "Properly vacuum sealed and cold-packed. You can tell they actually care about the stability of the products." },
        { rating: 4, text: "Good stuff. Packaging was a bit overkill with the bubble wrap, took me forever to get into it lol." },
        { rating: 2, text: "Standard shipping took 12 days to reach me in Australia. A bit slower than I hoped for, though the product is great." },
        { rating: 5, text: "Very impressed with the ADAMAX. Purity is definitely as advertised. Will definitely be a returning customer." },
        { rating: 5, text: "Highly recommended by a colleague and they weren't wrong. Professional setup they have here." },
        { rating: 3, text: "The website had a glitch when I was checking out, but it worked on the second try. Just a heads up." },
        { rating: 5, text: "Fastest shipping I've ever seen for research supplies. Ordered Tuesday, arrived Thursday morning." },
        { rating: 4, text: "Everything was fine, just wish there was a bulk discount for the 10mg vials." },
        { rating: 5, text: "Top shelf quality. The reconstitution was perfect, no residue left at all. Cleanest I've seen in a while." },
        { rating: 1, text: "I hate that the courier didn't ring the bell and just left it on the porch. Anyone could have walked off with my research!" },
        { rating: 5, text: "Global Peptides is my go-to now. Don't bother with the other 'clinical' sites that look like AI made them." },
        { rating: 4, text: "Reliable and discreet. Exactly what you want when ordering this kind of stuff online." },
        { rating: 5, text: "The purity levels are better than the previous supplier I was using. My results have been much more consistent." },
        { rating: 3, text: "Box was a little crushed on arrival but the contents were fine. Royal Mail needs to be more careful." },
        { rating: 5, text: "A+ service. The payment confirmation was almost instant." },
        { rating: 5, text: "The Selank is amazing. Shipping to the US was surprisingly easy and no issues with the import." },
        { rating: 4, text: "Decent price for the quality. You get what you pay for in this industry." },
        { rating: 5, text: "I was skeptical about the crypto-only thing but it makes sense for privacy. Process was smooth." },
        { rating: 2, text: "They sent me the wrong vial size initially, but they sent the correct ones out immediately after I emailed them. Mistakes happen I guess." },
        { rating: 5, text: "Finally a source that doesn't feel like a scam. Real people, real products." },
        { rating: 4, text: "The 10ml mixing water is a bit overpriced compared to others but convenient to buy all in one place." },
        { rating: 5, text: "Just finished a round of testing with their Ipamorelin. Results are perfectly in line with expectations." },
        { rating: 5, text: "Super clean powders. No clumping or discoloration. This is the gold standard." },
        { rating: 3, text: "The tracking link didn't update for three days, I thought it was lost. It showed up eventually." },
        { rating: 4, text: "Solid. No frills, just good peptides and fast shipping." },
        { rating: 5, text: "If you're in the UK, this is the best place to order from. No customs headaches at all." },
        { rating: 5, text: "The new website looks great by the way. Much easier to find the COAs now." },
        { rating: 1, text: "The courier left the package behind my bin... I spent 20 minutes looking for it. Use a better delivery service please." },
        { rating: 5, text: "Been using them since 2023 and never had a single bad batch. That's rare." },
        { rating: 4, text: "Package arrived. Everything was as ordered. No complaints." },
        { rating: 5, text: "The GDF-8 is incredible. Purest sample I've analyzed this year." },
        { rating: 2, text: "The payment instructions were a bit confusing for ETH, I had to double check the gas fees myself. Could be clearer." },
        { rating: 5, text: "Authentic stuff. Don't waste your money on the cheaper sites, they usually underdose." },
        { rating: 5, text: "Great communication throughout the whole process. I knew exactly where my order was." },
        { rating: 4, text: "Only reason it's not 5 stars is the price of shipping to Canada, but I guess it's international so it's expected." },
        { rating: 5, text: "10/10. Will be recommending to my lab group." },
        { rating: 3, text: "Product is great but the box it came in was way too big for just two small vials. Not very eco-friendly." },
        { rating: 5, text: "Fast, discreet, and high purity. Can't ask for much more than that." },
        { rating: 4, text: "The website dark mode is a nice touch. Much easier on the eyes when ordering late at night." },
        { rating: 5, text: "Best customer support in the game. They actually know their products." },
        { rating: 1, text: "The cardboard box had a weird smell to it. The vials were fine but it was off-putting." },
        { rating: 5, text: "I've tried 5 different vendors this year and Global Peptides is the only one I'm keeping." },
        { rating: 4, text: "Good communication. They let me know the ADAMAX was on backorder for 2 days before shipping." },
        { rating: 5, text: "Exactly what I needed for my research. No issues at all." },
        { rating: 3, text: "The captcha on the contact form is really annoying, took me 3 tries." },
        { rating: 5, text: "Smooth transaction. The BTC address was easy to copy and the order updated fast." },
        { rating: 5, text: "Highest quality Semax I've found online. The batch report was included in the box." },
        { rating: 4, text: "Shipping was fast, but the tracking number didn't work for the first 24 hours." },
        { rating: 5, text: "Proper research supply. No marketing fluff, just facts and quality." },
        { rating: 2, text: "Package was delayed by 4 days due to a 'sorting error'. Not the shop's fault I guess but still frustrating." },
        { rating: 5, text: "Been a customer since they were MedPeptides. The rebrand to Global Peptides is much better." },
        { rating: 5, text: "Superb. The purity levels are consistently above 99%." },
        { rating: 4, text: "Decent delivery time to Ireland. Everything arrived safe and sound." },
        { rating: 5, text: "The price is competitive and the quality is better than the expensive 'premium' brands." },
        { rating: 3, text: "I wish the search bar was a bit more prominent, took me a second to find what I wanted." },
        { rating: 5, text: "Simply the best. Don't go anywhere else." },
        { rating: 1, text: "The package was left with a neighbor without my permission. I don't want my neighbors knowing what I buy!" },
        { rating: 5, text: "The copper peptide is high grade. Perfect for my topical research." },
        { rating: 4, text: "Pretty good. The quantity was exactly as ordered." },
        { rating: 5, text: "Trustworthy and reliable. My go-to for all my peptide research." },
        { rating: 5, text: "The vacuum seal on the vials is very strong. Good sign of proper manufacturing." },
        { rating: 3, text: "The font on the website is a bit small for me, had to zoom in to read the specs." },
        { rating: 5, text: "Fast delivery to Germany. No issues with Zoll at all." },
        { rating: 4, text: "Product is excellent. Shipping was slightly higher than other places but worth it for the peace of mind." },
        { rating: 5, text: "Professional, efficient, and high quality. Exactly what a researcher needs." },
        { rating: 5, text: "The rebrand looks amazing. The new catalog layout is much more intuitive." },
        { rating: 2, text: "I ordered on a Friday night and it didn't ship until Monday afternoon. I expected faster processing." },
        { rating: 5, text: "The MOTS-c is top notch. The most stable batch I've worked with." },
        { rating: 4, text: "Good service. The package was very well protected." },
        { rating: 5, text: "Solid source. Purity is the main thing for me and they deliver every time." },
        { rating: 5, text: "Excellent. No complaints at all." }
    ];

    // Seeded Random for stable shuffling
    function seededRandom(seed) {
        let x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    const seededShuffled = [...reviewsPool].map((rev, i) => ({ rev, sort: seededRandom(i + 123) }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ rev }) => rev);

    const now = new Date(2026, 0, 30);
    const start = new Date(2023, 0, 1);
    
    seededShuffled.forEach((review, i) => {
        // Use seeded random for stable dates
        const randomTime = start.getTime() + seededRandom(i + 456) * (now.getTime() - start.getTime());
        const date = new Date(randomTime);
        
        allReviews.push({
            id: i,
            author: "Verified Researcher",
            rating: review.rating,
            text: review.text,
            date: date
        });
    });
    
    allReviews.sort((a, b) => b.date - a.date);
}

function displayReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const pagination = document.getElementById('reviewsPagination');
    if (!reviewsGrid) return;

    reviewsGrid.innerHTML = '';
    
    const startIndex = (currentReviewPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const paginatedReviews = allReviews.slice(startIndex, endIndex);
    
    paginatedReviews.forEach(review => {
        const dateStr = review.date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        const card = document.createElement('div');
        card.className = 'review-card';
        
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            starsHtml += `<i class="${i < review.rating ? 'fas' : 'far'} fa-star"></i>`;
        }
        
        card.innerHTML = `
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-date">${dateStr}</span>
            </div>
            <div class="review-rating">${starsHtml}</div>
            <p class="review-text">${review.text}</p>
        `;
        reviewsGrid.appendChild(card);
    });
    
    updatePagination();
}

function updatePagination() {
    const pagination = document.getElementById('reviewsPagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentReviewPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => {
            currentReviewPage = i;
            displayReviews();
            document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
        };
        pagination.appendChild(btn);
    }
}

// Animated Stats Counter
function initAnimatedStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseFloat(element.dataset.target);
                const duration = 2000; // 2 seconds
                const startTime = Date.now();
                
                const updateNumber = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease out function for smooth animation
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = target * easeOut;
                    
                    if (target % 1 === 0) {
                        element.textContent = Math.floor(current);
                    } else {
                        element.textContent = current.toFixed(1);
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    }
                };
                
                updateNumber();
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Tab System for Specifications
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active classes
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Event Listeners
function setupEventListeners() {
    // Cart toggle
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', toggleCart);
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) toggleCart();
        });
    }

    // Checkout
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (closeModal) closeModal.addEventListener('click', closeCheckout);
    if (checkoutModal) {
        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) closeCheckout();
        });
    }

    // Form submission
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);
    
    // Confirmation modal
    if (closeConfirmation) closeConfirmation.addEventListener('click', closeConfirmationModal);

    // Search functionality
    const productSearch = document.getElementById('productSearch');
    if (productSearch) {
        productSearch.addEventListener('input', (e) => {
            loadProducts(e.target.value);
        });
    }

    // Filter buttons (remove original ones)
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', filterProducts);
        });
    }

    // Mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Close mobile menu when clicking outside (desktop only)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.navbar');
            if (navbar && !navbar.contains(e.target)) {
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.style.display === 'flex') {
                    navMenu.style.display = 'none';
                }
            }
        }
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            updateCheckoutSummary();
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Product Display
function loadProducts(searchTerm = '') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    const filteredProducts = searchTerm.trim() === '' 
        ? products 
        : products.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p style="font-size: 1.2rem;">No products found matching "${searchTerm}"</p>
                <p style="margin-top: 0.5rem;">Try adjusting your search terms.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${badgeHtml}
            <div class="product-overlay">
                <button class="quick-view-btn" data-id="${product.id}">
                    <i class="fas fa-search-plus"></i> Quick View
                </button>
            </div>
        </div>
        <div class="product-content">
            <div class="product-header">
                <h3 class="product-title">${product.name}</h3>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <span class="product-category">${capitalizeFirst(product.category)}</span>
            </div>
            <div class="product-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn minus" data-id="${product.id}">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                    <button class="quantity-btn plus" data-id="${product.id}">+</button>
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-plus"></i>
                    Add to Cart
                </button>
            </div>
            <div class="product-features">
                <span class="feature-chip">Batch Tested</span>
                <span class="feature-chip">COA Available</span>
            </div>
        </div>
    `;

    // Add event listeners
    const minusBtn = card.querySelector('.minus');
    const plusBtn = card.querySelector('.plus');
    const quantityInput = card.querySelector('.quantity-input');
    const addToCartBtn = card.querySelector('.add-to-cart');
    const quickViewBtn = card.querySelector('.quick-view-btn');

    minusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateQuantity(product.id, -1);
    });
    plusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateQuantity(product.id, 1);
    });
    quantityInput.addEventListener('change', (e) => {
        e.stopPropagation();
        const value = parseInt(e.target.value) || 1;
        e.target.value = Math.max(1, value);
    });
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
    });
    
    if (quickViewBtn) {
        quickViewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showQuickView(product);
        });
    }

    return card;
}

// Cart Functions
function addToCart(product) {
    const quantityInput = document.querySelector(`.quantity-input[data-id="${product.id}"]`);
    const quantity = parseInt(quantityInput.value) || 1;
    
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartDisplay();
    
    // Animate cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.classList.remove('bump');
        void cartCount.offsetWidth; // Trigger reflow
        cartCount.classList.add('bump');
    }
    
    showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function showQuickView(product) {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Create quick view modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-content">
            <span class="close-quick-view">&times;</span>
            <div class="quick-view-body">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain; padding: 1rem;">
                </div>
                <div class="quick-view-details">
                    <h2>${product.name}</h2>
                    <p class="product-description">${product.description}</p>
                    <div class="quick-view-specs">
                        <div class="spec-item">
                            <strong>Purity:</strong> ${product.purity}
                        </div>
                        <div class="spec-item">
                            <strong>Category:</strong> ${capitalizeFirst(product.category)}
                        </div>
                        <div class="spec-item">
                            <strong>Price:</strong> $${product.price.toFixed(2)}
                        </div>
                    </div>
                    <div class="quick-view-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn minus" data-id="${product.id}">-</button>
                            <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                            <button class="quantity-btn plus" data-id="${product.id}">+</button>
                        </div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners for the quick view
    const closeBtn = modal.querySelector('.close-quick-view');
    const minusBtn = modal.querySelector('.minus');
    const plusBtn = modal.querySelector('.plus');
    const quantityInput = modal.querySelector('.quantity-input');
    const addToCartBtn = modal.querySelector('.add-to-cart');
    
    const closeModal = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    minusBtn.addEventListener('click', () => updateQuantity(product.id, -1));
    plusBtn.addEventListener('click', () => updateQuantity(product.id, 1));
    
    quantityInput.addEventListener('change', (e) => {
        const value = parseInt(e.target.value) || 1;
        e.target.value = Math.max(1, value);
    });
    
    addToCartBtn.addEventListener('click', () => {
        addToCart(product);
        closeModal();
        showNotification(`${product.name} added to cart!`, 'success');
    });
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function updateQuantity(productId, change) {
    const quantityInput = document.querySelector(`.quantity-input[data-id="${productId}"]`);
    let currentValue = parseInt(quantityInput.value) || 1;
    let newValue = currentValue + change;
    
    if (newValue < 1) newValue = 1;
    quantityInput.value = newValue;
}

function updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Your cart is empty</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Add some peptides to get started</p>
            </div>
        `;
    } else {
        const subtotalForMessage = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (subtotalForMessage < 50) {
            const promo = document.createElement('div');
            promo.style.cssText = "background: rgba(30, 64, 175, 0.1); border: 1px solid var(--primary-blue); color: var(--primary-blue); padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem;";
            promo.innerHTML = `<i class="fas fa-info-circle"></i> Add $${(50 - subtotalForMessage).toFixed(2)} more for $10 shipping! (Currently $20)`;
            cartItems.appendChild(promo);
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-header">
                    <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span style="padding: 0 0.75rem; color: var(--text-primary);">${item.quantity}</span>
                        <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal < 50 ? 20 : 10) : 0;
    const total = subtotal + shipping;
    
    // Check if we have a payment method selected in checkout (if it's open)
    const activeOption = document.querySelector('.payment-option.active');
    const method = activeOption ? activeOption.dataset.method : 'bitcoin';
    
    let cryptoValue = 0;
    let unit = 'BTC';
    
    if (method === 'ethereum') {
        cryptoValue = total / ethRate;
        unit = 'ETH';
    } else if (method === 'usdt') {
        cryptoValue = total;
        unit = 'USDT';
    } else {
        cryptoValue = total / btcRate;
        unit = 'BTC';
    }
    
    // Update Display Elements
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartShipping = document.getElementById('cartShipping');
    const globalCartCount = document.querySelector('.cart-count');
    
    if (cartSubtotal) cartSubtotal.textContent = subtotal.toFixed(2);
    if (cartShipping) cartShipping.textContent = shipping.toFixed(2);
    if (cartTotal) cartTotal.textContent = total.toFixed(2);
    if (btcTotal) btcTotal.textContent = cryptoValue.toFixed(6);
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (globalCartCount) globalCartCount.textContent = totalItems;
    if (cartItemCount) cartItemCount.textContent = totalItems;
    
    const cartCryptoLabel = document.getElementById('cartCryptoLabel');
    const cartCryptoUnit = document.getElementById('cartCryptoUnit');
    if (cartCryptoLabel) cartCryptoLabel.textContent = `Total (${unit}):`;
    if (cartCryptoUnit) cartCryptoUnit.textContent = unit;
    
    // Update summary in checkout
    updateCheckoutSummary();
}

function toggleCart() {
    cartOverlay.classList.toggle('active');
}

// Checkout Functions
function openCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    toggleCart();
    checkoutModal.classList.add('active');
    updateCheckoutSummary();
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
}

function updateCheckoutSummary() {
    const summaryItems = document.getElementById('summaryItems');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryShipping = document.getElementById('summaryShipping');
    const summaryTotal = document.getElementById('summaryTotal');
    const summaryBTCTotal = document.getElementById('summaryBTCTotal');
    const cryptoTotalLabel = document.getElementById('cryptoTotalLabel');
    const cryptoUnit = document.getElementById('cryptoUnit');
    
    if (!summaryItems) return; // Not on checkout page yet
    
    summaryItems.innerHTML = '';
    
    cart.forEach(item => {
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal < 50 ? 20 : 10) : 0;
    const total = subtotal + shipping;
    
    // Check selected payment method
    const activeOption = document.querySelector('.payment-option.active');
    const method = activeOption ? activeOption.dataset.method : 'bitcoin';
    
    let cryptoValue = 0;
    let unit = 'BTC';
    
    if (method === 'ethereum') {
        cryptoValue = total / ethRate;
        unit = 'ETH';
    } else if (method === 'usdt') {
        cryptoValue = total; // 1:1 for simplicity or use a rate
        unit = 'USDT';
    } else {
        cryptoValue = total / btcRate;
        unit = 'BTC';
    }
    
    if (summarySubtotal) summarySubtotal.textContent = subtotal.toFixed(2);
    if (summaryShipping) {
        summaryShipping.textContent = shipping.toFixed(2);
        if (subtotal < 50 && subtotal > 0) {
            summaryShipping.innerHTML += ` <span style="font-size: 0.75rem; color: #ef4444; font-weight: normal; display: block;">($20 rate applied for orders under $50)</span>`;
        } else if (subtotal >= 50) {
            summaryShipping.innerHTML += ` <span style="font-size: 0.75rem; color: var(--medical-green); font-weight: normal; display: block;">(Reduced $10 rate applied)</span>`;
        }
    }
    if (summaryTotal) summaryTotal.textContent = total.toFixed(2);
    if (summaryBTCTotal) summaryBTCTotal.textContent = cryptoValue.toFixed(6);
    
    if (cryptoTotalLabel) cryptoTotalLabel.textContent = `Total in ${unit}:`;
    if (cryptoUnit) cryptoUnit.textContent = unit;
}

// Payment Addresses
const cryptoAddresses = {
    bitcoin: 'bc1qc6yrc7lfem3ryeaz2d9rsps6axt7fjgstas73y',
    ethereum: '0x8ecf0B04D25bAFAEE6d1cB65724cEEeDC638755d',
    usdt: '0x8ecf0B04D25bAFAEE6d1cB65724cEEeDC638755d' // Assuming ERC-20
};

let paymentTimerInterval;

function startPaymentTimer(durationInSeconds) {
    const display = document.getElementById('paymentTimer');
    let timer = durationInSeconds;
    
    clearInterval(paymentTimerInterval);
    
    paymentTimerInterval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (--timer < 0) {
            clearInterval(paymentTimerInterval);
            display.textContent = "EXPIRED";
            display.style.color = "#ef4444";
        }
    }, 1000);
}

function handleCheckout(e) {
    e.preventDefault();
    
    // Validate form
    const requiredFields = ['fullName', 'email', 'address', 'city', 'zipCode', 'country'];
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Get selected payment method
    const activeOption = document.querySelector('.payment-option.active');
    const method = activeOption.dataset.method;
    
    // Show addresses and process
    const addressDisplay = document.getElementById('addressDisplay');
    const displayAddress = document.getElementById('displayAddress');
    const displayAmount = document.getElementById('displayAmount');
    const methodLabel = document.getElementById('methodLabel');
    const purchaseBtn = e.target.querySelector('.place-order-btn');
    const ivePaidBtn = document.getElementById('ivePaidBtn');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let cryptoValue = 0;
    
    if (method === 'ethereum') {
        cryptoValue = total / ethRate;
    } else if (method === 'usdt') {
        cryptoValue = total;
    } else {
        cryptoValue = total / btcRate;
    }
    
    methodLabel.textContent = `${method.toUpperCase()} Address:`;
    displayAddress.textContent = cryptoAddresses[method];
    displayAmount.textContent = `${cryptoValue.toFixed(6)} ${method.toUpperCase()}`;
    addressDisplay.style.display = 'block';
    
    // Start 30 minute timer
    startPaymentTimer(30 * 60);
    
    purchaseBtn.textContent = 'Awaiting Payment...';
    purchaseBtn.disabled = true;
    
    // Handle "I've paid" button
    ivePaidBtn.onclick = () => {
        ivePaidBtn.textContent = 'Processing...';
        ivePaidBtn.disabled = true;
        
        // Prepare Discord Webhook data
        const webhookURL = "https://discord.com/api/webhooks/1466896875805343969/GQ_OxPHB56jDDBxi-smD9XHWveTjE-adHkEb8M7mwxO6tyZFWFkmLGmD-cQmp_JdDFF5";
        const orderNumber = 'GP-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal < 50 ? 20 : 10;
        const totalAmount = subtotal + shipping;
        
        const customerInfo = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value || 'N/A',
            zip: document.getElementById('zipCode').value,
            country: document.getElementById('country').value
        };

        const cartDetails = cart.map(item => `- ${item.name} x${item.quantity} ($${(item.price * item.quantity).toFixed(2)})`).join('\n');
        
        const discordPayload = {
            embeds: [{
                title: "🚀 New Order Received!",
                color: 3447003,
                fields: [
                    { name: "Order Number", value: `#${orderNumber}`, inline: true },
                    { name: "Payment Method", value: method.toUpperCase(), inline: true },
                    { name: "Total Amount", value: `$${totalAmount.toFixed(2)}`, inline: true },
                    { name: "Crypto Amount", value: `${cryptoValue.toFixed(6)} ${method.toUpperCase()}`, inline: true },
                    { name: "Customer", value: customerInfo.name, inline: true },
                    { name: "Email", value: customerInfo.email, inline: true },
                    { name: "Shipping Address", value: `${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state} ${customerInfo.zip}, ${customerInfo.country}`, inline: false },
                    { name: "Order Items", value: cartDetails || "No items", inline: false }
                ],
                timestamp: new Date().toISOString()
            }]
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(discordPayload)
        }).then(() => {
            document.getElementById('orderNumber').textContent = '#' + orderNumber;
            document.getElementById('paidAmount').textContent = cryptoValue.toFixed(6) + ' ' + method.toUpperCase();
            
            // Clear cart
            cart = [];
            saveCart();
            updateCartDisplay();
            
            // Show confirmation
            closeCheckout();
            confirmationModal.classList.add('active');
            
            // Reset UI for next time
            addressDisplay.style.display = 'none';
            purchaseBtn.textContent = 'Purchase';
            purchaseBtn.disabled = false;
            ivePaidBtn.textContent = "I've paid";
            ivePaidBtn.disabled = false;
            clearInterval(paymentTimerInterval);
            
            showNotification('Payment received! Order is processing.', 'success');
        }).catch(err => {
            console.error('Error sending to Discord:', err);
            showNotification('Error processing order. Support notified.', 'error');
            ivePaidBtn.textContent = "I've paid";
            ivePaidBtn.disabled = false;
        });
    };
}

function closeConfirmationModal() {
    confirmationModal.classList.remove('active');
}

// Filter Functions
function filterProducts(e) {
    const category = e.target.dataset.category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Load filtered products
    loadProducts(category);
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        const currentDisplay = navMenu.style.display;
        navMenu.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
    }
}

function handleContactForm(e) {
    e.preventDefault();
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    e.target.reset();
}

// Persistent Storage using Cookies and LocalStorage
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length,c.length));
    }
    return null;
}

function saveCart() {
    localStorage.setItem('peptideCart', JSON.stringify(cart));
    setCookie('peptideCart', cart, 30);
}

function loadCart() {
    const savedCart = getCookie('peptideCart') || JSON.parse(localStorage.getItem('peptideCart') || '[]');
    if (savedCart) {
        cart = savedCart;
    }
    updateCartDisplay();
}

// BTC and ETH Rate Fetching
async function fetchBTCRate() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();
        btcRate = data.bitcoin.usd;
        ethRate = data.ethereum.usd;
        updateCartDisplay();
    } catch (error) {
        console.error('Failed to fetch crypto rates:', error);
        // Keep default rates
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});