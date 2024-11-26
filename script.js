document.addEventListener('DOMContentLoaded', () => {
     console.log('TeleMart is ready!');
 });
 // Handle Registration Form Submission
document.getElementById('registration-form')?.addEventListener('submit', function (e) {
     e.preventDefault(); // Prevent form refresh
 
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const phone = document.getElementById('phone').value;
 
     if (name && email && password && phone) {
         alert('Registration successful!');
         console.log(`User Registered: ${name}, ${email}, ${phone}`);
         this.reset(); // Clear form
     } else {
         alert('Please fill out all fields.');
     }
 });
 
 // Handle Product Form Submission
 document.getElementById('product-form')?.addEventListener('submit', function (e) {
     e.preventDefault(); // Prevent form refresh
 
     const productName = document.getElementById('product-name').value;
     const productPrice = document.getElementById('product-price').value;
     const productCategory = document.getElementById('product-category').value;
     const productDescription = document.getElementById('product-description').value;
 
     if (productName && productPrice && productCategory && productDescription) {
         alert('Product added successfully!');
         console.log(`Product Added: ${productName}, ${productPrice}, ${productCategory}`);
         this.reset(); // Clear form
     } else {
         alert('Please fill out all fields.');
     }
 });
 // Example Product Data
const products = [
     {
         name: "Wireless Earbuds",
         price: "₹799",
         shop: "Tech Haven",
         image: "/images/earbuds.jpg"
     },
     {
         name: "iphone16",
         price: "₹77,400",
         shop: "Artisan Corner",
         image: "/images/iphone16.jpg"
     },
     {
         name: "Mi 20000 mAh 33 W Power Bank",
         price: "₹1,799",
         shop: "Thirumal mobiles & Co.",
         image: "/images/mipowerbank.jpg"
     }
 ];
 
 // Function to Load Products
 function loadProducts() {
     const productList = document.getElementById('product-list');
 
     // Loop through products and create product cards
     products.forEach(product => {
         const productCard = document.createElement('div');
         productCard.classList.add('product-card');
 
         productCard.innerHTML = `
             <img src="${product.image}" alt="${product.name}" class="product-image">
             <h3 class="product-name">${product.name}</h3>
             <p class="product-price">${product.price}</p>
             <p class="product-shop">Sold by: ${product.shop}</p>
         `;
 
         productList.appendChild(productCard);
     });
 }
 
 // Call function to display products when the page loads
 document.addEventListener('DOMContentLoaded', loadProducts);
 