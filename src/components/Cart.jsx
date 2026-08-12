export default function Cart() {
  // TODO(3-03): Zustand store의 items와 장바구니 액션으로 교체합니다.
  const items = [];
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};
  const removeItem = () => {};
  const clear = () => {};
  const totalPrice = 0;

  return (
    <section className="card">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">CART</p>
          <h2>장바구니</h2>
        </div>
        <button
          className="btn"
          type="button"
          disabled={items.length === 0}
          onClick={clear}
        >
          전체 비우기
        </button>
      </div>

      {items.length === 0 ? (
        <div className="emptyState">
          <span aria-hidden="true">🛒</span>
          <p>아직 담긴 상품이 없습니다.</p>
          <p className="muted">상품 페이지에서 장바구니를 채워 보세요.</p>
        </div>
      ) : (
        <>
          <div className="cartList">
            {items.map((item) => (
              <article key={item.productId} className="cartRow">
                <div>
                  <h3>{item.name}</h3>
                  <p className="muted">
                    {item.price.toLocaleString()}원 × {item.quantity}
                  </p>
                </div>

                <div className="qty" aria-label={`${item.name} 수량`}>
                  <button
                    className="btn btnSquare"
                    type="button"
                    aria-label={`${item.name} 수량 감소`}
                    onClick={() => decreaseQuantity(item.productId)}
                  >
                    −
                  </button>
                  <span className="qtyNumber">{item.quantity}</span>
                  <button
                    className="btn btnSquare"
                    type="button"
                    aria-label={`${item.name} 수량 증가`}
                    onClick={() => increaseQuantity(item.productId)}
                  >
                    +
                  </button>
                </div>

                <div className="right">
                  <strong>
                    {(item.price * item.quantity).toLocaleString()}원
                  </strong>
                  <button
                    className="btn btnDanger"
                    type="button"
                    onClick={() => removeItem(item.productId)}
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))}
          </div>

          <footer className="cartTotal">
            <span>총 결제 금액</span>
            <strong>{totalPrice.toLocaleString()}원</strong>
          </footer>
        </>
      )}
    </section>
  );
}
