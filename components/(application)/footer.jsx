
export default function Footer() {
  return (
<footer className="bg-gray-100 text-sm text-gray-600 py-10 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
    {/* 왼쪽: 로고 및 회사 정보 */}
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <span className="text-blue-500 text-xs font-bold">✓</span>
        <span className="text-sm font-bold text-blue-500">Pawple</span>
      </div>
      <div className="text-xs space-y-0.5">
        <p>상호: 주식회사 포플 | 대표자: 홍길동 | 개인정보취급담당자: 홍길동</p>
        <p>사업자등록번호: 111-22-33333</p>
        <p>주소: 서울 노원구 상계로1길 34 세일학원 5층</p>
        <p>통신판매업신고: 제2024-서울노원-01234호</p>
        <p>© Pawple Inc. All Rights Reserved</p>
      </div>
    </div>

    {/* 중간: 링크 */}
    <div className="space-y-1 text-xs">
      <p className="font-semibold">포플 소개</p>
      <div className="flex flex-wrap gap-x-4">
        <a href="#" className="hover:underline">개인정보처리방침</a>
        <a href="#" className="hover:underline">이용약관</a>
        <a href="#" className="hover:underline">의견접수</a>
      </div>
    </div>

    {/* 오른쪽: 고객센터 */}
    <div className="text-xs space-y-1">
      <p className="font-semibold text-gray-800">고객센터</p>
      <p className="text-lg text-black font-bold">070-1111-2222</p>
      <p>평일 11:00 ~ 18:00 | 점심시간 13:00 ~ 14:00<br />(주말/공휴일 휴무)</p>
      <p>문의 메일: <a href="mailto:official@elevenliter.com" className="underline">official@pawple.com</a></p>
    </div>
  </div>
</footer>

  );
}
