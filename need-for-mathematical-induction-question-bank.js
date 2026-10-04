/* SkillUp Mathematics — Need for Mathematical Induction — Formula Edition */
window.SkillUpNeedForMathematicalInductionQuestions=[
  {
    "level": "Foundation",
    "q": "The principle of mathematical induction is used to prove a statement \\(P(n)\\) for:",
    "o": [
      "every \\(n\\in\\mathbb N\\)",
      "only \\(n=1\\)",
      "only even \\(n\\)",
      "only prime \\(n\\)"
    ],
    "a": 0,
    "e": "Induction establishes \\(P(n)\\) for every natural number in the stated range."
  },
  {
    "level": "Foundation",
    "q": "For standard induction beginning at \\(n=1\\), the base case is:",
    "o": [
      "\\(P(0)\\)",
      "\\(P(1)\\)",
      "\\(P(2)\\)",
      "\\(P(k)\\)"
    ],
    "a": 1,
    "e": "The usual base case is \\(P(1)\\)."
  },
  {
    "level": "Foundation",
    "q": "The inductive hypothesis in a proof of \\(P(n)\\) is:",
    "o": [
      "\\(P(k)\\) is assumed true",
      "\\(P(k+1)\\) is assumed true",
      "\\(P(1)\\) is assumed false",
      "\\(P(k)\\) is disproved"
    ],
    "a": 0,
    "e": "The inductive hypothesis assumes \\(P(k)\\) for an arbitrary relevant \\(k\\)."
  },
  {
    "level": "Foundation",
    "q": "The essential implication in ordinary induction is:",
    "o": [
      "\\(P(k+1)\\Rightarrow P(k)\\)",
      "\\(P(k)\\Rightarrow P(k+1)\\)",
      "\\(P(1)\\Rightarrow P(0)\\)",
      "\\(P(k)\\Rightarrow P(k-1)\\)"
    ],
    "a": 1,
    "e": "The inductive step proves \\(P(k)\\Rightarrow P(k+1)\\)."
  },
  {
    "level": "Foundation",
    "q": "If \\(P(1)\\) is true and \\(P(k)\\Rightarrow P(k+1)\\) for every \\(k\\ge1\\), then:",
    "o": [
      "\\(P(n)\\) is true for every \\(n\\ge1\\)",
      "only \\(P(1)\\) is true",
      "only even cases are true",
      "nothing follows"
    ],
    "a": 0,
    "e": "The base case starts the chain and the implication propagates truth."
  },
  {
    "level": "Foundation",
    "q": "Which formula represents the domino analogy?",
    "o": [
      "\\(D_1\\) falls and \\(D_k\\Rightarrow D_{k+1}\\)",
      "\\(D_{k+1}\\Rightarrow D_k\\) only",
      "\\(D_1\\) alone",
      "\\(D_{100}\\) alone"
    ],
    "a": 0,
    "e": "The first domino falls and each fallen domino causes the next to fall."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):1+2+\\cdots+n=\\frac{n(n+1)}2\\), the base case \\(n=1\\) gives:",
    "o": [
      "\\(1=1\\)",
      "\\(1=2\\)",
      "\\(1=\\frac12\\)",
      "\\(1=0\\)"
    ],
    "a": 0,
    "e": "At \\(n=1\\), both sides equal \\(1\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(k):1+2+\\cdots+k=\\frac{k(k+1)}2\\), the expression for \\(P(k+1)\\) is:",
    "o": [
      "\\(1+\\cdots+k=\\frac{k(k+1)}2\\)",
      "\\(1+\\cdots+k+(k+1)=\\frac{(k+1)(k+2)}2\\)",
      "\\(1+\\cdots+k+1=\\frac{k(k+1)}2\\)",
      "\\(1+\\cdots+k=(k+1)(k+2)\\)"
    ],
    "a": 1,
    "e": "The next case replaces \\(n\\) by \\(k+1\\)."
  },
  {
    "level": "Intermediate",
    "q": "Using \\(P(k)\\), \\(\\frac{k(k+1)}2+(k+1)\\) simplifies to:",
    "o": [
      "\\(\\frac{(k+1)(k+2)}2\\)",
      "\\(\\frac{k(k+2)}2\\)",
      "\\(k(k+1)\\)",
      "\\(\\frac{k+2}{2}\\)"
    ],
    "a": 0,
    "e": "Factor \\(k+1\\): \\(\\frac{k(k+1)+2(k+1)}2=\\frac{(k+1)(k+2)}2\\)."
  },
  {
    "level": "Intermediate",
    "q": "The formula \\(1+3+5+\\cdots+(2n-1)=n^2\\) has base case:",
    "o": [
      "\\(1=1^2\\)",
      "\\(1=2^2\\)",
      "\\(2=1^2\\)",
      "\\(0=1\\)"
    ],
    "a": 0,
    "e": "For \\(n=1\\), the left side is \\(1\\) and the right side is \\(1^2\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(1+3+\\cdots+(2k-1)=k^2\\), the next term is:",
    "o": [
      "\\(2k-1\\)",
      "\\(2k\\)",
      "\\(2k+1\\)",
      "\\(k+1\\)"
    ],
    "a": 2,
    "e": "The next odd number after \\(2k-1\\) is \\(2k+1\\)."
  },
  {
    "level": "Intermediate",
    "q": "The induction step for \\(1+3+\\cdots+(2n-1)=n^2\\) reduces to:",
    "o": [
      "\\(k^2+2k+1=(k+1)^2\\)",
      "\\(k^2+1=k+1\\)",
      "\\(2k+1=k^2\\)",
      "\\(k^2+2=k+1\\)"
    ],
    "a": 0,
    "e": "Since \\(k^2+2k+1=(k+1)^2\\), the formula transfers to \\(k+1\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):2^n>n\\), the natural first case is:",
    "o": [
      "\\(2^1>1\\)",
      "\\(2^1<1\\)",
      "\\(2^0>1\\)",
      "\\(2^2<2\\)"
    ],
    "a": 0,
    "e": "At \\(n=1\\), \\(2^1=2>1\\)."
  },
  {
    "level": "Intermediate",
    "q": "Assuming \\(2^k>k\\), which expression helps prove \\(2^{k+1}>k+1\\)?",
    "o": [
      "\\(2^{k+1}=2\\cdot2^k>2k\\ge k+1\\)",
      "\\(2^{k+1}=k+1\\)",
      "\\(2^{k+1}=2+k\\)",
      "\\(2^{k+1}<2k\\)"
    ],
    "a": 0,
    "e": "For \\(k\\ge1\\), \\(2k\\ge k+1\\), giving the required result."
  },
  {
    "level": "Intermediate",
    "q": "For the divisibility claim \\(3^n-1\\) is divisible by \\(2\\), the useful induction identity is:",
    "o": [
      "\\(3^{k+1}-1=3(3^k-1)+2\\)",
      "\\(3^{k+1}-1=3^k-1\\)",
      "\\(3^{k+1}-1=2(3^k-1)\\)",
      "\\(3^{k+1}-1=3^k+1\\)"
    ],
    "a": 0,
    "e": "The identity writes the next expression as a multiple of the previous divisible expression plus \\(2\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(1+2+\\cdots+n=\\frac{n(n+1)}2\\), after assuming \\(P(k)\\), the key equality is:",
    "o": [
      "\\(\\frac{k(k+1)}2+(k+1)=\\frac{(k+1)(k+2)}2\\)",
      "\\(\\frac{k(k+1)}2+(k+1)=\\frac{k(k+2)}2\\)",
      "\\(\\frac{k(k+1)}2=k+1\\)",
      "\\(k(k+1)=k+2\\)"
    ],
    "a": 0,
    "e": "This equality establishes the required case \\(P(k+1)\\)."
  },
  {
    "level": "Advanced",
    "q": "The statement \\(1+2+\\cdots+n=\\frac{n(n+1)}2\\) is equivalent to:",
    "o": [
      "\\(\\sum_{r=1}^{n}r=\\frac{n(n+1)}2\\)",
      "\\(\\sum_{r=0}^{n}r=n\\)",
      "\\(\\sum_{r=1}^{n}r=n^2\\)",
      "\\(\\sum_{r=1}^{n}r=2n\\)"
    ],
    "a": 0,
    "e": "Sigma notation gives \\(\\sum_{r=1}^{n}r=\\frac{n(n+1)}2\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(1^2+2^2+\\cdots+n^2=\\frac{n(n+1)(2n+1)}6\\), the next-case target is:",
    "o": [
      "\\(\\frac{(k+1)(k+2)(2k+3)}6\\)",
      "\\(\\frac{k(k+1)(2k+1)}6\\)",
      "\\(\\frac{(k+1)(2k+1)}6\\)",
      "\\(\\frac{(k+2)(2k+3)}6\\)"
    ],
    "a": 0,
    "e": "Replacing \\(n\\) by \\(k+1\\) gives the first expression."
  },
  {
    "level": "Advanced",
    "q": "Strong induction differs because the inductive step may assume:",
    "o": [
      "only \\(P(1)\\)",
      "\\(P(1),P(2),\\ldots,P(k)\\)",
      "only \\(P(k+1)\\)",
      "that \\(P(k)\\) is false"
    ],
    "a": 1,
    "e": "Strong induction can use all earlier cases up to \\(k\\)."
  },
  {
    "level": "Advanced",
    "q": "The strong induction hypothesis can be written as:",
    "o": [
      "\\(P(j)\\) is true for every \\(1\\le j\\le k\\)",
      "\\(P(k+1)\\) is true",
      "\\(P(k)\\) is false",
      "\\(P(j)\\) is true only for \\(j=k\\)"
    ],
    "a": 0,
    "e": "The hypothesis includes every earlier case from the starting value through \\(k\\)."
  },
  {
    "level": "Advanced",
    "q": "For a recurrence \\(a_{n+1}=a_n+d\\), induction naturally uses:",
    "o": [
      "\\(P(k)\\Rightarrow P(k+1)\\)",
      "\\(P(k+1)\\Rightarrow P(k)\\) only",
      "\\(P(1)\\Rightarrow P(0)\\)",
      "no base case"
    ],
    "a": 0,
    "e": "The recurrence itself provides a natural transition from \\(k\\) to \\(k+1\\)."
  },
  {
    "level": "Advanced",
    "q": "Which statement best describes the logical chain?",
    "o": [
      "\\(P(1)\\Rightarrow P(2)\\Rightarrow P(3)\\Rightarrow\\cdots\\)",
      "\\(P(3)\\Rightarrow P(2)\\Rightarrow P(1)\\) only",
      "\\(P(1)\\) only",
      "\\(P(2)\\) only"
    ],
    "a": 0,
    "e": "The induction step creates the forward chain of implications."
  },
  {
    "level": "Advanced",
    "q": "If the induction starts at \\(n=3\\), the base case should be:",
    "o": [
      "\\(P(1)\\)",
      "\\(P(2)\\)",
      "\\(P(3)\\)",
      "\\(P(4)\\)"
    ],
    "a": 2,
    "e": "The base case must match the first value in the claimed range."
  },
  {
    "level": "Master",
    "q": "For \\(P(n):n^2+n\\) is even, the inductive-step difference is:",
    "o": [
      "\\((k+1)^2+(k+1)-(k^2+k)=2k+2\\)",
      "\\(k+1\\)",
      "\\(2k+1\\)",
      "\\(k^2+k\\)"
    ],
    "a": 0,
    "e": "The difference is \\(2k+2=2(k+1)\\), which is even."
  },
  {
    "level": "Master",
    "q": "To prove \\(n^3-n\\) is divisible by \\(3\\), the key factorization is:",
    "o": [
      "\\(n^3-n=n(n-1)(n+1)\\)",
      "\\(n^3-n=n(n+1)\\)",
      "\\(n^3-n=(n-1)^3\\)",
      "\\(n^3-n=3n\\)"
    ],
    "a": 0,
    "e": "The three consecutive integers \\(n-1,n,n+1\\) have a product divisible by \\(3\\)."
  },
  {
    "level": "Master",
    "q": "In an induction proof, proving \\(P(k+1)\\) directly without using the hypothesis may still be valid if:",
    "o": [
      "the implication is independently established for arbitrary \\(k\\)",
      "the base case is omitted",
      "only \\(k=1\\) is checked",
      "the statement is assumed"
    ],
    "a": 0,
    "e": "An independent proof of the transition for arbitrary \\(k\\) is sufficient for the inductive step."
  },
  {
    "level": "Master",
    "q": "For \\(\\sum_{r=1}^{n}r^2=\\frac{n(n+1)(2n+1)}6\\), the inductive expression is:",
    "o": [
      "\\(\\frac{k(k+1)(2k+1)}6+(k+1)^2\\)",
      "\\(\\frac{k(k+1)}2+(k+1)\\)",
      "\\(k^2+k\\)",
      "\\(\\frac{(k+1)(k+2)}2\\)"
    ],
    "a": 0,
    "e": "Add the next square \\((k+1)^2\\) to the assumed sum."
  },
  {
    "level": "Master",
    "q": "The complete structure of an induction proof is:",
    "o": [
      "base case + inductive hypothesis + inductive step + conclusion",
      "examples only",
      "inductive step only",
      "base case only"
    ],
    "a": 0,
    "e": "A complete proof establishes the start, the transition, and then concludes the statement for the full range."
  },
  {
    "level": "Master",
    "q": "The fundamental formula behind induction can be summarized as:",
    "o": [
      "\\(P(n_0)\\land\\forall k\\ge n_0\\,[P(k)\\Rightarrow P(k+1)]\\Rightarrow\\forall n\\ge n_0\\,P(n)\\)",
      "\\(P(n_0)\\Rightarrow P(n)\\) without a step",
      "\\(P(k+1)\\Rightarrow P(k)\\) only",
      "\\(P(1)\\) alone"
    ],
    "a": 0,
    "e": "This is the standard logical form of induction beginning at \\(n_0\\)."
  }
];
