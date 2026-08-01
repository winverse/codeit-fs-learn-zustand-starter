export default function Header({ page, setPage }) {
  const user = { name: '상현' };

  // TODO(3-03): Zustand store에서 전체 상품 수량을 계산합니다.
  const totalCount = 0;

  return (
    <header className="header card">
      <div>
        <p className="eyebrow">STATE MANAGEMENT LAB</p>
        <h1>Zustand Mini Shop</h1>
      </div>

      <nav className="headerActions" aria-label="페이지 이동">
        <span className="badge" aria-label={`장바구니 상품 ${totalCount}개`}>
          🛒 {totalCount}개
        </span>
        <button
          className={page === 'shop' ? 'btn btnPrimary' : 'btn'}
          type="button"
          onClick={() => setPage('shop')}
        >
          상품
        </button>
        <button
          className={page === 'cart' ? 'btn btnPrimary' : 'btn'}
          type="button"
          onClick={() => setPage('cart')}
        >
          장바구니
        </button>
        <span className="badge">👤 {user.name}</span>
      </nav>
    </header>
  );
}
