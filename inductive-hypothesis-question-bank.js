/* SkillUp Mathematics — Inductive Hypothesis — Formula Edition */
window.SkillUpInductiveHypothesisQuestions=[
  {
    "level": "Foundation",
    "q": "In an induction proof, the inductive hypothesis is the assumption that:",
    "o": [
      "\\(P(k)\\) is true",
      "\\(P(k+1)\\) is true",
      "\\(P(1)\\) is false",
      "\\(P(k)\\) is false"
    ],
    "a": 0,
    "e": "The inductive hypothesis assumes \\(P(k)\\) for an arbitrary relevant \\(k\\)."
  },
  {
    "level": "Foundation",
    "q": "The inductive hypothesis is used primarily to prove:",
    "o": [
      "\\(P(k-1)\\)",
      "\\(P(k+1)\\)",
      "\\(P(1)\\)",
      "\\(P(0)\\)"
    ],
    "a": 1,
    "e": "The purpose is to establish the transition \\(P(k)\\Rightarrow P(k+1)\\)."
  },
  {
    "level": "Foundation",
    "q": "For \\(P(n):1+2+\\cdots+n=\\frac{n(n+1)}2\\), the inductive hypothesis is:",
    "o": [
      "\\(1+2+\\cdots+n=n^2\\)",
      "\\(1+2+\\cdots+k+1=\\frac{k(k+1)}2\\)",
      "\\(1+2+\\cdots+k=\\frac{k(k+1)}2\\)",
      "\\(k=1\\)"
    ],
    "a": 2,
    "e": "Replace \\(n\\) by arbitrary \\(k\\) in the original proposition."
  },
  {
    "level": "Foundation",
    "q": "In the inductive step, \\(k\\) should be treated as:",
    "o": [
      "a fixed prime number",
      "the largest natural number",
      "zero only",
      "an arbitrary natural number in the range"
    ],
    "a": 3,
    "e": "The argument must work for arbitrary relevant \\(k\\)."
  },
  {
    "level": "Foundation",
    "q": "Which implication expresses the goal of the inductive step?",
    "o": [
      "\\(P(k)\\Rightarrow P(k+1)\\)",
      "\\(P(k+1)\\Rightarrow P(k)\\)",
      "\\(P(1)\\Rightarrow P(k)\\)",
      "\\(P(k)\\Rightarrow P(1)\\)"
    ],
    "a": 0,
    "e": "The inductive step proves that truth at \\(k\\) transfers to \\(k+1\\)."
  },
  {
    "level": "Foundation",
    "q": "The inductive hypothesis is not the same as:",
    "o": [
      "assuming \\(P(k)\\) temporarily for the proof",
      "proving \\(P(k)\\) independently for every k",
      "using \\(P(k)\\) to derive \\(P(k+1)\\)",
      "working with an arbitrary k"
    ],
    "a": 1,
    "e": "The hypothesis is an assumption within the inductive step, not a separate verification of every case."
  },
  {
    "level": "Intermediate",
    "q": "Using \\(1+2+\\cdots+k=\\frac{k(k+1)}2\\), the next sum is:",
    "o": [
      "\\(1+2+\\cdots+k\\)",
      "\\(1+2+\\cdots+k+2\\)",
      "\\(1+2+\\cdots+k+(k+1)\\)",
      "\\(k(k+1)\\)"
    ],
    "a": 2,
    "e": "To reach case \\(k+1\\), add the next term \\(k+1\\)."
  },
  {
    "level": "Intermediate",
    "q": "Under the hypothesis \\(1+2+\\cdots+k=\\frac{k(k+1)}2\\), the next sum becomes:",
    "o": [
      "\\(\\frac{k+1}{2}\\)",
      "\\(\\frac{k(k+1)}2+k\\)",
      "\\(k(k+1)+1\\)",
      "\\(\\frac{k(k+1)}2+(k+1)\\)"
    ],
    "a": 3,
    "e": "Substitute the inductive hypothesis for the first k terms."
  },
  {
    "level": "Intermediate",
    "q": "The expression \\(\\frac{k(k+1)}2+(k+1)\\) simplifies to:",
    "o": [
      "\\(\\frac{(k+1)(k+2)}2\\)",
      "\\(\\frac{k(k+2)}2\\)",
      "\\(k(k+1)\\)",
      "\\(\\frac{k+2}{2}\\)"
    ],
    "a": 0,
    "e": "Factor \\(k+1\\) and simplify."
  },
  {
    "level": "Intermediate",
    "q": "For \\(1+3+\\cdots+(2n-1)=n^2\\), the inductive hypothesis is:",
    "o": [
      "\\(1+3+\\cdots+(2k+1)=k^2\\)",
      "\\(1+3+\\cdots+(2k-1)=k^2\\)",
      "\\(1+3+\\cdots+(2k-1)=(k+1)^2\\)",
      "\\(2k-1=k^2\\)"
    ],
    "a": 1,
    "e": "The hypothesis is the original formula with \\(n\\) replaced by \\(k\\)."
  },
  {
    "level": "Intermediate",
    "q": "Using the hypothesis \\(1+3+\\cdots+(2k-1)=k^2\\), the next case starts with:",
    "o": [
      "\\(k+(2k+1)\\)",
      "\\(k^2+(2k-1)\\)",
      "\\(k^2+(2k+1)\\)",
      "\\(k^2+1\\)"
    ],
    "a": 2,
    "e": "The next odd term is \\(2k+1\\)."
  },
  {
    "level": "Intermediate",
    "q": "The expression \\(k^2+2k+1\\) is equal to:",
    "o": [
      "\\((k-1)^2\\)",
      "\\(2(k+1)\\)",
      "\\(k^2+1\\)",
      "\\((k+1)^2\\)"
    ],
    "a": 3,
    "e": "Using \\((k+1)^2=k^2+2k+1\\) completes this transition."
  },
  {
    "level": "Intermediate",
    "q": "For \\(2^n>n\\), the inductive hypothesis is:",
    "o": [
      "\\(2^k>k\\)",
      "\\(2^{k+1}>k\\)",
      "\\(2^k>k+1\\)",
      "\\(2n>n\\)"
    ],
    "a": 0,
    "e": "The proposition at the arbitrary index \\(k\\) is assumed."
  },
  {
    "level": "Intermediate",
    "q": "From the hypothesis \\(2^k>k\\), multiplying by 2 gives:",
    "o": [
      "\\(2^{k+1}>k+1\\) immediately for every real k",
      "\\(2^{k+1}>2k\\)",
      "\\(2^k>2k\\)",
      "\\(2^{k+1}=2k\\)"
    ],
    "a": 1,
    "e": "Multiplication by the positive number 2 preserves the inequality."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):3^n-1\\) is divisible by 2, the hypothesis is:",
    "o": [
      "\\(3^k\\) is divisible by 2",
      "\\(3^{k+1}-1\\) is divisible by 2",
      "\\(3^k-1\\) is divisible by 2",
      "\\(k-1\\) is divisible by 2"
    ],
    "a": 2,
    "e": "The proposition is assumed true at the arbitrary index \\(k\\)."
  },
  {
    "level": "Advanced",
    "q": "If \\(P(k)\\) gives \\(S_k=\\frac{k(k+1)}2\\), then \\(S_{k+1}\\) can be written as:",
    "o": [
      "\\(2S_k\\)",
      "\\(S_k+k\\)",
      "\\(S_k+1\\)",
      "\\(S_k+(k+1)\\)"
    ],
    "a": 3,
    "e": "A sum through \\(k+1\\) equals the sum through k plus the next term."
  },
  {
    "level": "Advanced",
    "q": "For \\(\\sum_{r=1}^{n}r^2=\\frac{n(n+1)(2n+1)}6\\), the inductive hypothesis is:",
    "o": [
      "\\(\\sum_{r=1}^{k}r^2=\\frac{k(k+1)(2k+1)}6\\)",
      "\\(\\sum_{r=1}^{k+1}r^2=\\frac{k(k+1)(2k+1)}6\\)",
      "\\(\\sum_{r=1}^{k}r=\\frac{k(k+1)}2\\)",
      "\\(k^2=\\frac{k(k+1)(2k+1)}6\\)"
    ],
    "a": 0,
    "e": "The hypothesis is exactly the formula at index \\(k\\)."
  },
  {
    "level": "Advanced",
    "q": "Using that hypothesis, the next sum is:",
    "o": [
      "\\(\\frac{k(k+1)(2k+1)}6+k\\)",
      "\\(\\frac{k(k+1)(2k+1)}6+(k+1)^2\\)",
      "\\(k^2+(k+1)\\)",
      "\\(\\frac{(k+1)(2k+1)}6\\)"
    ],
    "a": 1,
    "e": "Add the next square \\((k+1)^2\\) to the assumed sum."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):n^2+n\\) is even, the inductive hypothesis states:",
    "o": [
      "\\(k^2+k+1\\) is even",
      "\\((k+1)^2+k\\) is even",
      "\\(k^2+k\\) is even",
      "\\(n^2+n\\) is even only at \\(n=1\\)"
    ],
    "a": 2,
    "e": "The proposition at \\(k\\) is assumed true."
  },
  {
    "level": "Advanced",
    "q": "The next expression for \\(n^2+n\\) is:",
    "o": [
      "\\(2k+1\\)",
      "\\(k^2+k\\)",
      "\\((k+1)^2+k\\)",
      "\\((k+1)^2+(k+1)\\)"
    ],
    "a": 3,
    "e": "Replace n by \\(k+1\\) in the proposition."
  },
  {
    "level": "Advanced",
    "q": "Expanding \\((k+1)^2+(k+1)\\) gives:",
    "o": [
      "\\(k^2+3k+2\\)",
      "\\(k^2+2k+1\\)",
      "\\(k^2+k+1\\)",
      "\\(2k+2\\)"
    ],
    "a": 0,
    "e": "The expansion is \\(k^2+2k+1+k+1=k^2+3k+2\\)."
  },
  {
    "level": "Advanced",
    "q": "If \\(P(k)\\) says \\(3^k-1=2m\\) for some integer \\(m\\), this representation is useful because:",
    "o": [
      "it proves \\(P(k+1)\\) automatically",
      "it explicitly shows divisibility by 2",
      "it removes the need for a base case",
      "it makes k fixed"
    ],
    "a": 1,
    "e": "Writing the expression as \\(2m\\) makes the divisibility assumption explicit."
  },
  {
    "level": "Advanced",
    "q": "In strong induction, the hypothesis may include:",
    "o": [
      "only \\(P(1)\\)",
      "only \\(P(k+1)\\)",
      "\\(P(1),P(2),\\ldots,P(k)\\)",
      "no previous propositions"
    ],
    "a": 2,
    "e": "Strong induction permits assuming all earlier cases up to k."
  },
  {
    "level": "Advanced",
    "q": "Which is a valid strong induction hypothesis for \\(n\\ge2\\)?",
    "o": [
      "only \\(P(2)\\)",
      "only \\(P(k+1)\\)",
      "\\(P(1)\\) is false",
      "\\(P(j)\\) is true for every \\(2\\le j\\le k\\)"
    ],
    "a": 3,
    "e": "The hypothesis contains every established case from the starting index through k."
  },
  {
    "level": "Master",
    "q": "Suppose \\(P(k):a_k=2k+3\\). To prove \\(P(k+1)\\), the target is:",
    "o": [
      "\\(a_{k+1}=2k+5\\)",
      "\\(a_{k+1}=2k+3\\)",
      "\\(a_k=2k+5\\)",
      "\\(a_{k+1}=2k+1\\)"
    ],
    "a": 0,
    "e": "Replacing k by \\(k+1\\) gives \\(2(k+1)+3=2k+5\\)."
  },
  {
    "level": "Master",
    "q": "If \\(P(k):k^2\\le2^k\\), the inductive hypothesis allows you to write:",
    "o": [
      "\\((k+1)^2\\le2^k\\)",
      "\\(k^2\\le2^k\\)",
      "\\(k^2\\le2^{k+1}\\) as an assumption",
      "\\(k=2^k\\)"
    ],
    "a": 1,
    "e": "The assumed proposition is exactly the statement at k."
  },
  {
    "level": "Master",
    "q": "For \\(P(k):k!\\ge2^{k-1}\\), the hypothesis is:",
    "o": [
      "\\(k!\\ge2^k\\)",
      "\\((k+1)!\\ge2^{k-1}\\)",
      "\\(k!\\ge2^{k-1}\\)",
      "\\((k+1)!\\ge2^k\\) as an assumption"
    ],
    "a": 2,
    "e": "The inductive hypothesis substitutes k into the original proposition."
  },
  {
    "level": "Master",
    "q": "Using \\(k!\\ge2^{k-1}\\), which expression helps prove \\((k+1)!\\ge2^k\\)?",
    "o": [
      "\\((k+1)!=2^{k-1}\\)",
      "\\((k+1)!=k!+1\\)",
      "\\((k+1)!\\le k!\\)",
      "\\((k+1)!=(k+1)k!\\ge(k+1)2^{k-1}\\)"
    ],
    "a": 3,
    "e": "Multiply the inductive inequality by the positive factor \\(k+1\\)."
  },
  {
    "level": "Master",
    "q": "The phrase 'assume \\(P(k)\\) is true' means that the proof:",
    "o": [
      "uses \\(P(k)\\) as a temporary hypothesis to establish \\(P(k+1)\\)",
      "has already proved all natural cases",
      "does not need a base case",
      "assumes the conclusion for every n"
    ],
    "a": 0,
    "e": "The assumption is local to the inductive step and is used to derive the next case."
  },
  {
    "level": "Master",
    "q": "The most precise symbolic form of the inductive hypothesis is:",
    "o": [
      "\\(P(n)\\) for every real n",
      "\\(P(k)\\) for an arbitrary relevant \\(k\\)",
      "\\(P(k+1)\\) for every k",
      "\\(P(n_0)\\) only"
    ],
    "a": 1,
    "e": "The hypothesis concerns an arbitrary index k in the induction range."
  }
];
