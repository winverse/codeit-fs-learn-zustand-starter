import { products } from '@/data/products.js';

export default function ProductList() {
  // TODO(3-03): Zustand store의 addItem 액션으로 교체합니다.
  const addItem = () => {};

  return (
    <section className="card">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">PRODUCTS</p>
          <h2>상품 목록</h2>
        </div>
        <p className="muted">지금은 담기 버튼이 동작하지 않습니다.</p>
      </div>

      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="productCard">
            <div className="productIcon" aria-hidden="true">
              {product.id === 1
                ? '🎧'
                : product.id === 2
                  ? '⌨️'
                  : product.id === 3
                    ? '🖱️'
                    : '🖥️'}
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price.toLocaleString()}원</p>
            <button
              className="btn btnPrimary btnWide"
              type="button"
              onClick={() => addItem(product)}
            >
              장바구니 담기
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
