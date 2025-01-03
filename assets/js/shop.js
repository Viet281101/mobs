// Function to update the current time
export function updateTime() {
	const now = new Date();
	const formattedTime = now.toLocaleString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	});
	document.getElementById('current-time').textContent = formattedTime;
};

// Function to toggle the hamburger menu
export function toggleMenu() {
	const menu = document.getElementById("hamburgerMenu");
	const hamburger = document.getElementById("hamburgerIcon");
	const closebtn = document.querySelector(".closebtn");

	if (menu.style.height === "100%") {
		// Close menu
		menu.style.height = "0%";
		closebtn.classList.add("animating");
		hamburger.classList.remove("active");
		hamburger.classList.add("animating");

		setTimeout(() => {
			hamburger.style.display = "block";
			closebtn.style.display = "none";
			hamburger.classList.remove("animating");
			closebtn.classList.remove("animating");
		}, 300);
	} else {
		// Open menu
		menu.style.height = "100%";
		hamburger.classList.add("animating");
		closebtn.classList.remove("active");
		closebtn.classList.add("animating");

		setTimeout(() => {
			hamburger.style.display = "none";
			closebtn.style.display = "block";
			hamburger.classList.remove("animating");
			closebtn.classList.remove("animating");
		}, 300);
	}
};

// Function to handle screen resize events
export function handleResize() {
	const menu = document.getElementById("hamburgerMenu");
	const icon = document.getElementById("hamburgerIcon");

	// Reset menu and icon when screen width exceeds 420px
	if (window.innerWidth > 420) {
		menu.style.height = "0%";
		icon.style.display = "none";
	} else {
		icon.style.display = "block";
	}
};

// Function to load books from JSON file and display them
async function loadBooks() {
	try {
		const response = await fetch('./assets/js/books.json');
		const books = await response.json();

		const bookList = document.getElementById('book-list');
		bookList.innerHTML = '';

		books.forEach((book) => {
			const bookItem = document.createElement('div');
			bookItem.classList.add('book-item');

			bookItem.innerHTML = `
				<img src="${book.path}" alt="${book.name}">
				<h3>${book.name}</h3>
				<p>Author: ${book.author}</p>
				<div class="rating">
					${'★'.repeat(book.rating).padEnd(5, '☆')}
				</div>
				<p class="price">${book.price}</p>
				<button>Add to Cart</button>
			`;

			bookList.appendChild(bookItem);
		});
	} catch (error) {
		console.error('Error loading books:', error);
	}
};

// Initialize the script
function init() {
	// Update the current time every second
	setInterval(updateTime, 1000);
	updateTime();

	// Add event listener for screen resize
	window.addEventListener("resize", handleResize);

	// Check initial screen size
	handleResize();

	// Load books
	loadBooks();
};

// Run initialization
init();
