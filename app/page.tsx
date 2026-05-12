import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">수심달</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">특징</a>
            <a href="#how" className="hover:text-indigo-600 transition-colors">학습 흐름</a>
            <Link href="/guide" className="hover:text-indigo-600 transition-colors">학생 가이드</Link>
            <a href="#cta" className="hover:text-indigo-600 transition-colors">시작하기</a>
          </div>
          <Link
            href="/guide"
            className="bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            학생 가이드 보기 →
          </Link>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🚀 수심달 RED 출시
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            수학 심화 학습의<br />
            <span className="gradient-text">새로운 기준</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            개념부터 심화까지, AI가 함께하는 맞춤형 수학 학습 플랫폼.<br />
            학생 한 명 한 명의 실력에 꼭 맞는 커리큘럼을 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guide"
              className="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              학생 가이드 보러가기 →
            </Link>
            <a
              href="#features"
              className="w-full sm:w-auto text-gray-600 font-medium px-8 py-4 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              자세히 알아보기
            </a>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">수심달이 특별한 이유</h2>
            <p className="text-gray-500 text-lg">체계적인 단계별 학습으로 수학 실력을 완성합니다</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "AI 맞춤 커리큘럼",
                desc: "학생의 수준과 학습 패턴을 분석해 최적의 학습 경로를 제공합니다.",
              },
              {
                icon: "📈",
                title: "단계별 심화 학습",
                desc: "개념 → 연습 → 심화 3단계 구조로 탄탄한 실력을 쌓습니다.",
              },
              {
                icon: "🏆",
                title: "실시간 학습 현황",
                desc: "학부모와 선생님이 학생의 학습 현황을 실시간으로 확인할 수 있습니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 학습 흐름 섹션 */}
      <section id="how" className="py-24 px-6 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">어떻게 학습하나요?</h2>
            <p className="text-gray-500 text-lg">단순하지만 강력한 4단계 학습 시스템</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "01", title: "개념 학습", desc: "핵심 개념을 짧고 명확하게 이해합니다." },
              { step: "02", title: "연습 문제", desc: "다양한 유형의 문제로 개념을 다집니다." },
              { step: "03", title: "심화 도전", desc: "수능·경시 수준의 문제로 실력을 끌어올립니다." },
              { step: "04", title: "오답 분석", desc: "AI가 틀린 문제를 분석하고 취약점을 보완합니다." },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm"
              >
                <span className="text-3xl font-black gradient-text shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-indigo-200 text-xl mb-10">
            첫 30일 무료 체험. 언제든지 취소 가능합니다.
          </p>
          <a
            href="mailto:contact@susimdal.com"
            className="inline-block bg-white text-indigo-600 font-bold px-10 py-4 rounded-2xl hover:bg-indigo-50 transition-colors shadow-xl text-lg"
          >
            무료 체험 신청하기 →
          </a>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-10 px-6 bg-gray-900 text-gray-400 text-sm text-center">
        <p>© 2025 수심달. All rights reserved.</p>
        <p className="mt-2">contact@susimdal.com</p>
      </footer>
    </main>
  );
}
