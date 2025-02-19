export default function Typography() {
  return (
    <div>
      <div className="text-left">1_typography</div>
      <article className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">타이포그래피 스타일링 예시</h1>
        <p className="text-lg leading-relaxed mb-6">
          본 문서는 타이포그래피 스타일링을 위한 예시 문서입니다. font-size,
          font-weight, text-align, line-height, text-color 등을 지정할 수
          있습니다.
        </p>
        <p className="text-lg font-bold text-blue-500 hover:text-blue-700 hover:underline">
          예시 블로그 포스트 내용입니다.
        </p>
      </article>
    </div>
  );
}
