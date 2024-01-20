const artistImg = document.querySelector("#artist-img");

artistImg.classList.add("zoom-in");

setTimeout(() => {
  artistImg.classList.remove("zoom-in");
  artistImg.classList.add("zoom-out");
}, 1000);

setTimeout(() => {
  artistImg.classList.remove("zoom-out");
}, 2000);



const reviewsForm = document.querySelector('#reviews form');
const reviewsTableBody = document.querySelector('#reviews-table-body');

reviewsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = event.target.elements.username.value;
  const rating = event.target.elements.rating.value;
  const review = event.target.elements.review.value;
  
  const reviewData = { username, rating, review };
  addReviewToTable(reviewData);
  
  event.target.reset();
});

function addReviewToTable(reviewData) {
  const { username, rating, review } = reviewData;
  
  const row = document.createElement('tr');
  const usernameCell = document.createElement('td');
  const ratingCell = document.createElement('td');
  const reviewCell = document.createElement('td');
  
  usernameCell.textContent = username;
  ratingCell.textContent = rating;
  reviewCell.textContent = review;
  
  row.appendChild(usernameCell);
  row.appendChild(ratingCell);
  row.appendChild(reviewCell);
  
  reviewsTableBody.appendChild(row);
}




const releaseDate = new Date('2025-06-30T00:00:00Z');
const countdownTimer = document.querySelector('#countdown-timer');

function updateCountdown() {
  const now = new Date();
  const difference = releaseDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdownTimer.textContent = `${days} DAYS, ${hours} HOURS, ${minutes} MINUTES, ${seconds} SECONDS`;
  } else {
    countdownTimer.textContent = 'Album has been released!';
  }
}

setInterval(updateCountdown, 1000);
