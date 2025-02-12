import "./styles/main.css";
import { initSlider } from "./components/initSlider";
import switchToNextSlide from "./components/autoMoveSlider";

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  switchToNextSlide();

  const categoriesLink = document.querySelectorAll(".categories_link");
  const cardsBlock = document.querySelector(".cards_block");
  const loadBtn = document.querySelector(".load_btn");

  // Данные
  const appState = {
    activeCategoryIndex: localStorage.getItem("activeCategoryIndex")
      ? parseInt(localStorage.getItem("activeCategoryIndex"), 10)
      : 0,
    startIndex: 0,
    cartItems: {},
    cartCount: 0,
    params: new URLSearchParams({
      key: "AIzaSyAersGrpFzMRiU9ntCg4mdgDGPQFrULqOI",
      printType: "books",
      maxResults: "6",
      langRestrict: "en",
    }),
  };

  // Функция для получения текущей активной категории
  const getActiveCategory = () => {
    const activeLink = document.querySelector(".categories_link.active");
    return activeLink ? activeLink.dataset.category : null;
  };

  // Функция для создания URL запроса
  const createRequestUrl = (params) => {
    const category = getActiveCategory();
    if (!category) {
      console.error("Нет активной категории для запроса");
      return null;
    }
    const localParams = new URLSearchParams(params);
    localParams.set("q", `subject:${category}`);
    return `https://www.googleapis.com/books/v1/volumes?${localParams.toString()}`;
  };

  // Функция для запроса
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Ошибка fetch:", error);
      return null;
    }
  };

  // Функция для обработки книг
  const displayBooks = (books) => {
    if (!cardsBlock) {
      console.error("Не найден элемент .cards_block");
      return;
    }
    if (!books) {
      cardsBlock.innerHTML += `<p>No books found</p>`;
      return;
    }
    books.forEach((book) => {
      const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown";
      const thumbnail = book.volumeInfo.imageLinks?.thumbnail || "";
      const title = book.volumeInfo.title || "Unknown";
      const description = book.volumeInfo.description || "No description";
      const price = book.saleInfo?.retailPrice
        ? book.saleInfo.retailPrice.amount +
          " " +
          book.saleInfo.retailPrice.currencyCode
        : "Unavailable";
      const averageRating = Math.floor(Math.random() * 5) + 1;
      const ratingsCount = Math.floor(Math.random() * 1000);
      let ratingStars = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          ratingStars += `<svg class="raiting_star"><use xlink:href="#star-active" /></svg>`;
        } else {
          ratingStars += `<svg class="raiting_star"><use xlink:href="#star-inactive" /></svg>`;
        }
      }
      const card = document.createElement("div");
      card.classList.add("cards_item", "book_card");
      card.setAttribute("data-book-id", book.id);
      card.innerHTML = `<img src=${thumbnail} alt="book cover" class="card_img">
            <div class="card_info">
                 <div class="info_author">${authors}</div>
                 <div class="info_title">${title}</div>
                  <div class="info_raiting">
                    <div>${ratingStars}</div>
                    ${ratingsCount} review
                  </div>
                  <p class="info_text">${description}</p>
                   <div class="info_cost">${price}</div>
                    <button class="info_btn">buy now</button>
                </div>`;
      cardsBlock.appendChild(card);
    });
  };

  const setActiveCategory = () => {
    if (!categoriesLink || categoriesLink.length === 0) {
      console.error("Не найдены элементы категорий (categoriesLink)");
      return;
    }
    categoriesLink.forEach((link, index) => {
      link.classList.toggle("active", index === appState.activeCategoryIndex);
    });
  };

  const loadBooks = async () => {
    const url = createRequestUrl(appState.params);
    if (!url) return;
    const data = await fetchData(url);
    if (data && data.items) {
      displayBooks(data.items);
    }
  };

  const handleCategoryClick = (index) => {
    categoriesLink.forEach((link) => link.classList.remove("active"));
    categoriesLink[index].classList.add("active");
    appState.activeCategoryIndex = index;
    localStorage.setItem("activeCategoryIndex", appState.activeCategoryIndex);
    cardsBlock.innerHTML = "";
    appState.startIndex = 0;
    appState.params.set("startIndex", appState.startIndex);
    loadBooks();
  };
  const handleLoadMoreClick = () => {
    appState.startIndex += 6;
    appState.params.set("startIndex", appState.startIndex);
    loadBooks();
  };
  const initialLoad = async () => {
    setActiveCategory();
    await loadBooks();
  };

  initialLoad();
  activateBtns();
  categoriesLink.forEach((link, index) => {
    link.addEventListener("click", () => handleCategoryClick(index));
  });

  loadBtn.addEventListener("click", handleLoadMoreClick);

  // CART
  const toggleCartItem = (btn, card, bookId, cartCounter) => {
    if (!appState.cartItems[bookId]) {
      appState.cartItems[bookId] = true;
      appState.cartCount++;
      btn.textContent = "Delete from cart";
      btn.classList.add("active");
      cartCounter.style.display = "block";
    } else {
      delete appState.cartItems[bookId];
      appState.cartCount--;
      btn.textContent = "Buy now";
      btn.classList.remove("active");
      if (appState.cartCount === 0) {
        cartCounter.style.display = "none";
      }
    }
    cartCounter.textContent = appState.cartCount;
  };

  // Функция activateBtns
  function activateBtns() {
    const cardsBlock = document.querySelector(".cards_block");
    const cartCounter = document.querySelector(".cart_counter");
    if (!cardsBlock || !cartCounter) {
      console.error("Не найден элемент .cards_block или .cart_counter");
      return;
    }
    cardsBlock.addEventListener("click", function (event) {
      if (!event.target.matches(".info_btn")) return;
      const btn = event.target;
      const card = btn.closest(".cards_item");
      if (!card) {
        console.error("Не найдена карточка (.cards_item)", btn);
        return;
      }
      const bookId = card.dataset.bookId || card.id;
      if (!bookId) {
        console.error("Не найден id для книги", card);
        return;
      }
      toggleCartItem(btn, card, bookId, cartCounter);
    });
  }
});
