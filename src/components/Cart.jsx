export default function Cart() {
  // TODO(3-03): Zustand store의 items와 장바구니 액션으로 교체합니다.
  const items = [];

  return (
    <section className="card">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">CART</p>
          <h2>장바구니</h2>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="emptyState">
          <span aria-hidden="true">🛒</span>
          <p>아직 담긴 상품이 없습니다.</p>
          <p className="muted">상품 페이지에서 장바구니를 채워 보세요.</p>
        </div>
      ) : null}
    </section>
  );
}
