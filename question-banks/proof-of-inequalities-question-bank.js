/* SkillUp Mathematics — Proof of Inequalities */
window.SkillUpProofOfInequalitiesQuestions=[
  {
    "level": "Foundation",
    "q": "To prove an inequality by induction, the base step establishes:",
    "o": [
      "\\(P(n_0)\\)",
      "\\(P(k+1)\\)",
      "\\(P(k)\\Rightarrow P(k+1)\\)",
      "\\(P(n)\\) for every real \\(n\\)"
    ],
    "a": 0,
    "e": "The base step verifies the inequality at the first allowed value."
  },
  {
    "level": "Foundation",
    "q": "For \\(P(n):2^n\\ge n+1\\), the base case \\(n=1\\) is:",
    "o": [
      "\\(2\\ge1\\)",
      "\\(2\\ge2\\)",
      "\\(1\\ge2\\)",
      "\\(2\\ge3\\)"
    ],
    "a": 1,
    "e": "At \\(n=1\\), both sides equal \\(2\\)."
  },
  {
    "level": "Foundation",
    "q": "If \\(P(k):2^k\\ge k+1\\), then \\(2^{k+1}\\) can be written as:",
    "o": [
      "\\(k^2\\)",
      "\\(2+k\\)",
      "\\(2\\cdot2^k\\)",
      "\\(2^k+1\\)"
    ],
    "a": 2,
    "e": "The power rule gives \\(2^{k+1}=2\\cdot2^k\\)."
  },
  {
    "level": "Foundation",
    "q": "Using \\(2^k\\ge k+1\\), we obtain:",
    "o": [
      "\\(2^{k+1}\\ge k\\)",
      "\\(2^{k+1}\\le k+1\\)",
      "\\(2^{k+1}=k+1\\)",
      "\\(2^{k+1}\\ge2(k+1)\\)"
    ],
    "a": 3,
    "e": "Multiplying the hypothesis by positive \\(2\\) preserves the inequality."
  },
  {
    "level": "Foundation",
    "q": "Which implication is the core of an inductive inequality proof?",
    "o": [
      "\\(P(k)\\Rightarrow P(k+1)\\)",
      "\\(P(k+1)\\Rightarrow P(k)\\)",
      "\\(P(1)\\Rightarrow P(0)\\)",
      "\\(P(k)\\Rightarrow\\neg P(k+1)\\)"
    ],
    "a": 0,
    "e": "The inductive step must transfer the inequality from \\(k\\) to \\(k+1\\)."
  },
  {
    "level": "Foundation",
    "q": "For an inequality claimed for \\(n\\ge3\\), the base step should verify:",
    "o": [
      "\\(P(1)\\)",
      "\\(P(3)\\)",
      "\\(P(2)\\)",
      "\\(P(4)\\)"
    ],
    "a": 1,
    "e": "The first value in the stated range is \\(3\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):n^2\\ge n\\) with \\(n\\ge1\\), the inductive target is:",
    "o": [
      "\\((k+1)^2\\ge k\\) only",
      "\\(k^2\\ge k+1\\)",
      "\\((k+1)^2\\ge k+1\\)",
      "\\(k^2\\ge k\\)"
    ],
    "a": 2,
    "e": "The next case is obtained by replacing \\(n\\) with \\(k+1\\)."
  },
  {
    "level": "Intermediate",
    "q": "Starting from \\(k^2\\ge k\\), multiplying by positive \\(k+1\\) gives:",
    "o": [
      "\\(k^3\\ge k+1\\)",
      "\\(k^2(k+1)\\le k(k+1)\\)",
      "\\(k^2\\ge k+1\\)",
      "\\(k^2(k+1)\\ge k(k+1)\\)"
    ],
    "a": 3,
    "e": "Multiplication by positive \\(k+1\\) preserves the inequality."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):n^2\\ge2n-1\\), the difference of the two sides is:",
    "o": [
      "\\((n-1)^2\\)",
      "\\(n-1\\)",
      "\\(n^2-1\\)",
      "\\(2n-1\\)"
    ],
    "a": 0,
    "e": "Since \\(n^2-(2n-1)=(n-1)^2\\ge0\\), the inequality follows."
  },
  {
    "level": "Intermediate",
    "q": "To prove \\(1+2+\\cdots+n>n\\) for \\(n\\ge2\\), a useful base case is:",
    "o": [
      "\\(1+2=2\\)",
      "\\(1+2>2\\)",
      "\\(1>2\\)",
      "\\(2>3\\)"
    ],
    "a": 1,
    "e": "At \\(n=2\\), \\(3>2\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):n!\\ge2^{n-1}\\) with \\(n\\ge1\\), the inductive hypothesis is:",
    "o": [
      "\\(n!\\ge2^n\\)",
      "\\((k+1)!\\ge2^k\\)",
      "\\(k!\\ge2^{k-1}\\)",
      "\\(k!\\le2^{k-1}\\)"
    ],
    "a": 2,
    "e": "The hypothesis is the statement at an arbitrary \\(k\\)."
  },
  {
    "level": "Intermediate",
    "q": "From \\(k!\\ge2^{k-1}\\), multiplying by \\(k+1\\ge2\\) gives:",
    "o": [
      "\\((k+1)!\\ge2^{k+1}\\)",
      "\\((k+1)!\\le2^k\\)",
      "\\(k!\\ge2^k\\)",
      "\\((k+1)!\\ge2^k\\)"
    ],
    "a": 3,
    "e": "Because \\(k+1\\ge2\\), \\((k+1)!=(k+1)k!\\ge2\\cdot2^{k-1}=2^k\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):3^n\\ge n^2+2\\) at \\(n=1\\), the base case is:",
    "o": [
      "\\(3\\ge3\\)",
      "\\(3\\ge2\\)",
      "\\(3\\ge4\\)",
      "\\(1\\ge3\\)"
    ],
    "a": 0,
    "e": "At \\(n=1\\), both sides equal \\(3\\)."
  },
  {
    "level": "Intermediate",
    "q": "A valid inequality proof must be careful when multiplying by a quantity whose sign is:",
    "o": [
      "positive",
      "unknown",
      "zero only",
      "always negative"
    ],
    "a": 1,
    "e": "Multiplication by an unknown-sign expression can reverse the inequality."
  },
  {
    "level": "Intermediate",
    "q": "If \\(a>b\\) and \\(c>0\\), then:",
    "o": [
      "\\(ac=bc\\)",
      "\\(ac<bc\\)",
      "\\(ac>bc\\)",
      "\\(a+c<b+c\\)"
    ],
    "a": 2,
    "e": "Multiplication by positive \\(c\\) preserves the inequality."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):2n+1<n^2\\) for \\(n\\ge3\\), the base case is:",
    "o": [
      "\\(3<7\\)",
      "\\(5<4\\)",
      "\\(6<9\\)",
      "\\(7<9\\)"
    ],
    "a": 3,
    "e": "At \\(n=3\\), \\(2n+1=7<9=n^2\\)."
  },
  {
    "level": "Advanced",
    "q": "Assuming \\(2k+1<k^2\\), which expression is the next target?",
    "o": [
      "\\(2k+3<(k+1)^2\\)",
      "\\(2k+1<(k+1)^2\\)",
      "\\(2k+2<k^2\\)",
      "\\(2k+3<k^2\\)"
    ],
    "a": 0,
    "e": "Replace \\(n\\) by \\(k+1\\)."
  },
  {
    "level": "Advanced",
    "q": "The expansion \\((k+1)^2\\) equals:",
    "o": [
      "\\(k^2+1\\)",
      "\\(k^2+2k+1\\)",
      "\\(k^2+k\\)",
      "\\(2k^2+1\\)"
    ],
    "a": 1,
    "e": "Using \\((a+b)^2=a^2+2ab+b^2\\) gives the result."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):n^2+n\\ge2n\\), simplifying the difference gives:",
    "o": [
      "\\(n+2\\)",
      "\\(n^2-n\\)",
      "\\(n(n-1)\\)",
      "\\(2n-n^2\\)"
    ],
    "a": 2,
    "e": "The difference is \\(n^2+n-2n=n^2-n=n(n-1)\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(n\\ge1\\), why is \\(n(n-1)\\ge0\\)?",
    "o": [
      "Because \\(n\\) is prime",
      "Both factors are negative",
      "Their sum is zero",
      "Both factors are nonnegative"
    ],
    "a": 3,
    "e": "For \\(n\\ge1\\), both \\(n\\) and \\(n-1\\) are nonnegative."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):2^n\\ge n^2\\) for \\(n\\ge4\\), the base case is:",
    "o": [
      "\\(16\\ge16\\)",
      "\\(8\\ge9\\)",
      "\\(16\\ge25\\)",
      "\\(4\\ge16\\)"
    ],
    "a": 0,
    "e": "At \\(n=4\\), \\(2^4=16=4^2\\)."
  },
  {
    "level": "Advanced",
    "q": "Assuming \\(2^k\\ge k^2\\), we have \\(2^{k+1}\\ge\\):",
    "o": [
      "\\(k^2+1\\)",
      "\\(2k^2\\)",
      "\\(k^2\\)",
      "\\(2k\\)"
    ],
    "a": 1,
    "e": "Multiplying the hypothesis by \\(2\\) gives \\(2^{k+1}\\ge2k^2\\)."
  },
  {
    "level": "Advanced",
    "q": "To complete the proof of \\(2^n\\ge n^2\\), for \\(k\\ge4\\) it is enough to show:",
    "o": [
      "\\(k^2\\ge2(k+1)^2\\)",
      "\\(2k^2<(k+1)^2\\)",
      "\\(2k^2\\ge(k+1)^2\\)",
      "\\(2k\\ge(k+1)^2\\)"
    ],
    "a": 2,
    "e": "Then \\(2^{k+1}\\ge2k^2\\ge(k+1)^2\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):\\frac1n<1\\) for \\(n>1\\), the base case \\(n=2\\) is:",
    "o": [
      "\\(1<\\frac12\\)",
      "\\(\\frac12>1\\)",
      "\\(2<1\\)",
      "\\(\\frac12<1\\)"
    ],
    "a": 3,
    "e": "The inequality is true at \\(n=2\\)."
  },
  {
    "level": "Master",
    "q": "For \\(P(n):n^3\\ge3n-2\\), the difference factors as:",
    "o": [
      "\\((n-1)^2(n+2)\\)",
      "\\((n+1)^2(n-2)\\)",
      "\\(n(n-1)\\)",
      "\\((n-1)(n+2)\\)"
    ],
    "a": 0,
    "e": "Indeed, \\(n^3-3n+2=(n-1)^2(n+2)\\ge0\\) for \\(n\\ge1\\)."
  },
  {
    "level": "Master",
    "q": "In an inductive proof of an inequality, if the inductive hypothesis gives \\(A_k\\ge B_k\\), a valid next step may use:",
    "o": [
      "an arbitrary reversal of signs",
      "an algebraic transformation preserving order",
      "division by zero",
      "multiplication by an unknown-sign expression"
    ],
    "a": 1,
    "e": "Every transformation must preserve the direction of the inequality."
  },
  {
    "level": "Master",
    "q": "For \\(P(n):\\sum_{r=1}^{n}r\\ge n^2/2\\), the base case \\(n=1\\) checks:",
    "o": [
      "\\(1=\\frac12\\)",
      "\\(1\\le\\frac12\\)",
      "\\(1\\ge\\frac12\\)",
      "\\(0\\ge1\\)"
    ],
    "a": 2,
    "e": "At \\(n=1\\), the left side is \\(1\\) and the right side is \\(1/2\\)."
  },
  {
    "level": "Master",
    "q": "For the sum inequality above, the next-case target is:",
    "o": [
      "\\(k(k+1)\\ge k+1\\)",
      "\\(\\frac{k(k+1)}2\\ge\\frac{(k+1)^2}{2}\\)",
      "\\(k+1\\ge k^2\\)",
      "\\(\\frac{k(k+1)}2+(k+1)\\ge\\frac{(k+1)^2}{2}\\)"
    ],
    "a": 3,
    "e": "The next sum equals the previous sum plus \\(k+1\\)."
  },
  {
    "level": "Master",
    "q": "Which is the safest general principle when manipulating an inequality?",
    "o": [
      "Check the sign of every factor or divisor used",
      "Ignore signs",
      "Always multiply by \\(-1\\)",
      "Divide by an expression without checking"
    ],
    "a": 0,
    "e": "The direction of an inequality depends on the sign of the quantity used in multiplication or division."
  },
  {
    "level": "Master",
    "q": "The complete induction structure for an inequality is:",
    "o": [
      "base inequality only",
      "base inequality + hypothesis + proof of the next inequality",
      "examples only",
      "next inequality only"
    ],
    "a": 1,
    "e": "A complete proof needs the initial case and a valid transition from \\(k\\) to \\(k+1\\)."
  }
];
