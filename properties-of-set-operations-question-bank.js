/* SkillUp Mathematics — Properties of Set Operations */
window.SkillUpPropertiesSetOperationsQuestions=[
  {
    "level": "Foundation",
    "q": "Which property states that \\(A\\cup B=B\\cup A\\)?",
    "o": [
      "Commutative law of union",
      "Associative law",
      "Distributive law",
      "Identity law"
    ],
    "a": 0,
    "e": "The commutative law gives \\(A\\cup B=B\\cup A\\)."
  },
  {
    "level": "Foundation",
    "q": "Which identity is correct?",
    "o": [
      "\\(A\\cup U=\\varnothing\\)",
      "\\(A\\cup\\varnothing=A\\)",
      "\\(A\\cap\\varnothing=A\\)",
      "\\(A-\\varnothing=\\varnothing\\)"
    ],
    "a": 1,
    "e": "The empty set is the identity element for union."
  },
  {
    "level": "Foundation",
    "q": "Which identity is correct?",
    "o": [
      "\\(A\\cup U=A\\)",
      "\\(A\\cap U=\\varnothing\\)",
      "\\(A\\cap U=A\\)",
      "\\(A- U=A\\)"
    ],
    "a": 2,
    "e": "The universal set is the identity element for intersection."
  },
  {
    "level": "Foundation",
    "q": "Which property gives \\((A\\cup B)\\cup C=A\\cup(B\\cup C)\\)?",
    "o": [
      "Complement",
      "Commutative",
      "Idempotent",
      "Associative"
    ],
    "a": 3,
    "e": "This is the associative law for union."
  },
  {
    "level": "Foundation",
    "q": "Which property gives \\(A\\cap A=A\\)?",
    "o": [
      "Idempotent",
      "Associative",
      "Distributive",
      "Identity"
    ],
    "a": 0,
    "e": "The idempotent law states \\(A\\cap A=A\\) and \\(A\\cup A=A\\)."
  },
  {
    "level": "Foundation",
    "q": "Which complement identity is correct?",
    "o": [
      "\\(A\\cup A'=A\\)",
      "\\(A\\cup A'=U\\)",
      "\\(A\\cap A'=A\\)",
      "\\(A'=A\\)"
    ],
    "a": 1,
    "e": "A set and its complement together form the universal set."
  },
  {
    "level": "Foundation",
    "q": "Which complement identity is correct?",
    "o": [
      "\\(A\\cup A'=\\varnothing\\)",
      "\\(A\\cap A'=U\\)",
      "\\(A\\cap A'=\\varnothing\\)",
      "\\(A'=U\\)"
    ],
    "a": 2,
    "e": "A set and its complement have no common elements."
  },
  {
    "level": "Foundation",
    "q": "The double-complement law is:",
    "o": [
      "\\((A')'=A'\\)",
      "\\((A')'=U\\)",
      "\\((A')'=\\varnothing\\)",
      "\\((A')'=A\\)"
    ],
    "a": 3,
    "e": "Taking the complement twice returns the original set."
  },
  {
    "level": "Intermediate",
    "q": "Using De Morgan's law, \\((A\\cup B)'\\) equals:",
    "o": [
      "\\(A'\\cap B'\\)",
      "\\(A'\\cup B'\\)",
      "\\(A\\cap B\\)",
      "\\(A\\cup B\\)"
    ],
    "a": 0,
    "e": "De Morgan's law: \\((A\\cup B)'=A'\\cap B'\\)."
  },
  {
    "level": "Intermediate",
    "q": "Using De Morgan's law, \\((A\\cap B)'\\) equals:",
    "o": [
      "\\(A'\\cap B'\\)",
      "\\(A'\\cup B'\\)",
      "\\(A\\cap B\\)",
      "\\(A\\cup B\\)"
    ],
    "a": 1,
    "e": "De Morgan's law: \\((A\\cap B)'=A'\\cup B'\\)."
  },
  {
    "level": "Intermediate",
    "q": "Which distributive law is correct?",
    "o": [
      "\\(A\\cap(B\\cup C)=(A\\cap B)\\cap(A\\cap C)\\)",
      "\\(A\\cup(B\\cap C)=(A\\cup B)\\cup C\\)",
      "\\(A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C)\\)",
      "\\(A\\cup(B\\cap C)=A\\cap B\\cap C\\)"
    ],
    "a": 2,
    "e": "Union distributes over intersection as shown."
  },
  {
    "level": "Intermediate",
    "q": "Which distributive law is correct?",
    "o": [
      "\\(A\\cap(B\\cup C)=A\\cup(B\\cap C)\\)",
      "\\(A\\cap(B\\cup C)=A\\cup B\\cup C\\)",
      "\\(A\\cap(B\\cup C)=(A\\cap B)\\cap C\\)",
      "\\(A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)\\)"
    ],
    "a": 3,
    "e": "Intersection distributes over union."
  },
  {
    "level": "Intermediate",
    "q": "Simplify \\(A\\cup(A\\cap B)\\).",
    "o": [
      "\\(A\\)",
      "\\(B\\)",
      "\\(A\\cap B\\)",
      "\\(U\\)"
    ],
    "a": 0,
    "e": "By the absorption law, \\(A\\cup(A\\cap B)=A\\)."
  },
  {
    "level": "Intermediate",
    "q": "Simplify \\(A\\cap(A\\cup B)\\).",
    "o": [
      "\\(B\\)",
      "\\(A\\)",
      "\\(A\\cup B\\)",
      "\\(\\varnothing\\)"
    ],
    "a": 1,
    "e": "By absorption, \\(A\\cap(A\\cup B)=A\\)."
  },
  {
    "level": "Intermediate",
    "q": "Simplify \\(A\\cup\\varnothing\\).",
    "o": [
      "\\(U\\)",
      "\\(\\varnothing\\)",
      "\\(A\\)",
      "\\(A'\\)"
    ],
    "a": 2,
    "e": "Union with the empty set leaves the set unchanged."
  },
  {
    "level": "Intermediate",
    "q": "Simplify \\(A\\cap\\varnothing\\).",
    "o": [
      "\\(A\\)",
      "\\(A'\\)",
      "\\(U\\)",
      "\\(\\varnothing\\)"
    ],
    "a": 3,
    "e": "No element can belong to both \\(A\\) and \\(\\varnothing\\)."
  },
  {
    "level": "Intermediate",
    "q": "Simplify \\(A\\cup U\\).",
    "o": [
      "\\(U\\)",
      "\\(\\varnothing\\)",
      "\\(A\\)",
      "\\(A'\\)"
    ],
    "a": 0,
    "e": "Every element of \\(A\\) is already in \\(U\\), so the union is \\(U\\)."
  },
  {
    "level": "Intermediate",
    "q": "Simplify \\(A\\cap U\\).",
    "o": [
      "\\(\\varnothing\\)",
      "\\(A\\)",
      "\\(U\\)",
      "\\(A'\\)"
    ],
    "a": 1,
    "e": "Intersecting with the universal set leaves \\(A\\)."
  },
  {
    "level": "Advanced",
    "q": "Simplify \\(A\\cup A'\\).",
    "o": [
      "\\(\\varnothing\\)",
      "\\(A\\)",
      "\\(U\\)",
      "\\(A'\\)"
    ],
    "a": 2,
    "e": "A set together with its complement equals \\(U\\)."
  },
  {
    "level": "Advanced",
    "q": "Simplify \\(A\\cap A'\\).",
    "o": [
      "\\(U\\)",
      "\\(A\\)",
      "\\(A'\\)",
      "\\(\\varnothing\\)"
    ],
    "a": 3,
    "e": "A set and its complement are disjoint."
  },
  {
    "level": "Advanced",
    "q": "Simplify \\((A\\cup B)\\cap A\\).",
    "o": [
      "\\(A\\)",
      "\\(B\\)",
      "\\(A\\cup B\\)",
      "\\(\\varnothing\\)"
    ],
    "a": 0,
    "e": "This is the absorption law: \\(A\\cap(A\\cup B)=A\\)."
  },
  {
    "level": "Advanced",
    "q": "Simplify \\((A\\cap B)\\cup A\\).",
    "o": [
      "\\(B\\)",
      "\\(A\\)",
      "\\(A\\cap B\\)",
      "\\(U\\)"
    ],
    "a": 1,
    "e": "By absorption, \\(A\\cup(A\\cap B)=A\\)."
  },
  {
    "level": "Advanced",
    "q": "Which expression equals \\(A-(A\\cap B)\\)?",
    "o": [
      "\\(A\\cap B\\)",
      "\\(A\\cup B\\)",
      "\\(A-B\\)",
      "\\(B-A\\)"
    ],
    "a": 2,
    "e": "Removing the common part with \\(B\\) leaves \\(A-B\\)."
  },
  {
    "level": "Advanced",
    "q": "The difference \\(A-B\\) can be written as:",
    "o": [
      "\\(A'\\cup B\\)",
      "\\(A\\cup B'\\)",
      "\\(A'\\cap B\\)",
      "\\(A\\cap B'\\)"
    ],
    "a": 3,
    "e": "Set difference is \\(A-B=A\\cap B'\\)."
  },
  {
    "level": "Advanced",
    "q": "Which identity is always true?",
    "o": [
      "\\(A-(B\\cup C)=(A-B)\\cap(A-C)\\)",
      "\\(A-(B\\cup C)=(A-B)\\cup(A-C)\\)",
      "\\(A-(B\\cup C)=A\\cup B\\cup C\\)",
      "\\(A-(B\\cup C)=B-C\\)"
    ],
    "a": 0,
    "e": "Using De Morgan's law, \\(A-(B\\cup C)=A\\cap(B'\\cap C')\\)."
  },
  {
    "level": "Advanced",
    "q": "Which identity is always true?",
    "o": [
      "\\(A-(B\\cap C)=(A-B)\\cap(A-C)\\)",
      "\\(A-(B\\cap C)=(A-B)\\cup(A-C)\\)",
      "\\(A-(B\\cap C)=A\\cap B\\cap C\\)",
      "\\(A-(B\\cap C)=B-C\\)"
    ],
    "a": 1,
    "e": "Since \\((B\\cap C)'=B'\\cup C'\\), the result follows."
  },
  {
    "level": "Master",
    "q": "If \\(A\\subseteq B\\), then which equality holds?",
    "o": [
      "\\(A\\cap B=\\varnothing\\)",
      "\\(A\\cup B=A\\)",
      "\\(A\\cup B=B\\)",
      "\\(A-B=A\\)"
    ],
    "a": 2,
    "e": "Every element of \\(A\\) is already in \\(B\\), so the union is \\(B\\)."
  },
  {
    "level": "Master",
    "q": "If \\(A\\subseteq B\\), then:",
    "o": [
      "\\(B-A=B\\)",
      "\\(A\\cap B=B\\)",
      "\\(A\\cup B=A\\)",
      "\\(A\\cap B=A\\)"
    ],
    "a": 3,
    "e": "When \\(A\\subseteq B\\), their common elements are exactly \\(A\\)."
  },
  {
    "level": "Master",
    "q": "Which formula is the complement of a union?",
    "o": [
      "\\((A\\cup B)'=A'\\cap B'\\)",
      "\\((A\\cup B)'=A'\\cup B'\\)",
      "\\((A\\cup B)'=A\\cap B\\)",
      "\\((A\\cup B)'=A\\cup B\\)"
    ],
    "a": 0,
    "e": "This is De Morgan's first law."
  },
  {
    "level": "Master",
    "q": "Which formula is the complement of an intersection?",
    "o": [
      "\\((A\\cap B)'=A'\\cap B'\\)",
      "\\((A\\cap B)'=A'\\cup B'\\)",
      "\\((A\\cap B)'=A\\cap B\\)",
      "\\((A\\cap B)'=A\\cup B\\)"
    ],
    "a": 1,
    "e": "This is De Morgan's second law."
  }
];
