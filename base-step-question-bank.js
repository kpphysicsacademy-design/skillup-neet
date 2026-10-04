/* SkillUp Mathematics — Base Step — Formula Edition */
window.SkillUpBaseStepQuestions=[
  {
    "level": "Foundation",
    "q": "In mathematical induction, the base step verifies:",
    "o": [
      "\\(P(n_0)\\)",
      "\\(P(k+1)\\)",
      "\\(P(k)\\Rightarrow P(k+1)\\)",
      "\\(P(n)\\) for all real \\(n\\)"
    ],
    "a": 0,
    "e": "The base step verifies the proposition at the first value \\(n_0\\)."
  },
  {
    "level": "Foundation",
    "q": "If a statement is claimed for every \\(n\\ge1\\), the usual base step is:",
    "o": [
      "\\(P(0)\\)",
      "\\(P(1)\\)",
      "\\(P(2)\\)",
      "\\(P(k)\\)"
    ],
    "a": 1,
    "e": "The claimed range begins at \\(n=1\\), so the base step checks \\(P(1)\\)."
  },
  {
    "level": "Foundation",
    "q": "For \\(P(n):1+2+\\cdots+n=\\frac{n(n+1)}2\\), the base step at \\(n=1\\) becomes:",
    "o": [
      "\\(1=\\frac12\\)",
      "\\(1=2\\)",
      "\\(1=1\\)",
      "\\(2=1\\)"
    ],
    "a": 2,
    "e": "Substituting \\(n=1\\) gives \\(1=\\frac{1(2)}2=1\\)."
  },
  {
    "level": "Foundation",
    "q": "For \\(P(n):n^2\\ge n\\) for \\(n\\ge1\\), the base step checks:",
    "o": [
      "\\(0^2\\ge0\\)",
      "\\(1^2>1\\)",
      "\\(2^2\\ge3\\)",
      "\\(1^2\\ge1\\)"
    ],
    "a": 3,
    "e": "At \\(n=1\\), \\(1^2=1\\), so the base statement is true."
  },
  {
    "level": "Foundation",
    "q": "If the induction starts at \\(n=3\\), which is the correct base step?",
    "o": [
      "Prove \\(P(3)\\)",
      "Prove \\(P(2)\\)",
      "Prove \\(P(1)\\)",
      "Prove \\(P(4)\\)"
    ],
    "a": 0,
    "e": "The base case must match the first value in the stated range."
  },
  {
    "level": "Foundation",
    "q": "If \\(P(1)\\) is false, then the standard induction proof:",
    "o": [
      "is complete",
      "cannot establish the claim for all \\(n\\ge1\\)",
      "needs no inductive step",
      "proves only \\(P(2)\\)"
    ],
    "a": 1,
    "e": "A false base case breaks the induction chain at its starting point."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):1+3+\\cdots+(2n-1)=n^2\\), the base step gives:",
    "o": [
      "\\(3=1^2\\)",
      "\\(1=2^2\\)",
      "\\(1=1^2\\)",
      "\\(2=1\\)"
    ],
    "a": 2,
    "e": "At \\(n=1\\), the first odd term is \\(1\\), and \\(1^2=1\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):2^n>n\\) with \\(n\\ge1\\), the base step is:",
    "o": [
      "\\(2^2<2\\)",
      "\\(2^1=1\\)",
      "\\(2^0>1\\)",
      "\\(2^1>1\\)"
    ],
    "a": 3,
    "e": "Since \\(2^1=2>1\\), the base step is true."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):n^3-n\\) is divisible by \\(3\\), the base step at \\(n=1\\) is:",
    "o": [
      "\\(1^3-1=0\\)",
      "\\(1^3-1=3\\)",
      "\\(1^3-1=1\\)",
      "\\(1^3-1=-3\\)"
    ],
    "a": 0,
    "e": "We obtain \\(1-1=0\\), which is divisible by \\(3\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):\\sum_{r=1}^{n}r^2=\\frac{n(n+1)(2n+1)}6\\), the base step at \\(n=1\\) is:",
    "o": [
      "\\(1=2\\)",
      "\\(1=1\\)",
      "\\(1=\\frac13\\)",
      "\\(1=6\\)"
    ],
    "a": 1,
    "e": "Both sides equal \\(1\\) when \\(n=1\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):2+4+\\cdots+2n=n(n+1)\\), the base step is:",
    "o": [
      "\\(4=2\\)",
      "\\(2=1\\)",
      "\\(2=2\\)",
      "\\(1=2\\)"
    ],
    "a": 2,
    "e": "At \\(n=1\\), both sides equal \\(2\\)."
  },
  {
    "level": "Intermediate",
    "q": "For \\(P(n):1+2+\\cdots+n=\\frac{n(n+1)}2\\), substituting \\(n=2\\) gives:",
    "o": [
      "\\(1=3\\)",
      "\\(2=3\\)",
      "\\(3=2\\)",
      "\\(3=3\\)"
    ],
    "a": 3,
    "e": "This check gives \\(1+2=3=\\frac{2(3)}2\\)."
  },
  {
    "level": "Intermediate",
    "q": "A base step is usually written by:",
    "o": [
      "substituting the first allowed value of \\(n\\) into \\(P(n)\\)",
      "assuming \\(P(k)\\)",
      "replacing \\(n\\) by infinity",
      "checking only a random value"
    ],
    "a": 0,
    "e": "The first allowed value is substituted into the proposition."
  },
  {
    "level": "Intermediate",
    "q": "For a claim beginning at \\(n=0\\), the appropriate base step is:",
    "o": [
      "\\(P(-1)\\)",
      "\\(P(0)\\)",
      "\\(P(1)\\)",
      "\\(P(2)\\)"
    ],
    "a": 1,
    "e": "The starting value \\(n_0=0\\) determines the base step."
  },
  {
    "level": "Intermediate",
    "q": "For a claim beginning at \\(n=5\\), the base step must establish:",
    "o": [
      "\\(P(4)\\)",
      "\\(P(6)\\)",
      "\\(P(5)\\)",
      "\\(P(k)\\)"
    ],
    "a": 2,
    "e": "The first claimed case is \\(P(5)\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):n(n+1)\\) is even, the base step at \\(n=1\\) gives:",
    "o": [
      "\\(1(2)=0\\)",
      "\\(1(2)=1\\)",
      "\\(1(2)=3\\)",
      "\\(1(2)=2\\)"
    ],
    "a": 3,
    "e": "The product is \\(2\\), which is even."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):n^2+n+2\\) is even, the base step at \\(n=1\\) gives:",
    "o": [
      "\\(1+1+2=4\\)",
      "\\(1+1+2=3\\)",
      "\\(1+1+2=2\\)",
      "\\(1+1+2=5\\)"
    ],
    "a": 0,
    "e": "At \\(n=1\\), the expression equals \\(4\\), an even number."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):3^n-1\\) is divisible by \\(2\\), the base step at \\(n=1\\) is:",
    "o": [
      "\\(3-1=1\\)",
      "\\(3-1=2\\)",
      "\\(3-1=3\\)",
      "\\(3-1=0\\)"
    ],
    "a": 1,
    "e": "\\(3^1-1=2\\), which is divisible by \\(2\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):5^n-1\\) is divisible by \\(4\\), the base step at \\(n=1\\) is:",
    "o": [
      "\\(5-1=1\\)",
      "\\(5-1=5\\)",
      "\\(5-1=4\\)",
      "\\(5-1=0\\)"
    ],
    "a": 2,
    "e": "The base expression equals \\(4\\), divisible by \\(4\\)."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):n^2+n\\) is divisible by \\(2\\), the base step at \\(n=2\\) is:",
    "o": [
      "\\(2^2+2=8\\)",
      "\\(2^2+2=4\\)",
      "\\(2^2+2=5\\)",
      "\\(2^2+2=6\\)"
    ],
    "a": 3,
    "e": "At \\(n=2\\), the value is \\(6\\), divisible by \\(2\\)."
  },
  {
    "level": "Advanced",
    "q": "If the proposition is claimed for every \\(n\\ge4\\), proving \\(P(1)\\) instead of \\(P(4)\\):",
    "o": [
      "does not establish the required base case",
      "is sufficient",
      "proves the inductive step",
      "proves all cases"
    ],
    "a": 0,
    "e": "The base case must correspond to the starting value of the claim."
  },
  {
    "level": "Advanced",
    "q": "If both \\(P(1)\\) and \\(P(2)\\) are required before the induction step, the proof uses:",
    "o": [
      "a single base case",
      "multiple base cases",
      "no base case",
      "only strong induction"
    ],
    "a": 1,
    "e": "Some induction arguments require two or more initial cases."
  },
  {
    "level": "Advanced",
    "q": "For a recurrence requiring \\(P(1)\\) and \\(P(2)\\) before proving \\(P(k+2)\\), the initial checks are:",
    "o": [
      "\\(P(0)\\) only",
      "\\(P(k)\\) only",
      "\\(P(1)\\) and \\(P(2)\\)",
      "\\(P(k+2)\\) only"
    ],
    "a": 2,
    "e": "A two-step recurrence needs the corresponding initial cases."
  },
  {
    "level": "Advanced",
    "q": "For \\(P(n):1+2+\\cdots+n=\\frac{n(n+1)}2\\), why is \\(n=1\\) a valid base value?",
    "o": [
      "Because \\(n=1\\) is the largest natural number",
      "Because every real number equals 1",
      "Because the inductive step is unnecessary",
      "Because the formula is claimed from \\(n=1\\) onward"
    ],
    "a": 3,
    "e": "The stated domain begins at \\(1\\)."
  },
  {
    "level": "Master",
    "q": "For \\(P(n):\\sum_{r=1}^{n}(2r-1)=n^2\\), the base step at \\(n=1\\) is:",
    "o": [
      "\\(2(1)-1=1^2\\)",
      "\\(2(1)-1=2^2\\)",
      "\\(2(1)-1=0\\)",
      "\\(2(1)-1=2\\)"
    ],
    "a": 0,
    "e": "The left side is \\(1\\), equal to \\(1^2\\)."
  },
  {
    "level": "Master",
    "q": "For \\(P(n):\\sum_{r=1}^{n}r=\\frac{n(n+1)}2\\), the base-step calculation is:",
    "o": [
      "\\(\\sum_{r=1}^{1}r=2\\)",
      "\\(\\sum_{r=1}^{1}r=\\frac{1(2)}2=1\\)",
      "\\(\\sum_{r=1}^{1}r=\\frac12\\)",
      "\\(\\sum_{r=1}^{1}r=0\\)"
    ],
    "a": 1,
    "e": "The single term is \\(1\\), and the formula also gives \\(1\\)."
  },
  {
    "level": "Master",
    "q": "For \\(P(n):n^3-n\\) is divisible by \\(6\\), the base step at \\(n=1\\) gives:",
    "o": [
      "\\(1^3-1=6\\)",
      "\\(1^3-1=1\\), divisible by \\(6\\)",
      "\\(1^3-1=0\\), divisible by \\(6\\)",
      "\\(1^3-1=-6\\)"
    ],
    "a": 2,
    "e": "Zero is divisible by every nonzero integer, so the base case holds."
  },
  {
    "level": "Master",
    "q": "What does a true base step establish logically?",
    "o": [
      "The proposition is false at the starting value",
      "The proposition is true for every value",
      "The inductive step is automatically true",
      "The proposition is true at the starting value"
    ],
    "a": 3,
    "e": "The base step establishes only the initial case; the inductive step extends it."
  },
  {
    "level": "Master",
    "q": "Which formula summarizes the role of the base step in induction?",
    "o": [
      "\\(P(n_0)\\) true",
      "\\(P(k)\\) false",
      "\\(P(k+1)\\) false",
      "\\(P(n_0)\\Rightarrow P(n)\\) without an inductive step"
    ],
    "a": 0,
    "e": "The base step establishes \\(P(n_0)\\), which starts the induction chain."
  },
  {
    "level": "Master",
    "q": "A correct induction proof for \\(n\\ge n_0\\) requires:",
    "o": [
      "only \\(P(n_0)\\)",
      "\\(P(n_0)\\) and \\(P(k)\\Rightarrow P(k+1)\\)",
      "only \\(P(k)\\)",
      "only \\(P(k+1)\\)"
    ],
    "a": 1,
    "e": "Both the base case and inductive implication are required for standard induction."
  }
];
