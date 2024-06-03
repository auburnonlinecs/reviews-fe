export function ratingToStars(rating: number) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>★</span>);
  }
  return stars;
}
