/* SkillUp Maths quiz bank reset: all existing quiz content cleared.
   Add new concept-specific question banks here one at a time.
   Expected row format: [question, [optionA, optionB, optionC, optionD], correctOptionIndex, explanation].
*/
window.SKILLUP_MATHS_QUIZ_BANK = {
  "Faces edges and vertices": [
  ["How many faces does a cube have?",["4","6","8","12"],1,"A cube has six square faces."],
  ["How many edges does a cuboid have?",["6","8","10","12"],3,"A cuboid has four edges on the top, four on the bottom, and four joining them."],
  ["How many vertices does a cube have?",["6","8","10","12"],1,"A cube has eight corners, called vertices."],
  ["Which solid has one curved surface and two circular flat faces?",["Cone","Sphere","Cylinder","Cube"],2,"A cylinder has two circular flat faces and one curved surface."],
  ["How many vertices does a triangular prism have?",["5","6","8","9"],1,"A triangular prism has two triangular ends, with three vertices on each end."],
  ["How many edges does a triangular prism have?",["6","8","9","12"],2,"It has three edges on each triangular end and three joining corresponding vertices: 3 + 3 + 3 = 9."],
  ["How many faces does a triangular pyramid (tetrahedron) have?",["3","4","5","6"],1,"A triangular pyramid has four triangular faces."],
  ["How many vertices does a square-based pyramid have?",["4","5","6","8"],1,"It has four vertices at the square base and one apex."],
  ["How many edges does a square-based pyramid have?",["4","6","8","10"],2,"Four base edges and four sloping edges give eight edges."],
  ["Which solid has no vertices?",["Cube","Cone","Sphere","Square pyramid"],2,"A sphere has no corners or vertices."],
  ["Which solid has exactly one vertex and one circular base?",["Cylinder","Cone","Sphere","Cuboid"],1,"A cone has one apex and one circular base."],
  ["A cuboid has 6 faces and 8 vertices. How many edges does it have?",["8","10","12","14"],2,"A cuboid has 12 edges."],
  ["Which shape has 5 faces, 8 edges and 5 vertices?",["Triangular prism","Square pyramid","Cube","Cylinder"],1,"A square pyramid has one square base and four triangular faces, eight edges and five vertices."],
  ["How many faces does a triangular prism have?",["3","4","5","6"],2,"It has two triangular faces and three rectangular faces, making five."],
  ["Which is a flat face of a cube?",["Circle","Square","Triangle only","Oval"],1,"Every face of a cube is a square."],
  ["What is a vertex?",["A flat surface","A line segment where faces meet","A corner where edges meet","A curved surface"],2,"A vertex is a corner where edges meet."],
  ["What is an edge of a polyhedron?",["A corner","A flat polygonal region","A line segment where two faces meet","The inside of a solid"],2,"An edge is the line segment shared by two faces."],
  ["What is a face of a polyhedron?",["A flat polygonal surface","A corner point","A line segment","A circular path only"],0,"A face is a flat polygonal surface of a polyhedron."],
  ["How many edges does a tetrahedron have?",["4","5","6","8"],2,"A tetrahedron has six edges."],
  ["How many vertices does a pentagonal prism have?",["5","7","10","12"],2,"A pentagonal prism has two pentagonal bases with five vertices each, totalling ten."],
  ["How many faces does a pentagonal prism have?",["5","6","7","10"],2,"It has two pentagonal bases and five rectangular side faces, totalling seven."],
  ["A solid has 2 triangular faces and 3 rectangular faces. What is it?",["Triangular prism","Square pyramid","Triangular pyramid","Cylinder"],0,"A triangular prism has two triangular ends and three rectangular side faces."],
  ["Which set correctly describes a cube as (faces, edges, vertices)?",["(6, 12, 8)","(8, 12, 6)","(6, 8, 12)","(12, 6, 8)"],0,"A cube has 6 faces, 12 edges and 8 vertices."],
  ["Which set correctly describes a square pyramid as (faces, edges, vertices)?",["(4, 8, 5)","(5, 8, 5)","(5, 5, 8)","(6, 8, 4)"],1,"A square pyramid has 5 faces, 8 edges and 5 vertices."],
  ["A polyhedron has 5 faces, 9 edges and 6 vertices. Which relation is satisfied?",["F + V = E","F + V = E + 2","F + E = V + 2","F + E + V = 2"],1,"Euler's formula for a convex polyhedron is F + V = E + 2; here 5 + 6 = 9 + 2."],
  ["A convex polyhedron has 8 faces and 12 vertices. How many edges does it have?",["16","18","20","22"],1,"Using F + V = E + 2 gives E = 8 + 12 − 2 = 18."],
  ["A convex polyhedron has 10 edges and 6 vertices. How many faces does it have?",["4","5","6","8"],2,"Euler's formula gives F = E + 2 − V = 10 + 2 − 6 = 6."],
  ["Which solid has one vertex, one circular base and one curved surface?",["Cone","Cylinder","Sphere","Cuboid"],0,"A cone has one apex, one circular base and one curved surface."],
  ["Which solid has 3 faces, 2 edges and 0 vertices when curved surfaces are counted as surfaces?",["Cone","Cylinder","Sphere","Cuboid"],1,"A cylinder has two flat circular faces and one curved surface, with two circular boundary edges and no vertices."],
  ["A cube is cut so that one corner is removed by a plane. What is created at the cut?",["A new flat face","A new vertex only","A curved surface","No new surface"],0,"A planar cut through a solid creates a new flat face."]
  ]
};
