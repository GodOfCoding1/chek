const ItemCard = ({ itemData }) => {
  return (
    <div>
      <h1> {itemData?.name}</h1>
      <h1> {itemData.price ? "Price " + itemData.price : ""}</h1>
    </div>
  );
};

export default ItemCard;
